const axios = require('axios');

module.exports = {
    async index(req, res) {
        const { score, sort, limit, tag } = req.body;       
        const response = await axios.get(`https://api.stackexchange.com/2.2/questions?pagesize=${limit}&order=${sort}&min=${score}&sort=votes&tagged=${tag}&site=stackoverflow`);
        const { items } = response.data;
        var items_array = items.map(function (array) {
            return {
                title: array.title,
                link: array.link,
                score: array.score,
                owner: array.owner["display_name"],
                profile_imageowner: array.owner["profile_image"],     
                accept_rate: array.owner["accept_rate"],     
                user_id: array.owner["user_id"],
            } 
        });
        return res.json(items_array);        
    }
};