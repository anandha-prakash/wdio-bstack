import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {

    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [
        { browserName: 'chrome' ,
            'bstack:options': {
                buildName: 'wdio-bstack'
            }
        },
        { browserName: 'firefox',
            'bstack:options': {
                buildName: 'wdio-bstack'
            }},
        { browserName: 'safari',
            'bstack:options': {
                buildName: 'wdio-bstack'
            }},
        { browserName: 'MicrosoftEdge',
            'bstack:options': {
                buildName: 'wdio-bstack'
            }}
    ],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
