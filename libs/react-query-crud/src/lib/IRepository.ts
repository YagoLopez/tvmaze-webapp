export interface IRepository<T> {
  readonly name: string
  readonly baseURL: string
  getTvShowList(searchString: string): Promise<T[]>
}
