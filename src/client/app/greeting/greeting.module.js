/**
 * Created by Benou on 04/10/2016.
 */

import angular from 'angular'

import core from '../core/core.module'

import routes from './config/greeting.routes'

import greetingList from './components/greeting-list.component'
import greeting from './components/greeting.component'

import greetingAPI from './services/greeting.factory'
import greetingService from './services/greeting.service'

export default angular
  .module('app.greeting', [
    core
  ])
  .config(routes)
  .component('greetingList', greetingList)
  .component('greeting', greeting)
  .factory('greetingAPI', greetingAPI)
  .service('greetingService', greetingService)
  .constant('defaultGreetingName', 'World')
  .name
