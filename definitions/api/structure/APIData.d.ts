declare interface APIData<T extends APIBase> {
  data: T | T[]
}
declare interface APIDataArray<T extends APIBase> {
  data: T[]
}
