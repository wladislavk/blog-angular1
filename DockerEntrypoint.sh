#!/bin/sh

set -e

yarn install

/usr/bin/sudo /usr/local/bin/apache2-foreground
