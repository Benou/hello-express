/**
 * Created by Benou on 05/10/2016.
 */

/* @ngInject */
export default $resource => {
  return $resource('/src/client/data/greetings.json', null, {
    'get': {method: 'GET', isArray: true},
    'update': {method: 'PUT'}
  })
}
