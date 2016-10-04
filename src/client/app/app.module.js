/**
 * Created by Benou on 04/10/2016.
 */

import angular from 'angular'

import core from './core/core.module'
import hello from './hello/hello.module'

import app from './components/app.component'

angular
  .module('app', [
    core,
    hello
  ])
  .component('app', app)

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'])
})
