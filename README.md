# MERN
Mongo Express React Nodejs

# Goals

Learn easy ways to set up and maintain environments for this type of project.  Establish good patterns for debugging the infra, distributing message queues, storage concerns for stateful mongo pod in kuber cluster, api routing.


# BrainDump
Readme :)

## TODO:

- [x] Fix compose.yml - "it works on my pc"
- [ ] Unit tests????  for...science..
    - :joy:
    - Figure out pattern for testing, learn to write good tests against mongo + api with stubbing, explore static analysis tools like code coverage and linters, try some TDD once a pattern is established.
- [ ] Kubernetes initial files w/ kompose
  - [ ] cluster architecture?
  - [ ] infrastructure target
    - [ ] aws - iam vpc sg and a few ec2s
    - [ ] azure - 
    - [ ] heroku - :x:
    - [ ] bare metal (ssh access?)
- [ ] Debugging (nodejs inspector; access logs; manipulate fs) local & remote containers; local & remote clusters
- [ ] Monitoring
  - Prometheus collectors w/ Grafana dashboards
  - custom collectors to monitor cluster health with personal heuristics
  - logging aggregate/indexer
    - LogEntries? Papertrail? Splunk?  ????halp
- [ ] CI/CD
  - Job Server - De werk - Jenkins in kuber?
    - Pipelines exist in almost every software related vendor tool.  Be wary.  
    - *GitLab* is a decent quick option, repo is solid for SDLC ceremonies and we have expertise on the back end in terms of yml and runners setup
    - *AWS Code Commit/Code Pipeline* Being coupled to aws doesn't sound like a smart first step to success, but it is simple to set up, enables clever usage thru lambda at edge/spot instances etc.. and other cheap tech keeps code-reactive pipelines in one place indefinitely.  Avoid the ci.yml/jenkinsfile/webhook worker soup

