export function PlayerStatsDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/team/playerstats.html',
        scope: {
            p: '='
        },
        controller: PlayerStatsController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class PlayerStatsController {
    constructor() {
        'ngInject';
        // todo allow changing mode
        this.m = 'rnk';
    }
}
