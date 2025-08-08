import type { VaultMetadata } from '@webops/cms/core'
import { useVaultsMeta } from '@webops/cms/react'
import { Suspense, useMemo } from 'react'
import Link from '../../components/elements/Link'
import Skeleton from '../../components/Skeleton'
import ToggleChains, { useToggleStore } from '../../components/ToggleChains'
import TokenIcon from '../../components/TokenIcon'
import Finder, { useFinder } from './Finder'

function List() {
  const { finderString } = useFinder()
  const { toggledChains } = useToggleStore()
  const { vaults } = useVaultsMeta()

  const filteredVaults = useMemo(() => {
    return vaults.filter((vault: VaultMetadata) => 
      toggledChains.has(vault.chainId)
      && (
        vault.name.toLowerCase().includes(finderString.toLowerCase())
        || vault.address.toLowerCase().includes(finderString.toLowerCase())
      )
    )
  }, [vaults, finderString, toggledChains])

  return <div className="flex flex-col items-start justify-start gap-6">{filteredVaults.map((vault: VaultMetadata) => (
    <Link key={`${vault.chainId}-${vault.address}`} 
      to={`/vaults/${vault.chainId}/${vault.address}`} 
      className="flex items-center gap-6 text-lg">
      <TokenIcon chainId={vault.chainId} address={vault.address as `0x${string}`} showChain size={48} />
      <div>{vault.address.slice(0, 6)}..{vault.address.slice(-6)}</div>
      <div>{vault.name}</div>
    </Link>
  ))}</div>
}

function VaultsSkeleton() {
  return <div className="w-200 flex flex-col items-start justify-start gap-6">
    <Skeleton className="w-full h-10" />
    <Skeleton className="w-full h-10" />
    <Skeleton className="w-full h-10" />
    <Skeleton className="w-full h-10" />
    <Skeleton className="w-full h-10" />
    <Skeleton className="w-full h-10" />
    <Skeleton className="w-full h-10" />
    <Skeleton className="w-full h-10" />
    <Skeleton className="w-full h-10" />
  </div>
}

function Vaults() {
  return (
    <div className="px-8 pt-5 pb-16 flex flex-col">
      <Finder className="mx-3 mt-4 mb-8" />
      <ToggleChains className="mx-3 mb-8" />
      <Suspense fallback={<VaultsSkeleton />}>
        <List />
      </Suspense>
    </div>
  )
}

export default Vaults
