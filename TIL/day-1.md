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

## 섹션 8. 의존성 주입, 제어의 역전

**의존성 주입(Dependency Injection)** <br/>
`객체 내에서 다른 객체를 직접 생성하는 전통적인 방식과 달리, 생성자 등을 통해 외부에서 필요한 객체를 받아오는 디자인 패턴` <br/>
class A, B 가 있고 A 에서 B 를 사용하려할 때 <br/>
A 블록 내에서 생성하지 않고 어딘가 외부에서 생성한 B 인스턴스를 <br/>
construtor(instance: B) 처럼 넣어주도록 정의하는 것 = 주입

```js
class A {
  constructor(instance: B)
}
```

- A 는 B 에 의존성을 갖고 있다.
- B 의 인스턴스는 A가 생성될 때 주입된다

**제어의 역전(Inversion of Control)** <br/>
`NestJS에서 프레임워크가 객체의 생성, 관리, 주입 등의 '제어'를 대신 수행하는 방식`
주입할 instance 의 생성/폐기에 개발자가 전혀 신경쓸 필요없이 기능에만 집중할 수 있게 <br/>
NestJS IoC Container 에서 알아서 생성/폐기 주입해준다

**프로바이더(Provider)** <br/>
`NestJS에서 @Injectable() 데코레이터가 붙어있어 IoC 컨테이너에 의해 관리되고 다른 컴포넌트에 의존성으로 주입될 수 있는 클래스들` <br/>
생성한 클래스를 '프로바이더'로 사용하려면?

1. {name}.service.ts 에서 class 위에 @Injectable() 을 입력해야 한다
2. {name}.module.ts 에서 providers: [] 안에 class 명을 입력해야 한다.

**모듈(Module)** <br/>
`NestJS 애플리케이션의 구조를 조직화하고, 컨트롤러와 프로바이더를 등록하여 IoC 컨테이너가 인식하도록 만드는 단위`

app.module.ts 에서 imports 는 다른 모듈을 불러올 때 사용

main.ts 에서 서버가 시작되고
AppModule 을 통해 확장해나가는구나~

---
