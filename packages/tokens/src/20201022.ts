import { ChainId, ERC20Token, WPG } from '@pancakeswap/sdk'
import { USDC_PEGO } from './common'

export const pegoTokens = {
  wpg: WPG[ChainId.PEGO],
  zodiac: new ERC20Token(ChainId.PEGO, '0x91E5C926c8BBfe4a8BaDf4EF0E43ccF8C9e267C6', 18, 'Zodiac', 'Zodiac Token', ''),
  leet: new ERC20Token(ChainId.PEGO, '0xBd509651E6374c327d24b9d7E3Ea46704f6F31E8', 18, 'LEET', 'Leet Token', ''),
  usdc: USDC_PEGO,
}
