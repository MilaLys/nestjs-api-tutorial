# Vocabulary Trainer
## Description
Application for studying language vocabulary.

## Installation
```bash
$ npm install
```

## Running the app client
```bash
# development
$ npm run start:client
```

## Running the app server
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
