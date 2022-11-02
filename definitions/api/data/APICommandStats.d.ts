declare interface APICommandStats extends APIBase {
  id: `${number}:${number}`;
  type: `commandStats`;
  attributes?: APIAttributes<Nullable<{}>>
  relationships: APIRelationships<'organization' | 'user'> & APIRelationshipsArray<'games'>
}
