#!/usr/bin/env bash
BASE_DIR=$(cd "$(dirname "$0")" && pwd)
cd $BASE_DIR
# python -m http.server 9012
python http_server.py 9012
