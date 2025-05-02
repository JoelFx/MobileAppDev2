// vite.config.ts
import { defineConfig } from 'vite';
import createAngularPlugin from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [createAngularPlugin()],
  optimizeDeps: {
    exclude: [
      '@ionic/angular',
      '@ionic/core',
      // Ionic Web Component entrypoints:
      'ion-app',
      'ion-router-outlet',
      'ion-tabs',
      'ion-tab-bar',
      'ion-tab-button',
      'ion-icon',
      'ion-button',
      'ion-item',
      'ion-list',
      'ion-card',
      'ion-card-header',
      'ion-card-content',
      'ion-card-footer',
      'ion-avatar',
      'ion-label',
      'ion-toolbar',
      'ion-title',
    ],
  },
});
