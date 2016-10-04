/**
 * Created by Benou on 04/10/2016.
 */

import angular from 'angular'

import core from '../core/core.module'

import routes from './config/hello.routes'
import hello from './components/hello.component'

export default angular
  .module('app.hello', [
    core
  ])
  .config(routes)
  .component('hello', hello)
  .constant('defaultName', 'World')
  .name
