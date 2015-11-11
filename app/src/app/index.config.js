export function config($logProvider, $httpProvider) {
    'ngInject';
    // Enable log
    $logProvider.debugEnabled(true);

    $httpProvider.useLegacyPromiseExtensions = false;
    $httpProvider.interceptors.push('BaseUrlInterceptor');
}
