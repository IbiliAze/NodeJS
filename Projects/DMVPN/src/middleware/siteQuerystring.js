const Site = require('../models/site');


const siteQuerystring = async (request, response, next) => {
    try {
        if (request.query) {
            const queries = Object.keys(request.query);
            if (queries.includes('limit')) {
                console.log(request.query.limit);
                queries.splice(3, 0);
            };
            
            const limit = request.query.limit;

            console.log(queries)
            const allowedQueries = ['description', 'type', 'department', 'siteName', 'floor', 'createdAt', 'updatedAt'];


            const isValidQuery = queries.every((query) => allowedQueries.includes(query));
            if (!isValidQuery){
                console.error(`Invalid query: ${queries}`)
                return response.status(400).send({ error: `Invalid query` })
            };
            const sites = await Site.find({
                orgId: request.org._id,
                ...request.query
            }).limit(limit);
            console.log(`Sites fetched successfully`);
            return response.status(200).send(sites);
        };
    } catch (error) {
        console.error(error);
        response.status(500).send({
            error: error
        });
    };
};


module.exports = siteQuerystring;