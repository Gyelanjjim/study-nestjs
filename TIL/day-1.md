# study-nestjs

nestjs 학습하기

## 섹션1. 세팅하기

- nvm 설치 & ...

  ```
  #$ node -v => v22.16.0
  #$ npm -v => 10.9.2

  $ corepack enable
  # 확인: yarn -v => 1.22.22

  $ npm i -g @nestjs/cli
  # 확인: nest -v => 11.0.7
  ```

- yarn add -> npm install --save로 변경하면 됩니다.

## 섹션2. nest js 맛보기

- 프로젝트 시작하기

  ```bash
  # 새 폴더로 생성 시
  $ nest new {proj_name}

  # 현재 폴더에서 생성 시
  $ nest new .
  ```

- 실행하기
  ```
  $ yarn start:dev
  ```

## 섹션5. Nestjs 요청 라이프사이클

![](./req-life-cycle.png)

---

- 모듈 생성하기
  ```bash
  $ nest g resource
  #✔ What name would you like to use for this resource (plural, e.g., "users")? posts
  #✔ What transport layer do you use? REST API
  #✔ Would you like to generate CRUD entry points? No
  ```

## 섹션 6.

[Built-in HTTP exceptions](https://docs.nestjs.com/exception-filters#built-in-http-exceptions)

```
BadRequestException
UnauthorizedException
NotFoundException
ForbiddenException
NotAcceptableException
RequestTimeoutException
ConflictException
GoneException
HttpVersionNotSupportedException
PayloadTooLargeException
UnsupportedMediaTypeException
UnprocessableEntityException
InternalServerErrorException
NotImplementedException
ImATeapotException
MethodNotAllowedException
BadGatewayException
ServiceUnavailableException
GatewayTimeoutException
PreconditionFailedException
```
