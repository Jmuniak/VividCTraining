# CF Stack deployment


***NEXT***   ***NEXT***   ***NEXT***
# need use the mazon.aws.cloudformation module. with boto, python, aws sso permissions ***Needs work***
# provide a 'templated src cloudformation.yml' and a 'dest cloudformation.yml' so that ansible can fill in any blanks to protect sensitive information and then we execute 
# CLI CF Deploy script. `aws cloudformation deploy --template /mnt/c/Users/JeremyMuniak/tutorials/AWS-CF-Project/CFStackAttack/template.yaml --stack-name my-new-stackCLI --capabilities CAPABILITY_NAMED_IAM`




<!-- option 1/3: "export env vars (shortcuts to credentials, shell session only)", need to run aws configure and pass those credentials values in with a named profile: "$ aws configure --profile=JeremyTest" and copy paste from aws credentials, then you can run aws commands from playbooks -->
<!-- option 2: "copy env to ~/.aws/credentials (actually holds credentials)", "$ vim ~/.aws/credentials" paste and add a profile name, export the named profile "$ export AWS_PROFILE=JEMAWS", then you can run aws commands from playbooks without the --profile flag or use that flag to use a specific profile. -->
