export function OverviewDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/views/overview.html',
        scope: {},
        controller: OverviewController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class OverviewController {
    constructor(DataService, ApiService) {
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
                // match the player returned in the bulk and merge the stats into the existing player object
                let p = _.find(players, 'account_id', n.account_id);
                p.statsLoaded = true;
                p = _.merge(p, n);
            });
            this.checkAge();
        });
    }
    checkAge() {
        _.forEach(this.data.players, (n) => {
            if (moment.utc().diff(moment(n.updated), 'days') > 2 || !n.statsLoaded) {
                this.ApiService.singlePlayer(n.nickname).then(res => {
                    n.statsLoaded = true;
                    n = _.merge(n, res.data);
                }, () => {
                    n.fail = true;
                });
            }
        });
    }
}
