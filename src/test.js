export const config= {
  'name': 'element-ui',
  'version': '2.4.8',
  'description': 'A Component Library for Vue.js.',
  'main': 'lib/element-ui.common.js',
  'files': [
    'lib',
    'src',
    'packages',
    'types'
  ],
  'typings': 'types/index.d.ts',
  'scripts': {
    'bootstrap': 'yarn || npm i',
    'build:file': 'node build/bin/iconInit.js & node build/bin/build-entry.js & node build/bin/i18n.js & node build/bin/version.js',
    'build:theme': 'node build/bin/gen-cssfile && gulp build --gulpfile packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk',
    'build:utils': 'cross-env BABEL_ENV=utils babel src --out-dir lib --ignore src/index.js',
    'build:umd': 'node build/bin/build-locale.js',
    'clean': 'rimraf lib && rimraf packages/*/lib && rimraf test/**/coverage',
    'deploy': 'npm run deploy:build && gh-pages -d examples/element-ui --remote eleme && rimraf examples/element-ui',
    'deploy:build': 'npm run build:file && cross-env NODE_ENV=production webpack --config build/webpack.demo.js && echo element.eleme.io>>examples/element-ui/CNAME',
    'dev': 'npm run bootstrap && npm run build:file && cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js & node build/bin/template.js',
    'dev:play': 'npm run build:file && cross-env NODE_ENV=development PLAY_ENV=true webpack-dev-server --config build/webpack.demo.js',
    'dist': 'npm run clean && npm run build:file && npm run lint && webpack --config build/webpack.conf.js && webpack --config build/webpack.common.js && webpack --config build/webpack.component.js && npm run build:utils && npm run build:umd && npm run build:theme',
    'i18n': 'node build/bin/i18n.js',
    'lint': 'eslint src/**/* test/**/* packages/**/* build/**/* --quiet',
    'pub': 'npm run bootstrap && sh build/git-release.sh && sh build/release.sh && node build/bin/gen-indices.js && sh build/deploy-faas.sh',
    'test': 'npm run lint && npm run build:theme && cross-env CI_ENV=/dev/ karma start test/unit/karma.conf.js --single-run',
    'test:watch': 'npm run build:theme && karma start test/unit/karma.conf.js'
  },
  'faas': {
    'domain': 'element',
    'public': 'temp_web/element'
  },
  'repository': {
    'type': 'git',
    'url': 'git@github.com:ElemeFE/element.git'
  },
  'homepage': 'http://element.eleme.io',
  'keywords': [
    'eleme',
    'vue',
    'components'
  ],
  'license': 'MIT',
  'bugs': {
    'url': 'https://github.com/ElemeFE/element/issues'
  },
  'unpkg': 'lib/index.js',
  'style': 'lib/theme-chalk/index.css',
  'dependencies': {
    'async-validator': '~1.8.1',
    'babel-helper-vue-jsx-merge-props': '^2.0.0',
    'deepmerge': '^1.2.0',
    'normalize-wheel': '^1.0.1',
    'resize-observer-polyfill': '^1.5.0',
    'throttle-debounce': '^1.0.1'
  },
  'peerDependencies': {
    'vue': '^2.5.2'
  },
  'devDependencies': {
    'algoliasearch': '^3.24.5',
    'babel-cli': '^6.14.0',
    'babel-core': '^6.14.0',
    'babel-loader': '^7.1.2',
    'babel-plugin-add-module-exports': '^0.2.1',
    'babel-plugin-module-resolver': '^2.2.0',
    'babel-plugin-syntax-jsx': '^6.8.0',
    'babel-plugin-transform-vue-jsx': '^3.3.0',
    'babel-preset-es2015': '^6.14.0',
    'chai': '^3.5.0',
    'cheerio': '^0.18.0',
    'chokidar': '^1.7.0',
    'copy-webpack-plugin': '^4.1.1',
    'coveralls': '^2.11.14',
    'cp-cli': '^1.0.2',
    'cross-env': '^3.1.3',
    'css-loader': '^0.28.7',
    'es6-promise': '^4.0.5',
    'eslint': '4.14.0',
    'eslint-config-elemefe': '0.1.1',
    'eslint-loader': '^1.9.0',
    'eslint-plugin-html': '^4.0.1',
    'eslint-plugin-json': '^1.2.0',
    'extract-text-webpack-plugin': '^3.0.1',
    'file-loader': '^1.1.5',
    'file-save': '^0.2.0',
    'gh-pages': '^0.11.0',
    'gulp': '^3.9.1',
    'gulp-autoprefixer': '^4.0.0',
    'gulp-cssmin': '^0.1.7',
    'gulp-postcss': '^6.1.1',
    'gulp-sass': '^3.1.0',
    'highlight.js': '^9.3.0',
    'html-loader': '^0.5.1',
    'html-webpack-plugin': '^2.30.1',
    'inject-loader': '^3.0.1',
    'isparta-loader': '^2.0.0',
    'json-loader': '^0.5.7',
    'json-templater': '^1.0.4',
    'karma': '^1.3.0',
    'karma-chrome-launcher': '^2.2.0',
    'karma-coverage': '^1.1.1',
    'karma-mocha': '^1.2.0',
    'karma-sinon-chai': '^1.2.4',
    'karma-sourcemap-loader': '^0.3.7',
    'karma-spec-reporter': '0.0.26',
    'karma-webpack': '^3.0.0',
    'lolex': '^1.5.1',
    'markdown-it': '^6.1.1',
    'markdown-it-anchor': '^2.5.0',
    'markdown-it-container': '^2.0.0',
    'mocha': '^3.1.1',
    'node-sass': '^4.5.3',
    'perspective.js': '^1.0.0',
    'postcss': '^5.1.2',
    'postcss-loader': '0.11.1',
    'postcss-salad': '^1.0.8',
    'progress-bar-webpack-plugin': '^1.11.0',
    'rimraf': '^2.5.4',
    'sass-loader': '^6.0.6',
    'sinon': '^1.17.6',
    'sinon-chai': '^2.8.0',
    'style-loader': '^0.19.0',
    'transliteration': '^1.1.11',
    'uppercamelcase': '^1.1.0',
    'url-loader': '^0.6.2',
    'vue': '^2.5.2',
    'vue-loader': '^13.3.0',
    'vue-markdown-loader': '1',
    'vue-router': '2.7.0',
    'vue-template-compiler': '^2.5.2',
    'vue-template-es2015-compiler': '^1.6.0',
    'webpack': '^3.7.1',
    'webpack-dev-server': '^2.9.1',
    'webpack-node-externals': '^1.6.0'
  }
}

export function log(msg) {
  msg = msg ||'log...'.repeat(20)
  console.log(JSON.stringify(msg))
}