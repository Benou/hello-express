/**
 * Created by Benou on 04/10/2016.
 */

let resolve = {
  /* @ngInject */
  greetings: (greetingService) => {
    return greetingService.getGreetings()
      .then(greetings => greetings)
  }
}

class GreetingRoutesController {
  /* @ngInject */
  constructor (greetings) {
    this.greetings = greetings
  }
}

/* @ngInject */
export default ($urlRouterProvider, $stateProvider) => {
  $urlRouterProvider
    .otherwise('/greeting/')

  $stateProvider
    .state('hello', {
      url: '/greeting/:name',
      resolve,
      controller: GreetingRoutesController,
      controllerAs: 'routesCtrl',
      template: '<greeting-list greetings="routesCtrl.greetings"></greeting-list>'
    })
}
