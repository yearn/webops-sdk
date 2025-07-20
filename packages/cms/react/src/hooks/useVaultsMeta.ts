import { useSuspenseQuery } from '@tanstack/react-query'
import { VaultMetadataSchema } from '@webops/cms/core'
import { chains } from '@webops/core'
import { useMemo } from 'react'

const CDN_URL = import.meta.env.VITE_CDN_URL?.endsWith('/') ? import.meta.env.VITE_CDN_URL : `${import.meta.env.VITE_CDN_URL}/`

export function useVaultsMeta() {
  const query = useSuspenseQuery({
    queryKey: ['vaults-meta'],
    queryFn: async () => {
      const promises = Object.values(chains).map(chain => fetch(`${CDN_URL}content/vaults/${chain.id}.json`))
      const jsons = (await Promise.all(promises)).flatMap(result => result.json())
      const result = await Promise.all(jsons)
      return result.flat()
    },
    staleTime: 1000 * 60 * 5
  })

  const vaults = useMemo(() => {
    return query.data.map(d => VaultMetadataSchema.parse(d))
  }, [query.data])

  return {
    ...query,
    vaults
  }
}
