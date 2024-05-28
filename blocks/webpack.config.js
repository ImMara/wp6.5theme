const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');
const fs = require('fs');

const blocksDir = path.resolve(__dirname, 'src');
let entries = {};

fs.readdirSync(blocksDir)
    .filter(file => fs.statSync(path.join(blocksDir, file)).isDirectory())
    .forEach(blockName => {
        const blockEntryPath = path.join(blocksDir, blockName, 'index.js');
        if (fs.existsSync(blockEntryPath)) {
            entries[blockName] = blockEntryPath;
        }
    });

module.exports = {
    ...defaultConfig,
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};