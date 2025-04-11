import { IsString, Matches, IsEnum, IsBoolean, IsArray, IsOptional, ArrayNotEmpty } from 'class-validator';

class PartialAttributeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEnum(['radio', 'checkbox', 'select'])
  @IsOptional()
  input_type?: string;

  @IsBoolean()
  @IsOptional()
  mutable?: boolean;

  @IsArray()
  @ArrayNotEmpty()
  @IsOptional()
  values?: string[];

  @IsString()
  @IsOptional()
  default_value?: string;
}

export class UpdateTemplateDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @Matches(/^#[0-9A-F]{6}$/i, { message: 'Колір має бути у форматі HEX (наприклад, #352972)' })
  @IsOptional()
  color?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsOptional()
  attributes?: PartialAttributeDto[];
}