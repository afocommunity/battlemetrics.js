declare interface APINativeBan extends APIBase {
  id: string;
  type: 'banNative';
  attributes: APIAttributes<APIIdentifier & {
    'state': 'added' | 'removed',
    'createdAt': string,
    'updatedAt': string,
    'updateAt': string,
    'reason': Nullable<string>,
    'expires': Nullable<string>,
  }>
  relationships: APIRelationships<'ban' | 'organization' | 'server'>
}
