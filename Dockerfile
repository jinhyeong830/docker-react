#### [step1]
# node 18버전 환경을 builder라는 별칭사용함(alias)
FROM node:18-alpine AS builder

# 작업 공간 /app
WORKDIR /app

# 현재 폴더에 있는 모든 하위 파일들을 /app 컨테이너에 복사
COPY . .

# 컨테이너에 package.json이 있으므로 해당 파일을 보고 의존성 설치
RUN npm install

# 의존성 설치 후 빌드를 통해 정적파일 생성
RUN npm run build

#### [step2]
# nginx 이미지로부터 시작되는 정적파일 배포
FROM nginx:alpine

# builder는 1에서 지어줬던 별칭, build 파일을 ngin/html 로 복사함함
COPY --from=builder /app/build /usr/share/nginx/html

# 80번 포트 외부에 노출
EXPOSE 80

# nginx 서버 시작
CMD ["nginx", "-g", "daemon off;"]