const whizlabsXRay = require('aws-xray-sdk-core')
const whizlabsAWS = whizlabsXRay.captureAWS(require('aws-sdk'))
const whizlabs3 = new whizlabsAWS.S3()

exports.handler = function(event, context, callback){
  return whizlabs3.listBuckets().promise()
}