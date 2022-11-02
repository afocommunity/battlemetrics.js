export declare interface APIRelationship<T> extends APIBase {
  id: string
  type: T
}
export declare type APIRelationships<types extends string> = {
  [type in types]?: APIData<APIRelationship<`${type}`>>
}

export declare type APIRelationshipsArray<types extends string> = {
  [type in types]?: APIDataArray<APIRelationship<Singular<type>>>
}
