//const fetch = require('node-fetch')

exports.handler = async function(event, context) {
    let text = "";

    /* try {
        const res = await fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
            method: 'GET', 
            headers: {
                "x-rapidapi-key": "AWKeh1OccaAbR24s3PSUbi2NqBEoBEeW",
                "x-rapidapi-host": "quotes15.p.rapidapi.com",
                "useQueryString": true
            }
        });
        text = await res.text();
    } catch(e) {
        text = `Error fetching content: ${e}`;
    } */

    return {
        statusCode: 200,
        body: "HELLO"
    };
}
