myApp.service('ngStorage', function () {
    var myObj = [];

    this.getStorage = function($scope, $window){
        if ($window.localStorage.hasOwnProperty('myObj')) {
            $scope.tasks = JSON.parse($window.localStorage.getItem('myObj'));
            return $scope.tasks;
        }
    }

    this.setStorage = function($window, tasks){
        $window.localStorage.setItem('myObj', JSON.stringify(tasks));
    }
});