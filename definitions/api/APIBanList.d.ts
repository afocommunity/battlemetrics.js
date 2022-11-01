declare interface APIBanList extends APIBase {
  id: string;
  type: `banList`;
  attributes: {
    action: 'none' | 'log' | 'kick';
    defaultAutoAddEnabled: boolean;
    defaultIdentifiers: string[];
    defaultNativeEnabled?: boolean | null;
    defaultReasons: string[];
    name: string;
    nativeBanPermMaxExpires?: number | null;
    nativeBanTTL: number | null;
    nativeBanTempMaxExpires?: number | null;
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
    'servers'?: null | {
      data: {
        id: string;
        type: `server`
        meta?: null | {
          action: string;
          defaultNativeEnabled?: null | boolean;
          nativeBanPermMaxExpires?: number | null;
          nativeBanTTL?: number | null;
          nativeBanTempMaxExpires?: number | null;
        }
      }
    }
  }
}
