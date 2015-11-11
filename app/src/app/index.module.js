import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { HomeController } from './home/home.controller';
import { TeamController } from './team/team.controller';
import { NavbarDirective } from './navbar/navbar.directive';
import { DataService } from './services/data.service';

import { BaseUrlInterceptor } from './services/baseurl';

angular.module('app', [
        'ngRoute',
        'mgcrea.ngStrap',
        'angular-loading-bar',
    ])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('DataService', DataService)
    .controller('HomeController', HomeController)
    .controller('TeamController', TeamController)
    .factory('BaseUrlInterceptor', BaseUrlInterceptor)
    .directive('hbNavbar', NavbarDirective);
