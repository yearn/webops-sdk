import { chains } from '@webops/core'
import { create } from 'zustand'
import { cn } from '../lib/cn'
import ChainIcon from './ChainIcon'
import Button from './elements/Button'

export const useToggleStore = create<{
  toggledChains: Set<number>
  toggleChain: (chainId: number, on?: boolean) => void
}>((set) => ({
  toggledChains: new Set([1]),
  toggleChain: (chainId: number, on?: boolean) => set((state) => {
    const newToggledChains = new Set(state.toggledChains)
    if (newToggledChains.has(chainId) && !on) {
      newToggledChains.delete(chainId)
    } else if (on === undefined || on) {
      newToggledChains.add(chainId)
    }
    return { toggledChains: newToggledChains }
  }),
}))

function Toggle({ chainId }: { chainId: number }) {
  const { toggledChains, toggleChain } = useToggleStore()
  const isToggled = toggledChains.has(chainId)

  return (
    <Button 
      className={cn(
        "relative w-[48px] h-[24px] p-0 overflow-hidden rounded-xl outline-2 outline-offset-2",
        isToggled ? "outline-primary-400" : "outline-transparent"
      )}
      onClick={() => toggleChain(chainId)}
    >
      <ChainIcon 
        chainId={chainId} 
        size={64} 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          isToggled ? "opacity-100" : "grayscale opacity-50"
        )} 
      />
    </Button>
  )
}

function ToggleAll() {
  const { toggledChains, toggleChain } = useToggleStore()
  const anyToggled = Array.from(toggledChains).length > 0
  const toggleAll = () => {
    if (anyToggled) {
      Object.values(chains).map(chain => chain.id).forEach(chainId => toggleChain(chainId, false))      
    } else {
      Object.values(chains).map(chain => chain.id).forEach(chainId => toggleChain(chainId, true))
    }
  }
  return <Button className="w-[24px] h-[24px] p-0" onClick={toggleAll}></Button>
}

export default function ToggleChains({ className }: { className?: string }) {
  return <div className={cn('px-2 flex items-center gap-8', className)}>
    {Object.values(chains).map(chain => (
      <Toggle key={chain.id} chainId={chain.id} />
    ))}
    <ToggleAll />
  </div>
}
