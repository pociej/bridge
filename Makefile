DOCKER_REPO ?= gcr.io/online-bridge-hackathon-2020
GAME_SERVER_VERSION ?= 0.0.0-dev
USER_APP_VERSION ?= 0.0.0-dev

GAME_SERVER_TAG=${DOCKER_REPO}/game-server:${GAME_SERVER_VERSION}
USER_APP_TAG=${DOCKER_REPO}/user-app:${USER_APP_VERSION}

PLAY_ENGINE_K8S_NS ?= play-engine
GCP_PROJECT ?= online-bridge-hackathon-2020
GKE_CLUSTER_NAME ?= hackathon-cluster
GKE_ZONE ?= europe-west3-b

dev:
	docker-compose up --build --remove-orphans

stop:
	docker-compose down

clear:
	docker-compose rm -v

release: build push
build: build_game_server build_user_app
push: push_game_server push_user_app

build_game_server:
	docker build -t ${GAME_SERVER_TAG} -f Dockerfile.gameServer .

build_user_app:
	docker build -t ${USER_APP_TAG} -f Dockerfile.userApp .

push_game_server:
	docker push ${GAME_SERVER_TAG}

push_user_app:
	docker push ${USER_APP_TAG}

deploy: set_gcp_context ensure_ns
	helm upgrade --install play-engine ./chart \
	  --set userApp.image=${USER_APP_TAG} \
		--set gameServer.image=${GAME_SERVER_TAG} \
		--namespace ${PLAY_ENGINE_K8S_NS} \
		--history-max=10

uninstall: set_gcp_context
	helm del play-engine --namespace ${PLAY_ENGINE_K8S_NS}

set_gcp_context:
	gcloud container clusters get-credentials ${GKE_CLUSTER_NAME} --zone ${GKE_ZONE} --project ${GCP_PROJECT}

ensure_ns:
	kubectl create ns ${PLAY_ENGINE_K8S_NS} || :
