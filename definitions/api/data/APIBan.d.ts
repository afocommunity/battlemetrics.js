export declare interface APIBan extends APIBase {
  id: `${number}`;
  type: 'ban';
  attributes: APIAttributes<{
    autoAddEnabled: boolean;
    expires?: Nullable<string>;
    id: `${number}`;
    identifiers: (number | APIIdentifier)[];
    nativeEnabled?: Nullable<boolean>;
    note?: Nullable<string>;
    orgWide: boolean;
    reason: string;
    timestamp: string;
    uid: string;
  }>
  meta: {
    player: string;
  }
  relationships: APIRelationships<'player' | 'server' | 'organization' | 'user' | 'banList' | 'trigger'>
}
