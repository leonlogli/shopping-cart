/**
 * App root URL of the deployment
 */
const ROOT_PATH =
  process.env.VERCEL_URL || process.env.NEXT_PUBLIC_APP_ROOT_PATH

// Api base url
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || `/api`

export { API_BASE_URL, ROOT_PATH }
