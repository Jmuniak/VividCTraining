exports.handler = function (event, context, callback) {
  // get this token variable via the authorizationToken property on the event.
  var token = event.authorizationToken;

  //"allow" this could be whatever value of token is valid for the use case, 
  // doesn't have to be allow, but it is in this case.
  switch (token) {
    case 'allow':
      callback(null, whizlabPolicy('UserA', 'Allow', event.methodArn));
      // the call back needs a 'response' formulated.
      // UserA is the principalId
      // the action or effect is Allow
      // and the resource we target is the methodARN property on the event
      // methodARN: when a request is made to an API call, remember you are making a call to a method in the API
      // so the methodARN is what is also going to be present in the event object.
      break;
    default: // any token value other than allow
      callback("Error: Invalid Token"); // return a 500 Invalid response}
  };

  // Second function to formulate the response.  
  var whizlabPolicy = function (principalId, effect, resource) {
    var authResponse = {};

    authResponse.principalId = principalId; // set to UserA in this respose. - per the principalId param provided above.
    if (effect && resource) { // if both allow and resource are valid, formulate a response with the following.
      var whizlabpolicyDocument = {}; // required for the response
      whizlabpolicyDocument.Version = '2012-10-17'; // set the version
      whizlabpolicyDocument.Statement = []; // set of Statements is required for the WhizlabPolicyDocument

      var whizlabstatement = {}; // defining the Statements
      whizlabstatement.Action = 'execute-api:Invoke';
      whizlabstatement.Effect = effect; // set to 'Allow' in this respose - per effect param above
      whizlabstatement.Resource = resource; // event.methodARN - per resource param above
      whizlabpolicyDocument.Statement[0] = whizlabstatement; // set the whizlabpolicyDocument
      authResponse.policyDocument = whizlabpolicyDocument; // load the response var with all the data
    };
    return authResponse; // send the response back to the API Gateway
  };
};