import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ProductCat } from './product-cat/product-cat.entity';


@Module({
    imports: [
        UserModule,
        AuthModule,
        ProductModule,
        ProductCat,
    ],
    providers: [],
})
export class ApiModule {}