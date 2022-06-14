FROM node:16.15.1

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

# Amplify CLI
RUN npm install -g @aws-amplify/cli

WORKDIR /usr/src/app