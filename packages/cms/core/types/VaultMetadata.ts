import { z } from 'zod'

const evmAddress = z.string().regex(/^0x[0-9a-fA-F]{40}$/)

export const VaultMetadataSchema = z.object({
  chainId: z.number(),
  address: evmAddress,
  name: z.string(),
  registry: evmAddress.optional(),
  ydaemonType: z.enum(['Yearn Vault', 'Experimental Yearn Vault', 'Automated Yearn Vault', 'Single Strategy']),
  ydaemonKind: z.enum(['Multi Strategy', 'Legacy', 'Single Strategy', 'None']),
  ydaemonEndorsed: z.boolean(),
  isRetired: z.boolean(),
  isHidden: z.boolean(),
  isAggregator: z.boolean(),
  isBoosted: z.boolean(),
  isAutomated: z.boolean(),
  isHighlighted: z.boolean(),
  isPool: z.boolean(),
  shouldUseV2APR: z.boolean(),
  migration: z
    .object({
      available: z.boolean(),
      target: evmAddress.optional(),
      contract: evmAddress.optional(),
    }),
  stability: z
    .object({
      stability: z.enum(['Unknown', 'Correlated', 'Stable', 'Volatile', 'Unstable']),
      stableBaseAsset: z.string().optional(),
    }),
  category: z.string().optional(),
  displayName: z.string().optional(),
  displaySymbol: z.string().optional(),
  description: z.string().optional(),
  sourceURI: z.string().optional(),
  uiNotice: z.string().optional(),
  protocols: z.array(z.enum(['Curve', 'BeethovenX', 'Gamma', 'Balancer', 'Yearn'])),
  inclusion: z
    .object({
      isSet: z.boolean(),
      isYearn: z.boolean(),
      isYearnJuiced: z.boolean(),
      isGimme: z.boolean(),
      isPoolTogether: z.boolean(),
      isCove: z.boolean(),
      isMorpho: z.boolean(),
      isKatana: z.boolean(),
      isPublicERC4626: z.boolean(),
    })
})

export type VaultMetadata = z.infer<typeof VaultMetadataSchema>
