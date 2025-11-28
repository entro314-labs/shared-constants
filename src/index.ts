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
} as const;

/**
 * Default API host
 */
export const DEFAULT_API_HOST =
  process.env.NODE_ENV === 'production' ? API_ENDPOINTS.production : API_ENDPOINTS.development;

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
} as const;

/**
 * CLI configuration constants
 */
export const CLI_CONFIG = {
  tokenExpiryMinutes: 15,
  maxTokensPerUser: 10,
  pollIntervalMs: 2000,
  setupTimeoutMs: 300000, // 5 minutes
  minCliVersion: '1.0.0',
} as const;

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
} as const;

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
} as const;

/**
 * API route paths
 */
export const API_ROUTES = {
  // CLI Auth routes
  cliAuthToken: '/api/auth/cli/token',
  cliAuthTokens: '/api/auth/cli/tokens',
  cliToken: '/api/cli/token', // Legacy - deprecated
  cliValidate: '/api/cli/validate',

  // Share routes
  shareToken: (shareId: string) => `/api/share/${shareId}`,

  // Links routes
  links: '/api/links',
  linkRedirect: (slug: string) => `/q/${slug}`,

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
} as const;

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
} as const;

/**
 * CLI token statuses
 */
export const CLI_TOKEN_STATUS = {
  pending: 'pending',
  used: 'used',
  expired: 'expired',
  revoked: 'revoked',
} as const;

/**
 * User roles
 */
export const USER_ROLES = {
  admin: 'admin',
  user: 'user',
  viewer: 'viewer',
} as const;

/**
 * Framework package names
 */
export const FRAMEWORK_PACKAGES = {
  nextjs: '@entro314labs/entro-nextjs',
  react: '@entro314labs/entro-react',
  vue: '@entro314labs/entro-vue',
  svelte: '@entro314labs/entro-svelte',
  astro: '@entro314labs/entro-astro',
  node: '@entro314labs/node',
} as const;

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
} as const;

/**
 * Rate limiting configuration
 * Updated to match server-side implementation
 */
export const RATE_LIMITS = {
  cliTokenExchange: {
    windowSeconds: 60, // 1 minute
    maxRequests: 5,
  },
  shareTokenGeneration: {
    windowSeconds: 60, // 1 minute
    maxRequests: 10,
  },
  linkCreation: {
    windowSeconds: 60, // 1 minute
    maxRequests: 20,
  },
  linkRedirect: {
    windowSeconds: 60, // 1 minute
    maxRequests: 100,
  },
  apiGeneral: {
    windowSeconds: 60, // 1 minute
    maxRequests: 100,
  },
  // Legacy (deprecated but kept for backwards compatibility)
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
} as const;

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
  tokenRevoked: 'Token has been revoked',
  tokenMissingJti: 'Token missing JTI - please re-authenticate',
  userBanned: 'User account has been banned',
  userDeleted: 'User account has been deleted',

  // Share tokens
  shareTokenExpired: 'Share token has expired',
  shareTokenRevoked: 'Share has been revoked',
  shareTokenInvalid: 'Invalid share token',

  // URL Validation
  invalidUrl: 'Invalid URL provided',
  invalidUrlProtocol: 'URL must use http or https protocol',
  openRedirectBlocked: 'Open redirect attempt blocked',

  // Validation
  invalidInput: 'Invalid input provided',
  missingRequired: 'Missing required fields',
  invalidFormat: 'Invalid format',

  // Resources
  notFound: 'Resource not found',
  websiteNotFound: 'Website not found',
  userNotFound: 'User not found',
  linkNotFound: 'Link not found',

  // Rate limiting
  tooManyRequests: 'Too many requests. Please try again later.',
  rateLimitExceeded: 'Rate limit exceeded',

  // Server
  internalError: 'Internal server error',
  serviceUnavailable: 'Service temporarily unavailable',
} as const;

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  tokenGenerated: 'Setup token generated successfully',
  tokenValidated: 'Token validated successfully',
  tokenRevoked: 'Token revoked successfully',
  allTokensRevoked: 'All tokens revoked successfully',
  websiteCreated: 'Website created successfully',
  linkCreated: 'Link created successfully',
  shareCreated: 'Share created successfully',
  onboardingComplete: 'Onboarding completed successfully',
  setupComplete: 'Setup completed successfully',
} as const;

/**
 * CLI Access Token metadata
 */
export interface CliAccessTokenMetadata {
  jti: string;
  createdAt: string;
  expiresAt: string;
  lastUsedAt: string | null;
  ipAddress: string | null;
  userAgent: string | null;
}

// Type exports
export type Framework = keyof typeof ENV_VAR_NAMES;
export type EventType = (typeof EVENT_TYPES)[keyof typeof EVENT_TYPES];
export type OnboardingStep = (typeof ONBOARDING_STEPS)[keyof typeof ONBOARDING_STEPS];
export type CliTokenStatus = (typeof CLI_TOKEN_STATUS)[keyof typeof CLI_TOKEN_STATUS];
export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

/**
 * Utility functions
 */
export function getEnvVarNames(framework: Framework) {
  return ENV_VAR_NAMES[framework];
}

export function getFrameworkPackage(framework: Framework) {
  return FRAMEWORK_PACKAGES[framework as keyof typeof FRAMEWORK_PACKAGES] || null;
}

export function isValidFramework(framework: string): framework is Framework {
  return framework in ENV_VAR_NAMES;
}

export function getApiRoute(route: keyof typeof API_ROUTES, ...args: string[]) {
  const routeFn = API_ROUTES[route];
  if (typeof routeFn === 'function') {
    return (routeFn as (...args: string[]) => string)(...args);
  }
  return routeFn;
}
