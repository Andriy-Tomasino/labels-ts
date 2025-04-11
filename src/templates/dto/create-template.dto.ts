import { IsString, IsNotEmpty, Matches, IsArray, IsEnum, IsBoolean, ArrayNotEmpty } from 'class-validator';

class AttributeDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEnum(['radio', 'checkbox', 'select'])
  input_type!: string;

  @IsBoolean()
  mutable!: boolean;

  @IsArray()
  @ArrayNotEmpty()
  values!: string[];

  @IsString()
  @IsNotEmpty()
  default_value!: string;
}

export class CreateTemplateDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @Matches(/^#[0-9A-F]{6}$/i, { message: 'Колір має бути у форматі HEX (наприклад, #352972)' })
  color!: string;

  @IsString()
  @IsNotEmpty()
  type!: string;

  @IsArray()
  @ArrayNotEmpty()
  attributes!: AttributeDto[];
}