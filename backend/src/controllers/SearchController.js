const axios = require('axios');

module.exports = {
    async index(req, res) {
        return res.json({
            "message": "Hello World"
        });
    }
};