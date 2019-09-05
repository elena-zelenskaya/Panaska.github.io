'use strict';

angular.module('myObjects', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('my_objects', {
                url:'/',
                views: {
                    'content': {
                        templateUrl : 'views/examples_grid-test.html',
                        controller  : 'ExamplesController'
                    }
                }

            })
        
            // route for the 0 page
            .state('my_objects.example_1', {
                url:'#twh1',
                views: {
                    'example': {
                        templateUrl : 'views/word_grid_0.html',
                        controller  : 'ExampleController'                  
                    }
                }
            })
			
			// route for the 1 page
            .state('my_objects.example_2', {
                url:'twh2',
                views: {
                    'example': {
                        templateUrl : 'views/table_scheme_1.html',
                        controller  : 'ExampleController'                  
                    }
                }
            })
        
    
        $urlRouterProvider.otherwise('/');
    })
;
