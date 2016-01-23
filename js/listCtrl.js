//List Controller

app.controller('PartnerCtrl', function($scope){
    $scope.lists= [];
    $http.get('apartment.json').then(function(response) {
        $scope.lists =response.data.brands;
    });
});
