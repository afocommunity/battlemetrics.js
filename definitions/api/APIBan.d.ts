declare interface APIBan extends APIBase {
  id: `${number}`;
  type: `ban`;
  attributes: {
    autoAddEnabled: boolean;
    expires?: string | null;
    id: `${number}`;
    identifiers: (number | APIIdentifier)[];
    nativeEnabled?: boolean | null;
    note?: string | null;
    orgWide: boolean;
    reason: string;
    timestamp: string;
    uid: string;
  }
  meta: {
    player: string;
  }
  relationships: APIRelationships<'player'|'server'|'organization'|'user'|'banList'|'trigger'>
}
