declare interface APIRelationship<T> extends APIBase {
  id: string
  type: T
}
declare type APIRelationships<types extends string> = {
  [type in types]: APIData<APIRelationship<`${type}`>>
}
