export interface IRepository<T, TError> {
  readonly name: string
  readonly baseURL: string
  getTvShowList(searchString: string): Promise<T[] | TError>
}
