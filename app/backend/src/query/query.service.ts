import { Injectable } from '@nestjs/common';
import { Neo4j } from 'src/neo4j/neo4j.service';
import { Response } from 'src/types';
@Injectable()
export class QueryService {
  constructor(private neo4j: Neo4j) {}

  async result<Key extends string, Value>(
    clause: `${string} RETURN ${Key}`,
    result: Key,
  ): Promise<Record<Key, Response<Value>>> {
    const data = await this.neo4j.query().raw(clause).run<Key, Value>(result);
    return data[0];
  }

  async raw(clause: string) {
    this.neo4j.query().raw(clause).run();
  }
}
