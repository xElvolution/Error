import { BinanceWalletConnector } from '@pancakeswap/wagmi/connectors/binanceWallet'
import { BloctoConnector } from '@pancakeswap/wagmi/connectors/blocto'
import { bsc, goerli, mainnet } from 'wagmi/chains'
import { Chain } from '@wagmi/core';
import { configureChains, createClient } from 'wagmi'
import memoize from 'lodash/memoize'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { LedgerConnector } from 'wagmi/connectors/ledger'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { SafeConnector } from './safeConnector'

const baseGoerli: Chain = {
  id: 84531, // Replace with the actual ID of Base Goerli
  name: 'Base Goerli',
  network: 'base-goerli',
  nativeCurrency: {
    decimals: 18,
    name: 'Base Goerli',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://goerli.base.org'] },
    default: { http: ['https://goerli.base.org'] },
  },
  blockExplorers: {
    etherscan: { name: 'Base Goerli Explorer', url: 'https://goerli.basescan.org' },
    default: { name: 'Base Goerli Explorer', url: 'https://goerli.basescan.org' },
  },
  contracts: {
    multicall3: {
      address: '0x24bfc6eB2F4679217aD4cA77f7C0AA210A6c831D',
      blockCreated: 11_907_934,
    },
  },
};

const viction: Chain = {
  id: 88, 
  name: 'Viction Mainnet',
  network: 'viction-mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Viction Mainnet',
    symbol: 'VIC',
  },
  rpcUrls: {
    public: { http: ['https://rpc.tomochain.com'] },
    default: { http: ['https://rpc.tomochain.com'] },
  },
  blockExplorers: {
    etherscan: { name: 'Viction Mainnet Explorer', url: 'https://tomoscan.io/' },
    default: { name: 'Viction Mainnet Explorer', url: 'https://tomoscan.io/' },
  },
  contracts: {
    multicall3: {
      address: '0x32dE1Eac390d8D16A67EFf13ddAdEE443dcFb438',
      blockCreated: 11_907_934,
    },
  },
};

const victionTestnet: Chain = {
  id: 89, 
  name: 'Viction Testnet',
  network: 'viction-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Viction Testnet',
    symbol: 'VIC',
  },
  rpcUrls: {
    public: { http: ['https://rpc.testnet.tomochain.com'] },
    default: { http: ['https://rpc.testnet.tomochain.com'] },
  },
  blockExplorers: {
    etherscan: { name: 'Viction Testnet Explorer', url: 'https://testnet.tomoscan.io/' },
    default: { name: 'Viction Testnet Explorer', url: 'https://testnet.tomoscan.io/' },
  },
  contracts: {
    multicall3: {
      address: '0x32dE1Eac390d8D16A67EFf13ddAdEE443dcFb438',
      blockCreated: 11_907_934,
    },
  },
};

const CHAINS = [
  // bsc, 
  // mainnet, 
  // bscTestnet, 
  // baseGoerli,
  // goerli,
  viction,
  victionTestnet
]

const getNodeRealUrl = (networkName: string) => {
  let host = null

  switch (networkName) {
    case 'homestead':
      if (process.env.NEXT_PUBLIC_NODE_REAL_API_ETH) {
        host = `eth-mainnet.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_ETH}`
      }
      break
    case 'goerli':
      if (process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI) {
        host = `eth-goerli.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI}`
      }
      break
    default:
      host = null
  }

  if (!host) {
    return null
  }

  const url = `https://${host}`
  return {
    http: url,
    webSocket: url.replace(/^http/i, 'wss').replace('.nodereal.io/v1', '.nodereal.io/ws/v1'),
  }
}

export const { provider, chains } = configureChains(CHAINS, [
  jsonRpcProvider({
    rpc: (chain) => {
      if (!!process.env.NEXT_PUBLIC_NODE_PRODUCTION && chain.id === bsc.id) {
        return { http: process.env.NEXT_PUBLIC_NODE_PRODUCTION }
      }
      if (process.env.NODE_ENV === 'test' && chain.id === mainnet.id) {
        return { http: 'https://cloudflare-eth.com' }
      }

      return getNodeRealUrl(chain.network) || { http: chain.rpcUrls.default.http[0] }
    },
  }),
])

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})

export const coinbaseConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: 'PancakeSwap',
    appLogoUrl: 'https://pancakeswap.com/logo.png',
  },
})

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: true,
  },
})

export const walletConnectNoQrCodeConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: false,
  },
})

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})

const bloctoConnector = new BloctoConnector({
  chains,
  options: {
    defaultChainId: 56,
    appId: 'e2f2f0cd-3ceb-4dec-b293-bb555f2ed5af',
  },
})

const ledgerConnector = new LedgerConnector({
  chains,
})

export const bscConnector = new BinanceWalletConnector({ chains })

export const client = createClient({
  autoConnect: false,
  provider,
  connectors: [
    new SafeConnector({ chains }),
    metaMaskConnector,
    injectedConnector,
    coinbaseConnector,
    walletConnectConnector,
    bscConnector,
    bloctoConnector,
    ledgerConnector,
  ],
})

export const CHAIN_IDS = chains.map((c) => c.id)

export const isChainSupported = memoize((chainId: number) => CHAIN_IDS.includes(chainId))
export const isChainTestnet = memoize((chainId: number) => chains.find((c) => c.id === chainId)?.testnet)
