//// Fake, For Test
app.service('ProductDataService', function ($q) {
    var self = this;

    self.getProducts = function () {

        var defer = $q.defer();

        var data = [];
        for (var i = 0; i < 10; i++) {
            var item = {
                image: 'http://placehold.it/200x200',
                title: '產品' + i,
                desc: ' 產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容產品內容'
            }

            data.push(item);
        }

        defer.resolve(data);

        return defer.promise;
    }
});