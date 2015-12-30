module.exports = function($FileSaver, $Blob, base64 , $scope,$http) {

    var url = 'http://10.116.136.13:22442/file/';

    $http.get(url)
    .success(function(data, status, headers, config) {
        $scope.dataa = data.List;
        console.log(data);
    })
    .error(function(error, status, headers, config) {
        console.log(status);
        console.log("Error occured");
    });

    $scope.FILEID = function(id) {
        var file_id_url = url + id;
        console.log(file_id_url);

        $http.get(file_id_url)
        .success(function(data, status, headers, config) {
            var TargetString = base64.decode(data.base64);
            var file = new Blob([TargetString], {type : 'application/octet-str    eam'});
            $FileSaver.saveAs(file, data.filename);
        })
        .error(function(error, status, headers, config) {
            console.log(status);
            console.log("Error occured");
        });

    };
    console.log(" ==> downloadctrl.js");
};
