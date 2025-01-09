import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware, TextBodyParserMiddleware } from './middledare';
import { AllExceptionFilter } from '@/filter';
import { ModulesModule } from '@/modules';
import { ClickHouseModule } from './supports';
@Module({
  imports: [ModulesModule, ClickHouseModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
    consumer
      .apply(TextBodyParserMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
