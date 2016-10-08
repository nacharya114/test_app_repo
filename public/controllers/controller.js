var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope','$http', function($scope, $http) {
    console.log("Hello World from Cotnroller.");



    var refresh = function() {
        $http.get("/contactList").success(function(response) {
            console.log("I got the json.");
            $scope.contactList = response;
            $scope.contact = "";
        });
    };

    refresh();

    $scope.addContact = function() {
        console.log($scope.contact);
        $http.post("/contactList", $scope.contact).success(function(response) {
            console.log(response);
            refresh();
        });
    };

    $scope.remove = function(id) {
        console.log(id);
        $http.delete("/contactList/" + id).success(function(response) {
            refresh();
        });
    };

    $scope.edit = function(id) {
        console.log(id);
        $http.get("/contactList/" + id).success(function(response) {
            $scope.contact = response;
        });
    };

    $scope.update =function(id) {
        console.log($scope.contact._id);
        $http.put("/contactList/" + $scope.contact._id, $scope.contact).success(function(response) {
                refresh();
        });
    }

    $scope.deselect = function() {
        $scope.contact = "";
    }

    //Listeners


    // var Person = function (name, email, number) {
    //     this.name = name;
    //     this.email = email;
    //     this.number = number;
    // }

    // person1 = new Person("Tim", "tim@em.com", "1111111");
    // person2 = new Person("Alice", "al@adf.com", "22222");

    // var contactList = [person1, person2];


}]);
