module.exports = {
    //input file
    entry: './app/app.jsx',

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
            About: 'app/components/About.jsx'
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
    }
};