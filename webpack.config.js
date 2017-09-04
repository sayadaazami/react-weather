var webpack = require('webpack');

module.exports = {
    //input file
    entry: [
        'script!jquery/dist/jquery.min.js', // base is jquery/dist/jquery.min.js but add script! to tel loader load it
        'script!!foundation-sites/dist/foundation.min.js',
        './app/app.jsx',
    ],

    externals: { // provide a set of key value pairs where the is is the module name and the value is the variable name inside external script files
        jquery: 'jQuery',
    },

    plugins: [ // define variables like $ to known in app as jquery,...
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
        })
    ],

    //output file
    output: {
        path: __dirname,
        filename: './public/bundle.js',
    },

    //autoloading
    resolve: {
        //set the resolver root path to root of the project (to load any thing)
        root: __dirname,

        //like psr4
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            WeatherMessage: 'app/components/WeatherMessage.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            ErrorModal: 'app/components/ErrorModal.jsx',
            OpenWeatherMap: 'app/api/OpenWeatherMap.jsx',
        },

        // do not have to write this extensions on require function
        extensions: ['', '.js', '.jsx']
    },

    //what modules do we need in project to have pure JS
    module: {
        loaders: [{
            //the loader name
            loader: 'babel-loader',
            
            query: {
                //witch presets have to apply on code to convert to JS
                presets: ['react', 'es2015', 'stage-0']
            },

            //witch files do we need
            test: /\.jsx?$/,
            
            //witch file excluded
            exclude: /(node_components|bower_components)/
        }]
    },
    devtool: 'cheap-module-eval-source-map', //enable source map for debugging
};