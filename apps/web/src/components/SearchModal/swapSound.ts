let swapSound: HTMLAudioElement

const swapSoundURL = 'https://zodiacswap.xyz/swap.mp3'

export const getSwapSound = () => {
  if (!swapSound) {
    swapSound = new Audio(swapSoundURL)
  }
  return swapSound
}
