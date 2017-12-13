import angular from "angular";
import indexModule from "../modules/indexModule";

var indexController = indexModule.controller("indexController", function($scope) {

    "use strict";

    $scope.welcome = "Hello World !";
});

export default indexController;