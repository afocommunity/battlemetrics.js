declare interface APINativeBan extends APIBase {
  id: string;
  type: `banNative`;
  attributes: APIIdentifier & {
    "state": "added" | 'removed',
    "createdAt": string,
    "updatedAt": string,
    "updateAt": string,
    "reason"?: string | null,
    "expires"?: string | null,
  }
  relationships: APIRelationships<'ban' | 'organization' | 'server'>
}
