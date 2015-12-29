import { config } from './index.config';
import { runBlock } from './index.run';
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';
import { MainController } from './views/main.controller';
import { OverviewDirective } from './views/overview.directive';
import { OverviewCardDirective } from './views/overview.card.directive';

import { BaseUrlInterceptor } from './services/baseurl';

angular.module('app', [
        'ngNumeraljs',
    ])
    .config(config)
    .run(runBlock)
    .factory('BaseUrlInterceptor', BaseUrlInterceptor)
    .service('DataService', DataService)
    .service('ApiService', ApiService)
    .controller('MainController', MainController)
    .directive('hbOverviewCard', OverviewCardDirective)
    .directive('hbOverview', OverviewDirective);
