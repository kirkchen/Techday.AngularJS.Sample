app.service('BlogService', BlogService);

function BlogService($resource) {
    var self = this;

    var Blog = $resource(
               "/api/Blogs/:Id",
               { Id: "@Id" },
               { "update": { method: "PUT" } }
          );

    self.query = Blog.query;
    self.create = Blog.save;
    self.update = Blog.update;
    self.delete = Blog.delete;
}

