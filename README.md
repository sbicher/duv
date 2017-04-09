# duv
## purpose of the app
This app is meant to run as a mobile user interface for the statistics and news page of the DUV (http://www.d-u-v.org/), the German Ultrarunner Organization.

## for developers
### beginning development
#### requirements
- nodejs (https://nodejs.org/en/download/)
- installed ionic 2 framework (https://ionicframework.com/getting-started/)
- text editor for editing the files, I personally use Sublime 2 (https://sublimetext.com/2)

#### start project
On the commandline type

`npm install`  (which downloads the dependencies, builds the project etc. -> only on first start)

`ionic serve` (which starts the local node-Server with live-refreshment of the files)

#### deploy project
Requirment: Installed SDK (e.g. Android SDK)

For Android:

On the commandline type 
`cordova platform add android` (only on first time)

(currently neccessary for splash and icon :-/)

Copy <PROJECT_HOME>/resources/splash_30.png to each <PROJECT_HOME>/platforms/android/res/<xxx>/screen.png

Copy <PROJECT_HOME>/resources/icon.png to each <PROJECT_HOME>/platforms/android/res/<xxx>/icon.png

`ionic build android --prod`
