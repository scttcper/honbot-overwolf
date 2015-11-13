export class ApiService {

    constructor($http) {
        'ngInject';
        this.$http = $http;

        this.apiWatching = false;
        this.updatesList = [];
        this.updateWatching = false;
    }
    counts() {
        return this.$http.get(`/api/counts`, {ignoreLoadingBar: true});
    }
    singlePlayer(nickname) {
        // return a single player stats
        return this.$http({
            method: 'GET',
            url: `/api/player/${nickname}`,
            cache: true
        });
    }
    bulkPlayers(pids) {
        // takes list of playerid's and returns cached stats for each player
        return this.$http({
            method: 'GET',
            url:`/api/bulkPlayers/${pids}`
        });
    }
    history(pid, mode, page) {
        return this.$http.get(`/api/history/${pid}/${page}/${mode}`);
    }
    match(id) {
        return this.$http.get(`/api/match/${id}`);
    }
    playerCache(pid, mode) {
        return this.$http({
            method: 'GET',
            url: `/api/cache/${pid}/${mode}`,
            cache: true
        });
    }
}
