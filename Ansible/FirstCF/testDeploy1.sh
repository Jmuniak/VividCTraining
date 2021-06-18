#!/usr/bin/env bash
bash
aws cloudformation deploy --template /mnt/c/Users/JeremyMuniak/tutorials/AWS-CF-Project/CFStackAttack/template.yaml --stack-name my-new-stackCLI --capabilities CAPABILITY_NAMED_IAM


# AshutDown='cd /mnt/c/Users/JeremyMuniak/tutorials/Ansible/shutdownV1'
# OshutDown='AshutDown && ansible-playbook main.yml -v'