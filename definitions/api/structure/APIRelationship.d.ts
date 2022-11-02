declare interface APIRelationship<T> extends APIBase {
  id: string
  type: T
}
declare type APIRelationships<types extends string> = {
  [type in types]?: APIData<APIRelationship<`${type}`>>
}

declare type APIRelationshipsArray<types extends string> = {
  [type in types]?: APIDataArray<APIRelationship<Singular<type>>>
}
