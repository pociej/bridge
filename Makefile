dev:
	docker-compose up --build --remove-orphans

stop:
	docker-compose down

clear:
	docker-compose rm -v
