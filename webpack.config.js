const Path = require( 'path' );

module.exports = {
    entry:     './src/js/app.js',
    output:    {
        filename: 'app.js',
        path:     Path.resolve( __dirname, 'dist/js' )
    },
    module:    {
        rules: [
            {
                test:    /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:     {
                    loader:  'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ],
                    }
                }
            },
            {
                test: /\.(s*)css$/,
                use:  [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    devServer: {
        contentBase: Path.join( __dirname, 'dist' ),
        compress:    false,
        port:        8000
    }
};
