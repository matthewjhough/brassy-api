# Brassy API

Backend api for brassy app.

# Docker mysql instance

to get a docker instance of mysql up and running, run the command:
`docker run --rm --name=local-sql --env MYSQL_ROOT_PASSWORD=password --detach --publish 3306:3306 mysql:5.7.24`

to remove this instance: `docker rm -f local-sql`

# Running the server

To get the server running you must perform a few steps:

- run command: `npm i`
- create the database: `npm run db:init`
- start the app: `npm start`

optional - if you make any database changes, you need to update the migrations with `npm run migrate`.