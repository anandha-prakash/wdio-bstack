/* eslint no-console: off */
import BrowserstackLocal from 'browserstack-local';
import color from 'cli-color';
import { promisify } from 'util';
const sleep = promisify(setTimeout);

export const Browserstack = {
    userName: process.env.BROWSERSTACK_USERNAME,
    accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
    local: {
        process: new BrowserstackLocal.Local(),
        args: {
            key: process.env.BROWSERSTACK_ACCESS_KEY,
            forceLocal: true,
            force: true,
            verbose: true,
            onlyAutomate: true,
            // localIdentifier: `sa-ui-webdriverio-${getRandomInt()}`,
        },
        start,
        stop,
    }
};

export function start() {
    console.log(color.yellow('-> Establishing browserstack local tunnel connection..'));
    Browserstack.local.process.startSync(this.args);
    if (Browserstack.local.process.isRunning()) {
        console.log(color.green('-> Browserstack Local process started..'));
    } else {
        throw new Error('-> Browserstack Local is not started. Try Again..');
    }
}

export async function stop() {
    console.log(color.yellow('Killing browserstack local tunnel connection..'));
    let localStopped = false;
    if (Browserstack.local.process && Browserstack.local.process.isRunning()) {
        Browserstack.local.process.stop(() => {
            localStopped = true;
            console.log(color.red('Browserstack Local process stopped..'));
        });
        while (!localStopped) {
            await sleep(1000);
        }
    }
}
