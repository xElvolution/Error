import {
  Box,
  Button,
  Flex,
  InjectedModalProps,
  LinkExternal,
  Message,
  Skeleton,
  Text,
  CopyAddress,
} from '@pancakeswap/uikit'
import { ChainId, WNATIVE } from '@pancakeswap/sdk'
import { FetchStatus } from 'config/constants/types'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from '@pancakeswap/localization'
import useAuth from 'hooks/useAuth'
import useNativeCurrency from 'hooks/useNativeCurrency'
import useTokenBalance, { useGetZodiacBalance } from 'hooks/useTokenBalance'
import { ChainLogo } from 'components/Logo/ChainLogo'

import { getBlockExploreLink, getBlockExploreName } from 'utils'
import { formatBigNumber, getFullDisplayBalance } from '@pancakeswap/utils/formatBalance'
import { useBalance } from 'wagmi'

const COLORS = {
  ETH: '#627EEA',
  BNB: '#14151A',
  VICTION: '#000000',
}

interface WalletInfoProps {
  hasLowNativeBalance: boolean
  switchView: (newIndex: number) => void
  onDismiss: InjectedModalProps['onDismiss']
}

const WalletInfo: React.FC<WalletInfoProps> = ({ hasLowNativeBalance, onDismiss }) => {
  const { t } = useTranslation()
  const { account, chainId, chain } = useActiveWeb3React()
  // const isBSC = chainId === ChainId.BSC
  const nativeBalance = useBalance({ address: account})
  const native = useNativeCurrency()
  const wNativeToken = WNATIVE[chainId]//  const wNativeToken = !isBSC ? WNATIVE[chainId] : null

  const { balance: wNativeBalance, fetchStatus: wNativeFetchStatus } = useTokenBalance(wNativeToken?.address)
  const { balance: zodiacBalance, fetchStatus: zodiacFetchStatus } = useGetZodiacBalance()
  const { logout } = useAuth()

  const handleLogout = () => {
    onDismiss?.()
    logout()
  }

  return (
    <>
      <Text color="secondary" fontSize="12px" textTransform="uppercase" fontWeight="bold" mb="8px">
        {t('Your Address')}
      </Text>
      <CopyAddress tooltipMessage={t('Copied')} account={account} mb="24px" />
      {hasLowNativeBalance && (
        <Message variant="warning" mb="24px">
          <Box>
            <Text fontWeight="bold">
              {t('%currency% Balance Low', {
                currency: native.symbol,
              })}
            </Text>
            <Text as="p">
              {t('You need %currency% for transaction fees.', {
                currency: native.symbol,
              })}
            </Text>
          </Box>
        </Message>
      )}
      {chain && (
        <Box mb="12px">
          <Flex justifyContent="space-between" alignItems="center" mb="8px">
            <Flex bg={COLORS.VICTION} borderRadius="16px" pl="4px" pr="8px" py="2px">
              <ChainLogo chainId={chain.id} />
              <Text color="white" ml="4px">
                {chain.name}
              </Text>
            </Flex>
            <LinkExternal href={getBlockExploreLink(account, 'address', chainId)}>
              {getBlockExploreName(chainId)}
            </LinkExternal>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Text color="textSubtle">
              {native.symbol} {t('Balance')}
            </Text>
            {!nativeBalance.isFetched ? (
              <Skeleton height="22px" width="60px" />
            ) : (
              <Text>{formatBigNumber(nativeBalance.data.value, 6)}</Text>
            )}
          </Flex>
          {wNativeBalance.gt(0) && (
            <Flex alignItems="center" justifyContent="space-between">
              <Text color="textSubtle">
                {wNativeToken.symbol} {t('Balance')}
              </Text>
              {wNativeFetchStatus !== FetchStatus.Fetched ? (
                <Skeleton height="22px" width="60px" />
              ) : (
                <Text>{getFullDisplayBalance(wNativeBalance, wNativeToken.decimals, 6)}</Text>
              )}
            </Flex>
          )}
            <Flex alignItems="center" justifyContent="space-between">
              <Text color="textSubtle">{t('ZODIAC Balance')}</Text>
              {zodiacFetchStatus !== FetchStatus.Fetched ? (
                <Skeleton height="22px" width="60px" />
              ) : (
                <Text>{formatBigNumber(zodiacBalance, 3)}</Text>
              )}
            </Flex>
        </Box>
      )}
      <Button variant="secondary" width="100%" minHeight={48} onClick={handleLogout}>
        {t('Disconnect Wallet')}
      </Button>
    </>
  )
}

export default WalletInfo
