rem install node js
rem install docker

rem RUN NPM
call npm run build

rem RUN DOCKER
docker build -t rphstudio-asteroid .