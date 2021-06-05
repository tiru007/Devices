const cosmos = require('@azure/cosmos');
const { CosmosClient } = cosmos;

var endpoint = context.bindings.outputDocument.COSMOS_API_URL;
var key = context.bindings.outputDocument.COSMOS_API_KEY;

const client = new CosmosClient({ endpoint, key });
const container = client.database("Devices").container("Devices");

module.exports = async function (context, req) {
    const id = req.query.id;
    let res;
    try{
        res = await container.item(id).delete();
        context.res = {
            body: {'result': 'success'}
        };
    }catch(err){
        context.res = {
            status: 400,
            body: {'result': 'error'}
        };
    }
}