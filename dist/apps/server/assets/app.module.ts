import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Neo4jModule } from './neo4j/neo4j.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { Neo4j } from './neo4j/neo4j.service';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { QueryModule } from './query/query.module';
import { NodesModule } from './graph/nodes/nodes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    Neo4jModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    QueryModule,
    QueryModule,
    NodesModule,
  ],
  providers: [Neo4j],
})
export class AppModule {}
