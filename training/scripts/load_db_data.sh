#!/usr/bin/bash

psql -h localhost -p 5432 -U postgres -d sportapp_training -f init_db.sql
