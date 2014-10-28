/**
 * Created by Instructor on 28/10/2014.
 */

var mod = angular.module('myApp', []);


mod.controller('DemoCtrl', function DemoCtrl($scope) {

    $scope.person = {name: 'Maurice'};
    console.log('In DemoCtrl')

    setInterval(function () {
        $scope.$apply(function () {
            $scope.now = new Date().toLocaleTimeString();
        });
    }, 1000)



    $scope.isWrong = 'THis is wrong';


    $scope.people=[
        {name:'Rich'},
        {name:'Andy'},
        {name:'Maurice'}

    ]

    $scope.addPerson=function(){
        $scope.people.push({name:'Roland'});
    }
});