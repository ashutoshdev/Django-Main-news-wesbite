### Nginx

Folder for root verification files
```
templates/ads/root_folder
```



### Create DB
```
psql postgres
## or   psql -U postgres

CREATE DATABASE moretvtime;
CREATE USER moretvtime WITH ENCRYPTED PASSWORD 'moretvtimemoretvtime';
GRANT ALL PRIVILEGES ON DATABASE moretvtime TO moretvtime;

```
or 
```
sudo -u root createuser moretvtime
sudo -u root createdb moretvtime
psql --host=localhost --port=5432 --username=moretvtime 
python3 manage.py migrate
```

### Supervisor conf
```conf
[program:moretvtime]
directory=/home/svr/moretvtime
command=/usr/local/bin/gunicorn -w 4 django_server.wsgi:application -b 0.0.0.0:8007 --timeout 200 --log-level DEBUG
autostart=true
autorestart=true
user=root
redirect_stderr=true
stderr_logfile=/var/log/moretvtime/moretvtime.err.log
stdout_logfile=/var/log/moretvtime/moretvtime.out.log
```

####Statistics
```
    select date, provider, count(provider) 
    from (
        select DATE(date) as date, provider 
          from moretvtime_tracking 
         where sent=true) as data 
    group by date, provider 
    order by date desc;
 ```
 
