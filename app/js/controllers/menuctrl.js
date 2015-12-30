module.exports = function($scope,$window) {

    $scope.UPLOAD = function () {
        $window.location.href = "#/Upload/";
        console.log("UPLOAD Button is pressed");
    };
    $scope.DOWNLOAD = function () {

        $window.location.href = "#/Download/";

//        var OriginalString = "Q2xpZW50IFRleHQgRmlsZQo=";
//        var TargetString = $base64.decode(OriginalString);
//        var file = new Blob([TargetString], {type : 'application/octet-stream'});
//        $FileSaver.saveAs(file, "xxx.ooo");
        console.log("UPLOAD Button is pressed");
    };
    $scope.FILELIST = function () {
        $window.location.href = "#/FileList/";
        console.log("FILELIST button is pressed");
    };
};
