# CloudFormation Project psuedo code


# Lambda function with xray enabled for observability that can list the S3 buckets and the objects within them as a GET response via web api call. 
# 2nd lambda Store this data in a DynamoDB table? 


# In CF declare the resources first
# !Ref the lambdas from an imaginary S3 bucket for now. This will contain the ziped lambdas. 
# Point the API gateway at the lambda that will start the chain of actions







# Potential IDEA: 
# add Xray outside of the logic. 
# List the security groups associated with S3 buckets instead?

