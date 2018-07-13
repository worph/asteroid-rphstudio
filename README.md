### Intro
This project is a boiler plate project to use Phaser3 (https://phaser.io/) with typscript and docker
The asteroid game is based on https://github.com/digitsensitive/phaser3-typescript

### Dev Run

Install Node JS https://nodejs.org/en/
Building and running is as easy as the three following steps:

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies (folder: node_modules).|
| `npm run dev` | Perform a quick build (bundle.js) and start server.|
| `npm run build` | Perform a final build with minification.|

### Build and publish

Install docker https://www.docker.com/community-edition#/download
execute docker-build.bat

### Run a server
Install docker https://www.docker.com/community-edition#/download
Install Docker-compose https://docs.docker.com/compose/install/
replace "image: registry.admin.rphstudio.net/rphstudio-asteroid" by rphstudio-asteroid (or your own registry)
if you do not use traefik replace "expose: -80" by "ports: -80"
execute ./docker_serverside/docker-update.sh (on the server)

Note: you can also install traefik and a docker registry to have the full configuration.

### live example
http://asteroid.game.rphstudio.net/

### Code edition
You can use https://code.visualstudio.com/ to have typescript code coloration and code completion
