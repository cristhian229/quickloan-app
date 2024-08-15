<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

### ¿Qué propósito cumple el archivo main.ts en un proyecto NestJS y por qué es crucial en la configuración inicial? 
se configura y arranca el servidor de la aplicacion, Es el archivo que conecta todos los componentes antes de que la aplicación comience a procesar solicitudes.

se encargaría de arrancar el servidor que escuche en un puerto específico (por ejemplo, 3000) y de aplicar configuraciones como CORS o middleware de seguridad

### ¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?
para poder añadir diferentes funcionalidades sin afectar el codigo

### ¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?
La modularidad permite la expansion y escalabilidad de la aplicación de manera mas sencilla

### ¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?
Si un decorador como @Get(), @Post(), @Put(), @Delete(), etc., está mal colocado o mal configurado, las rutas no se registrarán correctamente en el enrutador de NestJS. las solicitudes no seran manejadas por los metodos esperados y se generaran errores

### ¿Por qué es importante manejar rutas dinámicas (por ejemplo, @Get(':id')) en aplicaciones que interactúan con bases de datos?
es importante que las rutas dinamicas permitan acceder a recursos especificos basados en identificadores unicos como el @get :id

### ¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?
Separar la lógica de negocio en servicios permite que los controladores se enfoquen en manejar las solicitudes y respuestas, mientras que los servicios se centran en la lógica de la aplicación. Esto resulta en un código más limpio y mantenible.

### ¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?
es crucial por la seguridad, se evitan inyecciones de SQL y se mantiene la integridad de los datos

### ¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?
Si un decorador como @Body(), @Param(), o @Query() está mal colocado, el controlador puede no recibir los datos correctos, lo que lleva a errores en el procesamiento de solicitudes o respuestas incorrectas.

### ¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?
impacta en la experiencia de usuario con el manejo adecuado de los mensajes de error claros, e impacta en la seguridad de la aplicacion

### ¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?
hay uniformidad en el manejo de errores, al separa las capas, se separan la logica de manejo de errores de la logica de negocios y las solicitudes, mejora la seguridad y el mantenimiento y la escabilidad
