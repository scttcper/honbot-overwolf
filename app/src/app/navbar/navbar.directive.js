export function NavbarDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/navbar/navbar.html',
        scope: {},
        controller: NavbarController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class NavbarController {
    constructor($routeParams, $route) {
        'ngInject';
        this.$route = $route;

        if ($routeParams.team) {
            this.team = $routeParams.team.toLowerCase();
        }
    }
    reloadRoute() {
        this.$route.reload();
    }
}
