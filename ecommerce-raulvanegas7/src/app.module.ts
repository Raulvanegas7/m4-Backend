import { Module } from '@nestjs/common';
import { Products as ProductsModule } from './Products/products.module';
import { Users as UsersModule } from './Users/users.module';
import { AuthModule } from './Auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeOrmConfig from "./config/typeorm"
import typeorm from './config/typeorm';
import { OrdersModule } from './Orders/orders.module';
import { CategoriesModule } from './Categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
