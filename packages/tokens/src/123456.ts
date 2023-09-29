import { ChainId, ERC20Token, WPG } from '@pancakeswap/sdk'
import { USDC_PEGO_TESTNET } from './common'

export const pegoTestnetTokens = {
  wpg: WPG[ChainId.PEGO_TESTNET],
  zodiac: new ERC20Token(ChainId.PEGO_TESTNET, '0x91E5C926c8BBfe4a8BaDf4EF0E43ccF8C9e267C6', 18, 'Zodiac', 'Zodiac Token', ''),
  leet: new ERC20Token(ChainId.PEGO_TESTNET, '0xBd509651E6374c327d24b9d7E3Ea46704f6F31E8', 18, 'LEET', 'Leet Token', ''),
  usdc: USDC_PEGO_TESTNET,
}
