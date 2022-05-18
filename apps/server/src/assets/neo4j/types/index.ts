export interface Response<Value> {
  identity: number;
  labels: string[];
  properties: Value;
}
