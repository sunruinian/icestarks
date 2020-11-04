import { runApp, IAppConfig } from 'ice';
import * as React from 'react';
import { ConfigProvider } from '@alifd/next';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-fd-">{children}</ConfigProvider>
    ),
  },
  logger: {
    level: 'warn'
  },
  router: {
    type: 'browser',
    fallback: <div>加载中...</div>
  },
  icestark: {
    type: 'framework',
    getApps: async () => {
      const apps = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              path: '/seller',
              title: '商家平台',
              url: [
                // '//ice.alicdn.com/icestark/child-seller-react/index.js',
                // '//ice.alicdn.com/icestark/child-seller-react/index.css',
                '//192.165.2.144:3333/js/index.js',
                '//192.165.2.144:3333/css/index.css',
              ],
            },
          ]);
        }, 1000);
      });
      return apps;
    },
    removeRoutesLayout: true,
  },
};

runApp(appConfig);
