import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { HomeController } from './home/home.controller';
import { TeamController } from './team/team.controller';
import { PlayerController } from './player/player.controller';
import { PlayerUsedHeroesDirective } from './player/player.used.heroes.directive';
import { HeroImgFromNameDirective } from './player/heroimg.fromname.directive';
import { NavbarDirective } from './navbar/navbar.directive';
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';

import { BaseUrlInterceptor } from './services/baseurl';

angular.module('app', [
        'ngRoute',
        'mgcrea.ngStrap',
        'angular-loading-bar',
        'ngNumeraljs',
    ])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('DataService', DataService)
    .service('ApiService', ApiService)
    .controller('HomeController', HomeController)
    .controller('TeamController', TeamController)
    .factory('BaseUrlInterceptor', BaseUrlInterceptor)
    .directive('hbPlayerUsedHeroes', PlayerUsedHeroesDirective)
    .directive('hbHeroImgFromName', HeroImgFromNameDirective)
    .directive('hbNavbar', NavbarDirective);
