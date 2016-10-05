/**
 * Created by Benou on 05/10/2016.
 */

import './greeting-list.component.scss'

import template from './greeting-list.component.html'

class GreetingListController {
  /* @ngInject */
  constructor ($stateParams, greetingService, defaultGreetingName) {
    this.$stateParams = $stateParams
    this.greetingService = greetingService
    this.defaultGreetingName = defaultGreetingName
  }

  $onInit () {
    this.greetingService.createGreeting({
      name: this.$stateParams.name || this.defaultGreetingName
    })
  }
}

export default {
  template,
  controller: GreetingListController,
  bindings: {
    greetings: '<'
  }
}
