var app = angular.module('myApp', []);

app.controller('appCtrl', ['$scope', function($scope) {
    $scope.submit = function() {
        $scope.appForm.firstname.$setPristine() && $scope.appForm.lastname.$setPristine() && $scope.appForm.email.$setPristine();
        $scope.appForm.firstname.$setPristine(true) && $scope.appForm.lastname.$setPristine(true) && $scope.appForm.email.$setPristine(true);
        $scope.firstname = null;
        $scope.lastname = null;
        $scope.email = null;
    };
}]);

app.directive('godzilla', function() {
   return {
        restrict: 'AE',
        transclude: true,
        template: '<div class="brand-logo"><span ng-transclude></span></div>' + '<opt-in><span ng-transclude></span></opt-in>',
        replace: true,
        scope: false
    };
});
