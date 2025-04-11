import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Attribute {
  @Prop({ type: String, required: true })
  name!: string;

  @Prop({ type: String, enum: ['radio', 'checkbox', 'select'], required: true })
  input_type!: string;

  @Prop({ type: Boolean, required: true })
  mutable!: boolean;

  @Prop({ type: [String], required: true, validate: (v: string[]) => v.length > 0 })
  values!: string[];

  @Prop({ type: String, required: true, validate: (v: string) => typeof v === 'string' })
  default_value!: string;
}

export type AttributeDocument = Attribute & Document;
export const AttributeSchema = SchemaFactory.createForClass(Attribute);