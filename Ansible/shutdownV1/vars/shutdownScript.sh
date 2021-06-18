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


# alias
# AshutDown='cd /mnt/c/Users/JeremyMuniak/tutorials/Ansible/shutdownV1'
# OshutDown='AshutDown && ansible-playbook main.yml -v'