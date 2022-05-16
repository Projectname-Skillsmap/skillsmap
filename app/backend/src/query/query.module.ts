import { Module } from '@nestjs/common';
import { Neo4j } from 'src/neo4j/neo4j.service';
import { QueryService } from './query.service';

@Module({
  providers: [QueryService, Neo4j],
  exports: [QueryService],
})
export class QueryModule {}
