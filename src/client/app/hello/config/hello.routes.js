/**
 * Created by Benou on 04/10/2016.
 */

/* @ngInject */
export default ($urlRouterProvider, $stateProvider) => {
  $urlRouterProvider
    .otherwise('/hello/')

  $stateProvider
    .state('hello', {
      url: '/hello/:name',
      template: '<hello></hello>'
    })
}
