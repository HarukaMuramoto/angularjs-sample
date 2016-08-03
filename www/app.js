ons.bootstrap()
  .controller('AppController', function($scope) {
    ons.ready(function() {
        console.log("Onsen UI is ready!");
    })
    $scope.memos = [];

    $scope.push = function() {
      $scope.memos.push($scope.memo);
      $scope.memo ="";
    };
  });
