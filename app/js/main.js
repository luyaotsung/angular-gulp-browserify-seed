(function () {

    'use strict';

    require('angular');
    require('angular-route');
    require('angular-animate');
    require('angular-base64-upload');
    require('angular-utf8-base64');
    require('angular-file-saver');

    var uibs = require('angular-ui-bootstrap');

    var mainCtrl = require('./controllers/mainctrl');
    var ubCtrl = require('./controllers/ubctrl');
    var uploadCtrl = require('./controllers/uploadctrl');

     // angular.module('SampleApp',[uibs,'utf8-base64','ngFileSaver']).controller('MenuCtrl', ['FileSaver','Blob','base64','$scope','$window',menuCtrl]);
    angular.module('SampleApp', [uibs,'utf8-base64','ngFileSaver','ngRoute', 'ngAnimate','naif.base64'])
    .config([
        '$routeProvider',
        '$httpProvider',
        function($routeProvider,$httpProvider) {
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
            .when("/Upload/", {
                templateUrl: "./view/upload.html",
                controller: "UploadController"
            })
            .otherwise({
                redirectTo: '/'
            });
        }
    ])

    //Load controller
    .controller('MainController', ['$scope','$http', mainCtrl])
    .controller('UBController', ['$scope', ubCtrl])
    .controller('UploadController', ['FileSaver','Blob','base64','$scope', '$http',uploadCtrl]);

     var menuCtrl = require('./controllers/menuctrl');
     angular.module('SampleApp').controller('MenuCtrl', ['$scope','$window',menuCtrl]);

}());
