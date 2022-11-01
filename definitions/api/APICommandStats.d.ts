declare interface APICommandStats extends APIBase {
  id: `${number}:${number}`;
  type: `commandStats`;
  attributes?: null | {}
  relationships: APIRelationships<'organization' | 'user'> & {
    games: {
      data: {
          type: "game",
          id: string
        }[]
    }
  }
}
