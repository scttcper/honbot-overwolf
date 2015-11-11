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
    constructor($routeParams) {
        'ngInject';
        if ($routeParams.team) {
            this.team = $routeParams.team.toLowerCase();
        }
    }
}
