exports.handler = function (event, context, callback) {
    const AWS = require("aws-sdk");
    let docClient = new AWS.DynamoDB.DocumentClient();
    let id;

    // first we query the queryStringParameters from the event object.
    // here we are looking to pass a query string in which the query string is equal to pID, and then the relevant value
    if (event.queryStringParameters && event.queryStringParameters.pID) {
        console.log(event.queryStringParameters.pID);
        // set our id variable to this relevant pID
        id = event.queryStringParameters.pID;
    }
    // in AWS Console > AWS API Gateway > 
    // Method execution > enable: Use Lambda Proxy integration.
    // when you enable this setting: whatever you send from the API gateway, in terms of the the post body request or query string parameters
    // that will be available in our lambda function.

    const table = 'whizlabcustomer';

    let params = {
        TableName: table,
        Key: {
            "ID": "1"
        }
    };

    docClient.get(params, function (err, data) {
        if (err) {
            console.log("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            let response = {
                statusCode: 200,
                body: JSON.stringify(data)
            };
            console.log("response: " + JSON.stringify(response));
            callback(null, response);
        };
    });
};