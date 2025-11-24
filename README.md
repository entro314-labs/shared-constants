# @entro314labs/shared-constants

Shared constants and configuration across the Entrolytics ecosystem.

## Installation

```bash
pnpm add @entro314labs/shared-constants
```

## Usage

```typescript
import {
  API_ENDPOINTS,
  ENV_VAR_NAMES,
  CLI_CONFIG,
  getEnvVarNames,
  isValidFramework,
} from '@entro314labs/shared-constants'

// Get environment variable names for a framework
const nextjsEnv = getEnvVarNames('nextjs')
console.log(nextjsEnv.websiteId) // 'NEXT_PUBLIC_ENTROLYTICS_WEBSITE_ID'

// Check if a framework is valid
if (isValidFramework('nextjs')) {
  // Framework is valid
}

// Access API endpoints
console.log(API_ENDPOINTS.production) // 'https://edge.entrolytics.click'

// CLI configuration
console.log(CLI_CONFIG.tokenExpiryMinutes) // 15
```

## Available Constants

- `API_ENDPOINTS` - Production and development API URLs
- `ENV_VAR_NAMES` - Environment variable naming by framework
- `CLI_CONFIG` - CLI configuration values
- `EVENT_TYPES` - Standard event type names
- `HTTP_STATUS` - HTTP status codes
- `API_ROUTES` - API route paths
- `ONBOARDING_STEPS` - Onboarding step identifiers
- `CLI_TOKEN_STATUS` - CLI token status values
- `USER_ROLES` - User role definitions
- `FRAMEWORK_PACKAGES` - NPM package names by framework
- `FRAMEWORK_PATTERNS` - Framework detection patterns
- `RATE_LIMITS` - Rate limiting configuration
- `ERROR_MESSAGES` - Standard error messages
- `SUCCESS_MESSAGES` - Standard success messages

## Supported Frameworks

- Next.js
- React (Vite/CRA)
- Vue (Vite)
- Svelte/SvelteKit
- Astro
- Node.js (API)
- PHP
- Python
- Go

## License

MIT
