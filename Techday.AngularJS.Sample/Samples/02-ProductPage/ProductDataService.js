////// Real, Call Api
app.service('ProductDataService', function ($q, $http) {
    var self = this;

    self.getProducts = function () {
        var defer = $q.defer();
        var url = '/api/Products';

        $http.get(url)
            .success(function (result) {
                defer.resolve(result);
            })
            .error(defer.reject);

        return defer.promise;
    }
});