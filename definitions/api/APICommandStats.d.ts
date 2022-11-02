declare interface APICommandStats extends APIBase {
  id: `${number}:${number}`;
  type: `commandStats`;
  attributes: Nullable<{}>
  relationships: APIRelationships<'organization' | 'user'> & {
    games: {
      data: {
          type: "game",
          id: string
        }[]
    }
  }
}
