const concat =  require('concat');
(async function buildWebpackBrowser() {
    const files = [
        './dist/microfeangular1/runtime.js',
        './dist/microfeangular1/polyfills.js',
        './dist/microfeangular1/main.js'
    ];

    await concat(files, '../microfeangular1.js')
})();