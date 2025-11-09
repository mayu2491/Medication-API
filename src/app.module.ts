import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MedicationModule } from './medication/medication.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    MedicationModule
  ]
})
export class AppModule {}
