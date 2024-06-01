type Opaque<T, Token extends string> = T & { __opaque__: Token };
