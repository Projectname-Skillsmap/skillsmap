import { Injectable } from '@nestjs/common';
import { QueryService } from 'src/query/query.service';
import { Edge, Node } from './types';

@Injectable()
export class NodesService {
  constructor(private query: QueryService) {}

  async findNodesOnLevel(level: string) {
    const { nodes } = await this.query.result<'nodes', Node>(
      ` MATCH (nodes: Card)
        WHERE nodes.level = "${level}"
        RETURN nodes`,
      'nodes',
    );
    return nodes.properties;
  }
  async createNode(node: Node) {
    const { nodes } = await this.query.result<'nodes', Node>(
      ` 
        CREATE (nodes: Card {
                date: apoc.date.toISO8601(datetime().epochMillis, "ms"),
                description: "${node.description}", 
                id: "${node.id}", 
                level: "${node.level}", 
                progress: 0, 
                title: "${node.title}"
            }) 
        RETURN nodes`,
      'nodes',
    );
    console.log(nodes);
    return nodes.properties;
  }

  async createEdge(edge: Edge) {
    const { from, to } = edge;
    this.query.raw(
      `MATCH (from: Card), (to: Card) WHERE from.id = "${from}" AND to.id = "${to}" CREATE (from) -[r:DIRECT_CONNECTION]-> (to)`,
    );
    return [from, to] as [string, string];
  }

  async deleteNode(nodeID: string) {
    try {
      await this.query.raw(
        `MATCH(node:Card {id: "${nodeID}"}) DETACH DELETE (node)`,
      );
      return nodeID;
    } catch (err) {
      console.error(err);
      return new Error(`${nodeID} does not appear to exist in the database`);
    }
  }

  async deleteEdge(edge: Edge) {
    try {
      await this.query.raw(`
      MATCH (:Card {id: "${edge.from}"}) -[connection]-> (:Card {id: "${edge.to}"}) 
      DELETE connection
      `);
      return edge;
    } catch (err) {
      console.error(err);
      return new Error(
        `We could not delete the edge between ${edge.from} ${edge.to}`,
      );
    }
  }
}
