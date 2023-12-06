import { ChainId, ERC20Token, WVIC } from '@pancakeswap/sdk'
import { USDC_VICTION } from './common'

export const victionTokens = {
  wvic: WVIC[ChainId.VICTION],
  zodiac: new ERC20Token(ChainId.VICTION, '0x828a9CA1347B3b3525FD94700B78bB048dB1eF8B', 18, 'Zodiac', 'Zodiac Token', ''),
  usdc: USDC_VICTION,
}
