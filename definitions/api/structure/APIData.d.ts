declare type APIData<T extends APIBase> = {
  data: T | T[]
}
declare type APIDataArray<T extends APIBase> = {
  data: T[]
}
