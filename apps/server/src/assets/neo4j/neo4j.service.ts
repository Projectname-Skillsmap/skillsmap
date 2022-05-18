import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'cypher-query-builder';

@Injectable()
export class Neo4j {
  constructor(
    @Inject('NEO4J_CONNECTION') private readonly connection: Connection
  ) {}

  query() {
    return this.connection.query();
  }
}
