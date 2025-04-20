import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplatesModule } from './templates/templates.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL || 'mongodb://localhost:27017/labelsDB'),
    TemplatesModule,
  ],
  controllers: [AppController], 
})
export class AppModule {}