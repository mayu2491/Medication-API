import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { Medication } from './entities/medication.entity';
import { MedicationService } from './medication.service';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { UpdateMedicationDto } from './dto/update-medication.dto';

@ApiTags('medications')
@Controller('medications')
export class MedicationController {
  constructor(private readonly medicationService: MedicationService) {}

  @Post()
  @ApiOkResponse({ type: Medication })
  create(@Body() createMedicationDto: CreateMedicationDto) {
    return this.medicationService.create(createMedicationDto);
  }

  @Get()
  @ApiOkResponse({ type: Medication, isArray: true })
  findAll() {
    return this.medicationService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Medication })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.medicationService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Medication })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMedicationDto: UpdateMedicationDto
  ) {
    return this.medicationService.update(id, updateMedicationDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Medication })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicationService.remove(id);
  }
}
