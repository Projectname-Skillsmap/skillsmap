import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class Edge {
  @Field(() => String)
  from: string;

  @Field(() => String)
  to: string;
}
