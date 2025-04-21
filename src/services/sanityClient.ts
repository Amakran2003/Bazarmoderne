import { createClient } from '@sanity/client';

// Sanity client configuration
export const client = createClient({
  projectId: 'o0j2x6nh', // Your Sanity project ID
  dataset: 'production',
  useCdn: true, // Set to `false` to bypass the CDN for development
  apiVersion: '2025-04-21', // Use today's date format: YYYY-MM-DD
  token: '', // Only needed for authenticated requests (content management)
});