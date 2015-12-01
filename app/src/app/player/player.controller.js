export class PlayerController {
    constructor($routeParams, DataService, ApiService) {
        'ngInject';
        this.ApiService = ApiService;

        this.teamId = Number($routeParams.team !== 'legion') + 1;

        DataService.getData().then(res => this.getFromCache(res));
        this.m = 'rnk';
    }
    getFromCache(res) {
        let pids = _.pluck(res.players, 'account_id').join(',');
        this.ApiService.bulkPlayers(pids).then(res => {
            this.players = res.data;
        });
    }
}
