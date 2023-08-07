const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@util': path.resolve(__dirname, 'src/util'),
            '@views': path.resolve(__dirname, 'src/views')
        },
    },
};