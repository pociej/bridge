## Play engine ##

### Development environment ###

Prerequirements:
1. Docker
2. docker-compose

#### Run the dev server ####
```
$ make dev
```

#### Stop the dev server ####
```
$ make stop
```

Ctrl+C also stops the running services if ran in the same terminal
window where `make dev` was started.

#### Clearup dev environment ####
```
$ make clear
```

### Build & Deploy ###

Prerequirements:
1. Docker
2. kubectl

Build the application stack using:
```
$ make build
```

Push to the remote registry:
```
$ make push
```

Or combined build+push using the:
```
$ make release
```

Deploy it on the server:
```
$ make deploy
```

You can pass the `VERSION=...` before each command to overwrite the
default version `0.0.0-dev`. If version is overwritten you should
manually delete the pods that are using it.
