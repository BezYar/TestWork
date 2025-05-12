# Makefile

COMPOSE=docker-compose
PROJECT_NAME=testwork

up:
	$(COMPOSE) up --build

down:
	$(COMPOSE) down

clean:
	$(COMPOSE) down -v

restart:
	$(MAKE) clean
	$(MAKE) up

logs:
	$(COMPOSE) logs -f

psql:
	psql -h localhost -U admin -d testdb
