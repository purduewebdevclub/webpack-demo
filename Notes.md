#Webpack Demo
This is a demo for the build system, webpack.

#Installation
    npm install -g webpack-dev-server // Don't forget sudo if you're on *nix
    npm install

##Running App
    npm start

##Need-to-Know
Webpack is a build system that primarily uses node. It's the most popular build system, but also the most complicated.
We have all of our files served from src. `webpack-dev-server` automatically builds your files from webpack. 
Webpack is modular and only builds whatever you `require`. `webpack.config.js` is where all of the information comes from.

##Loaders
Basically transform your inputs to some kind of an output. Similar to gulp's plugins. For example, when the `style-loader` is applied,
it injects css into your html site.

