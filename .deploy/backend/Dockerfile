# multi-stage-build
FROM node:14.15 as build

LABEL tag=cheolcheol/nx-backend
WORKDIR /usr/src/app

RUN npm install -g nx@12.10.0
COPY package.json ./
COPY yarn.lock ./

RUN yarn install
COPY . .
RUN nx build backend --prod
RUN yarn install --production

# multi-stage-build
FROM node:14.15

ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist/apps/backend ./

CMD [ "node", "main.js" ]
