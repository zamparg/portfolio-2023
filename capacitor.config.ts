import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.portfolioGZ.app',
  appName: 'gaston-portfolio',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
