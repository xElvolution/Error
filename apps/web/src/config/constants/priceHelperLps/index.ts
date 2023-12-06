import { getFarmsPriceHelperLpFiles } from '@pancakeswap/farms/constants/priceHelperLps/getFarmsPriceHelperLpFiles'
import { ChainId } from '@pancakeswap/sdk'
import PoolsEthereumPriceHelper from './pools/1'
import PoolsGoerliPriceHelper from './pools/5'
import PoolsBscPriceHelper from './pools/56'
import PoolsBscTestnetPriceHelper from './pools/97'
import PoolsBaseGoerliPriceHelper from './pools/84531'
import PoolsVictionPriceHelper from './pools/88'
import PoolsVictionTestnetPriceHelper from './pools/89'

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
    case ChainId.VICTION:
      return PoolsVictionPriceHelper
    case ChainId.VICTION_TESTNET:
      return PoolsVictionTestnetPriceHelper
    default:
      return []
  }
}
