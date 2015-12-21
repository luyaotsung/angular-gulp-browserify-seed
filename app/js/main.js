(function () {

    'use strict';

    require('angular');
    require('angular-route');
    require('angular-animate');

    var uibs = require('angular-ui-bootstrap');

    var mainCtrl = require('./controllers/mainctrl');
    var ubCtrl = require('./controllers/ubctrl');

    angular.module('SampleApp', [uibs,'ngRoute', 'ngAnimate'])

    .config([
        '$routeProvider',
        function($routeProvider) {
            // routes
            $routeProvider

            .when("/", {
                templateUrl: "./view/partial1.html",
                controller: "MainController"
            })

            .when("/UB/", {
                templateUrl: "./view/partial2.html",
                controller: "UBController"
            })
            .otherwise({
                redirectTo: '/'
            });
        }
    ])

    //Load controller
    .controller('MainController', ['$scope','$http', mainCtrl])
    .controller('UBController', ['$scope', mainCtrl]);

}());
