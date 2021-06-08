exports.handler = (event, context, callback) => {
    let response = {
        statusCode: 200,
        body: "working with Token"
    };
    callback(null, response);
};


// OR ASYNC BELOW


exports.handler = async (event, context) => {
    console.log('event: ', event);
    console.log('context: ', context);
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda! Working with Token Authorizer!'),
    };
    return response;
};