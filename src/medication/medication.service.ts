import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { UpdateMedicationDto } from './dto/update-medication.dto';

@Injectable()
export class MedicationService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMedicationDto: CreateMedicationDto) {
    return this.prisma.medication.create({
      data: createMedicationDto
    });
  }

  findAll() {
    return this.prisma.medication.findMany();
  }

  async findOne(id: number) {
    const medication = await this.prisma.medication.findUnique({
      where: { id }
    });

    if (!medication) {
      throw new NotFoundException(`Medication with id ${id} not found`);
    }

    return medication;
  }

  async update(id: number, updateMedicationDto: UpdateMedicationDto) {
    await this.findOne(id);

    return this.prisma.medication.update({
      where: { id },
      data: updateMedicationDto
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.medication.delete({
      where: { id }
    });
  }
}
