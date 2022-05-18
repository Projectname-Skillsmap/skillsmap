import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Connection } from 'cypher-query-builder';
import { Driver } from 'neo4j-driver-core';
import { Neo4j } from './neo4j.service';

interface Neo4jConfig {
  scheme: string;
  host: string;
  port: string;
  username: string;
  password: string;
}

@Module({
  providers: [Neo4j],
})
export class Neo4jModule {
  static forRoot(): DynamicModule {
    return {
      module: Neo4jModule,
      imports: [ConfigModule],
      global: true,
      exports: ['NEO4J_CONNECTION'],
      providers: [
        {
          provide: 'NEO4J_CONFIG',
          inject: [ConfigService],
          useFactory: (configService: ConfigService): Neo4jConfig => ({
            host: configService.get('DATABASE_HOST'),
            password: configService.get('DATABASE_PASSWORD'),
            port: configService.get('DATABASE_PORT'),
            scheme: configService.get('DATABASE_SCHEME'),
            username: configService.get('DATABASE_USERNAME'),
          }),
        },

        {
          provide: 'NEO4J_CONNECTION',
          inject: ['NEO4J_CONFIG'],
          useFactory: async (neo4jConfig: Neo4jConfig): Promise<Connection> => {
            const { password, username } = neo4jConfig;
            const connection = new Connection(
              `neo4j+s://6168ca73.databases.neo4j.io`,
              {
                password,
                username,
              }
            ) as Connection & {
              driver: Driver;
            };
            try {
              await connection.driver.verifyConnectivity();
              return connection;
            } catch (e) {
              throw new Error('NO CONNECTION AVAILABLE');
            }
          },
        },
      ],
    };
  }
}
