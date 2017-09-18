var app = angular.module("appDemo", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/tasks',
            {
                controller: 'TasksController',
                templateUrl: "taskList.html"
            })
        .otherwise({ redirectTo: '/home' });
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

