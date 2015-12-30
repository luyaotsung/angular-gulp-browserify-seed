module.exports = function($scope, $http) {

    $scope.file = {};

    $scope.FileType = "EMPTY";
    $scope.FileName = "EMPTY";
    $scope.Base64String = "EMPTY";


    $scope.uploadFiles  = function() {

        console.log($scope.file.filename);
    };

    $scope.submit = function() {


// {
//     "filesize": 54836 (bytes),
//     "filetype": "image/jpeg",
//     "filename": "profile.jpg",
//     "base64":   "/9j/4AAQSkZJRgABAgAAAQABAAD//gAEKgD/4gIctcwIQA..."
// }

        $scope.file.filedescription = "This is Description";

        $scope.FileSize = $scope.file.filesize;
        $scope.FileName = $scope.file.filename;
        $scope.Base64String = $scope.file.base64;

        var sendJSON = "";
        var url = "http://10.116.136.13:22442/file/";
        //$sendJSON = JSON.parse(JSON.stringify($scope.file));

        $sendJSON = JSON.stringify($scope.file);


        $http({
            url: url ,
            method: "POST",
            data: JSON.stringify($scope.file) ,
            headers: {'Content-Type': undefined }
        }).success(function (data, status, headers, config) {
            console.log(data);
            console.log("Success");
        }).error(function (data, status, headers, config) {
            console.log("Faile");
        });



        console.log($sendJSON);

    };

    console.log(" ==> uplaodctrl.js");
};
