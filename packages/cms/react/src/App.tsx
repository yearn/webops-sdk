import type { VaultMetadata } from '@webops/cms/core'
import { Suspense } from 'react'
import { useVaultsMeta } from './hooks/useVaultsMeta'

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className={`
    px-12 py-2 flex items-center justify-center
    bg-primary-800 border border-primary-200/60 
    font-bold text-primary-200
    drop-shadow-2 drop-shadow-primary-200/60
    rounded-primary cursor-pointer`}
    >
      {children}
    </button>
  )
}

function Vaults() {
  const { vaults } = useVaultsMeta()
  return <div>{vaults.map((vault: VaultMetadata) => (
    <div key={`${vault.chainId}-${vault.address}`} className="flex items-center gap-2">
      <div>{vault.chainId}</div>
      <div>{vault.address}</div>
    </div>
  ))}</div>
}

function App() {
  return (
    <main className="px-8 pt-5 pb-16 flex flex-col items-start justify-start h-screen gap-4">
      <h1 className="text-6xl font-bold font-fancy text-primary-200">yCMS</h1>
      <p>Yearn Content Management System</p>
      <p className="text-lg">
        <a href="https://github.com/yearn/ycms" target="_blank" rel="noopener" className="flex items-center gap-2">
          https://github.com/yearn/ycms
        </a>
      </p>
      <div className="flex items-center gap-8">
        <Button>vaults</Button>
      </div>
      <div>
        <Suspense fallback={<div className="animate-suspense">Loading...</div>}>
          <Vaults />
        </Suspense>
      </div>
    </main>
  )
}

export default App
