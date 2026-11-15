
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    // Test files location
    testDir: './tests',

    // Run tests sequentially
    fullyParallel: false,
    workers: 1,

    // Reporter configuration
    reporter: [
        ['list'],
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }],
        ['allure-playwright', {
            outputFolder: 'allure-results'
        }]
    ],

    // Shared browser configuration
    use: {
        baseURL: 'https://demowebshop.tricentis.com/',
        browserName: 'chromium',
        headless: false,
        
         launchOptions: {
        slowMo: 1000
    },
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure'
    }
});
