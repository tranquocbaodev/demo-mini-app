'use strict';

describe('myApp.personCtrl module', function() {

  beforeEach(module('myApp.personCtrl'));

  describe('personCtrl controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var PersonCtrlCtrl = $controller('PersonCtrlCtrl');
      expect(PersonCtrlCtrl).toBeDefined();
    }));

  });
});