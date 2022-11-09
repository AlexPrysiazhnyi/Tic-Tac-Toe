const path = require('path');

module.exports = {
    mode: 'production',
    entry: './scripts/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts'
    }
};