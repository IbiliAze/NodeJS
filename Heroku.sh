#!/bin/bash


[ Heroku ]

heroku login

heroku keys:add



[ Projects ]

heroku create weatherapi-foribi

heroku destroy --confirm weatherapi-foribi

git remote

git push heroku master