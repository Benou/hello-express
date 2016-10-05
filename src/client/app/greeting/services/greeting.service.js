/**
 * Created by Benou on 05/10/2016.
 */

import _ from 'lodash'

export default class GreetingService {
  /* @ngInject */
  constructor (greetingAPI) {
    this.api = greetingAPI
  }

  getGreetings () {
    if (!this.promise) {
      this.promise = this.api
        .get()
        .$promise
    }
    return this.promise
  }

  createGreeting (greeting) {
    return this.getGreetings()
      .then(greetings => {
        let greetingIndex = _.findIndex(greetings, {id: greeting.id})
        if (greetingIndex === -1) {
          greeting.id = greetings.push(greeting)
        }
        return greeting
      })
  }
}
