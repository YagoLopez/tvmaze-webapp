export interface IRepository<T, TError> {
  readonly name: string
  readonly baseURL: string
  getShowList(searchString: string): Promise<T[] | TError>
}
