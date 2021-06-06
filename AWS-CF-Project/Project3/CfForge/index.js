const whizlabsXRay = require('aws-xray-sdk-core');
const whizlabsAWS = whizlabsXRay.captureAWS(require('aws-sdk'));
const whizlabs3 = new whizlabsAWS.S3();

exports.handler = function (event, context, callback) {
  return whizlabs3.listBuckets().promise();
  // ListObjectsV2 to list the objects in a bucket
};

// console.log('Loading function');

// exports.handler = async (event, context) => {
//     //console.log('Received event:', JSON.stringify(event, null, 2));
//     console.log('value1 =', event.key1);
//     console.log('value2 =', event.key2);
//     console.log('value3 =', event.key3);
//     return event.key1;  // Echo back the first key value
//     // throw new Error('Something went wrong');
// };



