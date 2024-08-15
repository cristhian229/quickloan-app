import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpErrorFilter } from './common/filters/error.handler';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new HttpErrorFilter())

  await app.listen(3000);
}
bootstrap();



// ¿Qué propósito cumple el archivo main.ts en un proyecto NestJS y por qué es crucial en la configuración inicial? 
// se configura y arranca el servidor de la aplicacion, Es el archivo que conecta todos los componentes antes de que la aplicación comience a procesar solicitudes.
// se encargaría de arrancar el servidor que escuche en un puerto específico (por ejemplo, 3000) y de aplicar configuraciones como CORS o middleware de seguridad

// ¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?
// para poder añadir diferentes funcionalidades sin afectar el codigo

// ¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?
// La modularidad permite la expansion y escalabilidad de la aplicación de manera mas sencilla



// ¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?

// Si un decorador como @Get(), @Post(), @Put(), @Delete(), etc., está mal colocado o mal configurado, las rutas no se registrarán correctamente en el enrutador de NestJS. las solicitudes no seran manejadas por los metodos esperados y se generaran errores


// ¿Por qué es importante manejar rutas dinámicas (por ejemplo, @Get(':id')) en aplicaciones que interactúan con bases de datos?

// es importante que las rutas dinamicas permitan acceder a recursos especificos basados en identificadores unicos como el @get :id


// ¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?

// Separar la lógica de negocio en servicios permite que los controladores se enfoquen en manejar las solicitudes y respuestas, mientras que los servicios se centran en la lógica de la aplicación. Esto resulta en un código más limpio y mantenible.


// ¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?

// es crucial por la seguridad, se evitan inyecciones de SQL y se mantiene la integridad de los datos

// ¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?

// Si un decorador como @Body(), @Param(), o @Query() está mal colocado, el controlador puede no recibir los datos correctos, lo que lleva a errores en el procesamiento de solicitudes o respuestas incorrectas.
