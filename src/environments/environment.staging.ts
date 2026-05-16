/*
 * The porpuse of this environment is to setup a production's clone.
 * Test stable versions that are ready for production.
 */

export const environment = {
  production: true,
  baseUrl: 'STAGING_HOST_URL',
  cloudinaryUrl: 'https://api.cloudinary.com/v1_1/',
  analyticsKey: 'ANALYTICS_STAGING_KEY',
  supabaseUrl: 'https://itzoxmkmzmvufbvfnhtt.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0em94bWttem12dWZidmZuaHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODIzMTQsImV4cCI6MjA5MTM1ODMxNH0.b9a7oBIhd-E0w2jOR52QAu8qmrF6q4WBc9snO7ulIrI',
  appMode: 'STAGING',
  appVersion: '0.0.0.1', //MAJOR_UPDATE.NEW_FEATURES.MINOR_UPDATE.BUILD_NUMBER
};
