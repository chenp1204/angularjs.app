import angular from "angular";
import uiRouter from "angular-ui-router";

var indexModule = angular.module("indexModule", ["ui.router"]);

indexModule.config(function($stateProvider) {
    $stateProvider
        .state("default", {
            url: "/",
            templateUrl: "../../views/index.html"
        });
});

export default indexModule;