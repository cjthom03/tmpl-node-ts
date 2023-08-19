// See https://jestjs.io/docs/en/getting-started#using-babel
// and https://babeljs.io/docs/

module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript',
    ],
    parserOpts: {
        strictMode: true,
    }
};
// project: ['<rootDir>/tsconfig.json'],
