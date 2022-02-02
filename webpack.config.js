const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        home: './src/js/home.js',
        index: './src/js/index.js'
        /**
         * Registre aqui um JS para importar em 'chunks' no HtmlWebpackPlugin
         * 
         * O index importa o bundle de CSS, caso não utilize o index,
         * certifique-se de importar o CSS no seu arquivo JS
         */
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/home.html',
            inject: true,
            chunks: ['home'],
            filename: 'home.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        })
        
        /**
         * Para adicionar mais páginas, basta copiar a declaração do HtmlWebpackPlugin acima,
         * alterar o template e o filename.
         * Template é o HTML de origem, filename é o arquivo de saída.
         * 
         * Para usar um JS próprio na página, basta adicionar um registro
         * no objeto entry no topo do arquivo e chamá-lo no parâmetro chunks do HtmlWebpackPlugin
         */
    ],
    module: {
        rules: [
            {
                test: /\.(html)$/i,
                use: ['html-loader'],
            },
            {
                test: /\.(css|scss|sass)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};