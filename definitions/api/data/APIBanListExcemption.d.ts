export declare interface APIBanListExcemption extends APIBase {
  id: string;
  type: 'banExemption';
  attributes: APIAttributes<{
    reason?: Nullable<string>;
  }>
  relationships: APIRelationships<'ban' | 'organization'>
}
