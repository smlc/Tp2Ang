/**
 * Created by mars on 27/10/16.
 */
'use strict'
angular.module('BookApp').controller('NavCtrl',['$scope', function ($scope) {
    var _state = 'list';

    $scope.setState = function (state) {
        _state = state;
    }

    $scope.isState = function (state) {
        return _state === state;
    }

}]);
