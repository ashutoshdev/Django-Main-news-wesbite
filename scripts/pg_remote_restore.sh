#!/usr/bin/env bash

# Change working directory to script directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

# Tiny protection from dropping production
MY_IP=$(curl 'ipapi.io/ip')
if [ $MY_IP = "138.68.98.193" ]; then
    echo 'Can`t run on production server!'
    exit
fi;

while getopts ":su:p:" opt; do
  case $opt in
    su) USERNAME="$OPTARG"
    ;;
    \?) echo "Invalid option -$OPTARG" >&2
    ;;
  esac
done


# Copy dump from remote server
#scp root@dev.moretvtime.com:/tmp/dev.moretvtime-2018-01-15.backup .

sleep 1

# Drop old DB and restore
psql -U postgres -c "DROP DATABASE moretvtime"
psql -U postgres -c "CREATE DATABASE moretvtime"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE moretvtime TO moretvtime;"

pg_restore -U moretvtime -d moretvtime -v dev.moretvtime.backup