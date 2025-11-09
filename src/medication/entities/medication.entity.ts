import { ApiProperty } from '@nestjs/swagger';

export class Medication {
  @ApiProperty({ example: 'clonazepam' })
  name!: string;

  @ApiProperty({ example: 'CLO123' })
  code!: string;

  @ApiProperty({ example: 'Used to prevent and treat seizures' })
  description!: string;

  @ApiProperty({ example: 10.5 })
  price!: number;

  @ApiProperty({ example: 30 })
  quantityInStock!: number;

  @ApiProperty({ example: 'mg' })
  unit!: string;

  @ApiProperty({ example: '2024-05-01T00:00:00.000Z' })
  createdAt!: Date;

  @ApiProperty({ example: '2024-05-10T00:00:00.000Z' })
  updatedAt!: Date;
}
