# versusvirus-team-77

## Build and run for production
To build backend & frontend<br/>
`docker-compose build`<br/>
To run it<br/>
`docker-compose up -d`<br/>

## About structure
- This project use docker and docker-compose to run everything under control.
- There is a Nginx as endpoint and reverse-proxy
- Nginx route queries to backend and frontend
- SSL certificats are generated with the help of letsencrypt-nginx-proxy-companion
