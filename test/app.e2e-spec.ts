import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

describe('MedicationController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    prisma = app.get(PrismaService);
    await prisma.$executeRaw`TRUNCATE TABLE "Medication" RESTART IDENTITY CASCADE;`;
  });

  afterAll(async () => {
    await app.close();
  });

  it('/medications (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/medications')
      .send({
        name: 'Ibuprofen',
        code: 'IBU-200',
        description: 'Pain reliever',
        price: 5.5,
        quantityInStock: 200,
        unit: 'mg'
      })
      .expect(201);

    expect(response.body).toMatchObject({
      name: 'Ibuprofen',
      code: 'IBU-200'
    });
  });
});
