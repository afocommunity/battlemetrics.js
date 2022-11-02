declare interface APIServerGroup extends APIBase {
  id: string;
  type: 'serverGroup';
  attributes: APIAttributes<{
    rank?: Nullable<number>
  }>
  relationships: APIRelationshipsArray<'servers'> & {
    leader: APIData<{
      id: string
      type: 'server'
    }>
  }
}
