rem install node js

rem clean up previous build
rmdir /s/q .\out\
rmdir /s/q .\src\
mkdir src
xcopy /s .\build\index.js .\src\

rem RUN NPM
cd ..
call npm install
call npm run build
xcopy /s .\build .\electron\src\
cd electron

rem RUN electron
call yarn install
call yarn make