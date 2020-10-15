#!/bin/bash


echo step 1
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

echo step 2
sudo apt-get install -y nodejs

echo step 3
sudo apt install npm

