declare interface APIUser extends APIBase {
  id: string;
  type: `user`;
  attributes: APIAttributes<{
    nickname: string;
  }>
  relationships: APIRelationshipsArray<'organizations'>
}
