const lodash = require('lodash');

exports.analyzeData = async (req, res) => {
    try {
        const blogs = req.data.blogs;
        const totalBlogs = blogs.length;
        const longestTitle = lodash.maxBy(blogs, 'title.length');
        const privacyBlogs = lodash.filter(blogs, (blog) => {
            if (blog.title.toLowerCase().includes('privacy'))
                return blog;
        });
        const uniqueTitledBlogs = lodash.uniqBy(blogs, 'title');
        const uniqueTitles = lodash.map(uniqueTitledBlogs, 'title');
        res.json({
            totalBlogs,
            longestTitle,
            privacyBlogsCount: privacyBlogs.length,
            uniqueTitles,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        });
    }
};

exports.searchBlog = lodash.memoize(async (req, res) => {
    try {
        const blogs = req.data.blogs;
        const query = req.query.query;
        const results = lodash.filter(blogs, (blog) => {
            if (blog.title.toLowerCase().includes(query.toLowerCase()))
                return blog;
        });
        res.json({
            results
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        });
    }
});