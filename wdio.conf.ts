import type { Options } from '@wdio/types'
import {Browserstack} from './browserstack.service.js';
const bstackOptions = {
    'bstack:options': {
        os: 'OS X',
        osVersion: 'Ventura',
        buildName: 'wdio-bstack',
        local: true
    }
}
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
    maxInstances: 5,
    capabilities: [
        { browserName: 'chrome', ...bstackOptions},
        { browserName: 'firefox', ...bstackOptions},
        { browserName: 'safari', ...bstackOptions},
        { browserName: 'MicrosoftEdge', ...bstackOptions},
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
    onPrepare() {
        Browserstack.local.start();
    },
    async onComplete(){
        await Browserstack.local.stop();
    },
}
