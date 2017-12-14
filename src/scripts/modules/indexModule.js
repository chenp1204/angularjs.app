import angular from "angular";
import uiRouter from "angular-ui-router";

import currentUserService from "../services/common/currentUserService";
import httpService from "../services/common/httpService";

//创建模块
var indexModule = angular.module("indexModule", ["ui.router"]);

//注入服务
indexModule.factory("currentUser", currentUserService);
indexModule.factory("http", httpService);

indexModule.config(function($stateProvider) {
    $stateProvider
        .state("default", {
            url: "/",
            templateUrl: "../../views/index.html"
        });
});

export default indexModule;