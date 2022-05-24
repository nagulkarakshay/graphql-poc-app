import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { UsersService } from './user/user.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './user/user.resolver';
import { userProviders } from './user/user.providers';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

const useGraphQL = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: true
})

@Module({
  imports: [useGraphQL, UsersModule, DatabaseModule],
  controllers: [],
  providers: [
    UsersService,
    UserResolver,
    ...databaseProviders,
    ...userProviders
  ],
})
export class AppModule {}
