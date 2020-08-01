declare type ValuePrimitive = string | number
declare type Dict<T> = Record<string, T>

declare type AtomicSingleton = Dict<
  QuarkValue | Dict<QuarkValue> 
>
declare type QuarkValue = ValuePrimitive | Array<ValuePrimitive | QuarkFunction>

declare type QuarkFunction = Dict<ValuePrimitive|ValuePrimitive[]>