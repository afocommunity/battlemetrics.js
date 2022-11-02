export declare interface APISession extends APIBase {
  /**Unique identifier of session */
  id: string;
  /**Resource Type */
  type: 'session';
  attributes: APIAttributes<{
    /**True when this is the first time the player has been seen on the associated server. */
    firstTime: boolean
    metadata: APIDataArray<{
      /**Metadata key, for example "ping", or "admin". */
      key: string
      /**True when the associated metadata is private. */
      private: boolean
      /**Metadata value. */
      value?: Nullable<string>
    }>
    /**The most recent name the player was seen using */
    name: string
    /**True when this session is associated with a private player profile. */
    private: boolean
    /**When the session started */
    start: string
    /**When the session ended. If the value is null then the player is still online. */
    stop?: Nullable<string>
  }>
  relationships: APIRelationships<'server' | 'player' | 'organization'> & APIRelationshipsArray<'identifiers'>
}
