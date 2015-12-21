module.exports = function($scope,$http) {

    $scope.list = [];
    $scope.text = '123';
    $scope.submit = function() {
     //   $scope.list = function() {

        $scope.list.push(this.text);

    var url = 'http://10.116.136.13:7109/ID/'+ $scope.text;

    console.log(url);
     $http.get(url)
     .success(function(data, status, headers, config) {
              $scope.listout = data;
     })
     .error(function(error, status, headers, config) {
              console.log(status);
                   console.log("Error occured");
     });

            $scope.text = '';

        console.log("required!");
    };
};
