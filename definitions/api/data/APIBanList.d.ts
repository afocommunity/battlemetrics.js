declare interface APIBanList extends APIBase {
  id: string;
  type: `banList`;
  attributes: APIAttributes<{
    action: 'none' | 'log' | 'kick';
    defaultAutoAddEnabled: boolean;
    defaultIdentifiers: string[];
    defaultNativeEnabled?: Nullable<boolean>;
    defaultReasons: string[];
    name: string;
    nativeBanPermMaxExpires?: Nullable<number>;
    nativeBanTTL?: Nullable<number>;
    nativeBanTempMaxExpires?: Nullable<number>;
    permCreate: boolean;
    permDelete: boolean;
    permManage: boolean;
    permUpdate: boolean;
  }>
  relationships: APIRelationships<'organization'> & {
    owner: APIData<
      {
        type: 'organization';
        id: string;
      }
    >
    servers?: Nullable<APIData<{
      id: string;
      type: `server`
      meta?: Nullable<{
        action: string;
        defaultNativeEnabled?: Nullable<null>;
        nativeBanPermMaxExpires?: Nullable<number>;
        nativeBanTTL?: Nullable<number>;
        nativeBanTempMaxExpires?: Nullable<number>;
      }>;
    }>>

  }
}
