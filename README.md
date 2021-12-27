# MERN
Mongo Express React Nodejs

# Pre-flight checklist
## 1 - Nodejs
 [Install nodejs for your system](https://nodejs.org/en/download/).
 
 If you plan to use multiple versions of node, for example with other projects, try [NVM](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/)

```bash
boboman:~/code/mernapps$ node -v
v16.13.1
boboman:~/code/mernapps$ npm -v
8.1.2
```

## 2 - Docker
The project is headed for kubernetes (k8s) but local development is more convenient with docker compose.  As the stack grows in complexity it should probably move to remote k8s-clusters for a more scalable and robust feature development setup.
[Install docker for your system](https://docs.docker.com/engine/install/)

```shell
boboman:~/code/mernapps$ docker -v
Docker version 20.10.11, build dea9396

boboman:~/code/mernapps$ docker compose version
Docker Compose version v2.2.1
```

# Run the app
## Docker Compose

Currently the compose file should build and start two containers representing the `services` section in the `docker-compose.yml`.  One service for the mongo database and the other for the web server.  Docker will create a directory in the root called mongo-volume and mount into the container at /data/db (*mongos default data directory*)

 `Dockerfile.app` is used as the input-file for the docker build command.  `compose` is also configured to use it.  The dockerfile instructions will copy the project source into /usr/src/app and execute the `CMD` directive on startup among other configuration.  Caveat: some configuration is redundant with compose, and will be overridden by `compose up` - port forwarding as a prime example.

```shell
boboman:~/code/mernapps$ docker compose up -d
[+] Running 3/3
 ⠿ Network mernapps_default    Created                                                                                                                                                              0.0s
 ⠿ Container mernapps-mongo-1  Started                                                                                                                                                              1.5s
 ⠿ Container mernapps-app-1    Started   
 ```

The application should be available at localhost:8080.  There are currently only a few routes implemented to interact with a hello-world style mongo model.  Check the code to see what to hit!

If you make any new changes, you need to run`docker compose build`. Sometimes cache will screw you up when docker reuses layers that you know need changing so `docker compose build --no-cache` can be useful.

TODO: [configure volumes in docker-compose and nodemon for live code edits/hot reloads.](https://github.com/boboman-1/mernapps/issues/2)

# Short term goals

Learn easy ways to set up and maintain development and runtime environments for this infrastructure.  Establish good patterns for debugging both local and live applications.  Learn the powers of message queues.  Grapple with storage replication concerns in a stateful mongo pod, or surrender to Atlas.  Learn the smart ways to manage api routing schemas to support and maintain multiple applications.


# BrainDump
Readme :)

## TODO:

- [x] Fix compose.yml - "it works on my pc"
- [ ] [Unit tests????  for...science..](https://github.com/boboman-1/mernapps/issues/3)
    - :joy:
    - Figure out pattern for testing, learn to write good tests against mongo + api with stubbing, explore static analysis tools like code coverage and linters, try some TDD once a pattern is established.
- [ ] [Kubernetes initial files w/ kompose](https://github.com/boboman-1/mernapps/issues/4)
  - [ ] cluster architecture?
  - [ ] infrastructure target
    - [ ] aws - iam vpc sg and a few ec2s
    - [ ] azure - 
    - [ ] heroku - :x:
    - [ ] bare metal (ssh access?)
- [ ] Debugging (nodejs inspector; access logs; manipulate fs) local & remote containers; local & remote clusters
- [ ] Monitoring [EPIC: Monitoring](https://github.com/boboman-1/mernapps/issues/6)
  - Prometheus collectors w/ Grafana dashboards
  - custom collectors to monitor cluster health with personal heuristics
  - logging aggregate/indexer
    - LogEntries? Papertrail? Splunk?  ????halp
- [ ] CI/CD
  - Job Server - De werk - Jenkins in kuber?
    - Pipelines exist in almost every software related vendor tool.  Be wary.  
    - *GitLab* is a decent quick option, repo is solid for SDLC ceremonies and we have expertise on the back end in terms of yml and runners setup
    - *AWS Code Commit/Code Pipeline* Being coupled to aws doesn't sound like a smart first step to success, but it is simple to set up, enables clever usage thru lambda at edge/spot instances etc.. and other cheap tech keeps code-reactive pipelines in one place indefinitely.  Avoid the ci.yml/jenkinsfile/webhook worker soup

