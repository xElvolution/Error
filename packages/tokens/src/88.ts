import { ChainId, ERC20Token, WVIC } from '@pancakeswap/sdk'
import { USDC_VICTION } from './common'

export const victionTokens = {
  wvic: WVIC[ChainId.VICTION],
  zodiac: new ERC20Token(ChainId.VICTION, '0x91E5C926c8BBfe4a8BaDf4EF0E43ccF8C9e267C6', 18, 'Zodiac', 'Zodiac Token', ''),
  usdc: USDC_VICTION,
}
