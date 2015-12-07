export function HeroImgFromNameDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        template: `<img ng-src="{{vm.img}}" height="45" width="45">`,
        scope: {
            name: '='
        },
        controller: HeroImgFromNameController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class HeroImgFromNameController {
    constructor(ApiService) {
        'ngInject';
        this.m = 'rnk';
        ApiService.heroIdFromName(this.name).then((res) => {
            this.img = `//honbot.com/assets/images/heroes/${res.data}.jpg`;
        });
    }
}
