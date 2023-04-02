import { Module } from '@nestjs/common';
import { PharmacyController } from './pharmacy.controller';
import { PharmacyService } from './pharmacy.service';

@Module({
 providers: [PharmacyService],
 controllers: [PharmacyController]
})
export class PharmacyModule{}