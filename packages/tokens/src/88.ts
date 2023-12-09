import { ChainId, ERC20Token, WVIC } from '@pancakeswap/sdk'
import { USDC_VICTION, ZODIAC_MAINNET} from './common'

export const victionTokens = {
  wvic: WVIC[ChainId.VICTION],
  zodiac: ZODIAC_MAINNET,
  usdc: USDC_VICTION,
}
