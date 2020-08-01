declare type Dict<T> = Record<string, T>
declare type AtomicSingleton = Dict<Dict<string> | string>
