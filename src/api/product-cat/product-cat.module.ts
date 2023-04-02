import { Module } from '@nestjs/common';
import { ProductCatController } from './product-cat.controller';
import { ProductCatService } from './product-cat.service';

@Module({
  controllers: [ProductCatController],
  providers: [ProductCatService]
})
export class ProductCatModule {}
