/*
 * This is the environment configuration for local development.
 * Feel free to crash your versions here.
 */

export const environment = {
  production: false,
  baseUrl: 'http://localhost:4200',
  cloudinaryUrl: 'https://api.cloudinary.com/v1_1/',
  analyticsKey: 'ANALYTICS_LOCAL_KEY',
  supabaseUrl: 'https://itzoxmkmzmvufbvfnhtt.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0em94bWttem12dWZidmZuaHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODIzMTQsImV4cCI6MjA5MTM1ODMxNH0.b9a7oBIhd-E0w2jOR52QAu8qmrF6q4WBc9snO7ulIrI',
  appMode: 'LOCAL_DEVELOPMENT',
  appVersion: '0.0.0.1', //MAJOR_UPDATE.NEW_FEATURES.MINOR_UPDATE.BUILD_NUMBER

  projects: [
    {
      name: 'Prolitigio',
      subdomainUrl: 'oaguvozaenxdhttbmlnq',
      functionName: 'testing-path',
      bearerToken: 'eyJhbGciOi'
    },
    {
      name: 'Spacia',
      subdomainUrl: 'itzoxmkmzmvufbvfnhtt',
      functionName: 'testing-path',
      bearerToken: 'eyJhbGciOi'
    },
    {
      name: 'Préstamos',
      subdomainUrl: 'oaguvozaenxdhttbmlnq',
      functionName: 'testing-path',
      bearerToken: 'eyJhbGciOi'
    },
    {
      name: 'Biblias',
      subdomainUrl: 'oaguvozaenxdhttbmlnq',
      functionName: 'testing-path',
      bearerToken: 'eyJhbGciOi'
    },
    {
      name: 'Asesorías',
      subdomainUrl: 'oaguvozaenxdhttbmlnq',
      functionName: 'testing-path',
      bearerToken: 'eyJhbGciOi'
    }
  ]
};
