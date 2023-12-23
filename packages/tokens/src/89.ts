import { ChainId, ERC20Token, WVIC } from '@pancakeswap/sdk'
import { USDC_VICTION_TESTNET } from './common'

export const victionTestnetTokens = {
  wvic: WVIC[ChainId.VICTION_TESTNET],
  zodiac: new ERC20Token(ChainId.VICTION_TESTNET, '0x952C10F2520Ce768a3487207Dc6FbC734E44EA7c', 18, 'Zodiac', 'Zodiac Token', ''),
  usdc: USDC_VICTION_TESTNET,
}
