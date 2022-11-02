declare interface APIServerGroup extends APIBase {
  /**unique identifier of server group */
  id: string;
  type: 'serverGroup';
  attributes: APIAttributes<{
    /**Group rank. Can be null on new groups that haven't been ranked yet. */
    rank?: Nullable<number>
  }>
  relationships: APIRelationshipsArray<'servers'> & {
    leader: APIData<{
      id: string
      type: 'server'
    }>
  }
}
