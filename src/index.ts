/**
 * Shared constants across Entrolytics ecosystem
 * Used by: CLI, SDKs, Dashboard, Integrations
 */

/**
 * API endpoint configuration
 */
export const API_ENDPOINTS = {
  production: 'https://edge.entrolytics.click',
  development: 'http://localhost:3000',
} as const

/**
 * Default API host
 */
export const DEFAULT_API_HOST =
  process.env.NODE_ENV === 'production'
    ? API_ENDPOINTS.production
    : API_ENDPOINTS.development

/**
 * Environment variable naming conventions by framework
 */
export const ENV_VAR_NAMES = {
  nextjs: {
    websiteId: 'NEXT_PUBLIC_ENTROLYTICS_WEBSITE_ID',
    host: 'NEXT_PUBLIC_ENTROLYTICS_HOST',
    envFile: '.env.local',
  },
  react: {
    websiteId: 'VITE_ENTROLYTICS_WEBSITE_ID',
    host: 'VITE_ENTROLYTICS_HOST',
    envFile: '.env',
    fallback: {
      // CRA fallback
      websiteId: 'REACT_APP_ENTROLYTICS_WEBSITE_ID',
      host: 'REACT_APP_ENTROLYTICS_HOST',
    },
  },
  vue: {
    websiteId: 'VITE_ENTROLYTICS_WEBSITE_ID',
    host: 'VITE_ENTROLYTICS_HOST',
    envFile: '.env',
  },
  svelte: {
    websiteId: 'PUBLIC_ENTROLYTICS_WEBSITE_ID',
    host: 'PUBLIC_ENTROLYTICS_HOST',
    envFile: '.env',
  },
  astro: {
    websiteId: 'PUBLIC_ENTROLYTICS_WEBSITE_ID',
    host: 'PUBLIC_ENTROLYTICS_HOST',
    envFile: '.env',
  },
  html: {
    websiteId: 'ENTROLYTICS_WEBSITE_ID',
    host: 'ENTROLYTICS_HOST',
    envFile: '.env',
  },
  node: {
    websiteId: 'ENTROLYTICS_WEBSITE_ID',
    host: 'ENTROLYTICS_HOST',
    envFile: '.env',
  },
  php: {
    websiteId: 'ENTROLYTICS_WEBSITE_ID',
    host: 'ENTROLYTICS_HOST',
    envFile: '.env',
  },
  python: {
    websiteId: 'ENTROLYTICS_WEBSITE_ID',
    host: 'ENTROLYTICS_HOST',
    envFile: '.env',
  },
  go: {
    websiteId: 'ENTROLYTICS_WEBSITE_ID',
    host: 'ENTROLYTICS_HOST',
    envFile: '.env',
  },
} as const

/**
 * CLI configuration constants
 */
export const CLI_CONFIG = {
  tokenExpiryMinutes: 15,
  maxTokensPerUser: 10,
  pollIntervalMs: 2000,
  setupTimeoutMs: 300000, // 5 minutes
  minCliVersion: '1.0.0',
} as const

/**
 * Standard event types
 */
export const EVENT_TYPES = {
  pageView: 'page_view',
  click: 'click',
  formSubmit: 'form_submit',
  custom: 'custom',
  error: 'error',
  performance: 'performance',
} as const

/**
 * HTTP status codes
 */
export const HTTP_STATUS = {
  ok: 200,
  created: 201,
  accepted: 202,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  conflict: 409,
  tooManyRequests: 429,
  internalServerError: 500,
  serviceUnavailable: 503,
} as const

/**
 * API route paths
 */
export const API_ROUTES = {
  // CLI routes
  cliToken: '/api/cli/token',
  cliValidate: '/api/cli/validate',

  // Website routes
  websites: '/api/websites',
  websiteById: (id: string) => `/api/websites/${id}`,
  websiteEvents: (id: string) => `/api/websites/${id}/events`,
  websiteRecentEvents: (id: string) => `/api/websites/${id}/recent-events`,

  // User routes
  userOnboarding: '/api/user/onboarding',
  userProfile: '/api/user/profile',

  // Event collection
  collect: '/api/collect',
  send: '/api/send',

  // Health checks
  health: '/api/health',
  healthIntegrations: '/api/health/integrations',
} as const

/**
 * Onboarding step identifiers
 */
export const ONBOARDING_STEPS = {
  welcome: 'welcome',
  createWebsite: 'create-website',
  installTracking: 'install-tracking',
  verify: 'verify',
  complete: 'complete',
  skipped: 'skipped',
} as const

/**
 * CLI token statuses
 */
export const CLI_TOKEN_STATUS = {
  pending: 'pending',
  used: 'used',
  expired: 'expired',
  revoked: 'revoked',
} as const

/**
 * User roles
 */
export const USER_ROLES = {
  admin: 'admin',
  user: 'user',
  viewer: 'viewer',
} as const

/**
 * Framework package names
 */
export const FRAMEWORK_PACKAGES = {
  nextjs: '@entro314labs/entro-nextjs',
  react: '@entro314labs/entro-react',
  vue: '@entro314labs/entro-vue',
  svelte: '@entro314labs/entro-svelte',
  astro: '@entro314labs/entro-astro',
  node: '@entro314labs/entro-api',
} as const

/**
 * Framework detection patterns
 */
export const FRAMEWORK_PATTERNS = {
  nextjs: {
    files: ['next.config.js', 'next.config.mjs', 'next.config.ts'],
    dependencies: ['next'],
  },
  react: {
    files: ['vite.config.js', 'vite.config.ts'],
    dependencies: ['react', 'vite'],
  },
  vue: {
    files: ['vite.config.js', 'vite.config.ts'],
    dependencies: ['vue', 'vite'],
  },
  svelte: {
    files: ['svelte.config.js', 'svelte.config.ts'],
    dependencies: ['svelte'],
  },
  astro: {
    files: ['astro.config.mjs', 'astro.config.ts'],
    dependencies: ['astro'],
  },
} as const

/**
 * Rate limiting configuration
 */
export const RATE_LIMITS = {
  cliTokenGeneration: {
    windowMs: 3600000, // 1 hour
    maxRequests: 10,
  },
  cliValidation: {
    windowMs: 3600000, // 1 hour
    maxRequests: 100,
  },
  eventCollection: {
    windowMs: 60000, // 1 minute
    maxRequests: 1000,
  },
} as const

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  // Authentication
  unauthorized: 'Unauthorized access',
  forbidden: 'Access forbidden',
  tokenExpired: 'Token has expired',
  tokenInvalid: 'Invalid token',
  tokenNotFound: 'Token not found',
  tokenAlreadyUsed: 'Token has already been used',

  // Validation
  invalidInput: 'Invalid input provided',
  missingRequired: 'Missing required fields',
  invalidFormat: 'Invalid format',

  // Resources
  notFound: 'Resource not found',
  websiteNotFound: 'Website not found',
  userNotFound: 'User not found',

  // Rate limiting
  tooManyRequests: 'Too many requests. Please try again later.',

  // Server
  internalError: 'Internal server error',
  serviceUnavailable: 'Service temporarily unavailable',
} as const

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  tokenGenerated: 'Setup token generated successfully',
  tokenValidated: 'Token validated successfully',
  websiteCreated: 'Website created successfully',
  onboardingComplete: 'Onboarding completed successfully',
  setupComplete: 'Setup completed successfully',
} as const

// Type exports
export type Framework = keyof typeof ENV_VAR_NAMES
export type EventType = (typeof EVENT_TYPES)[keyof typeof EVENT_TYPES]
export type OnboardingStep = (typeof ONBOARDING_STEPS)[keyof typeof ONBOARDING_STEPS]
export type CliTokenStatus = (typeof CLI_TOKEN_STATUS)[keyof typeof CLI_TOKEN_STATUS]
export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES]

/**
 * Utility functions
 */
export function getEnvVarNames(framework: Framework) {
  return ENV_VAR_NAMES[framework]
}

export function getFrameworkPackage(framework: Framework) {
  return FRAMEWORK_PACKAGES[framework as keyof typeof FRAMEWORK_PACKAGES] || null
}

export function isValidFramework(framework: string): framework is Framework {
  return framework in ENV_VAR_NAMES
}

export function getApiRoute(route: keyof typeof API_ROUTES, ...args: string[]) {
  const routeFn = API_ROUTES[route]
  if (typeof routeFn === 'function') {
    return routeFn(...args)
  }
  return routeFn
}
