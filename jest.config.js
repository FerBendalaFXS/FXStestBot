module.exports = {
    testEnvironment: 'jsdom',
    setupFiles: ['jest-localstorage-mock'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.scss$': 'jest-scss-transform',
        '.+\\.(svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
    },
    moduleNameMapper: {
        '^variablesJS$': '../../assets/scss/partials/variablesJS.module.scss'
    },
}
