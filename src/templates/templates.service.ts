import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Template, TemplateDocument } from './schemas/template.schema';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';

@Injectable()
export class TemplatesService {
  constructor(@InjectModel(Template.name) private templateModel: Model<TemplateDocument>) {}

  async findAll(): Promise<Template[]> {
    return this.templateModel.find().exec();
  }

  async findOne(id: string): Promise<Template> {
    const template = await this.templateModel.findById(id).exec();
    if (!template) {
      throw new NotFoundException('Шаблон не знайдено');
    }
    return template;
  }

  async create(createTemplateDto: CreateTemplateDto): Promise<Template> {
    const newTemplate = new this.templateModel(createTemplateDto);
    return newTemplate.save();
  }

  async update(id: string, updateTemplateDto: UpdateTemplateDto): Promise<Template> {
    const template = await this.templateModel.findById(id).exec();
    if (!template) {
      throw new NotFoundException('Шаблон не знайдено');
    }

    Object.assign(template, updateTemplateDto);
    return template.save();
  }

  async delete(id: string): Promise<void> {
    const result = await this.templateModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Шаблон не знайдено');
    }
  }
}