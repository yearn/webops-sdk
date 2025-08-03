import type { VaultMetadata } from '@webops/cms/core'
import { useVaultsMeta } from '@webops/cms/react'
import { Suspense } from 'react'

function List() {
  const { vaults } = useVaultsMeta()
  return <div>{vaults.map((vault: VaultMetadata) => (
    <div key={`${vault.chainId}-${vault.address}`} className="flex items-center gap-2">
      <div>{vault.chainId}</div>
      <div>{vault.address.slice(0, 6)}</div>
      <div>{vault.name}</div>
    </div>
  ))}</div>
}

function Vaults() {
  return (
    <div className="px-8 pt-5 pb-16 flex flex-col items-start justify-start gap-4">
      <Suspense fallback={<div className="animate-suspense">Loading...</div>}>
        <List />
      </Suspense>
    </div>
  )
}

export default Vaults
