const axios = require('axios');

class ApiController {
    static async news(req, res, next) {
        try {
            const getNews = await axios({
                method: 'GET',
                url: `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${process.env.CURRENT_API_KEY}&category=technology`
            });
            
            const latestNews = getNews.data.news;
            res.status(200).json({latestNews});
        } catch(err) {
            next(err);
        }
    }
}

module.exports = ApiController;