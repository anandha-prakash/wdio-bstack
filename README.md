# wdio-bstack

### this branch is give a reproducible example to browserstack.

In this PR, We have removed "@wdio/browserstack-service" and used "browserstack-local" directly.


### Steps to run this locally:

1. clone the repo
2. Run `yarn install`
3. Run `yarn wdio`

#### Prerequisites:

1. Make sure you have docker installed.

2. Please use the below command to run build the docker image:

```docker
docker build . \
    -f wdio.Dockerfile \
    -t  <your docker username>/wdio-bstack:testing \
    --progress=plain           
```

3. Once the image is built, Please use the below command to run the docker

```docker
docker run -it \
  -e BROWSERSTACK_USERNAME=<your browserstack username> \
  -e BROWSERSTACK_ACCESS_KEY=<your browserstack accesskey> \
<your docker username>/wdio-bstack:testing sh
```

4. Once you sh into the container, please run the below command

```shell
yarn wdio
```

5. You would see the below error:

```log
/wdio # yarn wdio
yarn run v1.22.19
warning package.json: No license field
$ wdio run ./wdio.conf.ts

Execution of 4 workers started at 2023-08-17T19:21:43.069Z

-> Establishing browserstack local tunnel connection..
Downloading in sync
Error while trying to execute binary SyntaxError: Unexpected token / in JSON at position 0
    at JSON.parse (<anonymous>)
    at Local.startSync (/wdio/node_modules/browserstack-local/lib/Local.js:51:21)
    at Object.start (file:///wdio/browserstack.service.ts:27:32)
    at Object.onPrepare (file:///wdio/wdio.conf.ts:48:28)
    at file:///wdio/node_modules/@wdio/cli/build/utils.js:81:20
    at Array.map (<anonymous>)
    at runLauncherHook (file:///wdio/node_modules/@wdio/cli/build/utils.js:79:29)
    at Launcher.run (file:///wdio/node_modules/@wdio/cli/build/launcher.js:93:19)
Retrying Binary Download. Retries Left 5
Downloading in sync
^C
/wdio # 
/wdio # 2023-08-17T19:22:02.536Z ERROR @wdio/cli:utils: Error in hook: Error: -> Browserstack Local is not started. Try Again..
    at Object.start (file:///wdio/browserstack.service.ts:31:15)
    at Object.onPrepare (file:///wdio/wdio.conf.ts:48:28)
    at file:///wdio/node_modules/@wdio/cli/build/utils.js:81:20
    at Array.map (<anonymous>)
    at runLauncherHook (file:///wdio/node_modules/@wdio/cli/build/utils.js:79:29)
    at Launcher.run (file:///wdio/node_modules/@wdio/cli/build/launcher.js:93:19)

```
