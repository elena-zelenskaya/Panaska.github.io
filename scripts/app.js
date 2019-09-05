'use strict';

angular.module('proApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
					'navigation': {
                        templateUrl : 'views/navigation.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'MainController'
                    }
					/*,
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }*/
                }

            })
        
            // route for the aboutus page
            .state('app.portfolio', {
                url:'portfolio',
                views: {
                    'content@': {
                        templateUrl : 'views/portfolio.html',
                        controller  : 'PortfolioController'                  
                    }
                }
            })
        
            // route for the contactus page
            .state('app.aboutme', {
                url:'about-me',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutme.html',
                        controller  : 'AboutController'                  
                    }
                }
            })

            // route for the menu page
           /* .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl : 'views/menu.html',
                        controller  : 'MenuController'
                    }
                }
            })*/

            // route for the dishdetail page
           /* .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/dishdetail.html',
                        controller  : 'DishDetailController'
                   }
                }
            });*/
    
        $urlRouterProvider.otherwise('/');
    })
;
