# base 이미지 설정
FROM node:18.4.0-alpine

# 작업 디렉토리 설정
WORKDIR /frontend

# 소스 코드 복사
COPY . /frontend
COPY package.json yarn.lock ./

# 앱 종속성 설치
# RUN yarn --ignore-platform
RUN yarn

COPY . .

# 앱 빌드
CMD ["yarn", "start"]