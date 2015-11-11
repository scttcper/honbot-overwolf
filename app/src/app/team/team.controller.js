export class TeamController {
    constructor($routeParams, DataService) {
        'ngInject';

        DataService.getData().then((res)=>{
            this.team = res;
        });

    }
}
