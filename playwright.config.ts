import { PlaywrightTestConfig, devices, expect } from '@playwright/test';
import { matchers } from 'playwright-expect';

expect.extend(matchers);

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'Chrome Stable',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    }
  ],
  use: {
    headless: false,
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    actionTimeout: 15000,

    // artifacts
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },
};

export default config;