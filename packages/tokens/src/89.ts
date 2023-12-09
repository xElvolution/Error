import { ChainId, ERC20Token, WVIC } from '@pancakeswap/sdk'
import { USDC_VICTION_TESTNET, ZODIAC_TESTNET } from './common'

export const victionTestnetTokens = {
  wvic: WVIC[ChainId.VICTION_TESTNET],
  zodiac: ZODIAC_TESTNET,
  usdc: USDC_VICTION_TESTNET,
}
