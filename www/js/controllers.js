angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    marketcloud.users.authenticate($scope.loginData.username, $scope.loginData.password,
      function (err, data) {
          if (err == null) {
              $scope.UserInfo = data;
          }
          else {
              $scope.errMsg = err.message;
          }
    //data.user contains user data
     })
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };


    // Form data for the register modal
  $scope.regData = {};

    // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
      scope: $scope
  }).then(function (modal) {
      $scope.modal1 = modal;
  });

    // Triggered in the login modal to close it
  $scope.closereg = function () {
      $scope.modal1.hide();
  };

    // Open the login modal
  $scope.reg = function () {
      $scope.modal1.show();
  };

    // Perform the login action when the user submits the login form
  $scope.doreg = function () {
      console.log('Doing login', $scope.regData);
      marketcloud.users.create({
          name: $scope.regData.fname,
          email: $scope.regData.email,
          password: $scope.regData.password
      }, function (err, user) {
          if (err === null)
          {
              alert("User Created Successfully");
          }
      })
      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
          $scope.closereg();
      }, 1000);
  };

})

.controller('ProductsCtrl', function ($scope, products) {
    $scope.products = products;
})

.controller('ProductCtrl', function ($scope, product) {
    $scope.product = product;
});
