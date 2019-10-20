const axios = require('axios');

module.exports = {
    async index(req, res) {
        const { score, sort, limit, tag } = req.body;       
        const response = await axios.get(`https://api.stackexchange.com/2.2/questions?pagesize=${limit}&order=${sort}&min=${score}&sort=votes&tagged=${tag}&site=stackoverflow`);
        const { items } = response.data;
        
        return res.json(items);        
    }
};