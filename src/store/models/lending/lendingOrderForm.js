// @flow
import { push } from 'connected-react-router'
import { BigNumber } from 'bignumber.js'

import { getSigner } from '../../services/signer'
import { parseNewOrderError } from '../../../config/errors'
import { getNewLendingOrderHash } from '../../../utils/crypto'

import * as notifierActionCreators from '../../actions/app'
import * as lendingOrdersActionCreators from '../../actions/lending/lendingOrders'

import {
  getAccountBalancesDomain,
  getAccountDomain,
  getLendingOrdersDomain,
  getLendingTokensDomain,
  getLendingPairsDomain,
  getLendingOrderBookDomain,
  getTokenDomain,
} from '../../domains/'

export default function getOrderFormSelector(state: State) {
  const accountDomain = getAccountDomain(state)
  const authenticated = accountDomain.authenticated()
  const lendingPairsDomain = getLendingPairsDomain(state)
  const currentPair = lendingPairsDomain.getCurrentPair()
  const currentPairData = lendingPairsDomain.getCurrentPairData()
  const lendingTokensDomain = getLendingTokensDomain(state)
  let collateralTokens = lendingTokensDomain.collaterals()

  const lendingOrderBookDomain = getLendingOrderBookDomain(state)
  const selectedOrder = lendingOrderBookDomain.getSelectedOrder()

  const lendingOrderDomain = getLendingOrdersDomain(state)
  const loading = lendingOrderDomain.loading()

  const accountBalancesDomain = getAccountBalancesDomain(state)
  const lendingToken = accountBalancesDomain.tokenBalance(currentPair.lendingTokenSymbol)
  collateralTokens = accountBalancesDomain.getBalancesAndAllowances(collateralTokens)
  collateralTokens = collateralTokens.filter(collateral => collateral.address !== currentPair.lendingTokenAddress)

  return {
    selectedOrder,
    currentPair,
    currentPairData,
    authenticated,
    loading,
    collateralTokens,
    lendingToken,
  }
}

export const sendNewLendingOrder = (order): ThunkAction => {
  return async (dispatch, getState, { socket, api }) => {
    try {
      dispatch(lendingOrdersActionCreators.lendingOrdersUpdateLoading(true))
      const state = getState()
      const accountDomain = getAccountDomain(state)
      const userAddress = accountDomain.address()
      const exchangeAddress = accountDomain.exchangeAddress()
      const lendingToken = getTokenDomain(state).getTokenByAddress(order.lendingToken)

      const signer = getSigner()
      const nonce = await api.getLendingOrderNonce(userAddress)
      const interest = new BigNumber(order.interest)
        .multipliedBy(10 ** 8).toString(10)

      const params = {
        userAddress,
        relayerAddress: exchangeAddress,
        collateralToken: order.collateralToken,
        lendingToken: order.lendingToken,
        term: order.term,
        interest,
        side: order.side || 'BORROW',
        type: order.type || 'LO',
        status: 'NEW',
        autoTopUp: order.autoTopUp || '1',
      }
      params.quantity = new BigNumber(order.amount)
        .multipliedBy(10 ** lendingToken.decimals).toString(10)
      params.nonce = String(nonce)
      params.hash = getNewLendingOrderHash(params)

      const orderSigned = await signer.signLendingOrder(params)
      socket.sendNewLendingOrderMessage(orderSigned)
    } catch (e) {
      console.log(e)
      dispatch(lendingOrdersActionCreators.lendingOrdersUpdateLoading(false))
      const message = parseNewOrderError(e)
      return dispatch(notifierActionCreators.addErrorNotification({ message }))
    }
  }
}

export const redirectToLoginPage = (): ThunkAction => {
  return async (dispatch, getState) => {
    dispatch(push('/unlock'))
  }
}
