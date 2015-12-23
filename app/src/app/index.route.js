export function routerConfig($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/', {
            templateUrl: 'app/team/overview.html',
            controller: 'TeamController',
            controllerAs: 'vm'
        })
        .when('/player/:player', {
            templateUrl: 'app/player/player.html',
            controller: 'PlayerController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
}
