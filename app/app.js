var app = angular.module("crudapp", []);

app.controller('AppController', function($scope, $http) {

    ReadIt(); // load all information first

    function ReadIt() {
        $http.get("api/ReadIt.php").success(function(data) {
            $scope.items = data;
        }).error(function(data, status, headers, config) {
            console.log(data);
        })
    }

    $scope.AddIt = function() {

        $http.post("api/AddIt.php", { name: $scope.name, email: $scope.email, password: $scope.password }).
        success(function(data, status, headers, config) {
            ReadIt(); //refresh all information
        }).error(function(data, status, headers, config) {
            console.log(data);
        });

        $scope.name = "";
        $scope.email = "";
        $scope.password = "";


    }

    $scope.DeleteIt = function(item) {
        alert(item + ' Delete');
    }

    $scope.EditIt = function(item) {
        alert(item + ' Edit');
    }

});
