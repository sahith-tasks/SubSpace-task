const axios = require('axios');
const lodash = require('lodash');

const fetchData = async (req, res, next) => {
    try {
        const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
            headers: { 'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6' },
        });
        req.data = response.data;
        next();
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        });
    }
};

module.exports = fetchData;
