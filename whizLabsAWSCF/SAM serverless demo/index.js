exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify("Deployment from SAM")
    };
    return response;
};