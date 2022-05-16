import { Module } from '@nestjs/common';
import { NodesService } from './nodes.service';
import { NodesResolver } from './nodes.resolver';
import { QueryService } from 'src/query/query.service';
import { Neo4j } from 'src/neo4j/neo4j.service';

@Module({
  providers: [NodesService, NodesResolver, Neo4j, QueryService],
})
export class NodesModule {}
