export function PlayerUsedHeroesDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/player/player.used.heroes.html',
        scope: {
            player: '='
        },
        controller: NavbarController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class NavbarController {
    constructor(ApiService) {
        'ngInject';
        this.m = 'rnk';
        ApiService.playerUsedHeroes(this.player, this.m).then((res)=>{
            this.heroes = res.data;
        });

    }
    search() {
        if (this.nick) {
            this.$location.path(`/player/${this.nick}/`);
        }
    }
}
