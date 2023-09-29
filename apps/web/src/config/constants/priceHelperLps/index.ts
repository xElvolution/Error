import { getFarmsPriceHelperLpFiles } from '@pancakeswap/farms/constants/priceHelperLps/getFarmsPriceHelperLpFiles'
import { ChainId } from '@pancakeswap/sdk'
import PoolsEthereumPriceHelper from './pools/1'
import PoolsGoerliPriceHelper from './pools/5'
import PoolsBscPriceHelper from './pools/56'
import PoolsBscTestnetPriceHelper from './pools/97'
import PoolsBaseGoerliPriceHelper from './pools/84531'
import PoolsPegoPriceHelper from './pools/20201022'
import PoolsPegoTestnetPriceHelper from './pools/123456'

export { getFarmsPriceHelperLpFiles }

export const getPoolsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.BSC:
      return PoolsBscPriceHelper
    case ChainId.BSC_TESTNET:
      return PoolsBscTestnetPriceHelper
    case ChainId.ETHEREUM:
      return PoolsEthereumPriceHelper
    case ChainId.GOERLI:
      return PoolsGoerliPriceHelper
    case ChainId.BASE_GOERLI:
      return PoolsBaseGoerliPriceHelper
    case ChainId.PEGO:
      return PoolsPegoPriceHelper
    case ChainId.PEGO_TESTNET:
      return PoolsPegoTestnetPriceHelper
    default:
      return []
  }
}
