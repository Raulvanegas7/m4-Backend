import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerGlobal } from './middlewares/loggerGlobal.middleware';
import { CategorySeeder } from './seeder/categories/categories.seed';
import { ProductSeeder } from './seeder/products/products.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(LoggerGlobal);
  const categorySeeder = app.get(CategorySeeder);
  await categorySeeder.createSeederCat();
  console.log("La inserción de categorías ha terminado")
  
  const productSeeder = app.get(ProductSeeder);
  await productSeeder.createSeedProduct();
  console.log("La inserción de productos ha terminado")

  await app.listen(3000);
}
bootstrap();
