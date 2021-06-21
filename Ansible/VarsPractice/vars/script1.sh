#!/usr/bin/env bash
# Huzzah AWS_PROFILE=JEMAWS ansible-playbook newMain.yml
bash
id
ls $TEST

# aws configure --profile=JEMAWS
# export AWS_DEFAULT_PROFILE=JEMAWS
# export AWS_DEFAULT_REGION=us-east-1
# aws s3 ls
# aws s3 ls --profile=JEMAWS --region=us-east-1
# aws s3 ls --profile=JEMAWS

aws cloudformation deploy --template /mnt/c/Users/JeremyMuniak/tutorials/AWS-CF-Project/CFStackAttack/template.yaml --stack-name my-AnsibleStack --capabilities CAPABILITY_NAMED_IAM --region=us-east-1