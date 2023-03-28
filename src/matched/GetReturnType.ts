type GetReturnType<T extends (...args: any) => any> =
    T extends (...args: any[]) => infer R ? R : any

export type { GetReturnType }
