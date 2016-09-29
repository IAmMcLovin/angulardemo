angular.module('myApp')
    .factory('ProductService', function ProductServiceFactory($http) {
    return {
        get: function() {
            return $http.get('/data/products.json');
        }
    };
})