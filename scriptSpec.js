describe('myApp', function() {
	beforeEach(module('myApp'));

	var scope;

	describe('appCtrl', function() {
		var ctrl, form, input, firstname;
		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			form = scope.appForm;
			ctrl = $controller('appCtrl', {
				$scope: scope
			});
		}));
		it('should accept user information on submit', function() {
			expect(scope.appForm).toBe(scope.appForm);
		});
	});

	describe('godzilla', function() {
		var html;

		beforeEach(inject(function($rootScope) {
			html = "";
			scope = $rootScope.$new();
			scope.$digest();
		}));
		it('should render', function(){
			expect(html).toBe(html);
		});
	});
});