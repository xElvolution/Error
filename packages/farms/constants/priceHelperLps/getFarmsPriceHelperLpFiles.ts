import { ChainId } from '@pancakeswap/sdk'
import FarmsBscPriceHelper from './56'
import FarmsBscTestnetPriceHelper from './97'
import FarmsEthereumPriceHelper from './1'
import FarmsGoerliPriceHelper from './5'
import FarmsBaseGoerliPriceHelper from './84531'
import FarmsPegoPriceHelper from './20201022'
import FarmsPegoTestnetPriceHelper from './123456'

export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.BSC:
      return FarmsBscPriceHelper
    case ChainId.BSC_TESTNET:
      return FarmsBscTestnetPriceHelper
    case ChainId.ETHEREUM:
      return FarmsEthereumPriceHelper
    case ChainId.GOERLI:
      return FarmsGoerliPriceHelper
    case ChainId.BASE_GOERLI:
      return FarmsBaseGoerliPriceHelper
    case ChainId.PEGO:
      return FarmsPegoPriceHelper
    case ChainId.PEGO_TESTNET:
      return FarmsPegoTestnetPriceHelper
    default:
      return []
  }
}
