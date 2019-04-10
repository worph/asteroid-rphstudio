//setup
Install tools:
Node JS
Git
Xcode
sudo npm install ionic -g
sudo npm install cordova -g
sudo xcodebuild -license
sudo gem install cocoapods
pod setup

//build
delete platform/ios (optional)
run build_app.sh

//Publish
//https://ionicframework.com/docs/publishing/app-store

//on https://developer.apple.com/account/ios/profile/
//Create a production certificat + An App ID + A provisioning Profile
From here, open the .xcworkspace file in ./platforms/ios/ to start XCode.
Click on the root of the project then go to Signing
Uncheck automatically manage signing
Select Profile in both signing Debug and Release

then Project=>archive=>distribute









