#/bin/bash


if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
else
  echo ".env FILE을 만들어주세요."
  exit 0
fi

#docker-compose build build
docker tag $IMAGE:$TAG cheolcheol/$IMAGE:$TAG
docker tag $IMAGE:$TAG cheolcheol/$IMAGE:latest

docker push cheolcheol/$IMAGE:$TAG
docker push cheolcheol/$IMAGE:latest
