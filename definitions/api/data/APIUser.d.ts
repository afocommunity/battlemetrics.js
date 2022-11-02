declare interface APIUser extends APIBase {
  /**
   * unique identifier of user
   *
   * **pattern:** `\d+`
   */
  id: `${number}`;
  /**Resource Type */
  type: 'user';
  attributes: APIAttributes<{
    /**
     * unique identifier of user
     *
     * **pattern:** `\d+`
     */
    id: `${number}`
    /**Nickname for user. Nicknames are not unique, and may change at any time. */
    nickname: string;
  }>
  relationships: APIRelationshipsArray<'organizations'>
}
