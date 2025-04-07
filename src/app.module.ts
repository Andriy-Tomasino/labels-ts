import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Contr1Controller } from './contr-1/contr-1.controller';
import { Contr1Controller } from './contr-1/contr-1.controller';

@Module({
  imports: [],
  controllers: [AppController, Contr1Controller],
  providers: [AppService],
})
export class AppModule {}
