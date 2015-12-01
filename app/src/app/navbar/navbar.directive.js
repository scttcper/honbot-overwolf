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
    }
    reloadRoute() {
        this.$route.reload();
    }
}
