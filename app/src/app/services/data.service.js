export class DataService {
    constructor($window, $location, $q) {
        'ngInject';

        this.$location = $location;
        this.$q = $q;
        this.sample = `[general]
last_file_update_unix_ts:1444108966
local_player:stridex
match_name:LocalBotsGame
map_name:Forests of Caldavar
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
player_1:DampeerBot|3258111|/heroes/dampeer/icon.tga|Hero_Dampeer|19|5|2|3
player_2:PredatorBot|3258111|/heroes/predator/icon.tga|Hero_Predator|20|4|2|4
player_3:ParasiteBot|3258111|/heroes/parasite/icon.tga|Hero_Parasite|13|0|0|0
player_4:ArachnaBot|3258111|/heroes/arachna/icon.tga|Hero_Arachna|24|6|1|0
player_5:DefilerBot|3258111|/heroes/defiler/icon.tga|Hero_Defiler|21|0|2|0
player_6:ForsakenBot|3258111|/heroes/forsaken_archer/icon.tga|Hero_ForsakenArcher|21|4|1|1
player_7:ShamanBot|3258111|/heroes/shaman/icon.tga|Hero_Shaman|17|2|3|3
player_8:MagmusBot|3258111|/heroes/magmar/icon.tga|Hero_Magmar|15|0|5|2
player_9:GlaciusBot|3258111|/heroes/frosty/icon.tga|Hero_Frosty|16|0|5|3
spectators:`;

    }
    getData(){
        return this.$q((resolve, reject) => {
            resolve(this.sample);
        });
    }
}
