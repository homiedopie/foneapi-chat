FROM foneapi-test-common

EXPOSE 8080

CMD ./scripts/wait-for.sh db:${MONGO_PORT} -- npm run start-server