require('babel-register')({
    plugins: ['transform-es2015-modules-commonjs'],
    babelrc: false,
    cache: false,
});

require(process.argv[2]);
