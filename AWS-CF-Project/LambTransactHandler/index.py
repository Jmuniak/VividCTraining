import json

print("Loading Function")


def lambda_handler(event, context):

    # https://www.youtube.com/watch?v=uFsaiEhr1zs
    # 1. parse query string parameters and then print them out to see whats happening.
    # we will pass in 3 params. Transaction ID, Transaction Type, and Amount
    transactionId = event['queryStringParameters']['transactionId']
    transactionType = event['queryStringParameters']['types']
    transactionAmount = event['queryStringParameters']['amount']

    print('transactionId = ' + transactionId)
    print('transactionType = ' + transactionType)
    print('transactionAmount = ' + transactionAmount)

    # 2. Construct the body of the response object
    transactionResponse = {}
    transactionResponse['transactionId'] = transactionId
    transactionResponse['types'] = transactionType
    transactionResponse['amount'] = transactionAmount
    transactionResponse['message'] = "hello from lambda land!"

    # 3. Construct the http response object
    responseObject = {}
    responseObject['statusCode'] = 200
    responseObject['headers'] = {}
    responseObject['headers']['Content-Type'] = 'application/json'
    responseObject['body'] = json.dumps(transactionResponse)

    # 4. Return the response object
    return responseObject

    # 5. Add this object to the test event on your lambda function
#     {
#   "queryStringParameters": {
#     "transactionId": "1",
#     "types": "PURCHASE",
#     "amount": "500"
#   }
# }

    # 6. Configure the API through the console
    # new Rest API "TransactionAPIS"
    # Create Resource "transactions"
    # Create a Get method "using lambda proxy and select the TransactionProcessor function"
    # deploy the API to a new stage "test"
    # find the API end point
