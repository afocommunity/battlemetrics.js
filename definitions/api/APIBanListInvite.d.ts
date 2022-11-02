declare interface APIBanListInvite extends APIBase {
  id: string;
  type: `banListInvite`;
  attributes: {
    uses: number
    limit?: Nullable<number>;
    permManage: boolean
    permCreate: boolean
    permUpdate: boolean
    permDelete: boolean
  }
  relationships: APIRelationships<'banList' | 'organization' | 'user'>
}
