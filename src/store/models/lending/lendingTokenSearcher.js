// @flow
import type { State, ThunkAction } from '../../../types'
import { 
  getAccountDomain,
  getLendingPairsDomain,
  getLendingTokensDomain, 
} from '../../domains'
import * as actionCreators from '../../actions/lending/lendingTokenSearcher'
import { push } from 'connected-react-router'

export default function tokenSearcherSelector(state: State) {
  const accountDomain = getAccountDomain(state)
  const lendingPairsDomain = getLendingPairsDomain(state)
  const currentPair = lendingPairsDomain.getCurrentPair()
  let pairs = lendingPairsDomain.getTokenPairsWithDataArray()
  const favoriteds = lendingPairsDomain.getFavoritePairs()

  pairs = pairs.map(pair => {
    pair.favorited = favoriteds.includes(pair.pair)
    return pair
  })

  const lendingTokensDomain = getLendingTokensDomain(state)
  const lendingTokens = lendingTokensDomain.tokenSymbols()

  return {
    pairs,
    currentPair,
    lendingTokens,
    authenticated: accountDomain.authenticated(),
  }
}

export const updateCurrentPair = (lendingPair: string): ThunkAction => {
  return async (dispatch, getState) => {
    const state = getState()
    const currentPair = getLendingPairsDomain(state).getCurrentPair()

    let { router: { location: { pathname }}} = getState()
    pathname = pathname.includes('dapp/lending/pairs') ? 'dapp/lending/trade' : (pathname.includes('dapp/lending') ? 'dapp/lending' : 'lending')
    const param = lendingPair.pair.replace(' ', '_').replace('/', '-')
    dispatch(push(`/${pathname}/${param}`))

    if (currentPair.pair !== lendingPair.pair) {
      dispatch(actionCreators.updateCurrentPair(lendingPair))
      dispatch(actionCreators.updateOhlcvLoading(true))
      dispatch(actionCreators.resetOrderbook())
      dispatch(actionCreators.resetTradesHistory())
    }
  }
}
