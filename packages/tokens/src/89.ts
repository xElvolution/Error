import { ChainId, ERC20Token, WVIC } from '@pancakeswap/sdk'
import { USDC_VICTION_TESTNET } from './common'

export const victionTestnetTokens = {
  wvic: WVIC[ChainId.VICTION_TESTNET],
  zodiac: new ERC20Token(ChainId.VICTION_TESTNET, '0x828a9CA1347B3b3525FD94700B78bB048dB1eF8B', 18, 'Zodiac', 'Zodiac Token', ''),
  usdc: USDC_VICTION_TESTNET,
}
