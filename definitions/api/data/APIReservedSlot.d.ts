declare interface APIReservedSlot extends APIBase {
  /**unique identifier of server
   *
   * **pattern:** `\d+`
   */
  id: `${number}`;
  type: 'reservedSlot';
  attributes: APIAttributes<{
    /**Timestamp of when the reserved slot was added */
    createdAt: string
    /**When the slot should expire. If null the reserved slot will not expire. */
    expires?: Nullable<string>
    /**An array of identifiers to associated with the reserved slot. Can link known identifiers, or manually provided ones. */
    identifiers: (number | APIIdentifier)[]
  }>
  meta?: Nullable<Record<string, unknown>>
  relationships: APIRelationships<'organization' | 'player' | 'user'> & APIRelationshipsArray<'servers'>
}
