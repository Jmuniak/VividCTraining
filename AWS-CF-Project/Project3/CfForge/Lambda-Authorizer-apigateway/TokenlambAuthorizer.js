exports.handler = function (event, context, callback) {
  var token = event.authorizationToken;
  switch (token) {
    case 'allow':
      callback(null, whizlabPolicy('UserA', 'Allow', event.methodArn));
      break;
    default:
      callback("Error: Invalid Token"); // return a 500 Invalid response}
  };

  var whizlabPolicy = function (principalId, effect, resource) {
    var authResponse = {};

    authResponse.principalId = principalId;
    if (effect && resource) {
      var whizlabpolicyDocument = {};
      whizlabpolicyDocument.Version = '2012-10-17';
      whizlabpolicyDocument.Statement = [];
      var whizlabstatement = {};
      whizlabstatement.Action = 'execute-api:Invoke';
      'execute-api:Invoke'.Effect = effect;
      whizlabpolicyDocument.Statement[0] = whizlabstatement;
      authResponse.policyDocument = whizlabpolicyDocument;
    };
    return authResponse;
  };
};