function plugin() {
    return document.querySelector('#plugin');
}

export class DataService {
    constructor($window, $location, $q) {
        'ngInject';

        this.$location = $location;
        this.$q = $q;
        this.REG_GROUP = /^\s*\[(.+?)\]\s*$/;
        this.REG_PROP = /^\s*([^#].*?)\s*:\s*(.*?)\s*$/;
        this.sample = `[general]
last_file_update_unix_ts:1444108966
local_player:stridex
match_name:LocalBotsGame
map_name:Forests of Caldalet
match_id:-1
host:stridex
server_name:Unnamed Server
server_address:127.0.0.1:11235
server_location:
server_version:3.7.10.2

[realtime]
# 0,1 = lobby
# 2 = banning
# 3 = hero select
# 4,5,6 = in-game
# 7 = Finished
# 8 = Blind Banning
# 9 = Locking
# 10 = Lock Picking
# 11 = Shuffle Picking
game_phase:6
game_time_ms:2117107
game_time:00:35:17

[players]
# starting towers|current towers|melee barracks left|ranged barracks left|base health percent
team1_info:11|6|3|3|1.00
team2_info:11|3|1|1|1.00
# nickname|account_id|icon_path|hero_name|level|kills|deaths|assists
player_0:stridex|3258111|/heroes/scout/icon.tga|Hero_Scout|8|1|1|0
player_1:Slaskedyret|2991660|/heroes/dampeer/icon.tga|Hero_Dampeer|19|5|2|3
player_2:DifferentGuy|3102581|/heroes/predator/icon.tga|Hero_Predator|20|4|2|4
player_3:Fuqin|8711642|/heroes/parasite/icon.tga|Hero_Parasite|13|0|0|0
player_4:SactoMentor|8283424|/heroes/arachna/icon.tga|Hero_Arachna|24|6|1|0
player_5:Haxxeren|3075077|/heroes/defiler/icon.tga|Hero_Defiler|21|0|2|0
player_6:KheZu|3324626|/heroes/forsaken_archer/icon.tga|Hero_ForsakenArcher|21|4|1|1
player_7:baltazar|3099918|/heroes/shaman/icon.tga|Hero_Shaman|17|2|3|3
player_8:Fireflasher|3016415|/heroes/magmar/icon.tga|Hero_Magmar|15|0|5|2
player_9:fsnc|8499135|/heroes/frosty/icon.tga|Hero_Frosty|16|0|5|3
spectators:`;

    }
    getData() {
        return this.$q((resolve, reject) => {
            // let data = this.parseFile(this.sample);
            if(window.location.host === 'localhost:3000'){
                return resolve(this.parseFile(this.sample));
            }
            plugin().getTextFile(
                plugin().MYDOCUMENTS + "/Heroes of Newerth/game/gameinfo.ini",
                true,
                (status, data) => {
                    if (!status) {
                        console.log("failed to get Overwolf.exe.config contents");
                    } else {
                        console.log(data);
                        resolve(this.parseFile(data));
                    }
                });
        });
    }
    parseFile(data) {
        let object = {};
        let lines = data.split('\n');
        let group, match;

        for (let i = 0, len = lines.length; i !== len; i++) {
            match = lines[i].match(this.REG_GROUP);
            if (match) {
                object[match[1]] = group = object[match[1]] || {};
            } else if (group && (match = lines[i].match(this.REG_PROP))) {
                group[match[1]] = match[2];
            }
        }
        return {
            teams: this.parseTeam(object.players),
            players: this.parsePlayers(object.players),
            realtime: this.parseRealtime(object.realtime),
            general: this.parseGeneral(object.general),
        };
    }
    parseNumber(str) {
        if (!isNaN(str)) {
            return Number(str);
        }
        return str;
    }
    parseTeam(obj) {
        // # starting towers|current towers|melee barracks left|ranged barracks left|base health percent
        // team1_info:11|6|3|3|1.00
        // team2_info:11|3|1|1|1.00
        let res = [];
        let keys = ['starting_tower', 'current_towers', 'melee_barracks_left', 'ranged_barracks_left', 'base_health_percent'];
        _.forEach(obj, (val, key) => {
            val = val.split('|');
            val = _.map(val, this.parseNumber);
            if (key.startsWith('team')) {
                res.push(_.zipObject(keys, val));
            }
        });
        return res;
    }
    parsePlayers(obj) {
        // nickname|account_id|icon_path|hero_name|level|kills|deaths|assists
        let res = [];
        let keys = ['nickname', 'account_id', 'icon_path', 'hero_name', 'level', 'kills', 'deaths', 'assists', 'team'];
        _.forEach(obj, (val, key) => {
            val = val.split('|');
            val.push(Number(key.split('_')[1] > 4) + 1);
            val = _.map(val, this.parseNumber);
            if (key.startsWith('player')) {
                res.push(_.zipObject(keys, val));
            }
        });
        return res;
    }
    parseRealtime(obj) {
        _.forEach(obj, (val, key) => {
            val = this.parseNumber(val);
            obj[key] = val;
        });
        return obj;
    }
    parseGeneral(obj) {
        return obj;
    }
}
