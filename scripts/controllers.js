'use strict';

angular.module('proApp').config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

angular.module('proApp')

        .controller('MainController', ['$scope', function($scope) {

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

        .controller('PortfolioController', ['$scope', function($scope) {

            $scope.mysites = [{picture:"images/love-letter.jpg", url:"http://www.love-letter.ru", address: "www.love-letter.ru", name: "Decor & Event Studio"},
			{picture:"images/center-tatmed.jpg", url:"http://www.center-tatmed.ru", address: "www.center-tatmed.ru", name: "Private Medical Clinic"},
			{picture:"images/big5.jpg", url:"http://www.big5.ru", address: "www.big5.ru", name: "Public Blog"}];


        }])

		.controller('AboutController', ['$scope', function($scope) {




        }])


;
