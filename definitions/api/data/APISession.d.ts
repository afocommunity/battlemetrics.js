declare interface APISession extends APIBase {
  id: string;
  type: `session`;
  attributes: APIAttributes<{
    firstTime: boolean
    name: string
    private: boolean
    start: string
    stop?: Nullable<string>
    metadata: APIDataArray<{
      key: string
      private: boolean
      value?: Nullable<string>
    }>
  }>
  relationships: APIRelationships<'server' | 'player' | 'organization'> & APIRelationshipsArray<'identifiers'>
}
