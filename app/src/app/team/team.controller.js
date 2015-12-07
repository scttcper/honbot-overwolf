export class TeamController {
    constructor($routeParams, DataService, ApiService) {
        'ngInject';
        // todo allow changing mode
        this.m = 'rnk';

        this.ApiService = ApiService;

        DataService.getData().then(res => {
            this.data = res;
            this.getFromCache(res.players);
        });
    }
    getFromCache(players) {
        let pids = _.pluck(players, 'account_id').join(',');
        this.ApiService.bulkPlayers(pids).then(res => {
            _.forEach(res.data, (n) => {
                let p = _.find(players, 'account_id', n.account_id);
                p.bulk = true;
                p = _.merge(p, n);
            });
            this.checkAge();
        });
    }
    checkAge() {
        _.forEach(this.data.players, (n) => {
            if (moment.utc().diff(moment(n.updated), 'days') > 1 || !n.bulk) {
                this.ApiService.singlePlayer(n.nickname).then(res => {
                    n = _.merge(n, res.data);
                });
            }
        });
    }
}
