import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


/*


                                            AppModule
                                                |
                      |----------------------------------------------|-------------------------|--------------------|
                   UserModule                                   ProductModule               AppService             AppController
                       |
    |------------------|------------------|
    |                  |                  |
UserController      UserService         (otros providers)

route
req -> res         lógica + dao (database access object)



*/