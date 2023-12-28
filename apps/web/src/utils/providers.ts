import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://bsc.nodereal.io'

export const VICTION_TESTNET_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://rpc.testnet.tomochain.com'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export const victionTestnetRpcProvider = new StaticJsonRpcProvider(VICTION_TESTNET_PROD_NODE)


export default null
