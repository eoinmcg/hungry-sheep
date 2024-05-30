#!/bin/bash

VER=$(awk -F'"' '/"version": ".+"/{ print $4; exit; }' package.json)
#COMMIT=$(git rev-parse --short=6 HEAD)

FILE="hungry-sheep-${VER}.zip"

rm *.zip
cp -r dist/ HungrySheep/
zip -r $FILE HungrySheep/
rm -rf HungrySheep/

echo -e "\n-----------------\n"
echo "CREATED: ${FILE}"

