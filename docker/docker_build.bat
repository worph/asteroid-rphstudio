rem install node js
rem install docker

rem clean up previous build
rmdir /s/q .\www\

rem RUN NPM
cd ..
call npm install
call npm run build
xcopy /s .\build .\docker\www\
cd docker

rem RUN DOCKER
docker build -t rphstudio-asteroid .