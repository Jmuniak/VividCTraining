#!/usr/bin/env bash
bash
date
# Obsidian Vault
cd /mnt/c/Users/JeremyMuniak/Desktop/CodeVaultV1 || exit
ls
git add .
git commit -m "Thank you Ansible Shudown Playbook"
git push
# Tutorials
cd /mnt/c/Users/JeremyMuniak/tutorials/ || exit
ls
git add .
git commit -m "Thank you Ansible Shudown Playbook"
git push

# Play 1
# cd /mnt/c/Users/JeremyMuniak/Desktop/CodeVaultV1
# git add .
# git commit -m "Thank you Ansible Shutdown Playbook"
##### git push, password needs to be provided ####
# Play 2
# cd /mnt/c/Users/JeremyMuniak/tutorials/
# git add .
# etc...
# Play 3?
# cd /mnt/c/Users/JeremyMuniak/Code/jeremy-christian-project
# git add .
# etc...

# alias
# AshutDown='cd /mnt/c/Users/JeremyMuniak/tutorials/Ansible/shutdownV1'
# OshutDown='AshutDown && ansible-playbook main.yml -v'