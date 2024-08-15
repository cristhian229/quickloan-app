import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}






// ¿Qué diferencia existe entre app.module.ts y app.controller.ts? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación? 
// el controller define un controlador basico que se encarga de recibir las solicitudes HTTP, delegar la lógica de negocio a los servicios y retornar las respuestas al cliente.

// Este archivo agrupa y organiza la configuración y los módulos de la aplicación. En la Arquitectura Limpia, actúa como la capa de configuración que ensambla los módulos, controladores, y servicios, definiendo cómo se interrelacionan sin involucrarse en la lógica de negocio.
