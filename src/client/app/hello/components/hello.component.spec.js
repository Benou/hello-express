/**
 * Created by Benou on 04/10/2016.
 */

describe('Hello', () => {

  beforeEach(() => {
    angular.mock.module('app.hello')
  })

  describe('Component', () => {

    let scope, element

    beforeEach(angular.mock.inject(($rootScope, $compile, $stateParams) => {
      scope = $rootScope.$new()
      $stateParams.name = 'Benou'
      element = angular.element('<hello></hello>')
      element = $compile(element)(scope)
      scope.$apply()
    }))

    it('should render Hello Benou !', function() {
      let h2 = element.find('h2')
      expect(h2.text()).toEqual('Hello Benou !')
    })

  })

  describe('Controller', () => {

    let controller, defaultName

    beforeEach(angular.mock.inject(($componentController, _defaultName_) => {
      controller = $componentController('hello')
      defaultName = _defaultName_
    }))

    it('should have name equal to defaultName', () => {
      controller.$onInit()
      expect(controller.name).toBeDefined()
      expect(controller.name).toEqual(defaultName)
    })

    it('should have name equal to Benou', () => {
      controller.$stateParams.name = 'Benou'
      controller.$onInit()
      expect(controller.name).toBeDefined()
      expect(controller.name).toEqual('Benou')
    })
  })

})