(function () {

    'use strict';

    require('angular');
    require('angular-route');
    require('angular-animate');
    require('angular-base64-upload');
    require('angular-utf8-base64');
    require('angular-file-saver');

    var uibs = require('angular-ui-bootstrap');

    var uploadCtrl = require('./controllers/uploadctrl');
    var filelistCtrl = require('./controllers/filelistctrl');

     // angular.module('SampleApp',[uibs,'utf8-base64','ngFileSaver']).controller('MenuCtrl', ['FileSaver','Blob','base64','$scope','$window',menuCtrl]);
    angular.module('SampleApp', [uibs,'utf8-base64','ngFileSaver','ngRoute', 'ngAnimate','naif.base64'])
    .config([
        '$routeProvider',
        '$httpProvider',
        function($routeProvider,$httpProvider) {
            // routes

            $routeProvider
            .when("/Upload/", {
                templateUrl: "./view/upload.html",
                controller: "UploadController"
            })
            .when("/FileList/", {
                templateUrl: "./view/filelist.html",
                controller: "FileListController"
            })
            .otherwise({
                redirectTo: '/FileList/'
            });
        }
    ])

    //Load controller
    .controller('UploadController', ['$scope', '$http',uploadCtrl])
    .controller('FileListController', ['FileSaver','Blob','base64','$scope', '$http',filelistCtrl]);

     var menuCtrl = require('./controllers/menuctrl');
     angular.module('SampleApp').controller('MenuCtrl', ['$scope','$window',menuCtrl]);

}());
