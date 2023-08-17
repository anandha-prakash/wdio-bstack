# wdio-bstack

### This branch is to provide a reproducible repo to browserstack to check the error when local is used using browserstack service.


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

Execution of 4 workers started at 2023-08-17T18:59:20.062Z

2023-08-17T18:59:20.802Z INFO @wdio/cli:launcher: Run onPrepare hook
2023-08-17T18:59:20.804Z INFO @wdio/browserstack-service: app is not defined in browserstack-service config, skipping ...
Error while trying to execute binary Error: Command failed: /root/.browserstack/BrowserStackLocal --daemon start --log-file /wdio/local.log --source nodejs-1.5.4 --key QHqzxidWEyF5KRkPSepT
/root/.browserstack/BrowserStackLocal: --loader requires --experimental-modules be enabled

    at ChildProcess.exithandler (node:child_process:402:12)
    at ChildProcess.emit (node:events:513:28)
    at ChildProcess.emit (node:domain:489:12)
    at maybeClose (node:internal/child_process:1100:16)
    at Process.ChildProcess._handle.onexit (node:internal/child_process:304:5) {
  code: 9,
  killed: false,
  signal: null,
  cmd: '/root/.browserstack/BrowserStackLocal --daemon start --log-file /wdio/local.log --source nodejs-1.5.4 --key QHqzxidWEyF5KRkPSepT'
}
Retrying Binary Download. Retries Left 5
.exit
Error while trying to execute binary Error: Command failed: /root/.browserstack/BrowserStackLocal --daemon start --log-file /wdio/local.log --source nodejs-1.5.4 --key QHqzxidWEyF5KRkPSepT
/root/.browserstack/BrowserStackLocal: --loader requires --experimental-modules be enabled

/wdio # 
```
