import type { VaultMetadata } from '@webops/cms/core'
import { useVaultsMeta } from '@webops/cms/react'
import { Suspense } from 'react'
import Link from '../components/elements/Link'

function List() {
  const { vaults } = useVaultsMeta()
  return <div className="flex flex-col items-start justify-start gap-4">{vaults.map((vault: VaultMetadata) => (
    <Link key={`${vault.chainId}-${vault.address}`} to={`/vaults/${vault.chainId}/${vault.address}`} className="flex items-center gap-2">
      <div>{vault.chainId}</div>
      <div>{vault.address.slice(0, 6)}</div>
      <div>{vault.name}</div>
    </Link>
  ))}</div>
}

function Vaults() {
  return (
    <div className="px-8 pt-5 pb-16">
      <Suspense fallback={<div className="animate-suspense">Loading...</div>}>
        <List />
      </Suspense>
    </div>
  )
}

export default Vaults
