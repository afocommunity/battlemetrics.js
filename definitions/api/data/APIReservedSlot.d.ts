declare interface APIReservedSlot extends APIBase {
  /**unique identifier of server
   *
   * **pattern:** `\d+`
   */
  id: `${number}`;
  type: 'reservedSlot';
}
