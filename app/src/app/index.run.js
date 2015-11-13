export function runBlock($log) {
    'ngInject';
    $log.debug('runBlock end');

    // pollyfill for startsWith on strings
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function(searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
        };
    }
}
