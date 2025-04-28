var app = angular.module("EduFreelanceApp", []);

app.controller("DashboardController", function($scope) {
    $scope.currentSection = 'home';

    $scope.showSection = function(section) {
        $scope.currentSection = section;
    };

    $scope.scheduleClass = function() {
        alert("Class scheduled successfully!");
    };

    $scope.bookTutor = function() {
        alert("Tutor booking successful!");
    };

    $scope.downloadMaterials = function() {
        alert("Study materials downloaded!");
    };
});




    