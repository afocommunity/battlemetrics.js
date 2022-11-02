declare interface APIBanList extends APIBase {
  id: string;
  type: `banList`;
  attributes: {
    action: 'none' | 'log' | 'kick';
    defaultAutoAddEnabled: boolean;
    defaultIdentifiers: string[];
    defaultNativeEnabled: Nullable<boolean>;
    defaultReasons: string[];
    name: string;
    nativeBanPermMaxExpires: Nullable<number>;
    nativeBanTTL: number | null;
    nativeBanTempMaxExpires: Nullable<number>;
    permCreate: boolean;
    permDelete: boolean;
    permManage: boolean;
    permUpdate: boolean;
  }
  relationships: APIRelationships<'organization'> & {
    'owner': {
      data: {
        type: 'organization';
        id: string;
      }
    }
    'servers': Nullable<{
      data: {
        id: string;
        type: `server`
        meta: Nullable<{
          action: string;
          defaultNativeEnabled: Nullable<boolean>;
          nativeBanPermMaxExpires: Nullable<number>;
          nativeBanTTL: Nullable<number>;
          nativeBanTempMaxExpires: Nullable<number>;
        }>
      }
    }>
  }
}
