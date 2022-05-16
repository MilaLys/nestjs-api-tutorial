<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# nest-js-api-tutorial
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run db:dev:restart
$ npm run start:dev

# production mode
$ npm run start:prod

#restart db
$ npm run db:dev:restart
$ npm run prisma:dev:deploy
```


## Running prisma
```bash
# dev mode
$ prisma studio

# test mode
$ dotenv -e .env.test -- prisma studio
```
## Tests

```bash
# e2e tests
# restart test DB
$ npm run db:test:restart
# run migrations
$ npm run prisma:test:deploy
# run tests
$ npm run test:e2e
```
