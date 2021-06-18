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

# todo
# break up alias into the separate shut down Dirs and git pushes, maybe with roles? or separate playbooks and then an alias that runs them both?
# AshutDown='cd /mnt/c/Users/JeremyMuniak/tutorials/Ansible/shutdownV1'
# OshutDown='cd /mnt/c/Users/JeremyMuniak/Desktop/CodeVaultV1'
# FullshutDown='AshutDown && 0shutDown && ansible-playbook main.yml -v'