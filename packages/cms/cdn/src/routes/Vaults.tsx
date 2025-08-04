import type { VaultMetadata } from '@webops/cms/core'
import { useVaultsMeta } from '@webops/cms/react'
import { Suspense } from 'react'
import Link from '../components/elements/Link'
import Skeleton from '../components/Skeleton'

function List() {
  const { vaults } = useVaultsMeta()
  return <div className="flex flex-col items-start justify-start gap-6">{vaults.map((vault: VaultMetadata) => (
    <Link key={`${vault.chainId}-${vault.address}`} 
      to={`/vaults/${vault.chainId}/${vault.address}`} 
      className="flex items-center gap-2 text-lg">
      <div>{vault.chainId}</div>
      <div>{vault.address.slice(0, 6)}</div>
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
    <div className="px-8 pt-5 pb-16">
      <Suspense fallback={<VaultsSkeleton />}>
        <List />
      </Suspense>
    </div>
  )
}

export default Vaults
