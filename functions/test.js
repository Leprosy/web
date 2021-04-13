const https = require('https');

exports.handler = async function(event, context) {
    let text = "";

    try {
         text = https.request("https://quotes15.p.rapidapi.com/quotes/random/", {
            method: 'GET', 
            headers: {
                "x-rapidapi-key": "AWKeh1OccaAbR24s3PSUbi2NqBEoBEeW",
                "x-rapidapi-host": "quotes15.p.rapidapi.com",
                "useQueryString": true
            }
        });
    } catch(e) {
        text = `Error fetching content: ${e}`;
    }

    return {
        statusCode: 200,
        body: text
    };
}
