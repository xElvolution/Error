import { ChainId, ERC20Token, WVIC } from '@pancakeswap/sdk'
import { USDC_VICTION_TESTNET } from './common'

export const victionTestnetTokens = {
  wvic: WVIC[ChainId.VICTION_TESTNET],
  zodiac: new ERC20Token(ChainId.VICTION_TESTNET, '0x91E5C926c8BBfe4a8BaDf4EF0E43ccF8C9e267C6', 18, 'Zodiac', 'Zodiac Token', ''),
  usdc: USDC_VICTION_TESTNET,
}
