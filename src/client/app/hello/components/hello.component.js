/**
 * Created by Benou on 04/10/2016.
 */

import './hello.component.scss'

import template from './hello.component.html'

class HelloController {
  constructor ($stateParams, defaultName) {
    this.$stateParams = $stateParams
    this.defaultName = defaultName
  }

  $onInit () {
    this.name = this.$stateParams.name || this.defaultName
  }
}

export default {
  template,
  controller: HelloController
}
