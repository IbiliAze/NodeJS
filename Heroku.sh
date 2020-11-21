#!/bin/bash


[ Heroku ]

heroku login

heroku keys:add

heroku logs --tail



[ Projects ]

heroku create weatherapi-foribi

heroku destroy --confirm weatherapi-foribi

git remote

git push heroku master



[ Environment Variables ]

heroku config:set key=value

heroku config:unset key=value

heroku config #see the environment variables