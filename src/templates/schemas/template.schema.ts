import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Attribute, AttributeSchema } from './attribute.schema';

@Schema()
export class Template {
  @Prop({ type: String, required: true, unique: true })
  name!: string;

  @Prop({ type: String, required: true, match: /^#[0-9A-F]{6}$/i })
  color!: string;

  @Prop({ type: String, required: true })
  type!: string;

  @Prop({ type: [AttributeSchema], default: [] })
  attributes!: Attribute[];
}

export type TemplateDocument = Template & Document;
export const TemplateSchema = SchemaFactory.createForClass(Template);