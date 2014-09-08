var app = angular.module('app', ['ngResource']);

app.controller('BlogController', BlogController);

function BlogController($timeout, BlogService) {
    var self = this;

    self.editing = false;
    self.blog = { Id: 0, Title: '', Body: '' };

    self.blogs = [];
    BlogService.query().$promise
        .then(function (blogs) {
            $timeout(function () {
                self.blogs = blogs;
            }, 0);
        });

    self.save = save;
    self.selectBlog = selectBlog;
    self.newBlog = newBlog;
    self.deleteBlog = deleteBlog;

    //////
    function newBlog() {
        self.blog = { Id: 0, Title: '', Body: '' }
        self.editing = false;
    }

    function selectBlog(blog) {
        self.blog = blog;
        self.editing = true;
    }

    function save(blog) {
        if (blog.Id) {
            BlogService.update({ id: blog.Id }, blog);
        } else {
            BlogService.create(blog);

            self.blogs.push(blog);
        }

        self.newBlog();
    }

    function deleteBlog(index, blog) {
        BlogService.delete(blog);

        self.blogs.splice(index, 1);
    }
}

