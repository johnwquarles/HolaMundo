angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {

  var language_table = {
    "English" : "en",
    "Spanish" : "es",
    "French" : "fr",
    "Albanian" : "sq",
    "Chinese" : "zh",
    "German" : "de",
    "Greek" : "el",
    "Japanese" : "ja",
    "Russian" : "ru",
    "Thai" : "th"
  }

  $scope.api_call = function(){
    $scope.url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20150710T143349Z.32ec879cf3d440f6.47a6650e41f0545ddef44afd94a20b8715ace660&lang=en-" + language_table[$scope.language] + "&text=" + $scope.query;
    $http.get($scope.url).success(function(data){
      $scope.data_object = data;
    })
    .error(function(data) {
      $scope.error_data = data;
    });
  }

})
