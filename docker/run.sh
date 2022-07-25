#!/bin/bash

if mutagen-compose version &> /dev/null
then
    mutagen-compose -f ./mutagen-compose.yml up --build
    exit
else
  docker-compose up --build
fi
