var app = angular.module("appDemo", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
     $locationProvider.hashPrefix('');
    
    $routeProvider
        .when('/',
            {
                template:"welcome to quick demo",
                controller:function(){
                    console.log("default root path");
                }
            })
            .when('/tasks',
            {
                template:"Task List will show here.",
                controller:function(){
                    console.log ("task controller running.")
                }
            })
            .when('/home', {
                redirectTo:'/'
            })
        
});




app.factory("TaskService", function ($http) {
    return {
        getTasks:function(){

           return [
                {"title":"Remove Wallpaper"},
                {"title":"Bathroom scurting check with John"},
                {"title":"Other stuff"}
            ]
            // $http.get('tasks.json').then(function(response) {
            //     return  response.data;
            //   });
        }

    };
    
});

app.controller("TasksController", function ($scope, TaskService) {

 var taskList = TaskService.getTasks();
console.log(taskList);
    $scope.model = {
        title: "Quick Demo",
        tasks:taskList
        
    };
    console.log($scope.model);
});

