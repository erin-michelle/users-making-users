var myApp = angular.module("myApp", ["ngRoute"]);

//Define routes
myApp.config(function($routeProvider){
   $routeProvider
      .when("/users", {
         templateUrl: "static/partials/users.html"
      })
      .when("/list", {
         templateUrl: "static/partials/list.html"
      })
      .otherwise({
         redirectTo: "/users"
      });
})

myApp.factory("userFactory",[function(){
   var factory = {};

   //Initialize our list of users
   var users = [];


   //Pass the user list to a controller
   factory.index = function(callback){
      callback(users);
   }

   //Add new user to the list
   factory.addUser = function(user){
      users.push(user);
   }

   //Remove the user from the list
   factory.removeUser = function($index){
      users.splice($index, 1);
   }
   return factory;
}])

//Inject userFactory into each controller
myApp.controller("usersController", ['$scope', 'userFactory', function($scope, userFactory){
   function setUsers(data){
      $scope.users = data;
      $scope.newUser = {};
   }

   $scope.users = [];

   //When this controller is loaded, fetch the user list
   userFactory.index(setUsers);

   //Pass new user info to the factory
   $scope.addUser = function(){
      userFactory.addUser($scope.newUser)
      $scope.newUser = {}; //Reset our form
   }

   //Delegate deleting user to the factory
   $scope.removeUser = function($index){
      userFactory.delete($index);
   }
}])

//Inject userFactory into each controller
myApp.controller("listController",['$scope', 'userFactory', function($scope, userFactory){
   function setUsers(data){
      $scope.users = data;
   }

   $scope.users = [];

   //When this controller is loaded, fetch the user list
   userFactory.index(setUsers);
}])