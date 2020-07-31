// TODO `npm install ts-swiss`
export type gEntry<T> = {[P in keyof T]: [P, T[P]]}[keyof T]
