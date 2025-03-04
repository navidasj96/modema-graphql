import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ActivitiesModule } from './activities/activities.module';
import { AttributeAttributeGroupModule } from './attribute-attribute-group/attribute-attribute-group.module';
import { AttributeGroupsModule } from './attribute-groups/attribute-groups.module';
import { AttributeItemsModule } from './attribute-items/attribute-items.module';
import { AttributeProductModule } from './attribute-product/attribute-product.module';
import { AttributesModule } from './attributes/attributes.module';
import { AddressModule } from './address/address.module';
import { AttributeGroupModule } from './attribute-group/attribute-group.module';
import { AttributeItemModule } from './attribute-item/attribute-item.module';
import { AttributeModule } from './attribute/attribute.module';
import { AttributeSubproductModule } from './attribute-subproduct/attribute-subproduct.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'mydatabse',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: false,
      debug: true,
      sortSchema: true,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ActivitiesModule,
    AttributeAttributeGroupModule,
    AttributeGroupsModule,
    AttributeItemsModule,
    AttributeProductModule,
    AttributesModule,
    AddressModule,
    AttributeGroupModule,
    AttributeItemModule,
    AttributeModule,
    AttributeSubproductModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
