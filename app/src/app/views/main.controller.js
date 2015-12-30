export class MainController {
    constructor($document, $scope) {
        'ngInject';

        // TODO
        // could probably make a service to pass around open and close
        // who's got time for that
        this.showOverview = false;

        $document[0].addEventListener('keydown', (e) =>{
            if (e.shiftKey && e.keyCode == 9) {
                this.showOverview = !this.showOverview;
                $scope.$apply();
            }
            e.preventDefault();
        });
    }
    closeOverview(){
        this.showOverview = false;
    }
}
