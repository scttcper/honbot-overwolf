export class TeamController {
    constructor($routeParams, DataService, ApiService) {
        'ngInject';
        this.ApiService = ApiService;

        this.teamId = Number($routeParams.team !== 'legion') + 1;

        DataService.getData().then((res) => {
            this.team = res;
            this.getFromCache();
        });
        this.m = 'rnk';
    }
    getFromCache() {
        let filtered = _.filter(this.team.players, 'team', this.teamId);
        let pids = _.pluck(filtered, 'account_id').join(',');
        this.ApiService.bulkPlayers(pids).then(res => {
            this.players = res.data;
        });
    }
}
