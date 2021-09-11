# pull official base image
FROM postgres:12.2-alpine

RUN crontab -l | { cat; echo "0 */12 * * * /bin/sh ./postgres/create-backups.sh"; } | crontab -

# run create.sql on init
ADD create.sql /docker-entrypoint-initdb.d
