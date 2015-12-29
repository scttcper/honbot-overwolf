export function OverviewCardDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/views/overview.card.html',
        scope: {
            p: '='
        },
        controller: OverviewCardController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class OverviewCardController {
    constructor(ApiService) {
        'ngInject';
        // todo allow changing mode
        this.m = 'rnk';
        ApiService.playerUsedHeroes(this.p.account_id, this.m).then((res) => {
            // this.sum = _.sum(res.data, 'count');
            this.heroes = res.data;
        });
    }
}
