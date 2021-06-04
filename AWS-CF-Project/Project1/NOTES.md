
1. security group needed before the instance can be created
2. EC2 instance / web server created after the security group is in place.
    2.a. You can use DependsOn to make a application server wait to be created until the database has also been created. 




# Lambda function with xray enabled for observability that can list the S3 buckets and the objects within them as a GET response via web api call.
# 2nd lambda Store this data in a DynamoDB table? 


# In CF declare the resources first
# !Ref the lambdas from an imaginary S3 bucket for now. This will contain the ziped lambdas. 
# Point the API gateway at the lambda that will start the chain of actions
#   revisit stages 




# Look Into Policies and Principals in CF Templates  

# CF Parameters have been replaced by Ansible variables.

# Potential IDEA: 
# add Xray outside of the logic. 
# List the bucket policies associated with S3 buckets instead?



# S3 events. Conceptually ( manually uplaod a file, trigger an event that runs a lambda and lists the objects in the S3 bucket or change the file name something simple ) 
# Dynamo Streams is another que service.

##### LATER #####
# Event bridge cron jobs
# play with kineses streams, que other actions like run another lambda or push to S3
# dig into versioning more, not critical now but a good learning layer to add later. Blue green deployment testing. Running functions similtaneiously. 


# SNS triggered lambda that sends an email.