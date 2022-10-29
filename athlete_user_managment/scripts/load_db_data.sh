#!/usr/bin/bash

psql -h localhost -p 5432 -U postgres -d sportapp -f init_db.sql
