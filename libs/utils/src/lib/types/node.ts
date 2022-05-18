import {
  Field,
  Float,
  GraphQLISODateTime,
  InputType,
  Int,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export class Node {
  @Field()
  id: string;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  level: string;
  @Field(() => Float, {
    defaultValue: 0,
    nullable: true,
  })
  progress?: number;
  @Field(() => GraphQLISODateTime, {
    nullable: true,
  })
  uploadDate?: Date;
}

@InputType()
export class UserNode {
  @Field()
  id: string;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  level: string;
  @Field(() => Float, {
    defaultValue: 0,
    nullable: true,
  })
  progress?: number;
  @Field(() => GraphQLISODateTime, {
    nullable: true,
  })
  uploadDate?: Date;
}

export class NodeResponse {
  @Field(() => Int)
  identity: number;
  @Field(() => [String])
  labels: string[];
  @Field(() => Node)
  proprieties: Node;
}
