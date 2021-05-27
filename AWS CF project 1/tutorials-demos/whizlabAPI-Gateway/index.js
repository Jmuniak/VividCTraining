exports.handler = function (event, context, callback) {
    const AWS = require("aws-sdk");
    let docClient = new AWS.DynamoDB.DocumentClient();
    const table = "whizlabcustomer";

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
        };
    });
};