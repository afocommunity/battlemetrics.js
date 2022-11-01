declare interface APIBanListExcemption extends APIBase {
  id: string;
  type: `banExemption`;
  attributes: {
    reason: string | null
  }
  relationships: APIRelationships<'ban' | 'organization'>
}
