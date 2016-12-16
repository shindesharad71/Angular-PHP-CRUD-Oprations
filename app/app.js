var app = angular.module("crudapp", []);

app.controller('AppController', function($scope, $http) {

    ReadIt(); // load all information first

    $scope.updatebtn = false;
    $scope.addbtn = true;

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
        $http.post("api/DeleteIt.php", { id: item }).
        success(function(data, status, headers, config) {
            ReadIt(); //refresh all information
        }).error(function(data, status, headers, config) {
            console.log(data);
        });
    }

    $scope.EditIt = function(id, name, email, password) {

        $scope.updatebtn = true;
        $scope.addbtn = false;

        $scope.id = id;
        $scope.name = name;
        $scope.email = email;
        $scope.password = password;
    }

    $scope.UpdateIt = function() {

        $http.post("api/UpdateIt.php", { id: $scope.id, name: $scope.name, email: $scope.email, password: $scope.password }).
        success(function(data, status, headers, config) {
            ReadIt(); //refresh all information
        }).error(function(data, status, headers, config) {
            console.log(data);
        });

        $scope.name = "";
        $scope.email = "";
        $scope.password = "";

        $scope.updatebtn = false;
        $scope.addbtn = true;
    }
});
