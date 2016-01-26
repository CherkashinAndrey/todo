
var myApp=angular.module('myApp',[]);

myApp.controller('Controller', function($scope, $window, ngStorage) {
 	$scope.tasks = [];

    if ($window.localStorage.hasOwnProperty('myObj')) {
        $scope.tasks = JSON.parse($window.localStorage.getItem('myObj'));
    }

    $scope.clearLocalStor = function() {
        $window.localStorage.clear();
    }

    $scope.dblClick = function(task) {
        task.toggle = true;
    }

 	$scope.addTask = function(newTask) {
        if(event.keyCode == 13){
            $scope.tasks.push({zadacha:newTask.zadacha, complete: false, toggle:false});
            $scope.newTask = {};
            ngStorage.getStorage($window, $scope.tasks);
        }
 	}

    $scope.editOnEnter = function(task){
        if(event.keyCode == 13 && task.zadacha){
            task.toggle = false;
            ngStorage.getStorage($window, $scope.tasks);
        }
    };

 	$scope.all = function(val) {
        return val;
 	}

 	$scope.neactive = function(val) {
        return val.complete === true;
 	}
 	
 	$scope.active = function(val) {
        return val.complete === false;
 	}

 	$scope.remove = function(val){ 
	    var index = $scope.tasks.indexOf(val)
	      $scope.tasks.splice(index,1);
          ngStorage.getStorage($window, $scope.tasks);
    }

    $scope.editCheck = function(){
    	ngStorage.getStorage($window, $scope.tasks);
    };

});

myApp.service('ngStorage', function () {
    var myObj = [];

    this.getStorage = function($window, tasks){
        $window.localStorage.setItem('myObj', JSON.stringify(tasks));
    }
});


