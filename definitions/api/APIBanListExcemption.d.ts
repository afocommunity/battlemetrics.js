declare interface APIBanListExcemption extends APIBase {
  id: string;
  type: `banExemption`;
  attributes: {
    reason?: Nullable<string>;
  }
  relationships: APIRelationships<'ban' | 'organization'>
}
