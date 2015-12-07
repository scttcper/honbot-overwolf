export function PlayerUsedHeroesDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        template: `<img ng-repeat="hero in vm.heroes | limitTo:5 track by $index" ng-src="//www.heroesofnewerth.com/images/heroes/{{::hero._id}}/icon_128.jpg" height="45" width="45">`,
        scope: {
            player: '='
        },
        controller: PlayerUsedHeroesController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class PlayerUsedHeroesController {
    constructor(ApiService) {
        'ngInject';
        this.m = 'rnk';
        ApiService.playerUsedHeroes(this.player, this.m).then((res) => {
            this.heroes = res.data;
        });
    }
}
