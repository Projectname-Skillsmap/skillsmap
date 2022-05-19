import { Injectable } from '@nestjs/common';
import { Neo4j } from '../neo4j/neo4j.service';
import { Response } from '../types';
@Injectable()
export class QueryService {
  constructor(private neo4j: Neo4j) {}

  async result<Key extends string, Value>(
    clause: `${string} RETURN ${Key}`
  ): Promise<Record<Key, Response<Value>>> {
    const response = (await this.neo4j
      .query()
      .raw(clause)
      .run()) as unknown as Record<Key, Response<Value>>[];
    const data = response[0];
    return data;
  }

  async raw(clause: string) {
    this.neo4j.query().raw(clause).run();
  }
}
