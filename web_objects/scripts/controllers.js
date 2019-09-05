'use strict';

angular.module('myObjects').config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

angular.module('myObjects')

        .controller('ExamplesController', ['$scope', function($scope) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
			$scope.showMenu = false;
			$scope.message = "Loading ...";
            $scope.dishes= {};
			
	
                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ExampleController', ['$scope', function($scope) {

            
            
           
        }])

        
;
