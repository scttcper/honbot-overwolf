export function routerConfig($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/', {
            templateUrl: 'app/team/overview.html',
            controller: 'TeamController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
}
