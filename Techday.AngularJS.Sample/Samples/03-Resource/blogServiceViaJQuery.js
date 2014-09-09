app.service('BlogService', BlogService);

function BlogService() {
    var self = this;

    self.apiUrl = '/api/Blogs/';

    self.query = query;
    self.create = save;
    self.update = update;
    self.delete = remove;

    //////// 
    function query() {
        var blogs = $.ajax({
            url: self.apiUrl,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
        });

        return {
            $promise: blogs
        };
    }

    function save(blog) {
        $.ajax({            
            url: self.apiUrl,            
            type: 'POST',
            contentType: 'application/json; charset=utf-8',            
            data: JSON.stringify(blog)
        });
    }

    function update(id, blog) {
        var data = $.extend({}, id, blog);

        return $.ajax({
            url: self.apiUrl + id.id,
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(blog)
        })
    }

    function remove(blog) {
        $.ajax({
            url: self.apiUrl + blog.Id,
            type: 'DELETE',
            contentType: 'application/json; charset=utf-8'
        });
    };
}