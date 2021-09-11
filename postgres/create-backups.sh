#!/bin/sh

name="$POSTGRES_USER"
timestamp=`date '+%Y_%m_%d_%H'`
filename="./postgres/backups/$timestamp.gz"
pg_dumpall -U $name | gzip > "$filename"
