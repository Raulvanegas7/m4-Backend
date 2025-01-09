import { Module } from '@nestjs/common';
import { ProductsModule as ProductsModule } from './Products/products.module';
import { UsersModule as UsersModule } from './Users/users.module';
import { AuthModule } from './Auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeOrmConfig from "./config/typeorm"
import typeorm from './config/typeorm';
import { OrdersModule } from './Orders/orders.module';
import { CategoriesModule } from './Categories/categories.module';
import { SeederModule } from './seeder/seeder.module';
import { OrderDitailModule } from './OrderDetails/order-detail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get("typeorm"),    
    }),
    CategoriesModule,
    ProductsModule,
    UsersModule, 
    AuthModule, 
    OrdersModule,
    SeederModule,
    OrderDitailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
