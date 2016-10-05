/**
 * Created by Benou on 04/10/2016.
 */

import angular from 'angular'

import core from './core/core.module'
import greeting from './greeting/greeting.module'

import app from './components/app.component'

angular
  .module('app', [
    core,
    greeting
  ])
  .component('app', app)

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'])
})
