# versusvirus-team-77

## Build and run for production
To build backend & frontend
`docker-compose build`
To run it
`docker-compose up -d`

### About structure
This project use docker and docker-compose to run everything under control.
There is a Nginx as endpoint and reverse-proxy
Nginx route queries to backend and frontend
SSL certificats are generated with the help of letsencrypt-nginx-proxy-companion
