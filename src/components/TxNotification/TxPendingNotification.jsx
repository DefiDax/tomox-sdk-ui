import React from 'react'
import { Callout, Intent, Spinner } from '@blueprintjs/core'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

type Props = {
  hash: string,
  title: ?string
}

const TxPendingNotification = ({ hash, title }: Props) => (
  <Callout intent={Intent.SUCCESS} title={title}>
    <NotificationBox>
      <h6><FormattedMessage id="portfolioPage.transferTokensModal.txHash" />:</h6>
      <WordBreak>{hash}</WordBreak>
      <SpinnerBox>
        <Spinner intent={Intent.SUCCESS} />
      </SpinnerBox>
    </NotificationBox>
  </Callout>
)

TxPendingNotification.defaultProps = {
  title: 'Transaction in progress',
}

const SpinnerBox = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-content: center;
  justify-content: center;
  margin: auto;
`

const WordBreak = styled.p`
  word-break: break-all;
`

export default TxPendingNotification
