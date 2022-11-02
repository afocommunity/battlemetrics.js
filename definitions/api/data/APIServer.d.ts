declare interface APIServer extends APIBase {
  /**unique identifier of server
   *
   * **pattern:** `\d+`
   */
  id: `${number}`;
  /**Resource type. Always "server" */
  type: 'server';
  attributes: APIAttributes<{
    /**IP */
    address?: Nullable<string>
    /**The country the server is located in.
     *
     * **Length:** `2`
     */
    country: string
    /**When the server was added to the system */
    createdAt: string
    /**Game and server specific information. Will vary from server to server. You should provide reasonable defaults, nothing is guaranteed. */
    details?: Nullable<Record<string, unknown>>
    /**unique identifier of server
     *
     * **pattern:** `\d+` */
    id: `${number}`
    /**IP */
    ip: string
    /**The server's longitude and latitude */
    location: [number, number]
    /**The max number of players allowed on the server */
    maxPlayers: number

    metadata: {
      /**Use new implementation of Source protocol. */
      betaSourceProtocol?: boolean
      /**If client perf is enabled */
      clientPerf?: boolean
      /**Connection type for Rust servers. */
      connectionType?: 'source' | 'ws'
      /**If set to true RCON connection can not be enabled by the user. */
      disableLocked?: Nullable<boolean>
      /**Reason why the RCON connection is disabled. */
      disabledReason?: Nullable<string>
      /**If we have detected sourcemod. */
      hasSourceMod?: Nullable<boolean>
      /**HLL. Control use of playerinfo command.
       *
       * **default:** `true`
       */
      hllGetPlayerInfo?: boolean
      /**HLL. How often we should run get playerids and playerinfo commands.
       *
       * **default:** `90`
       *
       * **Range:** `60 <= value <= 300`
       */
      hllPlayerListInterval?: number
      /**Log secret for Source games */
      logSecret?: Nullable<string>
      /**Use a different IP for RCON connections */
      rconIP?: string
      /**Kick message for the reserved slot system. */
      reservedSlotKickReason?: string
      /**The number of reserved slots for this server.
       *
       * **Range:** `0 <= value`
       */
      reservedSlots?: number
      /**If the last player to join should be kicked when a player on the reserved slot list joins. */
      reservedSlotsKickLastToJoin?: boolean
      /**Rust. How often we should request server status via RCON.
       *
       * **Range:** `15 <= value <= 300`
       */
      statusInterval?: number
      /**HLL. Use a connection pool to increase command responsiveness. */
      useConnectionPool?: boolean
      /**Ark & DNL. If we should use getchat, or getgamelog command. */
      useGetChat?: boolean
      /**RCON username for RS2: Vietnam. */
      username?: string
    }
    /**Server name */
    name: string
    /**The number of players currently on the server */
    players: number
    /**The server's game port
     *
     * **Range:** `0 <= value <= 65535`
     */
    port: number
    /**The server's query port
     *
     * **Range:** `0 <= value <= 65535`
     */
    portQuery: number
    /**Private servers are only visible to users with RCON access to the server. */
    private: boolean
    /**Current query status */
    queryStatus: Nullable<'valid' | 'invalid' | 'timeout'>
    /**The server's rank. If the server's rank is null then it has been de-ranked. */
    rank?: Nullable<number>
    /**Only available when authenticated. True when the RCON connection is enabled. This does not mean we are connected, only that we will connect if able. */
    rconActive?: Nullable<boolean>
    /**When we last lost connection. Must be authenticated and have RCON access to the server. */
    rconDisconnected?: Nullable<string>
    /**The last time we were able to connect. Must be authenticated and have RCON access to the server. */
    rconLastConnected?: Nullable<string>
    /**Current rcon status. Must be authenticated and have RCON access to the server. */
    rconStatus?: Nullable<'connected' | 'disconnected' | 'password-rejected' | 'timeout' | 'refused' | 'unknown'>
    /**Server status. Available server information will be limited when status is "removed" */
    status: 'online' | 'offline' | 'dead' | 'removed' | 'invalid'
    /**When the server was last updated */
    updatedAt: string
  }>
  relationships: {
    defaultBanList?: APIData<{
      id: string
      type: 'banList'
    }>
  } & APIRelationships<'organization' | 'game'> & {
    serverGroup?: APIData<{
      id: string
      type: 'serverGroup'
      meta: {
        leader: boolean
      }
    }>
  }
}
