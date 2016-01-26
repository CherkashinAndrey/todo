

var myApp=angular.module('myApp',[]);

myApp.controller('Controller', function($scope, $window, ngStorage) {
 	$scope.tasks = [];
    
    $scope.tasks = ngStorage.getStorage($scope.tasks, $window);

    $scope.clearLocalStor = function() {
        $window.localStorage.clear();
    };

    $scope.dblClick = function(task) {
        task.toggle = true;
    };

 	$scope.addTask = function(newTask) {
        if(event.keyCode == 13){
            $scope.tasks.push({zadacha:newTask.zadacha, complete: false, toggle:false});
            $scope.newTask = {};
            ngStorage.setStorage($window, $scope.tasks);
        }
 	};

    $scope.editOnEnter = function(task){
        if(event.keyCode == 13 && task.zadacha){
            task.toggle = false;
            ngStorage.setStorage($window, $scope.tasks);
        }
    };

 	$scope.all = function(val) {
        return val;
 	};

 	$scope.neactive = function(val) {
        return val.complete === true;
 	};
 	
 	$scope.active = function(val) {
        return val.complete === false;
 	};

 	$scope.remove = function(val){ 
	    var index = $scope.tasks.indexOf(val)
	      $scope.tasks.splice(index,1);
          ngStorage.setStorage($window, $scope.tasks);
    };

    $scope.editCheck = function(){
    	ngStorage.setStorage($window, $scope.tasks);
    };

});




