import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateMedicationDto {
  @ApiProperty({ description: 'Human-friendly medication name', example: 'Amoxicillin' })
  @IsString()
  @MaxLength(120)
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ description: 'Unique medication code', example: 'AMOX-500' })
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  code!: string;

  @ApiProperty({ description: 'Medication description', example: 'Antibiotic for bacterial infections' })
  @IsString()
  @MaxLength(500)
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Unit price of the medication', example: 19.99 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price!: number;

  @ApiProperty({ description: 'Quantity available in stock', example: 100 })
  @IsNumber()
  @IsPositive()
  quantityInStock!: number;

  @ApiProperty({ description: 'Measurement unit', example: 'mg' })
  @IsString()
  @MaxLength(16)
  unit!: string;
}
