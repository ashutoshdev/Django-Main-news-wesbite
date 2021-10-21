#!/usr/bin/env bash

# On server dump:
#psql -U postgres -d moretvtime -c "COPY moretvtime_category TO '/tmp/moretvtime_category'"
#psql -U postgres -d moretvtime -c "COPY moretvtime_article TO '/tmp/moretvtime_article'"
#psql -U postgres -d moretvtime -c "COPY moretvtime_banner TO '/tmp/moretvtime_banner'"
#psql -U postgres -d moretvtime -c "COPY moretvtime_page TO '/tmp/moretvtime_page'"
#psql -U postgres -d moretvtime -c "COPY moretvtime_bannerbutton TO '/tmp/moretvtime_bannerbutton'"
#psql -U postgres -d moretvtime -c "COPY moretvtime_bannerplaceholder TO '/tmp/moretvtime_bannerplaceholder'"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd $DIR
sh pg_remote_restore.sh

cd ../
python3 manage.py migrate

cd $DIR

#for i in moretvtime_category moretvtime_article moretvtime_page; do
#    scp root@dev.moretvtime.com:/tmp/$i .
#    psql -U postgres -d moretvtime -c "DELETE FROM $i"
#    sleep 1
#    psql -U postgres -d moretvtime -c "COPY $i FROM '$DIR/$i'"
#    sleep 1
#done;
