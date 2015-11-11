export function routerConfig($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .when('/team/:team', {
            templateUrl: 'app/team/team.html',
            controller: 'TeamController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
}
