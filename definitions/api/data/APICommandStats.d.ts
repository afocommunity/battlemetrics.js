declare interface APICommandStats extends APIBase {
  id: `${number}:${number}`;
  type: `commandStats`;
  attributes?: APIAttributes<Nullable<unknown>> //TODO: What is this
  relationships: APIRelationships<'organization' | 'user'> & APIRelationshipsArray<'games'>
}
