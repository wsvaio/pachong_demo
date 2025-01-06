FROM node:alpine AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build


FROM node:alpine AS prod
WORKDIR /app

RUN apk update && apk add tzdata
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' > /etc/timezone

COPY --from=build /app/.output .
EXPOSE 7400

CMD ["node", "server/index.mjs"]




