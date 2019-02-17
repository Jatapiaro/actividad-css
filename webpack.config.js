const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/* 
* All the configurations details
*/
module.exports = () => {
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, '/public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            CSSExtract
        ],
        devtool: "cheap-module-eval-source-map",
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }

};