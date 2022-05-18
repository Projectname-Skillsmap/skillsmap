import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('Edge')
@ObjectType('ResponseEdge')
export class Edge {
  @Field(() => String, {
    nullable: true,
  })
  from: string;

  @Field(() => String, {
    nullable: true,
  })
  to: string;
}
