rem install node js

rem clean up previous build
rmdir /s/q .\src\
mkdir src
xcopy /s /y .\build .\src\

rem RUN NPM
cd ..
call npm install
call npm run build
xcopy /s /y .\build .\ionic\src\
cd ionic

rem RUN electron
call npm install