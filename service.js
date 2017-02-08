// angular.module('userProfiles').service('mainService', function ($http) {



//     this.getUsers = function () {
//         return $http({
//             method: 'GET',
//             url: 'https://regres.in/api/users?page=1'
//         });
//     };


// });

angular.module('userProfiles').service('mainService', function($http) {
  this.getUsers = function(pageNum) {
    return $http({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=' + pageNum
    }).then(function(results){
        if(results.status === 200){
          return   results.data;
        }else{
            return "Error! " + results.status;
        }
    })
  }
});