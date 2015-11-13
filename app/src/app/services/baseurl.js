export function BaseUrlInterceptor($location) {
    'ngInject';
    var hosted = $location.host();

    function host() {
        if (hosted === 'localhost' || hosted === '127.0.0.1') {
            return '//api.honbot.com';
            return '//localhost:5000';
        }
        return '//api.honbot.com';
    }

    return {
        'request': function(config) {
            if (config.url.indexOf('/api') === 0) {
                config.url = host() + config.url.slice(4);
            }
            return config;
        }
    };
}
