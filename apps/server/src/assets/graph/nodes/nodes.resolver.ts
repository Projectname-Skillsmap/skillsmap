import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { NodesService } from './nodes.service';
import { Edge, Node, UserNode } from '@skillsmap/shared/types';
@Resolver()
export class NodesResolver {
  constructor(private service: NodesService) {}

  @Query(() => Node)
  async findNodesOnLevel(@Args('level') level: string) {
    return this.service.findNodesOnLevel(level);
  }

  @Mutation(() => Node)
  async createNode(@Args('node') node: UserNode): Promise<Node> {
    try {
      const response = await this.service.createNode(node);
      console.log({ response });
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  @Mutation(() => [String, String])
  async createEdge(@Args('edge') edge: Edge): Promise<[string, string]> {
    return this.service.createEdge(edge);
  }

  @Mutation(() => String, {
    nullable: true,
  })
  async deleteNode(@Args('nodeID') nodeID: string): Promise<string | Error> {
    return this.service.deleteNode(nodeID);
  }

  @Mutation(() => Edge, {
    nullable: true,
  })
  async deleteEdge(@Args('edge') edge: Edge): Promise<Edge | Error> {
    return this.service.deleteEdge(edge);
  }
}
