import { BLOCKS_CLIENT, BLOCKS_CLIENT_ETH, INFO_CLIENT, INFO_CLIENT_ETH, INFO_CLIENT_VIC } from 'config/constants/endpoints'
import { infoClientETH, infoClientVIC, infoClient, infoStableSwapClient } from 'utils/graphql'

import { ChainId } from '@pancakeswap/sdk'
import { ETH_TOKEN_BLACKLIST, PCS_ETH_START, PCS_V2_START, TOKEN_BLACKLIST } from 'config/constants/info'

export type MultiChainName = 'BSC' | 'ETH' | 'VIC'

export const multiChainQueryMainToken = {
  BSC: 'BNB',
  ETH: 'ETH',
  VIC: 'VIC',

}

export const multiChainBlocksClient = {
  BSC: BLOCKS_CLIENT,
  ETH: BLOCKS_CLIENT_ETH,
  VIC: '',
}

export const multiChainStartTime = {
  BSC: PCS_V2_START,
  ETH: PCS_ETH_START,
  VIC: '',
}

export const multiChainId = {
  BSC: ChainId.BSC,
  ETH: ChainId.ETHEREUM,
  VIC: ChainId.VICTION_TESTNET,
}

export const multiChainPaths = {
  [ChainId.BSC]: '/bsc',
  [ChainId.ETHEREUM]: '/eth',
  [ChainId.VICTION_TESTNET]: '/vic',
}

export const multiChainQueryClient = {
  BSC: infoClient,
  ETH: infoClientETH,
  VIC: infoClientVIC,

  
}

export const multiChainQueryEndPoint = {
  BSC: INFO_CLIENT,
  ETH: INFO_CLIENT_ETH,
  VIC: INFO_CLIENT_VIC
}

export const multiChainScan = {
  BSC: 'BscScan',
  ETH: 'EtherScan',
  VIC: 'VicScan',

}

export const multiChainTokenBlackList = {
  BSC: TOKEN_BLACKLIST,
  ETH: ETH_TOKEN_BLACKLIST,
  VIC: '',
}

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainName) => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return infoStableSwapClient
  return multiChainQueryClient[chainName]
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')
