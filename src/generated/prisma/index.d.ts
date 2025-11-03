
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TrackEdited
 * 
 */
export type TrackEdited = $Result.DefaultSelection<Prisma.$TrackEditedPayload>
/**
 * Model AlbumEdited
 * 
 */
export type AlbumEdited = $Result.DefaultSelection<Prisma.$AlbumEditedPayload>
/**
 * Model ArtistEdited
 * 
 */
export type ArtistEdited = $Result.DefaultSelection<Prisma.$ArtistEditedPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackEdited`: Exposes CRUD operations for the **TrackEdited** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackEditeds
    * const trackEditeds = await prisma.trackEdited.findMany()
    * ```
    */
  get trackEdited(): Prisma.TrackEditedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.albumEdited`: Exposes CRUD operations for the **AlbumEdited** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlbumEditeds
    * const albumEditeds = await prisma.albumEdited.findMany()
    * ```
    */
  get albumEdited(): Prisma.AlbumEditedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artistEdited`: Exposes CRUD operations for the **ArtistEdited** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistEditeds
    * const artistEditeds = await prisma.artistEdited.findMany()
    * ```
    */
  get artistEdited(): Prisma.ArtistEditedDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Session: 'Session',
    User: 'User',
    TrackEdited: 'TrackEdited',
    AlbumEdited: 'AlbumEdited',
    ArtistEdited: 'ArtistEdited'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "session" | "user" | "trackEdited" | "albumEdited" | "artistEdited"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TrackEdited: {
        payload: Prisma.$TrackEditedPayload<ExtArgs>
        fields: Prisma.TrackEditedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackEditedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEditedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackEditedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEditedPayload>
          }
          findFirst: {
            args: Prisma.TrackEditedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEditedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackEditedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEditedPayload>
          }
          findMany: {
            args: Prisma.TrackEditedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEditedPayload>[]
          }
          create: {
            args: Prisma.TrackEditedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEditedPayload>
          }
          createMany: {
            args: Prisma.TrackEditedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackEditedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEditedPayload>[]
          }
          delete: {
            args: Prisma.TrackEditedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEditedPayload>
          }
          update: {
            args: Prisma.TrackEditedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEditedPayload>
          }
          deleteMany: {
            args: Prisma.TrackEditedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackEditedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackEditedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEditedPayload>[]
          }
          upsert: {
            args: Prisma.TrackEditedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEditedPayload>
          }
          aggregate: {
            args: Prisma.TrackEditedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackEdited>
          }
          groupBy: {
            args: Prisma.TrackEditedGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackEditedGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackEditedCountArgs<ExtArgs>
            result: $Utils.Optional<TrackEditedCountAggregateOutputType> | number
          }
        }
      }
      AlbumEdited: {
        payload: Prisma.$AlbumEditedPayload<ExtArgs>
        fields: Prisma.AlbumEditedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumEditedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumEditedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumEditedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumEditedPayload>
          }
          findFirst: {
            args: Prisma.AlbumEditedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumEditedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumEditedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumEditedPayload>
          }
          findMany: {
            args: Prisma.AlbumEditedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumEditedPayload>[]
          }
          create: {
            args: Prisma.AlbumEditedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumEditedPayload>
          }
          createMany: {
            args: Prisma.AlbumEditedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumEditedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumEditedPayload>[]
          }
          delete: {
            args: Prisma.AlbumEditedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumEditedPayload>
          }
          update: {
            args: Prisma.AlbumEditedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumEditedPayload>
          }
          deleteMany: {
            args: Prisma.AlbumEditedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumEditedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumEditedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumEditedPayload>[]
          }
          upsert: {
            args: Prisma.AlbumEditedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumEditedPayload>
          }
          aggregate: {
            args: Prisma.AlbumEditedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbumEdited>
          }
          groupBy: {
            args: Prisma.AlbumEditedGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumEditedGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumEditedCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumEditedCountAggregateOutputType> | number
          }
        }
      }
      ArtistEdited: {
        payload: Prisma.$ArtistEditedPayload<ExtArgs>
        fields: Prisma.ArtistEditedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistEditedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistEditedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistEditedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistEditedPayload>
          }
          findFirst: {
            args: Prisma.ArtistEditedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistEditedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistEditedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistEditedPayload>
          }
          findMany: {
            args: Prisma.ArtistEditedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistEditedPayload>[]
          }
          create: {
            args: Prisma.ArtistEditedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistEditedPayload>
          }
          createMany: {
            args: Prisma.ArtistEditedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistEditedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistEditedPayload>[]
          }
          delete: {
            args: Prisma.ArtistEditedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistEditedPayload>
          }
          update: {
            args: Prisma.ArtistEditedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistEditedPayload>
          }
          deleteMany: {
            args: Prisma.ArtistEditedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistEditedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistEditedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistEditedPayload>[]
          }
          upsert: {
            args: Prisma.ArtistEditedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistEditedPayload>
          }
          aggregate: {
            args: Prisma.ArtistEditedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtistEdited>
          }
          groupBy: {
            args: Prisma.ArtistEditedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistEditedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistEditedCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistEditedCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    session?: SessionOmit
    user?: UserOmit
    trackEdited?: TrackEditedOmit
    albumEdited?: AlbumEditedOmit
    artistEdited?: ArtistEditedOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    tracks: number
    albums: number
    artists: number
    following: number
    followers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    tracks?: boolean | UserCountOutputTypeCountTracksArgs
    albums?: boolean | UserCountOutputTypeCountAlbumsArgs
    artists?: boolean | UserCountOutputTypeCountArtistsArgs
    following?: boolean | UserCountOutputTypeCountFollowingArgs
    followers?: boolean | UserCountOutputTypeCountFollowersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackEditedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumEditedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistEditedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: number | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: number | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: number
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: number
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    imageUrl: string | null
    imageStorageKey: string | null
    passwordUpdatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    imageUrl: string | null
    imageStorageKey: string | null
    passwordUpdatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    imageUrl: number
    imageStorageKey: number
    passwordUpdatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    imageUrl?: true
    imageStorageKey?: true
    passwordUpdatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    imageUrl?: true
    imageStorageKey?: true
    passwordUpdatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    imageUrl?: true
    imageStorageKey?: true
    passwordUpdatedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    password: string
    imageUrl: string | null
    imageStorageKey: string | null
    passwordUpdatedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    imageUrl?: boolean
    imageStorageKey?: boolean
    passwordUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tracks?: boolean | User$tracksArgs<ExtArgs>
    albums?: boolean | User$albumsArgs<ExtArgs>
    artists?: boolean | User$artistsArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    imageUrl?: boolean
    imageStorageKey?: boolean
    passwordUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    imageUrl?: boolean
    imageStorageKey?: boolean
    passwordUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    imageUrl?: boolean
    imageStorageKey?: boolean
    passwordUpdatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "imageUrl" | "imageStorageKey" | "passwordUpdatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tracks?: boolean | User$tracksArgs<ExtArgs>
    albums?: boolean | User$albumsArgs<ExtArgs>
    artists?: boolean | User$artistsArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      tracks: Prisma.$TrackEditedPayload<ExtArgs>[]
      albums: Prisma.$AlbumEditedPayload<ExtArgs>[]
      artists: Prisma.$ArtistEditedPayload<ExtArgs>[]
      following: Prisma.$UserPayload<ExtArgs>[]
      followers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
      imageUrl: string | null
      imageStorageKey: string | null
      passwordUpdatedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tracks<T extends User$tracksArgs<ExtArgs> = {}>(args?: Subset<T, User$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackEditedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    albums<T extends User$albumsArgs<ExtArgs> = {}>(args?: Subset<T, User$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumEditedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    artists<T extends User$artistsArgs<ExtArgs> = {}>(args?: Subset<T, User$artistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistEditedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends User$followersArgs<ExtArgs> = {}>(args?: Subset<T, User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly imageStorageKey: FieldRef<"User", 'String'>
    readonly passwordUpdatedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.tracks
   */
  export type User$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedInclude<ExtArgs> | null
    where?: TrackEditedWhereInput
    orderBy?: TrackEditedOrderByWithRelationInput | TrackEditedOrderByWithRelationInput[]
    cursor?: TrackEditedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackEditedScalarFieldEnum | TrackEditedScalarFieldEnum[]
  }

  /**
   * User.albums
   */
  export type User$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedInclude<ExtArgs> | null
    where?: AlbumEditedWhereInput
    orderBy?: AlbumEditedOrderByWithRelationInput | AlbumEditedOrderByWithRelationInput[]
    cursor?: AlbumEditedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumEditedScalarFieldEnum | AlbumEditedScalarFieldEnum[]
  }

  /**
   * User.artists
   */
  export type User$artistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedInclude<ExtArgs> | null
    where?: ArtistEditedWhereInput
    orderBy?: ArtistEditedOrderByWithRelationInput | ArtistEditedOrderByWithRelationInput[]
    cursor?: ArtistEditedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistEditedScalarFieldEnum | ArtistEditedScalarFieldEnum[]
  }

  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.followers
   */
  export type User$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TrackEdited
   */

  export type AggregateTrackEdited = {
    _count: TrackEditedCountAggregateOutputType | null
    _avg: TrackEditedAvgAggregateOutputType | null
    _sum: TrackEditedSumAggregateOutputType | null
    _min: TrackEditedMinAggregateOutputType | null
    _max: TrackEditedMaxAggregateOutputType | null
  }

  export type TrackEditedAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TrackEditedSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TrackEditedMinAggregateOutputType = {
    id: number | null
    idTrack: string | null
    idAlbum: string | null
    idArtist: string | null
    strTrack: string | null
    strAlbum: string | null
    strArtist: string | null
    strGenre: string | null
    strMood: string | null
    strStyle: string | null
    intDuration: string | null
    strDescriptionEN: string | null
    strTrackThumb: string | null
    strMusicVid: string | null
    strMusicVidDirector: string | null
    strMusicVidCompany: string | null
    intMusicVidViews: string | null
    intMusicVidLikes: string | null
    intTrackNumber: string | null
    commentary: string | null
    tag: string | null
    rating: string | null
    includesMetadata: boolean | null
    userId: number | null
  }

  export type TrackEditedMaxAggregateOutputType = {
    id: number | null
    idTrack: string | null
    idAlbum: string | null
    idArtist: string | null
    strTrack: string | null
    strAlbum: string | null
    strArtist: string | null
    strGenre: string | null
    strMood: string | null
    strStyle: string | null
    intDuration: string | null
    strDescriptionEN: string | null
    strTrackThumb: string | null
    strMusicVid: string | null
    strMusicVidDirector: string | null
    strMusicVidCompany: string | null
    intMusicVidViews: string | null
    intMusicVidLikes: string | null
    intTrackNumber: string | null
    commentary: string | null
    tag: string | null
    rating: string | null
    includesMetadata: boolean | null
    userId: number | null
  }

  export type TrackEditedCountAggregateOutputType = {
    id: number
    idTrack: number
    idAlbum: number
    idArtist: number
    strTrack: number
    strAlbum: number
    strArtist: number
    strGenre: number
    strMood: number
    strStyle: number
    intDuration: number
    strDescriptionEN: number
    strTrackThumb: number
    strMusicVid: number
    strMusicVidDirector: number
    strMusicVidCompany: number
    intMusicVidViews: number
    intMusicVidLikes: number
    intTrackNumber: number
    commentary: number
    tag: number
    rating: number
    includesMetadata: number
    userId: number
    _all: number
  }


  export type TrackEditedAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TrackEditedSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TrackEditedMinAggregateInputType = {
    id?: true
    idTrack?: true
    idAlbum?: true
    idArtist?: true
    strTrack?: true
    strAlbum?: true
    strArtist?: true
    strGenre?: true
    strMood?: true
    strStyle?: true
    intDuration?: true
    strDescriptionEN?: true
    strTrackThumb?: true
    strMusicVid?: true
    strMusicVidDirector?: true
    strMusicVidCompany?: true
    intMusicVidViews?: true
    intMusicVidLikes?: true
    intTrackNumber?: true
    commentary?: true
    tag?: true
    rating?: true
    includesMetadata?: true
    userId?: true
  }

  export type TrackEditedMaxAggregateInputType = {
    id?: true
    idTrack?: true
    idAlbum?: true
    idArtist?: true
    strTrack?: true
    strAlbum?: true
    strArtist?: true
    strGenre?: true
    strMood?: true
    strStyle?: true
    intDuration?: true
    strDescriptionEN?: true
    strTrackThumb?: true
    strMusicVid?: true
    strMusicVidDirector?: true
    strMusicVidCompany?: true
    intMusicVidViews?: true
    intMusicVidLikes?: true
    intTrackNumber?: true
    commentary?: true
    tag?: true
    rating?: true
    includesMetadata?: true
    userId?: true
  }

  export type TrackEditedCountAggregateInputType = {
    id?: true
    idTrack?: true
    idAlbum?: true
    idArtist?: true
    strTrack?: true
    strAlbum?: true
    strArtist?: true
    strGenre?: true
    strMood?: true
    strStyle?: true
    intDuration?: true
    strDescriptionEN?: true
    strTrackThumb?: true
    strMusicVid?: true
    strMusicVidDirector?: true
    strMusicVidCompany?: true
    intMusicVidViews?: true
    intMusicVidLikes?: true
    intTrackNumber?: true
    commentary?: true
    tag?: true
    rating?: true
    includesMetadata?: true
    userId?: true
    _all?: true
  }

  export type TrackEditedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackEdited to aggregate.
     */
    where?: TrackEditedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackEditeds to fetch.
     */
    orderBy?: TrackEditedOrderByWithRelationInput | TrackEditedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackEditedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackEditeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackEditeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackEditeds
    **/
    _count?: true | TrackEditedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackEditedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackEditedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackEditedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackEditedMaxAggregateInputType
  }

  export type GetTrackEditedAggregateType<T extends TrackEditedAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackEdited]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackEdited[P]>
      : GetScalarType<T[P], AggregateTrackEdited[P]>
  }




  export type TrackEditedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackEditedWhereInput
    orderBy?: TrackEditedOrderByWithAggregationInput | TrackEditedOrderByWithAggregationInput[]
    by: TrackEditedScalarFieldEnum[] | TrackEditedScalarFieldEnum
    having?: TrackEditedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackEditedCountAggregateInputType | true
    _avg?: TrackEditedAvgAggregateInputType
    _sum?: TrackEditedSumAggregateInputType
    _min?: TrackEditedMinAggregateInputType
    _max?: TrackEditedMaxAggregateInputType
  }

  export type TrackEditedGroupByOutputType = {
    id: number
    idTrack: string
    idAlbum: string
    idArtist: string
    strTrack: string
    strAlbum: string
    strArtist: string
    strGenre: string | null
    strMood: string | null
    strStyle: string | null
    intDuration: string | null
    strDescriptionEN: string | null
    strTrackThumb: string | null
    strMusicVid: string | null
    strMusicVidDirector: string | null
    strMusicVidCompany: string | null
    intMusicVidViews: string | null
    intMusicVidLikes: string | null
    intTrackNumber: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata: boolean
    userId: number | null
    _count: TrackEditedCountAggregateOutputType | null
    _avg: TrackEditedAvgAggregateOutputType | null
    _sum: TrackEditedSumAggregateOutputType | null
    _min: TrackEditedMinAggregateOutputType | null
    _max: TrackEditedMaxAggregateOutputType | null
  }

  type GetTrackEditedGroupByPayload<T extends TrackEditedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackEditedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackEditedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackEditedGroupByOutputType[P]>
            : GetScalarType<T[P], TrackEditedGroupByOutputType[P]>
        }
      >
    >


  export type TrackEditedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTrack?: boolean
    idAlbum?: boolean
    idArtist?: boolean
    strTrack?: boolean
    strAlbum?: boolean
    strArtist?: boolean
    strGenre?: boolean
    strMood?: boolean
    strStyle?: boolean
    intDuration?: boolean
    strDescriptionEN?: boolean
    strTrackThumb?: boolean
    strMusicVid?: boolean
    strMusicVidDirector?: boolean
    strMusicVidCompany?: boolean
    intMusicVidViews?: boolean
    intMusicVidLikes?: boolean
    intTrackNumber?: boolean
    commentary?: boolean
    tag?: boolean
    rating?: boolean
    includesMetadata?: boolean
    userId?: boolean
    User?: boolean | TrackEdited$UserArgs<ExtArgs>
  }, ExtArgs["result"]["trackEdited"]>

  export type TrackEditedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTrack?: boolean
    idAlbum?: boolean
    idArtist?: boolean
    strTrack?: boolean
    strAlbum?: boolean
    strArtist?: boolean
    strGenre?: boolean
    strMood?: boolean
    strStyle?: boolean
    intDuration?: boolean
    strDescriptionEN?: boolean
    strTrackThumb?: boolean
    strMusicVid?: boolean
    strMusicVidDirector?: boolean
    strMusicVidCompany?: boolean
    intMusicVidViews?: boolean
    intMusicVidLikes?: boolean
    intTrackNumber?: boolean
    commentary?: boolean
    tag?: boolean
    rating?: boolean
    includesMetadata?: boolean
    userId?: boolean
    User?: boolean | TrackEdited$UserArgs<ExtArgs>
  }, ExtArgs["result"]["trackEdited"]>

  export type TrackEditedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idTrack?: boolean
    idAlbum?: boolean
    idArtist?: boolean
    strTrack?: boolean
    strAlbum?: boolean
    strArtist?: boolean
    strGenre?: boolean
    strMood?: boolean
    strStyle?: boolean
    intDuration?: boolean
    strDescriptionEN?: boolean
    strTrackThumb?: boolean
    strMusicVid?: boolean
    strMusicVidDirector?: boolean
    strMusicVidCompany?: boolean
    intMusicVidViews?: boolean
    intMusicVidLikes?: boolean
    intTrackNumber?: boolean
    commentary?: boolean
    tag?: boolean
    rating?: boolean
    includesMetadata?: boolean
    userId?: boolean
    User?: boolean | TrackEdited$UserArgs<ExtArgs>
  }, ExtArgs["result"]["trackEdited"]>

  export type TrackEditedSelectScalar = {
    id?: boolean
    idTrack?: boolean
    idAlbum?: boolean
    idArtist?: boolean
    strTrack?: boolean
    strAlbum?: boolean
    strArtist?: boolean
    strGenre?: boolean
    strMood?: boolean
    strStyle?: boolean
    intDuration?: boolean
    strDescriptionEN?: boolean
    strTrackThumb?: boolean
    strMusicVid?: boolean
    strMusicVidDirector?: boolean
    strMusicVidCompany?: boolean
    intMusicVidViews?: boolean
    intMusicVidLikes?: boolean
    intTrackNumber?: boolean
    commentary?: boolean
    tag?: boolean
    rating?: boolean
    includesMetadata?: boolean
    userId?: boolean
  }

  export type TrackEditedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idTrack" | "idAlbum" | "idArtist" | "strTrack" | "strAlbum" | "strArtist" | "strGenre" | "strMood" | "strStyle" | "intDuration" | "strDescriptionEN" | "strTrackThumb" | "strMusicVid" | "strMusicVidDirector" | "strMusicVidCompany" | "intMusicVidViews" | "intMusicVidLikes" | "intTrackNumber" | "commentary" | "tag" | "rating" | "includesMetadata" | "userId", ExtArgs["result"]["trackEdited"]>
  export type TrackEditedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | TrackEdited$UserArgs<ExtArgs>
  }
  export type TrackEditedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | TrackEdited$UserArgs<ExtArgs>
  }
  export type TrackEditedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | TrackEdited$UserArgs<ExtArgs>
  }

  export type $TrackEditedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackEdited"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idTrack: string
      idAlbum: string
      idArtist: string
      strTrack: string
      strAlbum: string
      strArtist: string
      strGenre: string | null
      strMood: string | null
      strStyle: string | null
      intDuration: string | null
      strDescriptionEN: string | null
      strTrackThumb: string | null
      strMusicVid: string | null
      strMusicVidDirector: string | null
      strMusicVidCompany: string | null
      intMusicVidViews: string | null
      intMusicVidLikes: string | null
      intTrackNumber: string | null
      commentary: string
      tag: string
      rating: string
      includesMetadata: boolean
      userId: number | null
    }, ExtArgs["result"]["trackEdited"]>
    composites: {}
  }

  type TrackEditedGetPayload<S extends boolean | null | undefined | TrackEditedDefaultArgs> = $Result.GetResult<Prisma.$TrackEditedPayload, S>

  type TrackEditedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackEditedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackEditedCountAggregateInputType | true
    }

  export interface TrackEditedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackEdited'], meta: { name: 'TrackEdited' } }
    /**
     * Find zero or one TrackEdited that matches the filter.
     * @param {TrackEditedFindUniqueArgs} args - Arguments to find a TrackEdited
     * @example
     * // Get one TrackEdited
     * const trackEdited = await prisma.trackEdited.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackEditedFindUniqueArgs>(args: SelectSubset<T, TrackEditedFindUniqueArgs<ExtArgs>>): Prisma__TrackEditedClient<$Result.GetResult<Prisma.$TrackEditedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackEdited that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackEditedFindUniqueOrThrowArgs} args - Arguments to find a TrackEdited
     * @example
     * // Get one TrackEdited
     * const trackEdited = await prisma.trackEdited.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackEditedFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackEditedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackEditedClient<$Result.GetResult<Prisma.$TrackEditedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackEdited that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEditedFindFirstArgs} args - Arguments to find a TrackEdited
     * @example
     * // Get one TrackEdited
     * const trackEdited = await prisma.trackEdited.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackEditedFindFirstArgs>(args?: SelectSubset<T, TrackEditedFindFirstArgs<ExtArgs>>): Prisma__TrackEditedClient<$Result.GetResult<Prisma.$TrackEditedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackEdited that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEditedFindFirstOrThrowArgs} args - Arguments to find a TrackEdited
     * @example
     * // Get one TrackEdited
     * const trackEdited = await prisma.trackEdited.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackEditedFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackEditedFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackEditedClient<$Result.GetResult<Prisma.$TrackEditedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackEditeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEditedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackEditeds
     * const trackEditeds = await prisma.trackEdited.findMany()
     * 
     * // Get first 10 TrackEditeds
     * const trackEditeds = await prisma.trackEdited.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackEditedWithIdOnly = await prisma.trackEdited.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackEditedFindManyArgs>(args?: SelectSubset<T, TrackEditedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackEditedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackEdited.
     * @param {TrackEditedCreateArgs} args - Arguments to create a TrackEdited.
     * @example
     * // Create one TrackEdited
     * const TrackEdited = await prisma.trackEdited.create({
     *   data: {
     *     // ... data to create a TrackEdited
     *   }
     * })
     * 
     */
    create<T extends TrackEditedCreateArgs>(args: SelectSubset<T, TrackEditedCreateArgs<ExtArgs>>): Prisma__TrackEditedClient<$Result.GetResult<Prisma.$TrackEditedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackEditeds.
     * @param {TrackEditedCreateManyArgs} args - Arguments to create many TrackEditeds.
     * @example
     * // Create many TrackEditeds
     * const trackEdited = await prisma.trackEdited.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackEditedCreateManyArgs>(args?: SelectSubset<T, TrackEditedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackEditeds and returns the data saved in the database.
     * @param {TrackEditedCreateManyAndReturnArgs} args - Arguments to create many TrackEditeds.
     * @example
     * // Create many TrackEditeds
     * const trackEdited = await prisma.trackEdited.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackEditeds and only return the `id`
     * const trackEditedWithIdOnly = await prisma.trackEdited.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackEditedCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackEditedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackEditedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackEdited.
     * @param {TrackEditedDeleteArgs} args - Arguments to delete one TrackEdited.
     * @example
     * // Delete one TrackEdited
     * const TrackEdited = await prisma.trackEdited.delete({
     *   where: {
     *     // ... filter to delete one TrackEdited
     *   }
     * })
     * 
     */
    delete<T extends TrackEditedDeleteArgs>(args: SelectSubset<T, TrackEditedDeleteArgs<ExtArgs>>): Prisma__TrackEditedClient<$Result.GetResult<Prisma.$TrackEditedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackEdited.
     * @param {TrackEditedUpdateArgs} args - Arguments to update one TrackEdited.
     * @example
     * // Update one TrackEdited
     * const trackEdited = await prisma.trackEdited.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackEditedUpdateArgs>(args: SelectSubset<T, TrackEditedUpdateArgs<ExtArgs>>): Prisma__TrackEditedClient<$Result.GetResult<Prisma.$TrackEditedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackEditeds.
     * @param {TrackEditedDeleteManyArgs} args - Arguments to filter TrackEditeds to delete.
     * @example
     * // Delete a few TrackEditeds
     * const { count } = await prisma.trackEdited.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackEditedDeleteManyArgs>(args?: SelectSubset<T, TrackEditedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackEditeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEditedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackEditeds
     * const trackEdited = await prisma.trackEdited.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackEditedUpdateManyArgs>(args: SelectSubset<T, TrackEditedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackEditeds and returns the data updated in the database.
     * @param {TrackEditedUpdateManyAndReturnArgs} args - Arguments to update many TrackEditeds.
     * @example
     * // Update many TrackEditeds
     * const trackEdited = await prisma.trackEdited.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackEditeds and only return the `id`
     * const trackEditedWithIdOnly = await prisma.trackEdited.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackEditedUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackEditedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackEditedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackEdited.
     * @param {TrackEditedUpsertArgs} args - Arguments to update or create a TrackEdited.
     * @example
     * // Update or create a TrackEdited
     * const trackEdited = await prisma.trackEdited.upsert({
     *   create: {
     *     // ... data to create a TrackEdited
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackEdited we want to update
     *   }
     * })
     */
    upsert<T extends TrackEditedUpsertArgs>(args: SelectSubset<T, TrackEditedUpsertArgs<ExtArgs>>): Prisma__TrackEditedClient<$Result.GetResult<Prisma.$TrackEditedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackEditeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEditedCountArgs} args - Arguments to filter TrackEditeds to count.
     * @example
     * // Count the number of TrackEditeds
     * const count = await prisma.trackEdited.count({
     *   where: {
     *     // ... the filter for the TrackEditeds we want to count
     *   }
     * })
    **/
    count<T extends TrackEditedCountArgs>(
      args?: Subset<T, TrackEditedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackEditedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackEdited.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEditedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackEditedAggregateArgs>(args: Subset<T, TrackEditedAggregateArgs>): Prisma.PrismaPromise<GetTrackEditedAggregateType<T>>

    /**
     * Group by TrackEdited.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEditedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackEditedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackEditedGroupByArgs['orderBy'] }
        : { orderBy?: TrackEditedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackEditedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackEditedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackEdited model
   */
  readonly fields: TrackEditedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackEdited.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackEditedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends TrackEdited$UserArgs<ExtArgs> = {}>(args?: Subset<T, TrackEdited$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrackEdited model
   */
  interface TrackEditedFieldRefs {
    readonly id: FieldRef<"TrackEdited", 'Int'>
    readonly idTrack: FieldRef<"TrackEdited", 'String'>
    readonly idAlbum: FieldRef<"TrackEdited", 'String'>
    readonly idArtist: FieldRef<"TrackEdited", 'String'>
    readonly strTrack: FieldRef<"TrackEdited", 'String'>
    readonly strAlbum: FieldRef<"TrackEdited", 'String'>
    readonly strArtist: FieldRef<"TrackEdited", 'String'>
    readonly strGenre: FieldRef<"TrackEdited", 'String'>
    readonly strMood: FieldRef<"TrackEdited", 'String'>
    readonly strStyle: FieldRef<"TrackEdited", 'String'>
    readonly intDuration: FieldRef<"TrackEdited", 'String'>
    readonly strDescriptionEN: FieldRef<"TrackEdited", 'String'>
    readonly strTrackThumb: FieldRef<"TrackEdited", 'String'>
    readonly strMusicVid: FieldRef<"TrackEdited", 'String'>
    readonly strMusicVidDirector: FieldRef<"TrackEdited", 'String'>
    readonly strMusicVidCompany: FieldRef<"TrackEdited", 'String'>
    readonly intMusicVidViews: FieldRef<"TrackEdited", 'String'>
    readonly intMusicVidLikes: FieldRef<"TrackEdited", 'String'>
    readonly intTrackNumber: FieldRef<"TrackEdited", 'String'>
    readonly commentary: FieldRef<"TrackEdited", 'String'>
    readonly tag: FieldRef<"TrackEdited", 'String'>
    readonly rating: FieldRef<"TrackEdited", 'String'>
    readonly includesMetadata: FieldRef<"TrackEdited", 'Boolean'>
    readonly userId: FieldRef<"TrackEdited", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TrackEdited findUnique
   */
  export type TrackEditedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedInclude<ExtArgs> | null
    /**
     * Filter, which TrackEdited to fetch.
     */
    where: TrackEditedWhereUniqueInput
  }

  /**
   * TrackEdited findUniqueOrThrow
   */
  export type TrackEditedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedInclude<ExtArgs> | null
    /**
     * Filter, which TrackEdited to fetch.
     */
    where: TrackEditedWhereUniqueInput
  }

  /**
   * TrackEdited findFirst
   */
  export type TrackEditedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedInclude<ExtArgs> | null
    /**
     * Filter, which TrackEdited to fetch.
     */
    where?: TrackEditedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackEditeds to fetch.
     */
    orderBy?: TrackEditedOrderByWithRelationInput | TrackEditedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackEditeds.
     */
    cursor?: TrackEditedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackEditeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackEditeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackEditeds.
     */
    distinct?: TrackEditedScalarFieldEnum | TrackEditedScalarFieldEnum[]
  }

  /**
   * TrackEdited findFirstOrThrow
   */
  export type TrackEditedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedInclude<ExtArgs> | null
    /**
     * Filter, which TrackEdited to fetch.
     */
    where?: TrackEditedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackEditeds to fetch.
     */
    orderBy?: TrackEditedOrderByWithRelationInput | TrackEditedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackEditeds.
     */
    cursor?: TrackEditedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackEditeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackEditeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackEditeds.
     */
    distinct?: TrackEditedScalarFieldEnum | TrackEditedScalarFieldEnum[]
  }

  /**
   * TrackEdited findMany
   */
  export type TrackEditedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedInclude<ExtArgs> | null
    /**
     * Filter, which TrackEditeds to fetch.
     */
    where?: TrackEditedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackEditeds to fetch.
     */
    orderBy?: TrackEditedOrderByWithRelationInput | TrackEditedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackEditeds.
     */
    cursor?: TrackEditedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackEditeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackEditeds.
     */
    skip?: number
    distinct?: TrackEditedScalarFieldEnum | TrackEditedScalarFieldEnum[]
  }

  /**
   * TrackEdited create
   */
  export type TrackEditedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackEdited.
     */
    data: XOR<TrackEditedCreateInput, TrackEditedUncheckedCreateInput>
  }

  /**
   * TrackEdited createMany
   */
  export type TrackEditedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackEditeds.
     */
    data: TrackEditedCreateManyInput | TrackEditedCreateManyInput[]
  }

  /**
   * TrackEdited createManyAndReturn
   */
  export type TrackEditedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * The data used to create many TrackEditeds.
     */
    data: TrackEditedCreateManyInput | TrackEditedCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackEdited update
   */
  export type TrackEditedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackEdited.
     */
    data: XOR<TrackEditedUpdateInput, TrackEditedUncheckedUpdateInput>
    /**
     * Choose, which TrackEdited to update.
     */
    where: TrackEditedWhereUniqueInput
  }

  /**
   * TrackEdited updateMany
   */
  export type TrackEditedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackEditeds.
     */
    data: XOR<TrackEditedUpdateManyMutationInput, TrackEditedUncheckedUpdateManyInput>
    /**
     * Filter which TrackEditeds to update
     */
    where?: TrackEditedWhereInput
    /**
     * Limit how many TrackEditeds to update.
     */
    limit?: number
  }

  /**
   * TrackEdited updateManyAndReturn
   */
  export type TrackEditedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * The data used to update TrackEditeds.
     */
    data: XOR<TrackEditedUpdateManyMutationInput, TrackEditedUncheckedUpdateManyInput>
    /**
     * Filter which TrackEditeds to update
     */
    where?: TrackEditedWhereInput
    /**
     * Limit how many TrackEditeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackEdited upsert
   */
  export type TrackEditedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackEdited to update in case it exists.
     */
    where: TrackEditedWhereUniqueInput
    /**
     * In case the TrackEdited found by the `where` argument doesn't exist, create a new TrackEdited with this data.
     */
    create: XOR<TrackEditedCreateInput, TrackEditedUncheckedCreateInput>
    /**
     * In case the TrackEdited was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackEditedUpdateInput, TrackEditedUncheckedUpdateInput>
  }

  /**
   * TrackEdited delete
   */
  export type TrackEditedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedInclude<ExtArgs> | null
    /**
     * Filter which TrackEdited to delete.
     */
    where: TrackEditedWhereUniqueInput
  }

  /**
   * TrackEdited deleteMany
   */
  export type TrackEditedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackEditeds to delete
     */
    where?: TrackEditedWhereInput
    /**
     * Limit how many TrackEditeds to delete.
     */
    limit?: number
  }

  /**
   * TrackEdited.User
   */
  export type TrackEdited$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * TrackEdited without action
   */
  export type TrackEditedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEdited
     */
    select?: TrackEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEdited
     */
    omit?: TrackEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEditedInclude<ExtArgs> | null
  }


  /**
   * Model AlbumEdited
   */

  export type AggregateAlbumEdited = {
    _count: AlbumEditedCountAggregateOutputType | null
    _avg: AlbumEditedAvgAggregateOutputType | null
    _sum: AlbumEditedSumAggregateOutputType | null
    _min: AlbumEditedMinAggregateOutputType | null
    _max: AlbumEditedMaxAggregateOutputType | null
  }

  export type AlbumEditedAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AlbumEditedSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AlbumEditedMinAggregateOutputType = {
    id: number | null
    idAlbum: string | null
    idArtist: string | null
    strAlbum: string | null
    strArtist: string | null
    intYearReleased: string | null
    strGenre: string | null
    strStyle: string | null
    strLabel: string | null
    strReleaseFormat: string | null
    strAlbumThumb: string | null
    strAlbumBack: string | null
    strAlbumCDart: string | null
    strAlbum3DThumb: string | null
    strDescriptionEN: string | null
    strMood: string | null
    strSpeed: string | null
    strWikipediaID: string | null
    commentary: string | null
    tag: string | null
    rating: string | null
    includesMetadata: boolean | null
    userId: number | null
  }

  export type AlbumEditedMaxAggregateOutputType = {
    id: number | null
    idAlbum: string | null
    idArtist: string | null
    strAlbum: string | null
    strArtist: string | null
    intYearReleased: string | null
    strGenre: string | null
    strStyle: string | null
    strLabel: string | null
    strReleaseFormat: string | null
    strAlbumThumb: string | null
    strAlbumBack: string | null
    strAlbumCDart: string | null
    strAlbum3DThumb: string | null
    strDescriptionEN: string | null
    strMood: string | null
    strSpeed: string | null
    strWikipediaID: string | null
    commentary: string | null
    tag: string | null
    rating: string | null
    includesMetadata: boolean | null
    userId: number | null
  }

  export type AlbumEditedCountAggregateOutputType = {
    id: number
    idAlbum: number
    idArtist: number
    strAlbum: number
    strArtist: number
    intYearReleased: number
    strGenre: number
    strStyle: number
    strLabel: number
    strReleaseFormat: number
    strAlbumThumb: number
    strAlbumBack: number
    strAlbumCDart: number
    strAlbum3DThumb: number
    strDescriptionEN: number
    strMood: number
    strSpeed: number
    strWikipediaID: number
    commentary: number
    tag: number
    rating: number
    includesMetadata: number
    userId: number
    _all: number
  }


  export type AlbumEditedAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AlbumEditedSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AlbumEditedMinAggregateInputType = {
    id?: true
    idAlbum?: true
    idArtist?: true
    strAlbum?: true
    strArtist?: true
    intYearReleased?: true
    strGenre?: true
    strStyle?: true
    strLabel?: true
    strReleaseFormat?: true
    strAlbumThumb?: true
    strAlbumBack?: true
    strAlbumCDart?: true
    strAlbum3DThumb?: true
    strDescriptionEN?: true
    strMood?: true
    strSpeed?: true
    strWikipediaID?: true
    commentary?: true
    tag?: true
    rating?: true
    includesMetadata?: true
    userId?: true
  }

  export type AlbumEditedMaxAggregateInputType = {
    id?: true
    idAlbum?: true
    idArtist?: true
    strAlbum?: true
    strArtist?: true
    intYearReleased?: true
    strGenre?: true
    strStyle?: true
    strLabel?: true
    strReleaseFormat?: true
    strAlbumThumb?: true
    strAlbumBack?: true
    strAlbumCDart?: true
    strAlbum3DThumb?: true
    strDescriptionEN?: true
    strMood?: true
    strSpeed?: true
    strWikipediaID?: true
    commentary?: true
    tag?: true
    rating?: true
    includesMetadata?: true
    userId?: true
  }

  export type AlbumEditedCountAggregateInputType = {
    id?: true
    idAlbum?: true
    idArtist?: true
    strAlbum?: true
    strArtist?: true
    intYearReleased?: true
    strGenre?: true
    strStyle?: true
    strLabel?: true
    strReleaseFormat?: true
    strAlbumThumb?: true
    strAlbumBack?: true
    strAlbumCDart?: true
    strAlbum3DThumb?: true
    strDescriptionEN?: true
    strMood?: true
    strSpeed?: true
    strWikipediaID?: true
    commentary?: true
    tag?: true
    rating?: true
    includesMetadata?: true
    userId?: true
    _all?: true
  }

  export type AlbumEditedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumEdited to aggregate.
     */
    where?: AlbumEditedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumEditeds to fetch.
     */
    orderBy?: AlbumEditedOrderByWithRelationInput | AlbumEditedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumEditedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumEditeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumEditeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlbumEditeds
    **/
    _count?: true | AlbumEditedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumEditedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumEditedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumEditedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumEditedMaxAggregateInputType
  }

  export type GetAlbumEditedAggregateType<T extends AlbumEditedAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbumEdited]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbumEdited[P]>
      : GetScalarType<T[P], AggregateAlbumEdited[P]>
  }




  export type AlbumEditedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumEditedWhereInput
    orderBy?: AlbumEditedOrderByWithAggregationInput | AlbumEditedOrderByWithAggregationInput[]
    by: AlbumEditedScalarFieldEnum[] | AlbumEditedScalarFieldEnum
    having?: AlbumEditedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumEditedCountAggregateInputType | true
    _avg?: AlbumEditedAvgAggregateInputType
    _sum?: AlbumEditedSumAggregateInputType
    _min?: AlbumEditedMinAggregateInputType
    _max?: AlbumEditedMaxAggregateInputType
  }

  export type AlbumEditedGroupByOutputType = {
    id: number
    idAlbum: string
    idArtist: string
    strAlbum: string
    strArtist: string
    intYearReleased: string
    strGenre: string | null
    strStyle: string | null
    strLabel: string | null
    strReleaseFormat: string | null
    strAlbumThumb: string | null
    strAlbumBack: string | null
    strAlbumCDart: string | null
    strAlbum3DThumb: string | null
    strDescriptionEN: string | null
    strMood: string | null
    strSpeed: string | null
    strWikipediaID: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata: boolean
    userId: number | null
    _count: AlbumEditedCountAggregateOutputType | null
    _avg: AlbumEditedAvgAggregateOutputType | null
    _sum: AlbumEditedSumAggregateOutputType | null
    _min: AlbumEditedMinAggregateOutputType | null
    _max: AlbumEditedMaxAggregateOutputType | null
  }

  type GetAlbumEditedGroupByPayload<T extends AlbumEditedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumEditedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumEditedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumEditedGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumEditedGroupByOutputType[P]>
        }
      >
    >


  export type AlbumEditedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAlbum?: boolean
    idArtist?: boolean
    strAlbum?: boolean
    strArtist?: boolean
    intYearReleased?: boolean
    strGenre?: boolean
    strStyle?: boolean
    strLabel?: boolean
    strReleaseFormat?: boolean
    strAlbumThumb?: boolean
    strAlbumBack?: boolean
    strAlbumCDart?: boolean
    strAlbum3DThumb?: boolean
    strDescriptionEN?: boolean
    strMood?: boolean
    strSpeed?: boolean
    strWikipediaID?: boolean
    commentary?: boolean
    tag?: boolean
    rating?: boolean
    includesMetadata?: boolean
    userId?: boolean
    User?: boolean | AlbumEdited$UserArgs<ExtArgs>
  }, ExtArgs["result"]["albumEdited"]>

  export type AlbumEditedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAlbum?: boolean
    idArtist?: boolean
    strAlbum?: boolean
    strArtist?: boolean
    intYearReleased?: boolean
    strGenre?: boolean
    strStyle?: boolean
    strLabel?: boolean
    strReleaseFormat?: boolean
    strAlbumThumb?: boolean
    strAlbumBack?: boolean
    strAlbumCDart?: boolean
    strAlbum3DThumb?: boolean
    strDescriptionEN?: boolean
    strMood?: boolean
    strSpeed?: boolean
    strWikipediaID?: boolean
    commentary?: boolean
    tag?: boolean
    rating?: boolean
    includesMetadata?: boolean
    userId?: boolean
    User?: boolean | AlbumEdited$UserArgs<ExtArgs>
  }, ExtArgs["result"]["albumEdited"]>

  export type AlbumEditedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAlbum?: boolean
    idArtist?: boolean
    strAlbum?: boolean
    strArtist?: boolean
    intYearReleased?: boolean
    strGenre?: boolean
    strStyle?: boolean
    strLabel?: boolean
    strReleaseFormat?: boolean
    strAlbumThumb?: boolean
    strAlbumBack?: boolean
    strAlbumCDart?: boolean
    strAlbum3DThumb?: boolean
    strDescriptionEN?: boolean
    strMood?: boolean
    strSpeed?: boolean
    strWikipediaID?: boolean
    commentary?: boolean
    tag?: boolean
    rating?: boolean
    includesMetadata?: boolean
    userId?: boolean
    User?: boolean | AlbumEdited$UserArgs<ExtArgs>
  }, ExtArgs["result"]["albumEdited"]>

  export type AlbumEditedSelectScalar = {
    id?: boolean
    idAlbum?: boolean
    idArtist?: boolean
    strAlbum?: boolean
    strArtist?: boolean
    intYearReleased?: boolean
    strGenre?: boolean
    strStyle?: boolean
    strLabel?: boolean
    strReleaseFormat?: boolean
    strAlbumThumb?: boolean
    strAlbumBack?: boolean
    strAlbumCDart?: boolean
    strAlbum3DThumb?: boolean
    strDescriptionEN?: boolean
    strMood?: boolean
    strSpeed?: boolean
    strWikipediaID?: boolean
    commentary?: boolean
    tag?: boolean
    rating?: boolean
    includesMetadata?: boolean
    userId?: boolean
  }

  export type AlbumEditedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idAlbum" | "idArtist" | "strAlbum" | "strArtist" | "intYearReleased" | "strGenre" | "strStyle" | "strLabel" | "strReleaseFormat" | "strAlbumThumb" | "strAlbumBack" | "strAlbumCDart" | "strAlbum3DThumb" | "strDescriptionEN" | "strMood" | "strSpeed" | "strWikipediaID" | "commentary" | "tag" | "rating" | "includesMetadata" | "userId", ExtArgs["result"]["albumEdited"]>
  export type AlbumEditedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AlbumEdited$UserArgs<ExtArgs>
  }
  export type AlbumEditedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AlbumEdited$UserArgs<ExtArgs>
  }
  export type AlbumEditedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AlbumEdited$UserArgs<ExtArgs>
  }

  export type $AlbumEditedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlbumEdited"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idAlbum: string
      idArtist: string
      strAlbum: string
      strArtist: string
      intYearReleased: string
      strGenre: string | null
      strStyle: string | null
      strLabel: string | null
      strReleaseFormat: string | null
      strAlbumThumb: string | null
      strAlbumBack: string | null
      strAlbumCDart: string | null
      strAlbum3DThumb: string | null
      strDescriptionEN: string | null
      strMood: string | null
      strSpeed: string | null
      strWikipediaID: string | null
      commentary: string
      tag: string
      rating: string
      includesMetadata: boolean
      userId: number | null
    }, ExtArgs["result"]["albumEdited"]>
    composites: {}
  }

  type AlbumEditedGetPayload<S extends boolean | null | undefined | AlbumEditedDefaultArgs> = $Result.GetResult<Prisma.$AlbumEditedPayload, S>

  type AlbumEditedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumEditedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumEditedCountAggregateInputType | true
    }

  export interface AlbumEditedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlbumEdited'], meta: { name: 'AlbumEdited' } }
    /**
     * Find zero or one AlbumEdited that matches the filter.
     * @param {AlbumEditedFindUniqueArgs} args - Arguments to find a AlbumEdited
     * @example
     * // Get one AlbumEdited
     * const albumEdited = await prisma.albumEdited.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumEditedFindUniqueArgs>(args: SelectSubset<T, AlbumEditedFindUniqueArgs<ExtArgs>>): Prisma__AlbumEditedClient<$Result.GetResult<Prisma.$AlbumEditedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlbumEdited that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumEditedFindUniqueOrThrowArgs} args - Arguments to find a AlbumEdited
     * @example
     * // Get one AlbumEdited
     * const albumEdited = await prisma.albumEdited.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumEditedFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumEditedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumEditedClient<$Result.GetResult<Prisma.$AlbumEditedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlbumEdited that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumEditedFindFirstArgs} args - Arguments to find a AlbumEdited
     * @example
     * // Get one AlbumEdited
     * const albumEdited = await prisma.albumEdited.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumEditedFindFirstArgs>(args?: SelectSubset<T, AlbumEditedFindFirstArgs<ExtArgs>>): Prisma__AlbumEditedClient<$Result.GetResult<Prisma.$AlbumEditedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlbumEdited that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumEditedFindFirstOrThrowArgs} args - Arguments to find a AlbumEdited
     * @example
     * // Get one AlbumEdited
     * const albumEdited = await prisma.albumEdited.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumEditedFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumEditedFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumEditedClient<$Result.GetResult<Prisma.$AlbumEditedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlbumEditeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumEditedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlbumEditeds
     * const albumEditeds = await prisma.albumEdited.findMany()
     * 
     * // Get first 10 AlbumEditeds
     * const albumEditeds = await prisma.albumEdited.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumEditedWithIdOnly = await prisma.albumEdited.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumEditedFindManyArgs>(args?: SelectSubset<T, AlbumEditedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumEditedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlbumEdited.
     * @param {AlbumEditedCreateArgs} args - Arguments to create a AlbumEdited.
     * @example
     * // Create one AlbumEdited
     * const AlbumEdited = await prisma.albumEdited.create({
     *   data: {
     *     // ... data to create a AlbumEdited
     *   }
     * })
     * 
     */
    create<T extends AlbumEditedCreateArgs>(args: SelectSubset<T, AlbumEditedCreateArgs<ExtArgs>>): Prisma__AlbumEditedClient<$Result.GetResult<Prisma.$AlbumEditedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlbumEditeds.
     * @param {AlbumEditedCreateManyArgs} args - Arguments to create many AlbumEditeds.
     * @example
     * // Create many AlbumEditeds
     * const albumEdited = await prisma.albumEdited.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumEditedCreateManyArgs>(args?: SelectSubset<T, AlbumEditedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlbumEditeds and returns the data saved in the database.
     * @param {AlbumEditedCreateManyAndReturnArgs} args - Arguments to create many AlbumEditeds.
     * @example
     * // Create many AlbumEditeds
     * const albumEdited = await prisma.albumEdited.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlbumEditeds and only return the `id`
     * const albumEditedWithIdOnly = await prisma.albumEdited.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumEditedCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumEditedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumEditedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlbumEdited.
     * @param {AlbumEditedDeleteArgs} args - Arguments to delete one AlbumEdited.
     * @example
     * // Delete one AlbumEdited
     * const AlbumEdited = await prisma.albumEdited.delete({
     *   where: {
     *     // ... filter to delete one AlbumEdited
     *   }
     * })
     * 
     */
    delete<T extends AlbumEditedDeleteArgs>(args: SelectSubset<T, AlbumEditedDeleteArgs<ExtArgs>>): Prisma__AlbumEditedClient<$Result.GetResult<Prisma.$AlbumEditedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlbumEdited.
     * @param {AlbumEditedUpdateArgs} args - Arguments to update one AlbumEdited.
     * @example
     * // Update one AlbumEdited
     * const albumEdited = await prisma.albumEdited.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumEditedUpdateArgs>(args: SelectSubset<T, AlbumEditedUpdateArgs<ExtArgs>>): Prisma__AlbumEditedClient<$Result.GetResult<Prisma.$AlbumEditedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlbumEditeds.
     * @param {AlbumEditedDeleteManyArgs} args - Arguments to filter AlbumEditeds to delete.
     * @example
     * // Delete a few AlbumEditeds
     * const { count } = await prisma.albumEdited.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumEditedDeleteManyArgs>(args?: SelectSubset<T, AlbumEditedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumEditeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumEditedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlbumEditeds
     * const albumEdited = await prisma.albumEdited.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumEditedUpdateManyArgs>(args: SelectSubset<T, AlbumEditedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumEditeds and returns the data updated in the database.
     * @param {AlbumEditedUpdateManyAndReturnArgs} args - Arguments to update many AlbumEditeds.
     * @example
     * // Update many AlbumEditeds
     * const albumEdited = await prisma.albumEdited.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlbumEditeds and only return the `id`
     * const albumEditedWithIdOnly = await prisma.albumEdited.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlbumEditedUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumEditedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumEditedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlbumEdited.
     * @param {AlbumEditedUpsertArgs} args - Arguments to update or create a AlbumEdited.
     * @example
     * // Update or create a AlbumEdited
     * const albumEdited = await prisma.albumEdited.upsert({
     *   create: {
     *     // ... data to create a AlbumEdited
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlbumEdited we want to update
     *   }
     * })
     */
    upsert<T extends AlbumEditedUpsertArgs>(args: SelectSubset<T, AlbumEditedUpsertArgs<ExtArgs>>): Prisma__AlbumEditedClient<$Result.GetResult<Prisma.$AlbumEditedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlbumEditeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumEditedCountArgs} args - Arguments to filter AlbumEditeds to count.
     * @example
     * // Count the number of AlbumEditeds
     * const count = await prisma.albumEdited.count({
     *   where: {
     *     // ... the filter for the AlbumEditeds we want to count
     *   }
     * })
    **/
    count<T extends AlbumEditedCountArgs>(
      args?: Subset<T, AlbumEditedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumEditedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlbumEdited.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumEditedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumEditedAggregateArgs>(args: Subset<T, AlbumEditedAggregateArgs>): Prisma.PrismaPromise<GetAlbumEditedAggregateType<T>>

    /**
     * Group by AlbumEdited.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumEditedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumEditedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumEditedGroupByArgs['orderBy'] }
        : { orderBy?: AlbumEditedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumEditedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumEditedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlbumEdited model
   */
  readonly fields: AlbumEditedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlbumEdited.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumEditedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends AlbumEdited$UserArgs<ExtArgs> = {}>(args?: Subset<T, AlbumEdited$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlbumEdited model
   */
  interface AlbumEditedFieldRefs {
    readonly id: FieldRef<"AlbumEdited", 'Int'>
    readonly idAlbum: FieldRef<"AlbumEdited", 'String'>
    readonly idArtist: FieldRef<"AlbumEdited", 'String'>
    readonly strAlbum: FieldRef<"AlbumEdited", 'String'>
    readonly strArtist: FieldRef<"AlbumEdited", 'String'>
    readonly intYearReleased: FieldRef<"AlbumEdited", 'String'>
    readonly strGenre: FieldRef<"AlbumEdited", 'String'>
    readonly strStyle: FieldRef<"AlbumEdited", 'String'>
    readonly strLabel: FieldRef<"AlbumEdited", 'String'>
    readonly strReleaseFormat: FieldRef<"AlbumEdited", 'String'>
    readonly strAlbumThumb: FieldRef<"AlbumEdited", 'String'>
    readonly strAlbumBack: FieldRef<"AlbumEdited", 'String'>
    readonly strAlbumCDart: FieldRef<"AlbumEdited", 'String'>
    readonly strAlbum3DThumb: FieldRef<"AlbumEdited", 'String'>
    readonly strDescriptionEN: FieldRef<"AlbumEdited", 'String'>
    readonly strMood: FieldRef<"AlbumEdited", 'String'>
    readonly strSpeed: FieldRef<"AlbumEdited", 'String'>
    readonly strWikipediaID: FieldRef<"AlbumEdited", 'String'>
    readonly commentary: FieldRef<"AlbumEdited", 'String'>
    readonly tag: FieldRef<"AlbumEdited", 'String'>
    readonly rating: FieldRef<"AlbumEdited", 'String'>
    readonly includesMetadata: FieldRef<"AlbumEdited", 'Boolean'>
    readonly userId: FieldRef<"AlbumEdited", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AlbumEdited findUnique
   */
  export type AlbumEditedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedInclude<ExtArgs> | null
    /**
     * Filter, which AlbumEdited to fetch.
     */
    where: AlbumEditedWhereUniqueInput
  }

  /**
   * AlbumEdited findUniqueOrThrow
   */
  export type AlbumEditedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedInclude<ExtArgs> | null
    /**
     * Filter, which AlbumEdited to fetch.
     */
    where: AlbumEditedWhereUniqueInput
  }

  /**
   * AlbumEdited findFirst
   */
  export type AlbumEditedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedInclude<ExtArgs> | null
    /**
     * Filter, which AlbumEdited to fetch.
     */
    where?: AlbumEditedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumEditeds to fetch.
     */
    orderBy?: AlbumEditedOrderByWithRelationInput | AlbumEditedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumEditeds.
     */
    cursor?: AlbumEditedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumEditeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumEditeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumEditeds.
     */
    distinct?: AlbumEditedScalarFieldEnum | AlbumEditedScalarFieldEnum[]
  }

  /**
   * AlbumEdited findFirstOrThrow
   */
  export type AlbumEditedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedInclude<ExtArgs> | null
    /**
     * Filter, which AlbumEdited to fetch.
     */
    where?: AlbumEditedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumEditeds to fetch.
     */
    orderBy?: AlbumEditedOrderByWithRelationInput | AlbumEditedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumEditeds.
     */
    cursor?: AlbumEditedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumEditeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumEditeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumEditeds.
     */
    distinct?: AlbumEditedScalarFieldEnum | AlbumEditedScalarFieldEnum[]
  }

  /**
   * AlbumEdited findMany
   */
  export type AlbumEditedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedInclude<ExtArgs> | null
    /**
     * Filter, which AlbumEditeds to fetch.
     */
    where?: AlbumEditedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumEditeds to fetch.
     */
    orderBy?: AlbumEditedOrderByWithRelationInput | AlbumEditedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlbumEditeds.
     */
    cursor?: AlbumEditedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumEditeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumEditeds.
     */
    skip?: number
    distinct?: AlbumEditedScalarFieldEnum | AlbumEditedScalarFieldEnum[]
  }

  /**
   * AlbumEdited create
   */
  export type AlbumEditedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedInclude<ExtArgs> | null
    /**
     * The data needed to create a AlbumEdited.
     */
    data: XOR<AlbumEditedCreateInput, AlbumEditedUncheckedCreateInput>
  }

  /**
   * AlbumEdited createMany
   */
  export type AlbumEditedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlbumEditeds.
     */
    data: AlbumEditedCreateManyInput | AlbumEditedCreateManyInput[]
  }

  /**
   * AlbumEdited createManyAndReturn
   */
  export type AlbumEditedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * The data used to create many AlbumEditeds.
     */
    data: AlbumEditedCreateManyInput | AlbumEditedCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumEdited update
   */
  export type AlbumEditedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedInclude<ExtArgs> | null
    /**
     * The data needed to update a AlbumEdited.
     */
    data: XOR<AlbumEditedUpdateInput, AlbumEditedUncheckedUpdateInput>
    /**
     * Choose, which AlbumEdited to update.
     */
    where: AlbumEditedWhereUniqueInput
  }

  /**
   * AlbumEdited updateMany
   */
  export type AlbumEditedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlbumEditeds.
     */
    data: XOR<AlbumEditedUpdateManyMutationInput, AlbumEditedUncheckedUpdateManyInput>
    /**
     * Filter which AlbumEditeds to update
     */
    where?: AlbumEditedWhereInput
    /**
     * Limit how many AlbumEditeds to update.
     */
    limit?: number
  }

  /**
   * AlbumEdited updateManyAndReturn
   */
  export type AlbumEditedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * The data used to update AlbumEditeds.
     */
    data: XOR<AlbumEditedUpdateManyMutationInput, AlbumEditedUncheckedUpdateManyInput>
    /**
     * Filter which AlbumEditeds to update
     */
    where?: AlbumEditedWhereInput
    /**
     * Limit how many AlbumEditeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumEdited upsert
   */
  export type AlbumEditedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedInclude<ExtArgs> | null
    /**
     * The filter to search for the AlbumEdited to update in case it exists.
     */
    where: AlbumEditedWhereUniqueInput
    /**
     * In case the AlbumEdited found by the `where` argument doesn't exist, create a new AlbumEdited with this data.
     */
    create: XOR<AlbumEditedCreateInput, AlbumEditedUncheckedCreateInput>
    /**
     * In case the AlbumEdited was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumEditedUpdateInput, AlbumEditedUncheckedUpdateInput>
  }

  /**
   * AlbumEdited delete
   */
  export type AlbumEditedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedInclude<ExtArgs> | null
    /**
     * Filter which AlbumEdited to delete.
     */
    where: AlbumEditedWhereUniqueInput
  }

  /**
   * AlbumEdited deleteMany
   */
  export type AlbumEditedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumEditeds to delete
     */
    where?: AlbumEditedWhereInput
    /**
     * Limit how many AlbumEditeds to delete.
     */
    limit?: number
  }

  /**
   * AlbumEdited.User
   */
  export type AlbumEdited$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AlbumEdited without action
   */
  export type AlbumEditedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumEdited
     */
    select?: AlbumEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumEdited
     */
    omit?: AlbumEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumEditedInclude<ExtArgs> | null
  }


  /**
   * Model ArtistEdited
   */

  export type AggregateArtistEdited = {
    _count: ArtistEditedCountAggregateOutputType | null
    _avg: ArtistEditedAvgAggregateOutputType | null
    _sum: ArtistEditedSumAggregateOutputType | null
    _min: ArtistEditedMinAggregateOutputType | null
    _max: ArtistEditedMaxAggregateOutputType | null
  }

  export type ArtistEditedAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ArtistEditedSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ArtistEditedMinAggregateOutputType = {
    id: number | null
    idArtist: string | null
    strArtist: string | null
    strArtistAlternate: string | null
    strLabel: string | null
    intFormedYear: string | null
    strGenre: string | null
    strStyle: string | null
    strMood: string | null
    strCountry: string | null
    intMembers: string | null
    strWebsite: string | null
    strBiographyEN: string | null
    strArtistThumb: string | null
    strArtistLogo: string | null
    strArtistClearart: string | null
    strArtistWideThumb: string | null
    strArtistFanart: string | null
    strArtistBanner: string | null
    commentary: string | null
    tag: string | null
    rating: string | null
    includesMetadata: boolean | null
    userId: number | null
  }

  export type ArtistEditedMaxAggregateOutputType = {
    id: number | null
    idArtist: string | null
    strArtist: string | null
    strArtistAlternate: string | null
    strLabel: string | null
    intFormedYear: string | null
    strGenre: string | null
    strStyle: string | null
    strMood: string | null
    strCountry: string | null
    intMembers: string | null
    strWebsite: string | null
    strBiographyEN: string | null
    strArtistThumb: string | null
    strArtistLogo: string | null
    strArtistClearart: string | null
    strArtistWideThumb: string | null
    strArtistFanart: string | null
    strArtistBanner: string | null
    commentary: string | null
    tag: string | null
    rating: string | null
    includesMetadata: boolean | null
    userId: number | null
  }

  export type ArtistEditedCountAggregateOutputType = {
    id: number
    idArtist: number
    strArtist: number
    strArtistAlternate: number
    strLabel: number
    intFormedYear: number
    strGenre: number
    strStyle: number
    strMood: number
    strCountry: number
    intMembers: number
    strWebsite: number
    strBiographyEN: number
    strArtistThumb: number
    strArtistLogo: number
    strArtistClearart: number
    strArtistWideThumb: number
    strArtistFanart: number
    strArtistBanner: number
    commentary: number
    tag: number
    rating: number
    includesMetadata: number
    userId: number
    _all: number
  }


  export type ArtistEditedAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ArtistEditedSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ArtistEditedMinAggregateInputType = {
    id?: true
    idArtist?: true
    strArtist?: true
    strArtistAlternate?: true
    strLabel?: true
    intFormedYear?: true
    strGenre?: true
    strStyle?: true
    strMood?: true
    strCountry?: true
    intMembers?: true
    strWebsite?: true
    strBiographyEN?: true
    strArtistThumb?: true
    strArtistLogo?: true
    strArtistClearart?: true
    strArtistWideThumb?: true
    strArtistFanart?: true
    strArtistBanner?: true
    commentary?: true
    tag?: true
    rating?: true
    includesMetadata?: true
    userId?: true
  }

  export type ArtistEditedMaxAggregateInputType = {
    id?: true
    idArtist?: true
    strArtist?: true
    strArtistAlternate?: true
    strLabel?: true
    intFormedYear?: true
    strGenre?: true
    strStyle?: true
    strMood?: true
    strCountry?: true
    intMembers?: true
    strWebsite?: true
    strBiographyEN?: true
    strArtistThumb?: true
    strArtistLogo?: true
    strArtistClearart?: true
    strArtistWideThumb?: true
    strArtistFanart?: true
    strArtistBanner?: true
    commentary?: true
    tag?: true
    rating?: true
    includesMetadata?: true
    userId?: true
  }

  export type ArtistEditedCountAggregateInputType = {
    id?: true
    idArtist?: true
    strArtist?: true
    strArtistAlternate?: true
    strLabel?: true
    intFormedYear?: true
    strGenre?: true
    strStyle?: true
    strMood?: true
    strCountry?: true
    intMembers?: true
    strWebsite?: true
    strBiographyEN?: true
    strArtistThumb?: true
    strArtistLogo?: true
    strArtistClearart?: true
    strArtistWideThumb?: true
    strArtistFanart?: true
    strArtistBanner?: true
    commentary?: true
    tag?: true
    rating?: true
    includesMetadata?: true
    userId?: true
    _all?: true
  }

  export type ArtistEditedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistEdited to aggregate.
     */
    where?: ArtistEditedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistEditeds to fetch.
     */
    orderBy?: ArtistEditedOrderByWithRelationInput | ArtistEditedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistEditedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistEditeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistEditeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistEditeds
    **/
    _count?: true | ArtistEditedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistEditedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistEditedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistEditedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistEditedMaxAggregateInputType
  }

  export type GetArtistEditedAggregateType<T extends ArtistEditedAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistEdited]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistEdited[P]>
      : GetScalarType<T[P], AggregateArtistEdited[P]>
  }




  export type ArtistEditedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistEditedWhereInput
    orderBy?: ArtistEditedOrderByWithAggregationInput | ArtistEditedOrderByWithAggregationInput[]
    by: ArtistEditedScalarFieldEnum[] | ArtistEditedScalarFieldEnum
    having?: ArtistEditedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistEditedCountAggregateInputType | true
    _avg?: ArtistEditedAvgAggregateInputType
    _sum?: ArtistEditedSumAggregateInputType
    _min?: ArtistEditedMinAggregateInputType
    _max?: ArtistEditedMaxAggregateInputType
  }

  export type ArtistEditedGroupByOutputType = {
    id: number
    idArtist: string
    strArtist: string
    strArtistAlternate: string | null
    strLabel: string | null
    intFormedYear: string | null
    strGenre: string | null
    strStyle: string | null
    strMood: string | null
    strCountry: string | null
    intMembers: string | null
    strWebsite: string | null
    strBiographyEN: string | null
    strArtistThumb: string | null
    strArtistLogo: string | null
    strArtistClearart: string | null
    strArtistWideThumb: string | null
    strArtistFanart: string | null
    strArtistBanner: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata: boolean
    userId: number | null
    _count: ArtistEditedCountAggregateOutputType | null
    _avg: ArtistEditedAvgAggregateOutputType | null
    _sum: ArtistEditedSumAggregateOutputType | null
    _min: ArtistEditedMinAggregateOutputType | null
    _max: ArtistEditedMaxAggregateOutputType | null
  }

  type GetArtistEditedGroupByPayload<T extends ArtistEditedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistEditedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistEditedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistEditedGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistEditedGroupByOutputType[P]>
        }
      >
    >


  export type ArtistEditedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idArtist?: boolean
    strArtist?: boolean
    strArtistAlternate?: boolean
    strLabel?: boolean
    intFormedYear?: boolean
    strGenre?: boolean
    strStyle?: boolean
    strMood?: boolean
    strCountry?: boolean
    intMembers?: boolean
    strWebsite?: boolean
    strBiographyEN?: boolean
    strArtistThumb?: boolean
    strArtistLogo?: boolean
    strArtistClearart?: boolean
    strArtistWideThumb?: boolean
    strArtistFanart?: boolean
    strArtistBanner?: boolean
    commentary?: boolean
    tag?: boolean
    rating?: boolean
    includesMetadata?: boolean
    userId?: boolean
    User?: boolean | ArtistEdited$UserArgs<ExtArgs>
  }, ExtArgs["result"]["artistEdited"]>

  export type ArtistEditedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idArtist?: boolean
    strArtist?: boolean
    strArtistAlternate?: boolean
    strLabel?: boolean
    intFormedYear?: boolean
    strGenre?: boolean
    strStyle?: boolean
    strMood?: boolean
    strCountry?: boolean
    intMembers?: boolean
    strWebsite?: boolean
    strBiographyEN?: boolean
    strArtistThumb?: boolean
    strArtistLogo?: boolean
    strArtistClearart?: boolean
    strArtistWideThumb?: boolean
    strArtistFanart?: boolean
    strArtistBanner?: boolean
    commentary?: boolean
    tag?: boolean
    rating?: boolean
    includesMetadata?: boolean
    userId?: boolean
    User?: boolean | ArtistEdited$UserArgs<ExtArgs>
  }, ExtArgs["result"]["artistEdited"]>

  export type ArtistEditedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idArtist?: boolean
    strArtist?: boolean
    strArtistAlternate?: boolean
    strLabel?: boolean
    intFormedYear?: boolean
    strGenre?: boolean
    strStyle?: boolean
    strMood?: boolean
    strCountry?: boolean
    intMembers?: boolean
    strWebsite?: boolean
    strBiographyEN?: boolean
    strArtistThumb?: boolean
    strArtistLogo?: boolean
    strArtistClearart?: boolean
    strArtistWideThumb?: boolean
    strArtistFanart?: boolean
    strArtistBanner?: boolean
    commentary?: boolean
    tag?: boolean
    rating?: boolean
    includesMetadata?: boolean
    userId?: boolean
    User?: boolean | ArtistEdited$UserArgs<ExtArgs>
  }, ExtArgs["result"]["artistEdited"]>

  export type ArtistEditedSelectScalar = {
    id?: boolean
    idArtist?: boolean
    strArtist?: boolean
    strArtistAlternate?: boolean
    strLabel?: boolean
    intFormedYear?: boolean
    strGenre?: boolean
    strStyle?: boolean
    strMood?: boolean
    strCountry?: boolean
    intMembers?: boolean
    strWebsite?: boolean
    strBiographyEN?: boolean
    strArtistThumb?: boolean
    strArtistLogo?: boolean
    strArtistClearart?: boolean
    strArtistWideThumb?: boolean
    strArtistFanart?: boolean
    strArtistBanner?: boolean
    commentary?: boolean
    tag?: boolean
    rating?: boolean
    includesMetadata?: boolean
    userId?: boolean
  }

  export type ArtistEditedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idArtist" | "strArtist" | "strArtistAlternate" | "strLabel" | "intFormedYear" | "strGenre" | "strStyle" | "strMood" | "strCountry" | "intMembers" | "strWebsite" | "strBiographyEN" | "strArtistThumb" | "strArtistLogo" | "strArtistClearart" | "strArtistWideThumb" | "strArtistFanart" | "strArtistBanner" | "commentary" | "tag" | "rating" | "includesMetadata" | "userId", ExtArgs["result"]["artistEdited"]>
  export type ArtistEditedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | ArtistEdited$UserArgs<ExtArgs>
  }
  export type ArtistEditedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | ArtistEdited$UserArgs<ExtArgs>
  }
  export type ArtistEditedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | ArtistEdited$UserArgs<ExtArgs>
  }

  export type $ArtistEditedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtistEdited"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idArtist: string
      strArtist: string
      strArtistAlternate: string | null
      strLabel: string | null
      intFormedYear: string | null
      strGenre: string | null
      strStyle: string | null
      strMood: string | null
      strCountry: string | null
      intMembers: string | null
      strWebsite: string | null
      strBiographyEN: string | null
      strArtistThumb: string | null
      strArtistLogo: string | null
      strArtistClearart: string | null
      strArtistWideThumb: string | null
      strArtistFanart: string | null
      strArtistBanner: string | null
      commentary: string
      tag: string
      rating: string
      includesMetadata: boolean
      userId: number | null
    }, ExtArgs["result"]["artistEdited"]>
    composites: {}
  }

  type ArtistEditedGetPayload<S extends boolean | null | undefined | ArtistEditedDefaultArgs> = $Result.GetResult<Prisma.$ArtistEditedPayload, S>

  type ArtistEditedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistEditedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistEditedCountAggregateInputType | true
    }

  export interface ArtistEditedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtistEdited'], meta: { name: 'ArtistEdited' } }
    /**
     * Find zero or one ArtistEdited that matches the filter.
     * @param {ArtistEditedFindUniqueArgs} args - Arguments to find a ArtistEdited
     * @example
     * // Get one ArtistEdited
     * const artistEdited = await prisma.artistEdited.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistEditedFindUniqueArgs>(args: SelectSubset<T, ArtistEditedFindUniqueArgs<ExtArgs>>): Prisma__ArtistEditedClient<$Result.GetResult<Prisma.$ArtistEditedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtistEdited that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistEditedFindUniqueOrThrowArgs} args - Arguments to find a ArtistEdited
     * @example
     * // Get one ArtistEdited
     * const artistEdited = await prisma.artistEdited.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistEditedFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistEditedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistEditedClient<$Result.GetResult<Prisma.$ArtistEditedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistEdited that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistEditedFindFirstArgs} args - Arguments to find a ArtistEdited
     * @example
     * // Get one ArtistEdited
     * const artistEdited = await prisma.artistEdited.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistEditedFindFirstArgs>(args?: SelectSubset<T, ArtistEditedFindFirstArgs<ExtArgs>>): Prisma__ArtistEditedClient<$Result.GetResult<Prisma.$ArtistEditedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistEdited that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistEditedFindFirstOrThrowArgs} args - Arguments to find a ArtistEdited
     * @example
     * // Get one ArtistEdited
     * const artistEdited = await prisma.artistEdited.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistEditedFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistEditedFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistEditedClient<$Result.GetResult<Prisma.$ArtistEditedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtistEditeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistEditedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistEditeds
     * const artistEditeds = await prisma.artistEdited.findMany()
     * 
     * // Get first 10 ArtistEditeds
     * const artistEditeds = await prisma.artistEdited.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistEditedWithIdOnly = await prisma.artistEdited.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistEditedFindManyArgs>(args?: SelectSubset<T, ArtistEditedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistEditedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtistEdited.
     * @param {ArtistEditedCreateArgs} args - Arguments to create a ArtistEdited.
     * @example
     * // Create one ArtistEdited
     * const ArtistEdited = await prisma.artistEdited.create({
     *   data: {
     *     // ... data to create a ArtistEdited
     *   }
     * })
     * 
     */
    create<T extends ArtistEditedCreateArgs>(args: SelectSubset<T, ArtistEditedCreateArgs<ExtArgs>>): Prisma__ArtistEditedClient<$Result.GetResult<Prisma.$ArtistEditedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtistEditeds.
     * @param {ArtistEditedCreateManyArgs} args - Arguments to create many ArtistEditeds.
     * @example
     * // Create many ArtistEditeds
     * const artistEdited = await prisma.artistEdited.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistEditedCreateManyArgs>(args?: SelectSubset<T, ArtistEditedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtistEditeds and returns the data saved in the database.
     * @param {ArtistEditedCreateManyAndReturnArgs} args - Arguments to create many ArtistEditeds.
     * @example
     * // Create many ArtistEditeds
     * const artistEdited = await prisma.artistEdited.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtistEditeds and only return the `id`
     * const artistEditedWithIdOnly = await prisma.artistEdited.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistEditedCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistEditedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistEditedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtistEdited.
     * @param {ArtistEditedDeleteArgs} args - Arguments to delete one ArtistEdited.
     * @example
     * // Delete one ArtistEdited
     * const ArtistEdited = await prisma.artistEdited.delete({
     *   where: {
     *     // ... filter to delete one ArtistEdited
     *   }
     * })
     * 
     */
    delete<T extends ArtistEditedDeleteArgs>(args: SelectSubset<T, ArtistEditedDeleteArgs<ExtArgs>>): Prisma__ArtistEditedClient<$Result.GetResult<Prisma.$ArtistEditedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtistEdited.
     * @param {ArtistEditedUpdateArgs} args - Arguments to update one ArtistEdited.
     * @example
     * // Update one ArtistEdited
     * const artistEdited = await prisma.artistEdited.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistEditedUpdateArgs>(args: SelectSubset<T, ArtistEditedUpdateArgs<ExtArgs>>): Prisma__ArtistEditedClient<$Result.GetResult<Prisma.$ArtistEditedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtistEditeds.
     * @param {ArtistEditedDeleteManyArgs} args - Arguments to filter ArtistEditeds to delete.
     * @example
     * // Delete a few ArtistEditeds
     * const { count } = await prisma.artistEdited.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistEditedDeleteManyArgs>(args?: SelectSubset<T, ArtistEditedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistEditeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistEditedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistEditeds
     * const artistEdited = await prisma.artistEdited.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistEditedUpdateManyArgs>(args: SelectSubset<T, ArtistEditedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistEditeds and returns the data updated in the database.
     * @param {ArtistEditedUpdateManyAndReturnArgs} args - Arguments to update many ArtistEditeds.
     * @example
     * // Update many ArtistEditeds
     * const artistEdited = await prisma.artistEdited.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtistEditeds and only return the `id`
     * const artistEditedWithIdOnly = await prisma.artistEdited.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtistEditedUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistEditedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistEditedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtistEdited.
     * @param {ArtistEditedUpsertArgs} args - Arguments to update or create a ArtistEdited.
     * @example
     * // Update or create a ArtistEdited
     * const artistEdited = await prisma.artistEdited.upsert({
     *   create: {
     *     // ... data to create a ArtistEdited
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistEdited we want to update
     *   }
     * })
     */
    upsert<T extends ArtistEditedUpsertArgs>(args: SelectSubset<T, ArtistEditedUpsertArgs<ExtArgs>>): Prisma__ArtistEditedClient<$Result.GetResult<Prisma.$ArtistEditedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtistEditeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistEditedCountArgs} args - Arguments to filter ArtistEditeds to count.
     * @example
     * // Count the number of ArtistEditeds
     * const count = await prisma.artistEdited.count({
     *   where: {
     *     // ... the filter for the ArtistEditeds we want to count
     *   }
     * })
    **/
    count<T extends ArtistEditedCountArgs>(
      args?: Subset<T, ArtistEditedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistEditedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistEdited.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistEditedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistEditedAggregateArgs>(args: Subset<T, ArtistEditedAggregateArgs>): Prisma.PrismaPromise<GetArtistEditedAggregateType<T>>

    /**
     * Group by ArtistEdited.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistEditedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistEditedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistEditedGroupByArgs['orderBy'] }
        : { orderBy?: ArtistEditedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistEditedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistEditedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtistEdited model
   */
  readonly fields: ArtistEditedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistEdited.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistEditedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends ArtistEdited$UserArgs<ExtArgs> = {}>(args?: Subset<T, ArtistEdited$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArtistEdited model
   */
  interface ArtistEditedFieldRefs {
    readonly id: FieldRef<"ArtistEdited", 'Int'>
    readonly idArtist: FieldRef<"ArtistEdited", 'String'>
    readonly strArtist: FieldRef<"ArtistEdited", 'String'>
    readonly strArtistAlternate: FieldRef<"ArtistEdited", 'String'>
    readonly strLabel: FieldRef<"ArtistEdited", 'String'>
    readonly intFormedYear: FieldRef<"ArtistEdited", 'String'>
    readonly strGenre: FieldRef<"ArtistEdited", 'String'>
    readonly strStyle: FieldRef<"ArtistEdited", 'String'>
    readonly strMood: FieldRef<"ArtistEdited", 'String'>
    readonly strCountry: FieldRef<"ArtistEdited", 'String'>
    readonly intMembers: FieldRef<"ArtistEdited", 'String'>
    readonly strWebsite: FieldRef<"ArtistEdited", 'String'>
    readonly strBiographyEN: FieldRef<"ArtistEdited", 'String'>
    readonly strArtistThumb: FieldRef<"ArtistEdited", 'String'>
    readonly strArtistLogo: FieldRef<"ArtistEdited", 'String'>
    readonly strArtistClearart: FieldRef<"ArtistEdited", 'String'>
    readonly strArtistWideThumb: FieldRef<"ArtistEdited", 'String'>
    readonly strArtistFanart: FieldRef<"ArtistEdited", 'String'>
    readonly strArtistBanner: FieldRef<"ArtistEdited", 'String'>
    readonly commentary: FieldRef<"ArtistEdited", 'String'>
    readonly tag: FieldRef<"ArtistEdited", 'String'>
    readonly rating: FieldRef<"ArtistEdited", 'String'>
    readonly includesMetadata: FieldRef<"ArtistEdited", 'Boolean'>
    readonly userId: FieldRef<"ArtistEdited", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ArtistEdited findUnique
   */
  export type ArtistEditedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedInclude<ExtArgs> | null
    /**
     * Filter, which ArtistEdited to fetch.
     */
    where: ArtistEditedWhereUniqueInput
  }

  /**
   * ArtistEdited findUniqueOrThrow
   */
  export type ArtistEditedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedInclude<ExtArgs> | null
    /**
     * Filter, which ArtistEdited to fetch.
     */
    where: ArtistEditedWhereUniqueInput
  }

  /**
   * ArtistEdited findFirst
   */
  export type ArtistEditedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedInclude<ExtArgs> | null
    /**
     * Filter, which ArtistEdited to fetch.
     */
    where?: ArtistEditedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistEditeds to fetch.
     */
    orderBy?: ArtistEditedOrderByWithRelationInput | ArtistEditedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistEditeds.
     */
    cursor?: ArtistEditedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistEditeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistEditeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistEditeds.
     */
    distinct?: ArtistEditedScalarFieldEnum | ArtistEditedScalarFieldEnum[]
  }

  /**
   * ArtistEdited findFirstOrThrow
   */
  export type ArtistEditedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedInclude<ExtArgs> | null
    /**
     * Filter, which ArtistEdited to fetch.
     */
    where?: ArtistEditedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistEditeds to fetch.
     */
    orderBy?: ArtistEditedOrderByWithRelationInput | ArtistEditedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistEditeds.
     */
    cursor?: ArtistEditedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistEditeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistEditeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistEditeds.
     */
    distinct?: ArtistEditedScalarFieldEnum | ArtistEditedScalarFieldEnum[]
  }

  /**
   * ArtistEdited findMany
   */
  export type ArtistEditedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedInclude<ExtArgs> | null
    /**
     * Filter, which ArtistEditeds to fetch.
     */
    where?: ArtistEditedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistEditeds to fetch.
     */
    orderBy?: ArtistEditedOrderByWithRelationInput | ArtistEditedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistEditeds.
     */
    cursor?: ArtistEditedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistEditeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistEditeds.
     */
    skip?: number
    distinct?: ArtistEditedScalarFieldEnum | ArtistEditedScalarFieldEnum[]
  }

  /**
   * ArtistEdited create
   */
  export type ArtistEditedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtistEdited.
     */
    data: XOR<ArtistEditedCreateInput, ArtistEditedUncheckedCreateInput>
  }

  /**
   * ArtistEdited createMany
   */
  export type ArtistEditedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtistEditeds.
     */
    data: ArtistEditedCreateManyInput | ArtistEditedCreateManyInput[]
  }

  /**
   * ArtistEdited createManyAndReturn
   */
  export type ArtistEditedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * The data used to create many ArtistEditeds.
     */
    data: ArtistEditedCreateManyInput | ArtistEditedCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistEdited update
   */
  export type ArtistEditedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtistEdited.
     */
    data: XOR<ArtistEditedUpdateInput, ArtistEditedUncheckedUpdateInput>
    /**
     * Choose, which ArtistEdited to update.
     */
    where: ArtistEditedWhereUniqueInput
  }

  /**
   * ArtistEdited updateMany
   */
  export type ArtistEditedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtistEditeds.
     */
    data: XOR<ArtistEditedUpdateManyMutationInput, ArtistEditedUncheckedUpdateManyInput>
    /**
     * Filter which ArtistEditeds to update
     */
    where?: ArtistEditedWhereInput
    /**
     * Limit how many ArtistEditeds to update.
     */
    limit?: number
  }

  /**
   * ArtistEdited updateManyAndReturn
   */
  export type ArtistEditedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * The data used to update ArtistEditeds.
     */
    data: XOR<ArtistEditedUpdateManyMutationInput, ArtistEditedUncheckedUpdateManyInput>
    /**
     * Filter which ArtistEditeds to update
     */
    where?: ArtistEditedWhereInput
    /**
     * Limit how many ArtistEditeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistEdited upsert
   */
  export type ArtistEditedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtistEdited to update in case it exists.
     */
    where: ArtistEditedWhereUniqueInput
    /**
     * In case the ArtistEdited found by the `where` argument doesn't exist, create a new ArtistEdited with this data.
     */
    create: XOR<ArtistEditedCreateInput, ArtistEditedUncheckedCreateInput>
    /**
     * In case the ArtistEdited was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistEditedUpdateInput, ArtistEditedUncheckedUpdateInput>
  }

  /**
   * ArtistEdited delete
   */
  export type ArtistEditedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedInclude<ExtArgs> | null
    /**
     * Filter which ArtistEdited to delete.
     */
    where: ArtistEditedWhereUniqueInput
  }

  /**
   * ArtistEdited deleteMany
   */
  export type ArtistEditedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistEditeds to delete
     */
    where?: ArtistEditedWhereInput
    /**
     * Limit how many ArtistEditeds to delete.
     */
    limit?: number
  }

  /**
   * ArtistEdited.User
   */
  export type ArtistEdited$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ArtistEdited without action
   */
  export type ArtistEditedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistEdited
     */
    select?: ArtistEditedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistEdited
     */
    omit?: ArtistEditedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistEditedInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    imageUrl: 'imageUrl',
    imageStorageKey: 'imageStorageKey',
    passwordUpdatedAt: 'passwordUpdatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TrackEditedScalarFieldEnum: {
    id: 'id',
    idTrack: 'idTrack',
    idAlbum: 'idAlbum',
    idArtist: 'idArtist',
    strTrack: 'strTrack',
    strAlbum: 'strAlbum',
    strArtist: 'strArtist',
    strGenre: 'strGenre',
    strMood: 'strMood',
    strStyle: 'strStyle',
    intDuration: 'intDuration',
    strDescriptionEN: 'strDescriptionEN',
    strTrackThumb: 'strTrackThumb',
    strMusicVid: 'strMusicVid',
    strMusicVidDirector: 'strMusicVidDirector',
    strMusicVidCompany: 'strMusicVidCompany',
    intMusicVidViews: 'intMusicVidViews',
    intMusicVidLikes: 'intMusicVidLikes',
    intTrackNumber: 'intTrackNumber',
    commentary: 'commentary',
    tag: 'tag',
    rating: 'rating',
    includesMetadata: 'includesMetadata',
    userId: 'userId'
  };

  export type TrackEditedScalarFieldEnum = (typeof TrackEditedScalarFieldEnum)[keyof typeof TrackEditedScalarFieldEnum]


  export const AlbumEditedScalarFieldEnum: {
    id: 'id',
    idAlbum: 'idAlbum',
    idArtist: 'idArtist',
    strAlbum: 'strAlbum',
    strArtist: 'strArtist',
    intYearReleased: 'intYearReleased',
    strGenre: 'strGenre',
    strStyle: 'strStyle',
    strLabel: 'strLabel',
    strReleaseFormat: 'strReleaseFormat',
    strAlbumThumb: 'strAlbumThumb',
    strAlbumBack: 'strAlbumBack',
    strAlbumCDart: 'strAlbumCDart',
    strAlbum3DThumb: 'strAlbum3DThumb',
    strDescriptionEN: 'strDescriptionEN',
    strMood: 'strMood',
    strSpeed: 'strSpeed',
    strWikipediaID: 'strWikipediaID',
    commentary: 'commentary',
    tag: 'tag',
    rating: 'rating',
    includesMetadata: 'includesMetadata',
    userId: 'userId'
  };

  export type AlbumEditedScalarFieldEnum = (typeof AlbumEditedScalarFieldEnum)[keyof typeof AlbumEditedScalarFieldEnum]


  export const ArtistEditedScalarFieldEnum: {
    id: 'id',
    idArtist: 'idArtist',
    strArtist: 'strArtist',
    strArtistAlternate: 'strArtistAlternate',
    strLabel: 'strLabel',
    intFormedYear: 'intFormedYear',
    strGenre: 'strGenre',
    strStyle: 'strStyle',
    strMood: 'strMood',
    strCountry: 'strCountry',
    intMembers: 'intMembers',
    strWebsite: 'strWebsite',
    strBiographyEN: 'strBiographyEN',
    strArtistThumb: 'strArtistThumb',
    strArtistLogo: 'strArtistLogo',
    strArtistClearart: 'strArtistClearart',
    strArtistWideThumb: 'strArtistWideThumb',
    strArtistFanart: 'strArtistFanart',
    strArtistBanner: 'strArtistBanner',
    commentary: 'commentary',
    tag: 'tag',
    rating: 'rating',
    includesMetadata: 'includesMetadata',
    userId: 'userId'
  };

  export type ArtistEditedScalarFieldEnum = (typeof ArtistEditedScalarFieldEnum)[keyof typeof ArtistEditedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntFilter<"Session"> | number
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: IntWithAggregatesFilter<"Session"> | number
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    imageStorageKey?: StringNullableFilter<"User"> | string | null
    passwordUpdatedAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    tracks?: TrackEditedListRelationFilter
    albums?: AlbumEditedListRelationFilter
    artists?: ArtistEditedListRelationFilter
    following?: UserListRelationFilter
    followers?: UserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageStorageKey?: SortOrderInput | SortOrder
    passwordUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    tracks?: TrackEditedOrderByRelationAggregateInput
    albums?: AlbumEditedOrderByRelationAggregateInput
    artists?: ArtistEditedOrderByRelationAggregateInput
    following?: UserOrderByRelationAggregateInput
    followers?: UserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    imageStorageKey?: StringNullableFilter<"User"> | string | null
    passwordUpdatedAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    tracks?: TrackEditedListRelationFilter
    albums?: AlbumEditedListRelationFilter
    artists?: ArtistEditedListRelationFilter
    following?: UserListRelationFilter
    followers?: UserListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageStorageKey?: SortOrderInput | SortOrder
    passwordUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageStorageKey?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordUpdatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TrackEditedWhereInput = {
    AND?: TrackEditedWhereInput | TrackEditedWhereInput[]
    OR?: TrackEditedWhereInput[]
    NOT?: TrackEditedWhereInput | TrackEditedWhereInput[]
    id?: IntFilter<"TrackEdited"> | number
    idTrack?: StringFilter<"TrackEdited"> | string
    idAlbum?: StringFilter<"TrackEdited"> | string
    idArtist?: StringFilter<"TrackEdited"> | string
    strTrack?: StringFilter<"TrackEdited"> | string
    strAlbum?: StringFilter<"TrackEdited"> | string
    strArtist?: StringFilter<"TrackEdited"> | string
    strGenre?: StringNullableFilter<"TrackEdited"> | string | null
    strMood?: StringNullableFilter<"TrackEdited"> | string | null
    strStyle?: StringNullableFilter<"TrackEdited"> | string | null
    intDuration?: StringNullableFilter<"TrackEdited"> | string | null
    strDescriptionEN?: StringNullableFilter<"TrackEdited"> | string | null
    strTrackThumb?: StringNullableFilter<"TrackEdited"> | string | null
    strMusicVid?: StringNullableFilter<"TrackEdited"> | string | null
    strMusicVidDirector?: StringNullableFilter<"TrackEdited"> | string | null
    strMusicVidCompany?: StringNullableFilter<"TrackEdited"> | string | null
    intMusicVidViews?: StringNullableFilter<"TrackEdited"> | string | null
    intMusicVidLikes?: StringNullableFilter<"TrackEdited"> | string | null
    intTrackNumber?: StringNullableFilter<"TrackEdited"> | string | null
    commentary?: StringFilter<"TrackEdited"> | string
    tag?: StringFilter<"TrackEdited"> | string
    rating?: StringFilter<"TrackEdited"> | string
    includesMetadata?: BoolFilter<"TrackEdited"> | boolean
    userId?: IntNullableFilter<"TrackEdited"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TrackEditedOrderByWithRelationInput = {
    id?: SortOrder
    idTrack?: SortOrder
    idAlbum?: SortOrder
    idArtist?: SortOrder
    strTrack?: SortOrder
    strAlbum?: SortOrder
    strArtist?: SortOrder
    strGenre?: SortOrderInput | SortOrder
    strMood?: SortOrderInput | SortOrder
    strStyle?: SortOrderInput | SortOrder
    intDuration?: SortOrderInput | SortOrder
    strDescriptionEN?: SortOrderInput | SortOrder
    strTrackThumb?: SortOrderInput | SortOrder
    strMusicVid?: SortOrderInput | SortOrder
    strMusicVidDirector?: SortOrderInput | SortOrder
    strMusicVidCompany?: SortOrderInput | SortOrder
    intMusicVidViews?: SortOrderInput | SortOrder
    intMusicVidLikes?: SortOrderInput | SortOrder
    intTrackNumber?: SortOrderInput | SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type TrackEditedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idTrack_userId?: TrackEditedIdTrackUserIdCompoundUniqueInput
    AND?: TrackEditedWhereInput | TrackEditedWhereInput[]
    OR?: TrackEditedWhereInput[]
    NOT?: TrackEditedWhereInput | TrackEditedWhereInput[]
    idTrack?: StringFilter<"TrackEdited"> | string
    idAlbum?: StringFilter<"TrackEdited"> | string
    idArtist?: StringFilter<"TrackEdited"> | string
    strTrack?: StringFilter<"TrackEdited"> | string
    strAlbum?: StringFilter<"TrackEdited"> | string
    strArtist?: StringFilter<"TrackEdited"> | string
    strGenre?: StringNullableFilter<"TrackEdited"> | string | null
    strMood?: StringNullableFilter<"TrackEdited"> | string | null
    strStyle?: StringNullableFilter<"TrackEdited"> | string | null
    intDuration?: StringNullableFilter<"TrackEdited"> | string | null
    strDescriptionEN?: StringNullableFilter<"TrackEdited"> | string | null
    strTrackThumb?: StringNullableFilter<"TrackEdited"> | string | null
    strMusicVid?: StringNullableFilter<"TrackEdited"> | string | null
    strMusicVidDirector?: StringNullableFilter<"TrackEdited"> | string | null
    strMusicVidCompany?: StringNullableFilter<"TrackEdited"> | string | null
    intMusicVidViews?: StringNullableFilter<"TrackEdited"> | string | null
    intMusicVidLikes?: StringNullableFilter<"TrackEdited"> | string | null
    intTrackNumber?: StringNullableFilter<"TrackEdited"> | string | null
    commentary?: StringFilter<"TrackEdited"> | string
    tag?: StringFilter<"TrackEdited"> | string
    rating?: StringFilter<"TrackEdited"> | string
    includesMetadata?: BoolFilter<"TrackEdited"> | boolean
    userId?: IntNullableFilter<"TrackEdited"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "idTrack_userId">

  export type TrackEditedOrderByWithAggregationInput = {
    id?: SortOrder
    idTrack?: SortOrder
    idAlbum?: SortOrder
    idArtist?: SortOrder
    strTrack?: SortOrder
    strAlbum?: SortOrder
    strArtist?: SortOrder
    strGenre?: SortOrderInput | SortOrder
    strMood?: SortOrderInput | SortOrder
    strStyle?: SortOrderInput | SortOrder
    intDuration?: SortOrderInput | SortOrder
    strDescriptionEN?: SortOrderInput | SortOrder
    strTrackThumb?: SortOrderInput | SortOrder
    strMusicVid?: SortOrderInput | SortOrder
    strMusicVidDirector?: SortOrderInput | SortOrder
    strMusicVidCompany?: SortOrderInput | SortOrder
    intMusicVidViews?: SortOrderInput | SortOrder
    intMusicVidLikes?: SortOrderInput | SortOrder
    intTrackNumber?: SortOrderInput | SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: TrackEditedCountOrderByAggregateInput
    _avg?: TrackEditedAvgOrderByAggregateInput
    _max?: TrackEditedMaxOrderByAggregateInput
    _min?: TrackEditedMinOrderByAggregateInput
    _sum?: TrackEditedSumOrderByAggregateInput
  }

  export type TrackEditedScalarWhereWithAggregatesInput = {
    AND?: TrackEditedScalarWhereWithAggregatesInput | TrackEditedScalarWhereWithAggregatesInput[]
    OR?: TrackEditedScalarWhereWithAggregatesInput[]
    NOT?: TrackEditedScalarWhereWithAggregatesInput | TrackEditedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrackEdited"> | number
    idTrack?: StringWithAggregatesFilter<"TrackEdited"> | string
    idAlbum?: StringWithAggregatesFilter<"TrackEdited"> | string
    idArtist?: StringWithAggregatesFilter<"TrackEdited"> | string
    strTrack?: StringWithAggregatesFilter<"TrackEdited"> | string
    strAlbum?: StringWithAggregatesFilter<"TrackEdited"> | string
    strArtist?: StringWithAggregatesFilter<"TrackEdited"> | string
    strGenre?: StringNullableWithAggregatesFilter<"TrackEdited"> | string | null
    strMood?: StringNullableWithAggregatesFilter<"TrackEdited"> | string | null
    strStyle?: StringNullableWithAggregatesFilter<"TrackEdited"> | string | null
    intDuration?: StringNullableWithAggregatesFilter<"TrackEdited"> | string | null
    strDescriptionEN?: StringNullableWithAggregatesFilter<"TrackEdited"> | string | null
    strTrackThumb?: StringNullableWithAggregatesFilter<"TrackEdited"> | string | null
    strMusicVid?: StringNullableWithAggregatesFilter<"TrackEdited"> | string | null
    strMusicVidDirector?: StringNullableWithAggregatesFilter<"TrackEdited"> | string | null
    strMusicVidCompany?: StringNullableWithAggregatesFilter<"TrackEdited"> | string | null
    intMusicVidViews?: StringNullableWithAggregatesFilter<"TrackEdited"> | string | null
    intMusicVidLikes?: StringNullableWithAggregatesFilter<"TrackEdited"> | string | null
    intTrackNumber?: StringNullableWithAggregatesFilter<"TrackEdited"> | string | null
    commentary?: StringWithAggregatesFilter<"TrackEdited"> | string
    tag?: StringWithAggregatesFilter<"TrackEdited"> | string
    rating?: StringWithAggregatesFilter<"TrackEdited"> | string
    includesMetadata?: BoolWithAggregatesFilter<"TrackEdited"> | boolean
    userId?: IntNullableWithAggregatesFilter<"TrackEdited"> | number | null
  }

  export type AlbumEditedWhereInput = {
    AND?: AlbumEditedWhereInput | AlbumEditedWhereInput[]
    OR?: AlbumEditedWhereInput[]
    NOT?: AlbumEditedWhereInput | AlbumEditedWhereInput[]
    id?: IntFilter<"AlbumEdited"> | number
    idAlbum?: StringFilter<"AlbumEdited"> | string
    idArtist?: StringFilter<"AlbumEdited"> | string
    strAlbum?: StringFilter<"AlbumEdited"> | string
    strArtist?: StringFilter<"AlbumEdited"> | string
    intYearReleased?: StringFilter<"AlbumEdited"> | string
    strGenre?: StringNullableFilter<"AlbumEdited"> | string | null
    strStyle?: StringNullableFilter<"AlbumEdited"> | string | null
    strLabel?: StringNullableFilter<"AlbumEdited"> | string | null
    strReleaseFormat?: StringNullableFilter<"AlbumEdited"> | string | null
    strAlbumThumb?: StringNullableFilter<"AlbumEdited"> | string | null
    strAlbumBack?: StringNullableFilter<"AlbumEdited"> | string | null
    strAlbumCDart?: StringNullableFilter<"AlbumEdited"> | string | null
    strAlbum3DThumb?: StringNullableFilter<"AlbumEdited"> | string | null
    strDescriptionEN?: StringNullableFilter<"AlbumEdited"> | string | null
    strMood?: StringNullableFilter<"AlbumEdited"> | string | null
    strSpeed?: StringNullableFilter<"AlbumEdited"> | string | null
    strWikipediaID?: StringNullableFilter<"AlbumEdited"> | string | null
    commentary?: StringFilter<"AlbumEdited"> | string
    tag?: StringFilter<"AlbumEdited"> | string
    rating?: StringFilter<"AlbumEdited"> | string
    includesMetadata?: BoolFilter<"AlbumEdited"> | boolean
    userId?: IntNullableFilter<"AlbumEdited"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AlbumEditedOrderByWithRelationInput = {
    id?: SortOrder
    idAlbum?: SortOrder
    idArtist?: SortOrder
    strAlbum?: SortOrder
    strArtist?: SortOrder
    intYearReleased?: SortOrder
    strGenre?: SortOrderInput | SortOrder
    strStyle?: SortOrderInput | SortOrder
    strLabel?: SortOrderInput | SortOrder
    strReleaseFormat?: SortOrderInput | SortOrder
    strAlbumThumb?: SortOrderInput | SortOrder
    strAlbumBack?: SortOrderInput | SortOrder
    strAlbumCDart?: SortOrderInput | SortOrder
    strAlbum3DThumb?: SortOrderInput | SortOrder
    strDescriptionEN?: SortOrderInput | SortOrder
    strMood?: SortOrderInput | SortOrder
    strSpeed?: SortOrderInput | SortOrder
    strWikipediaID?: SortOrderInput | SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type AlbumEditedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idAlbum_userId?: AlbumEditedIdAlbumUserIdCompoundUniqueInput
    AND?: AlbumEditedWhereInput | AlbumEditedWhereInput[]
    OR?: AlbumEditedWhereInput[]
    NOT?: AlbumEditedWhereInput | AlbumEditedWhereInput[]
    idAlbum?: StringFilter<"AlbumEdited"> | string
    idArtist?: StringFilter<"AlbumEdited"> | string
    strAlbum?: StringFilter<"AlbumEdited"> | string
    strArtist?: StringFilter<"AlbumEdited"> | string
    intYearReleased?: StringFilter<"AlbumEdited"> | string
    strGenre?: StringNullableFilter<"AlbumEdited"> | string | null
    strStyle?: StringNullableFilter<"AlbumEdited"> | string | null
    strLabel?: StringNullableFilter<"AlbumEdited"> | string | null
    strReleaseFormat?: StringNullableFilter<"AlbumEdited"> | string | null
    strAlbumThumb?: StringNullableFilter<"AlbumEdited"> | string | null
    strAlbumBack?: StringNullableFilter<"AlbumEdited"> | string | null
    strAlbumCDart?: StringNullableFilter<"AlbumEdited"> | string | null
    strAlbum3DThumb?: StringNullableFilter<"AlbumEdited"> | string | null
    strDescriptionEN?: StringNullableFilter<"AlbumEdited"> | string | null
    strMood?: StringNullableFilter<"AlbumEdited"> | string | null
    strSpeed?: StringNullableFilter<"AlbumEdited"> | string | null
    strWikipediaID?: StringNullableFilter<"AlbumEdited"> | string | null
    commentary?: StringFilter<"AlbumEdited"> | string
    tag?: StringFilter<"AlbumEdited"> | string
    rating?: StringFilter<"AlbumEdited"> | string
    includesMetadata?: BoolFilter<"AlbumEdited"> | boolean
    userId?: IntNullableFilter<"AlbumEdited"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "idAlbum_userId">

  export type AlbumEditedOrderByWithAggregationInput = {
    id?: SortOrder
    idAlbum?: SortOrder
    idArtist?: SortOrder
    strAlbum?: SortOrder
    strArtist?: SortOrder
    intYearReleased?: SortOrder
    strGenre?: SortOrderInput | SortOrder
    strStyle?: SortOrderInput | SortOrder
    strLabel?: SortOrderInput | SortOrder
    strReleaseFormat?: SortOrderInput | SortOrder
    strAlbumThumb?: SortOrderInput | SortOrder
    strAlbumBack?: SortOrderInput | SortOrder
    strAlbumCDart?: SortOrderInput | SortOrder
    strAlbum3DThumb?: SortOrderInput | SortOrder
    strDescriptionEN?: SortOrderInput | SortOrder
    strMood?: SortOrderInput | SortOrder
    strSpeed?: SortOrderInput | SortOrder
    strWikipediaID?: SortOrderInput | SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AlbumEditedCountOrderByAggregateInput
    _avg?: AlbumEditedAvgOrderByAggregateInput
    _max?: AlbumEditedMaxOrderByAggregateInput
    _min?: AlbumEditedMinOrderByAggregateInput
    _sum?: AlbumEditedSumOrderByAggregateInput
  }

  export type AlbumEditedScalarWhereWithAggregatesInput = {
    AND?: AlbumEditedScalarWhereWithAggregatesInput | AlbumEditedScalarWhereWithAggregatesInput[]
    OR?: AlbumEditedScalarWhereWithAggregatesInput[]
    NOT?: AlbumEditedScalarWhereWithAggregatesInput | AlbumEditedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlbumEdited"> | number
    idAlbum?: StringWithAggregatesFilter<"AlbumEdited"> | string
    idArtist?: StringWithAggregatesFilter<"AlbumEdited"> | string
    strAlbum?: StringWithAggregatesFilter<"AlbumEdited"> | string
    strArtist?: StringWithAggregatesFilter<"AlbumEdited"> | string
    intYearReleased?: StringWithAggregatesFilter<"AlbumEdited"> | string
    strGenre?: StringNullableWithAggregatesFilter<"AlbumEdited"> | string | null
    strStyle?: StringNullableWithAggregatesFilter<"AlbumEdited"> | string | null
    strLabel?: StringNullableWithAggregatesFilter<"AlbumEdited"> | string | null
    strReleaseFormat?: StringNullableWithAggregatesFilter<"AlbumEdited"> | string | null
    strAlbumThumb?: StringNullableWithAggregatesFilter<"AlbumEdited"> | string | null
    strAlbumBack?: StringNullableWithAggregatesFilter<"AlbumEdited"> | string | null
    strAlbumCDart?: StringNullableWithAggregatesFilter<"AlbumEdited"> | string | null
    strAlbum3DThumb?: StringNullableWithAggregatesFilter<"AlbumEdited"> | string | null
    strDescriptionEN?: StringNullableWithAggregatesFilter<"AlbumEdited"> | string | null
    strMood?: StringNullableWithAggregatesFilter<"AlbumEdited"> | string | null
    strSpeed?: StringNullableWithAggregatesFilter<"AlbumEdited"> | string | null
    strWikipediaID?: StringNullableWithAggregatesFilter<"AlbumEdited"> | string | null
    commentary?: StringWithAggregatesFilter<"AlbumEdited"> | string
    tag?: StringWithAggregatesFilter<"AlbumEdited"> | string
    rating?: StringWithAggregatesFilter<"AlbumEdited"> | string
    includesMetadata?: BoolWithAggregatesFilter<"AlbumEdited"> | boolean
    userId?: IntNullableWithAggregatesFilter<"AlbumEdited"> | number | null
  }

  export type ArtistEditedWhereInput = {
    AND?: ArtistEditedWhereInput | ArtistEditedWhereInput[]
    OR?: ArtistEditedWhereInput[]
    NOT?: ArtistEditedWhereInput | ArtistEditedWhereInput[]
    id?: IntFilter<"ArtistEdited"> | number
    idArtist?: StringFilter<"ArtistEdited"> | string
    strArtist?: StringFilter<"ArtistEdited"> | string
    strArtistAlternate?: StringNullableFilter<"ArtistEdited"> | string | null
    strLabel?: StringNullableFilter<"ArtistEdited"> | string | null
    intFormedYear?: StringNullableFilter<"ArtistEdited"> | string | null
    strGenre?: StringNullableFilter<"ArtistEdited"> | string | null
    strStyle?: StringNullableFilter<"ArtistEdited"> | string | null
    strMood?: StringNullableFilter<"ArtistEdited"> | string | null
    strCountry?: StringNullableFilter<"ArtistEdited"> | string | null
    intMembers?: StringNullableFilter<"ArtistEdited"> | string | null
    strWebsite?: StringNullableFilter<"ArtistEdited"> | string | null
    strBiographyEN?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistThumb?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistLogo?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistClearart?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistWideThumb?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistFanart?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistBanner?: StringNullableFilter<"ArtistEdited"> | string | null
    commentary?: StringFilter<"ArtistEdited"> | string
    tag?: StringFilter<"ArtistEdited"> | string
    rating?: StringFilter<"ArtistEdited"> | string
    includesMetadata?: BoolFilter<"ArtistEdited"> | boolean
    userId?: IntNullableFilter<"ArtistEdited"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ArtistEditedOrderByWithRelationInput = {
    id?: SortOrder
    idArtist?: SortOrder
    strArtist?: SortOrder
    strArtistAlternate?: SortOrderInput | SortOrder
    strLabel?: SortOrderInput | SortOrder
    intFormedYear?: SortOrderInput | SortOrder
    strGenre?: SortOrderInput | SortOrder
    strStyle?: SortOrderInput | SortOrder
    strMood?: SortOrderInput | SortOrder
    strCountry?: SortOrderInput | SortOrder
    intMembers?: SortOrderInput | SortOrder
    strWebsite?: SortOrderInput | SortOrder
    strBiographyEN?: SortOrderInput | SortOrder
    strArtistThumb?: SortOrderInput | SortOrder
    strArtistLogo?: SortOrderInput | SortOrder
    strArtistClearart?: SortOrderInput | SortOrder
    strArtistWideThumb?: SortOrderInput | SortOrder
    strArtistFanart?: SortOrderInput | SortOrder
    strArtistBanner?: SortOrderInput | SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type ArtistEditedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idArtist_userId?: ArtistEditedIdArtistUserIdCompoundUniqueInput
    AND?: ArtistEditedWhereInput | ArtistEditedWhereInput[]
    OR?: ArtistEditedWhereInput[]
    NOT?: ArtistEditedWhereInput | ArtistEditedWhereInput[]
    idArtist?: StringFilter<"ArtistEdited"> | string
    strArtist?: StringFilter<"ArtistEdited"> | string
    strArtistAlternate?: StringNullableFilter<"ArtistEdited"> | string | null
    strLabel?: StringNullableFilter<"ArtistEdited"> | string | null
    intFormedYear?: StringNullableFilter<"ArtistEdited"> | string | null
    strGenre?: StringNullableFilter<"ArtistEdited"> | string | null
    strStyle?: StringNullableFilter<"ArtistEdited"> | string | null
    strMood?: StringNullableFilter<"ArtistEdited"> | string | null
    strCountry?: StringNullableFilter<"ArtistEdited"> | string | null
    intMembers?: StringNullableFilter<"ArtistEdited"> | string | null
    strWebsite?: StringNullableFilter<"ArtistEdited"> | string | null
    strBiographyEN?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistThumb?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistLogo?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistClearart?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistWideThumb?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistFanart?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistBanner?: StringNullableFilter<"ArtistEdited"> | string | null
    commentary?: StringFilter<"ArtistEdited"> | string
    tag?: StringFilter<"ArtistEdited"> | string
    rating?: StringFilter<"ArtistEdited"> | string
    includesMetadata?: BoolFilter<"ArtistEdited"> | boolean
    userId?: IntNullableFilter<"ArtistEdited"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "idArtist_userId">

  export type ArtistEditedOrderByWithAggregationInput = {
    id?: SortOrder
    idArtist?: SortOrder
    strArtist?: SortOrder
    strArtistAlternate?: SortOrderInput | SortOrder
    strLabel?: SortOrderInput | SortOrder
    intFormedYear?: SortOrderInput | SortOrder
    strGenre?: SortOrderInput | SortOrder
    strStyle?: SortOrderInput | SortOrder
    strMood?: SortOrderInput | SortOrder
    strCountry?: SortOrderInput | SortOrder
    intMembers?: SortOrderInput | SortOrder
    strWebsite?: SortOrderInput | SortOrder
    strBiographyEN?: SortOrderInput | SortOrder
    strArtistThumb?: SortOrderInput | SortOrder
    strArtistLogo?: SortOrderInput | SortOrder
    strArtistClearart?: SortOrderInput | SortOrder
    strArtistWideThumb?: SortOrderInput | SortOrder
    strArtistFanart?: SortOrderInput | SortOrder
    strArtistBanner?: SortOrderInput | SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ArtistEditedCountOrderByAggregateInput
    _avg?: ArtistEditedAvgOrderByAggregateInput
    _max?: ArtistEditedMaxOrderByAggregateInput
    _min?: ArtistEditedMinOrderByAggregateInput
    _sum?: ArtistEditedSumOrderByAggregateInput
  }

  export type ArtistEditedScalarWhereWithAggregatesInput = {
    AND?: ArtistEditedScalarWhereWithAggregatesInput | ArtistEditedScalarWhereWithAggregatesInput[]
    OR?: ArtistEditedScalarWhereWithAggregatesInput[]
    NOT?: ArtistEditedScalarWhereWithAggregatesInput | ArtistEditedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArtistEdited"> | number
    idArtist?: StringWithAggregatesFilter<"ArtistEdited"> | string
    strArtist?: StringWithAggregatesFilter<"ArtistEdited"> | string
    strArtistAlternate?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strLabel?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    intFormedYear?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strGenre?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strStyle?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strMood?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strCountry?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    intMembers?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strWebsite?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strBiographyEN?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strArtistThumb?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strArtistLogo?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strArtistClearart?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strArtistWideThumb?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strArtistFanart?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    strArtistBanner?: StringNullableWithAggregatesFilter<"ArtistEdited"> | string | null
    commentary?: StringWithAggregatesFilter<"ArtistEdited"> | string
    tag?: StringWithAggregatesFilter<"ArtistEdited"> | string
    rating?: StringWithAggregatesFilter<"ArtistEdited"> | string
    includesMetadata?: BoolWithAggregatesFilter<"ArtistEdited"> | boolean
    userId?: IntNullableWithAggregatesFilter<"ArtistEdited"> | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: number
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: number
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    tracks?: TrackEditedCreateNestedManyWithoutUserInput
    albums?: AlbumEditedCreateNestedManyWithoutUserInput
    artists?: ArtistEditedCreateNestedManyWithoutUserInput
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tracks?: TrackEditedUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumEditedUncheckedCreateNestedManyWithoutUserInput
    artists?: ArtistEditedUncheckedCreateNestedManyWithoutUserInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tracks?: TrackEditedUpdateManyWithoutUserNestedInput
    albums?: AlbumEditedUpdateManyWithoutUserNestedInput
    artists?: ArtistEditedUpdateManyWithoutUserNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tracks?: TrackEditedUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumEditedUncheckedUpdateManyWithoutUserNestedInput
    artists?: ArtistEditedUncheckedUpdateManyWithoutUserNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackEditedCreateInput = {
    idTrack: string
    idAlbum: string
    idArtist: string
    strTrack: string
    strAlbum: string
    strArtist: string
    strGenre?: string | null
    strMood?: string | null
    strStyle?: string | null
    intDuration?: string | null
    strDescriptionEN?: string | null
    strTrackThumb?: string | null
    strMusicVid?: string | null
    strMusicVidDirector?: string | null
    strMusicVidCompany?: string | null
    intMusicVidViews?: string | null
    intMusicVidLikes?: string | null
    intTrackNumber?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
    User?: UserCreateNestedOneWithoutTracksInput
  }

  export type TrackEditedUncheckedCreateInput = {
    id?: number
    idTrack: string
    idAlbum: string
    idArtist: string
    strTrack: string
    strAlbum: string
    strArtist: string
    strGenre?: string | null
    strMood?: string | null
    strStyle?: string | null
    intDuration?: string | null
    strDescriptionEN?: string | null
    strTrackThumb?: string | null
    strMusicVid?: string | null
    strMusicVidDirector?: string | null
    strMusicVidCompany?: string | null
    intMusicVidViews?: string | null
    intMusicVidLikes?: string | null
    intTrackNumber?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
    userId?: number | null
  }

  export type TrackEditedUpdateInput = {
    idTrack?: StringFieldUpdateOperationsInput | string
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strTrack?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    intDuration?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strTrackThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVid?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidDirector?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidCompany?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidViews?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidLikes?: NullableStringFieldUpdateOperationsInput | string | null
    intTrackNumber?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutTracksNestedInput
  }

  export type TrackEditedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTrack?: StringFieldUpdateOperationsInput | string
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strTrack?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    intDuration?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strTrackThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVid?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidDirector?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidCompany?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidViews?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidLikes?: NullableStringFieldUpdateOperationsInput | string | null
    intTrackNumber?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrackEditedCreateManyInput = {
    id?: number
    idTrack: string
    idAlbum: string
    idArtist: string
    strTrack: string
    strAlbum: string
    strArtist: string
    strGenre?: string | null
    strMood?: string | null
    strStyle?: string | null
    intDuration?: string | null
    strDescriptionEN?: string | null
    strTrackThumb?: string | null
    strMusicVid?: string | null
    strMusicVidDirector?: string | null
    strMusicVidCompany?: string | null
    intMusicVidViews?: string | null
    intMusicVidLikes?: string | null
    intTrackNumber?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
    userId?: number | null
  }

  export type TrackEditedUpdateManyMutationInput = {
    idTrack?: StringFieldUpdateOperationsInput | string
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strTrack?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    intDuration?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strTrackThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVid?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidDirector?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidCompany?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidViews?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidLikes?: NullableStringFieldUpdateOperationsInput | string | null
    intTrackNumber?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackEditedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTrack?: StringFieldUpdateOperationsInput | string
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strTrack?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    intDuration?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strTrackThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVid?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidDirector?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidCompany?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidViews?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidLikes?: NullableStringFieldUpdateOperationsInput | string | null
    intTrackNumber?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlbumEditedCreateInput = {
    idAlbum: string
    idArtist: string
    strAlbum: string
    strArtist: string
    intYearReleased: string
    strGenre?: string | null
    strStyle?: string | null
    strLabel?: string | null
    strReleaseFormat?: string | null
    strAlbumThumb?: string | null
    strAlbumBack?: string | null
    strAlbumCDart?: string | null
    strAlbum3DThumb?: string | null
    strDescriptionEN?: string | null
    strMood?: string | null
    strSpeed?: string | null
    strWikipediaID?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
    User?: UserCreateNestedOneWithoutAlbumsInput
  }

  export type AlbumEditedUncheckedCreateInput = {
    id?: number
    idAlbum: string
    idArtist: string
    strAlbum: string
    strArtist: string
    intYearReleased: string
    strGenre?: string | null
    strStyle?: string | null
    strLabel?: string | null
    strReleaseFormat?: string | null
    strAlbumThumb?: string | null
    strAlbumBack?: string | null
    strAlbumCDart?: string | null
    strAlbum3DThumb?: string | null
    strDescriptionEN?: string | null
    strMood?: string | null
    strSpeed?: string | null
    strWikipediaID?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
    userId?: number | null
  }

  export type AlbumEditedUpdateInput = {
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    intYearReleased?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    strReleaseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumBack?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumCDart?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbum3DThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    strWikipediaID?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutAlbumsNestedInput
  }

  export type AlbumEditedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    intYearReleased?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    strReleaseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumBack?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumCDart?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbum3DThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    strWikipediaID?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlbumEditedCreateManyInput = {
    id?: number
    idAlbum: string
    idArtist: string
    strAlbum: string
    strArtist: string
    intYearReleased: string
    strGenre?: string | null
    strStyle?: string | null
    strLabel?: string | null
    strReleaseFormat?: string | null
    strAlbumThumb?: string | null
    strAlbumBack?: string | null
    strAlbumCDart?: string | null
    strAlbum3DThumb?: string | null
    strDescriptionEN?: string | null
    strMood?: string | null
    strSpeed?: string | null
    strWikipediaID?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
    userId?: number | null
  }

  export type AlbumEditedUpdateManyMutationInput = {
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    intYearReleased?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    strReleaseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumBack?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumCDart?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbum3DThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    strWikipediaID?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlbumEditedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    intYearReleased?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    strReleaseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumBack?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumCDart?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbum3DThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    strWikipediaID?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArtistEditedCreateInput = {
    idArtist: string
    strArtist: string
    strArtistAlternate?: string | null
    strLabel?: string | null
    intFormedYear?: string | null
    strGenre?: string | null
    strStyle?: string | null
    strMood?: string | null
    strCountry?: string | null
    intMembers?: string | null
    strWebsite?: string | null
    strBiographyEN?: string | null
    strArtistThumb?: string | null
    strArtistLogo?: string | null
    strArtistClearart?: string | null
    strArtistWideThumb?: string | null
    strArtistFanart?: string | null
    strArtistBanner?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
    User?: UserCreateNestedOneWithoutArtistsInput
  }

  export type ArtistEditedUncheckedCreateInput = {
    id?: number
    idArtist: string
    strArtist: string
    strArtistAlternate?: string | null
    strLabel?: string | null
    intFormedYear?: string | null
    strGenre?: string | null
    strStyle?: string | null
    strMood?: string | null
    strCountry?: string | null
    intMembers?: string | null
    strWebsite?: string | null
    strBiographyEN?: string | null
    strArtistThumb?: string | null
    strArtistLogo?: string | null
    strArtistClearart?: string | null
    strArtistWideThumb?: string | null
    strArtistFanart?: string | null
    strArtistBanner?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
    userId?: number | null
  }

  export type ArtistEditedUpdateInput = {
    idArtist?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strArtistAlternate?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    intFormedYear?: NullableStringFieldUpdateOperationsInput | string | null
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strCountry?: NullableStringFieldUpdateOperationsInput | string | null
    intMembers?: NullableStringFieldUpdateOperationsInput | string | null
    strWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    strBiographyEN?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistLogo?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistClearart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistWideThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistFanart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistBanner?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutArtistsNestedInput
  }

  export type ArtistEditedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idArtist?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strArtistAlternate?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    intFormedYear?: NullableStringFieldUpdateOperationsInput | string | null
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strCountry?: NullableStringFieldUpdateOperationsInput | string | null
    intMembers?: NullableStringFieldUpdateOperationsInput | string | null
    strWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    strBiographyEN?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistLogo?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistClearart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistWideThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistFanart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistBanner?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArtistEditedCreateManyInput = {
    id?: number
    idArtist: string
    strArtist: string
    strArtistAlternate?: string | null
    strLabel?: string | null
    intFormedYear?: string | null
    strGenre?: string | null
    strStyle?: string | null
    strMood?: string | null
    strCountry?: string | null
    intMembers?: string | null
    strWebsite?: string | null
    strBiographyEN?: string | null
    strArtistThumb?: string | null
    strArtistLogo?: string | null
    strArtistClearart?: string | null
    strArtistWideThumb?: string | null
    strArtistFanart?: string | null
    strArtistBanner?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
    userId?: number | null
  }

  export type ArtistEditedUpdateManyMutationInput = {
    idArtist?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strArtistAlternate?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    intFormedYear?: NullableStringFieldUpdateOperationsInput | string | null
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strCountry?: NullableStringFieldUpdateOperationsInput | string | null
    intMembers?: NullableStringFieldUpdateOperationsInput | string | null
    strWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    strBiographyEN?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistLogo?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistClearart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistWideThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistFanart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistBanner?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistEditedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idArtist?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strArtistAlternate?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    intFormedYear?: NullableStringFieldUpdateOperationsInput | string | null
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strCountry?: NullableStringFieldUpdateOperationsInput | string | null
    intMembers?: NullableStringFieldUpdateOperationsInput | string | null
    strWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    strBiographyEN?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistLogo?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistClearart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistWideThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistFanart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistBanner?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type TrackEditedListRelationFilter = {
    every?: TrackEditedWhereInput
    some?: TrackEditedWhereInput
    none?: TrackEditedWhereInput
  }

  export type AlbumEditedListRelationFilter = {
    every?: AlbumEditedWhereInput
    some?: AlbumEditedWhereInput
    none?: AlbumEditedWhereInput
  }

  export type ArtistEditedListRelationFilter = {
    every?: ArtistEditedWhereInput
    some?: ArtistEditedWhereInput
    none?: ArtistEditedWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackEditedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumEditedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistEditedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    imageStorageKey?: SortOrder
    passwordUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    imageStorageKey?: SortOrder
    passwordUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    imageStorageKey?: SortOrder
    passwordUpdatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TrackEditedIdTrackUserIdCompoundUniqueInput = {
    idTrack: string
    userId: number
  }

  export type TrackEditedCountOrderByAggregateInput = {
    id?: SortOrder
    idTrack?: SortOrder
    idAlbum?: SortOrder
    idArtist?: SortOrder
    strTrack?: SortOrder
    strAlbum?: SortOrder
    strArtist?: SortOrder
    strGenre?: SortOrder
    strMood?: SortOrder
    strStyle?: SortOrder
    intDuration?: SortOrder
    strDescriptionEN?: SortOrder
    strTrackThumb?: SortOrder
    strMusicVid?: SortOrder
    strMusicVidDirector?: SortOrder
    strMusicVidCompany?: SortOrder
    intMusicVidViews?: SortOrder
    intMusicVidLikes?: SortOrder
    intTrackNumber?: SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrder
  }

  export type TrackEditedAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TrackEditedMaxOrderByAggregateInput = {
    id?: SortOrder
    idTrack?: SortOrder
    idAlbum?: SortOrder
    idArtist?: SortOrder
    strTrack?: SortOrder
    strAlbum?: SortOrder
    strArtist?: SortOrder
    strGenre?: SortOrder
    strMood?: SortOrder
    strStyle?: SortOrder
    intDuration?: SortOrder
    strDescriptionEN?: SortOrder
    strTrackThumb?: SortOrder
    strMusicVid?: SortOrder
    strMusicVidDirector?: SortOrder
    strMusicVidCompany?: SortOrder
    intMusicVidViews?: SortOrder
    intMusicVidLikes?: SortOrder
    intTrackNumber?: SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrder
  }

  export type TrackEditedMinOrderByAggregateInput = {
    id?: SortOrder
    idTrack?: SortOrder
    idAlbum?: SortOrder
    idArtist?: SortOrder
    strTrack?: SortOrder
    strAlbum?: SortOrder
    strArtist?: SortOrder
    strGenre?: SortOrder
    strMood?: SortOrder
    strStyle?: SortOrder
    intDuration?: SortOrder
    strDescriptionEN?: SortOrder
    strTrackThumb?: SortOrder
    strMusicVid?: SortOrder
    strMusicVidDirector?: SortOrder
    strMusicVidCompany?: SortOrder
    intMusicVidViews?: SortOrder
    intMusicVidLikes?: SortOrder
    intTrackNumber?: SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrder
  }

  export type TrackEditedSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AlbumEditedIdAlbumUserIdCompoundUniqueInput = {
    idAlbum: string
    userId: number
  }

  export type AlbumEditedCountOrderByAggregateInput = {
    id?: SortOrder
    idAlbum?: SortOrder
    idArtist?: SortOrder
    strAlbum?: SortOrder
    strArtist?: SortOrder
    intYearReleased?: SortOrder
    strGenre?: SortOrder
    strStyle?: SortOrder
    strLabel?: SortOrder
    strReleaseFormat?: SortOrder
    strAlbumThumb?: SortOrder
    strAlbumBack?: SortOrder
    strAlbumCDart?: SortOrder
    strAlbum3DThumb?: SortOrder
    strDescriptionEN?: SortOrder
    strMood?: SortOrder
    strSpeed?: SortOrder
    strWikipediaID?: SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrder
  }

  export type AlbumEditedAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AlbumEditedMaxOrderByAggregateInput = {
    id?: SortOrder
    idAlbum?: SortOrder
    idArtist?: SortOrder
    strAlbum?: SortOrder
    strArtist?: SortOrder
    intYearReleased?: SortOrder
    strGenre?: SortOrder
    strStyle?: SortOrder
    strLabel?: SortOrder
    strReleaseFormat?: SortOrder
    strAlbumThumb?: SortOrder
    strAlbumBack?: SortOrder
    strAlbumCDart?: SortOrder
    strAlbum3DThumb?: SortOrder
    strDescriptionEN?: SortOrder
    strMood?: SortOrder
    strSpeed?: SortOrder
    strWikipediaID?: SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrder
  }

  export type AlbumEditedMinOrderByAggregateInput = {
    id?: SortOrder
    idAlbum?: SortOrder
    idArtist?: SortOrder
    strAlbum?: SortOrder
    strArtist?: SortOrder
    intYearReleased?: SortOrder
    strGenre?: SortOrder
    strStyle?: SortOrder
    strLabel?: SortOrder
    strReleaseFormat?: SortOrder
    strAlbumThumb?: SortOrder
    strAlbumBack?: SortOrder
    strAlbumCDart?: SortOrder
    strAlbum3DThumb?: SortOrder
    strDescriptionEN?: SortOrder
    strMood?: SortOrder
    strSpeed?: SortOrder
    strWikipediaID?: SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrder
  }

  export type AlbumEditedSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ArtistEditedIdArtistUserIdCompoundUniqueInput = {
    idArtist: string
    userId: number
  }

  export type ArtistEditedCountOrderByAggregateInput = {
    id?: SortOrder
    idArtist?: SortOrder
    strArtist?: SortOrder
    strArtistAlternate?: SortOrder
    strLabel?: SortOrder
    intFormedYear?: SortOrder
    strGenre?: SortOrder
    strStyle?: SortOrder
    strMood?: SortOrder
    strCountry?: SortOrder
    intMembers?: SortOrder
    strWebsite?: SortOrder
    strBiographyEN?: SortOrder
    strArtistThumb?: SortOrder
    strArtistLogo?: SortOrder
    strArtistClearart?: SortOrder
    strArtistWideThumb?: SortOrder
    strArtistFanart?: SortOrder
    strArtistBanner?: SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrder
  }

  export type ArtistEditedAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ArtistEditedMaxOrderByAggregateInput = {
    id?: SortOrder
    idArtist?: SortOrder
    strArtist?: SortOrder
    strArtistAlternate?: SortOrder
    strLabel?: SortOrder
    intFormedYear?: SortOrder
    strGenre?: SortOrder
    strStyle?: SortOrder
    strMood?: SortOrder
    strCountry?: SortOrder
    intMembers?: SortOrder
    strWebsite?: SortOrder
    strBiographyEN?: SortOrder
    strArtistThumb?: SortOrder
    strArtistLogo?: SortOrder
    strArtistClearart?: SortOrder
    strArtistWideThumb?: SortOrder
    strArtistFanart?: SortOrder
    strArtistBanner?: SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrder
  }

  export type ArtistEditedMinOrderByAggregateInput = {
    id?: SortOrder
    idArtist?: SortOrder
    strArtist?: SortOrder
    strArtistAlternate?: SortOrder
    strLabel?: SortOrder
    intFormedYear?: SortOrder
    strGenre?: SortOrder
    strStyle?: SortOrder
    strMood?: SortOrder
    strCountry?: SortOrder
    intMembers?: SortOrder
    strWebsite?: SortOrder
    strBiographyEN?: SortOrder
    strArtistThumb?: SortOrder
    strArtistLogo?: SortOrder
    strArtistClearart?: SortOrder
    strArtistWideThumb?: SortOrder
    strArtistFanart?: SortOrder
    strArtistBanner?: SortOrder
    commentary?: SortOrder
    tag?: SortOrder
    rating?: SortOrder
    includesMetadata?: SortOrder
    userId?: SortOrder
  }

  export type ArtistEditedSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TrackEditedCreateNestedManyWithoutUserInput = {
    create?: XOR<TrackEditedCreateWithoutUserInput, TrackEditedUncheckedCreateWithoutUserInput> | TrackEditedCreateWithoutUserInput[] | TrackEditedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackEditedCreateOrConnectWithoutUserInput | TrackEditedCreateOrConnectWithoutUserInput[]
    createMany?: TrackEditedCreateManyUserInputEnvelope
    connect?: TrackEditedWhereUniqueInput | TrackEditedWhereUniqueInput[]
  }

  export type AlbumEditedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlbumEditedCreateWithoutUserInput, AlbumEditedUncheckedCreateWithoutUserInput> | AlbumEditedCreateWithoutUserInput[] | AlbumEditedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumEditedCreateOrConnectWithoutUserInput | AlbumEditedCreateOrConnectWithoutUserInput[]
    createMany?: AlbumEditedCreateManyUserInputEnvelope
    connect?: AlbumEditedWhereUniqueInput | AlbumEditedWhereUniqueInput[]
  }

  export type ArtistEditedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArtistEditedCreateWithoutUserInput, ArtistEditedUncheckedCreateWithoutUserInput> | ArtistEditedCreateWithoutUserInput[] | ArtistEditedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArtistEditedCreateOrConnectWithoutUserInput | ArtistEditedCreateOrConnectWithoutUserInput[]
    createMany?: ArtistEditedCreateManyUserInputEnvelope
    connect?: ArtistEditedWhereUniqueInput | ArtistEditedWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput> | UserCreateWithoutFollowersInput[] | UserUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput | UserCreateOrConnectWithoutFollowersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TrackEditedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TrackEditedCreateWithoutUserInput, TrackEditedUncheckedCreateWithoutUserInput> | TrackEditedCreateWithoutUserInput[] | TrackEditedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackEditedCreateOrConnectWithoutUserInput | TrackEditedCreateOrConnectWithoutUserInput[]
    createMany?: TrackEditedCreateManyUserInputEnvelope
    connect?: TrackEditedWhereUniqueInput | TrackEditedWhereUniqueInput[]
  }

  export type AlbumEditedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlbumEditedCreateWithoutUserInput, AlbumEditedUncheckedCreateWithoutUserInput> | AlbumEditedCreateWithoutUserInput[] | AlbumEditedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumEditedCreateOrConnectWithoutUserInput | AlbumEditedCreateOrConnectWithoutUserInput[]
    createMany?: AlbumEditedCreateManyUserInputEnvelope
    connect?: AlbumEditedWhereUniqueInput | AlbumEditedWhereUniqueInput[]
  }

  export type ArtistEditedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArtistEditedCreateWithoutUserInput, ArtistEditedUncheckedCreateWithoutUserInput> | ArtistEditedCreateWithoutUserInput[] | ArtistEditedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArtistEditedCreateOrConnectWithoutUserInput | ArtistEditedCreateOrConnectWithoutUserInput[]
    createMany?: ArtistEditedCreateManyUserInputEnvelope
    connect?: ArtistEditedWhereUniqueInput | ArtistEditedWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput> | UserCreateWithoutFollowersInput[] | UserUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput | UserCreateOrConnectWithoutFollowersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TrackEditedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrackEditedCreateWithoutUserInput, TrackEditedUncheckedCreateWithoutUserInput> | TrackEditedCreateWithoutUserInput[] | TrackEditedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackEditedCreateOrConnectWithoutUserInput | TrackEditedCreateOrConnectWithoutUserInput[]
    upsert?: TrackEditedUpsertWithWhereUniqueWithoutUserInput | TrackEditedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrackEditedCreateManyUserInputEnvelope
    set?: TrackEditedWhereUniqueInput | TrackEditedWhereUniqueInput[]
    disconnect?: TrackEditedWhereUniqueInput | TrackEditedWhereUniqueInput[]
    delete?: TrackEditedWhereUniqueInput | TrackEditedWhereUniqueInput[]
    connect?: TrackEditedWhereUniqueInput | TrackEditedWhereUniqueInput[]
    update?: TrackEditedUpdateWithWhereUniqueWithoutUserInput | TrackEditedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrackEditedUpdateManyWithWhereWithoutUserInput | TrackEditedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrackEditedScalarWhereInput | TrackEditedScalarWhereInput[]
  }

  export type AlbumEditedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlbumEditedCreateWithoutUserInput, AlbumEditedUncheckedCreateWithoutUserInput> | AlbumEditedCreateWithoutUserInput[] | AlbumEditedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumEditedCreateOrConnectWithoutUserInput | AlbumEditedCreateOrConnectWithoutUserInput[]
    upsert?: AlbumEditedUpsertWithWhereUniqueWithoutUserInput | AlbumEditedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlbumEditedCreateManyUserInputEnvelope
    set?: AlbumEditedWhereUniqueInput | AlbumEditedWhereUniqueInput[]
    disconnect?: AlbumEditedWhereUniqueInput | AlbumEditedWhereUniqueInput[]
    delete?: AlbumEditedWhereUniqueInput | AlbumEditedWhereUniqueInput[]
    connect?: AlbumEditedWhereUniqueInput | AlbumEditedWhereUniqueInput[]
    update?: AlbumEditedUpdateWithWhereUniqueWithoutUserInput | AlbumEditedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlbumEditedUpdateManyWithWhereWithoutUserInput | AlbumEditedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlbumEditedScalarWhereInput | AlbumEditedScalarWhereInput[]
  }

  export type ArtistEditedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArtistEditedCreateWithoutUserInput, ArtistEditedUncheckedCreateWithoutUserInput> | ArtistEditedCreateWithoutUserInput[] | ArtistEditedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArtistEditedCreateOrConnectWithoutUserInput | ArtistEditedCreateOrConnectWithoutUserInput[]
    upsert?: ArtistEditedUpsertWithWhereUniqueWithoutUserInput | ArtistEditedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArtistEditedCreateManyUserInputEnvelope
    set?: ArtistEditedWhereUniqueInput | ArtistEditedWhereUniqueInput[]
    disconnect?: ArtistEditedWhereUniqueInput | ArtistEditedWhereUniqueInput[]
    delete?: ArtistEditedWhereUniqueInput | ArtistEditedWhereUniqueInput[]
    connect?: ArtistEditedWhereUniqueInput | ArtistEditedWhereUniqueInput[]
    update?: ArtistEditedUpdateWithWhereUniqueWithoutUserInput | ArtistEditedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArtistEditedUpdateManyWithWhereWithoutUserInput | ArtistEditedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArtistEditedScalarWhereInput | ArtistEditedScalarWhereInput[]
  }

  export type UserUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput> | UserCreateWithoutFollowersInput[] | UserUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput | UserCreateOrConnectWithoutFollowersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowersInput | UserUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowersInput | UserUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowersInput | UserUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowingInput | UserUpsertWithWhereUniqueWithoutFollowingInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowingInput | UserUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowingInput | UserUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TrackEditedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrackEditedCreateWithoutUserInput, TrackEditedUncheckedCreateWithoutUserInput> | TrackEditedCreateWithoutUserInput[] | TrackEditedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackEditedCreateOrConnectWithoutUserInput | TrackEditedCreateOrConnectWithoutUserInput[]
    upsert?: TrackEditedUpsertWithWhereUniqueWithoutUserInput | TrackEditedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrackEditedCreateManyUserInputEnvelope
    set?: TrackEditedWhereUniqueInput | TrackEditedWhereUniqueInput[]
    disconnect?: TrackEditedWhereUniqueInput | TrackEditedWhereUniqueInput[]
    delete?: TrackEditedWhereUniqueInput | TrackEditedWhereUniqueInput[]
    connect?: TrackEditedWhereUniqueInput | TrackEditedWhereUniqueInput[]
    update?: TrackEditedUpdateWithWhereUniqueWithoutUserInput | TrackEditedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrackEditedUpdateManyWithWhereWithoutUserInput | TrackEditedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrackEditedScalarWhereInput | TrackEditedScalarWhereInput[]
  }

  export type AlbumEditedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlbumEditedCreateWithoutUserInput, AlbumEditedUncheckedCreateWithoutUserInput> | AlbumEditedCreateWithoutUserInput[] | AlbumEditedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumEditedCreateOrConnectWithoutUserInput | AlbumEditedCreateOrConnectWithoutUserInput[]
    upsert?: AlbumEditedUpsertWithWhereUniqueWithoutUserInput | AlbumEditedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlbumEditedCreateManyUserInputEnvelope
    set?: AlbumEditedWhereUniqueInput | AlbumEditedWhereUniqueInput[]
    disconnect?: AlbumEditedWhereUniqueInput | AlbumEditedWhereUniqueInput[]
    delete?: AlbumEditedWhereUniqueInput | AlbumEditedWhereUniqueInput[]
    connect?: AlbumEditedWhereUniqueInput | AlbumEditedWhereUniqueInput[]
    update?: AlbumEditedUpdateWithWhereUniqueWithoutUserInput | AlbumEditedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlbumEditedUpdateManyWithWhereWithoutUserInput | AlbumEditedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlbumEditedScalarWhereInput | AlbumEditedScalarWhereInput[]
  }

  export type ArtistEditedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArtistEditedCreateWithoutUserInput, ArtistEditedUncheckedCreateWithoutUserInput> | ArtistEditedCreateWithoutUserInput[] | ArtistEditedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArtistEditedCreateOrConnectWithoutUserInput | ArtistEditedCreateOrConnectWithoutUserInput[]
    upsert?: ArtistEditedUpsertWithWhereUniqueWithoutUserInput | ArtistEditedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArtistEditedCreateManyUserInputEnvelope
    set?: ArtistEditedWhereUniqueInput | ArtistEditedWhereUniqueInput[]
    disconnect?: ArtistEditedWhereUniqueInput | ArtistEditedWhereUniqueInput[]
    delete?: ArtistEditedWhereUniqueInput | ArtistEditedWhereUniqueInput[]
    connect?: ArtistEditedWhereUniqueInput | ArtistEditedWhereUniqueInput[]
    update?: ArtistEditedUpdateWithWhereUniqueWithoutUserInput | ArtistEditedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArtistEditedUpdateManyWithWhereWithoutUserInput | ArtistEditedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArtistEditedScalarWhereInput | ArtistEditedScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput> | UserCreateWithoutFollowersInput[] | UserUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput | UserCreateOrConnectWithoutFollowersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowersInput | UserUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowersInput | UserUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowersInput | UserUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowingInput | UserUpsertWithWhereUniqueWithoutFollowingInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowingInput | UserUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowingInput | UserUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTracksInput = {
    create?: XOR<UserCreateWithoutTracksInput, UserUncheckedCreateWithoutTracksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTracksInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutTracksNestedInput = {
    create?: XOR<UserCreateWithoutTracksInput, UserUncheckedCreateWithoutTracksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTracksInput
    upsert?: UserUpsertWithoutTracksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTracksInput, UserUpdateWithoutTracksInput>, UserUncheckedUpdateWithoutTracksInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAlbumsNestedInput = {
    create?: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumsInput
    upsert?: UserUpsertWithoutAlbumsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlbumsInput, UserUpdateWithoutAlbumsInput>, UserUncheckedUpdateWithoutAlbumsInput>
  }

  export type UserCreateNestedOneWithoutArtistsInput = {
    create?: XOR<UserCreateWithoutArtistsInput, UserUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtistsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutArtistsNestedInput = {
    create?: XOR<UserCreateWithoutArtistsInput, UserUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtistsInput
    upsert?: UserUpsertWithoutArtistsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArtistsInput, UserUpdateWithoutArtistsInput>, UserUncheckedUpdateWithoutArtistsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutSessionsInput = {
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tracks?: TrackEditedCreateNestedManyWithoutUserInput
    albums?: AlbumEditedCreateNestedManyWithoutUserInput
    artists?: ArtistEditedCreateNestedManyWithoutUserInput
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tracks?: TrackEditedUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumEditedUncheckedCreateNestedManyWithoutUserInput
    artists?: ArtistEditedUncheckedCreateNestedManyWithoutUserInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackEditedUpdateManyWithoutUserNestedInput
    albums?: AlbumEditedUpdateManyWithoutUserNestedInput
    artists?: ArtistEditedUpdateManyWithoutUserNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TrackEditedUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumEditedUncheckedUpdateManyWithoutUserNestedInput
    artists?: ArtistEditedUncheckedUpdateManyWithoutUserNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type TrackEditedCreateWithoutUserInput = {
    idTrack: string
    idAlbum: string
    idArtist: string
    strTrack: string
    strAlbum: string
    strArtist: string
    strGenre?: string | null
    strMood?: string | null
    strStyle?: string | null
    intDuration?: string | null
    strDescriptionEN?: string | null
    strTrackThumb?: string | null
    strMusicVid?: string | null
    strMusicVidDirector?: string | null
    strMusicVidCompany?: string | null
    intMusicVidViews?: string | null
    intMusicVidLikes?: string | null
    intTrackNumber?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
  }

  export type TrackEditedUncheckedCreateWithoutUserInput = {
    id?: number
    idTrack: string
    idAlbum: string
    idArtist: string
    strTrack: string
    strAlbum: string
    strArtist: string
    strGenre?: string | null
    strMood?: string | null
    strStyle?: string | null
    intDuration?: string | null
    strDescriptionEN?: string | null
    strTrackThumb?: string | null
    strMusicVid?: string | null
    strMusicVidDirector?: string | null
    strMusicVidCompany?: string | null
    intMusicVidViews?: string | null
    intMusicVidLikes?: string | null
    intTrackNumber?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
  }

  export type TrackEditedCreateOrConnectWithoutUserInput = {
    where: TrackEditedWhereUniqueInput
    create: XOR<TrackEditedCreateWithoutUserInput, TrackEditedUncheckedCreateWithoutUserInput>
  }

  export type TrackEditedCreateManyUserInputEnvelope = {
    data: TrackEditedCreateManyUserInput | TrackEditedCreateManyUserInput[]
  }

  export type AlbumEditedCreateWithoutUserInput = {
    idAlbum: string
    idArtist: string
    strAlbum: string
    strArtist: string
    intYearReleased: string
    strGenre?: string | null
    strStyle?: string | null
    strLabel?: string | null
    strReleaseFormat?: string | null
    strAlbumThumb?: string | null
    strAlbumBack?: string | null
    strAlbumCDart?: string | null
    strAlbum3DThumb?: string | null
    strDescriptionEN?: string | null
    strMood?: string | null
    strSpeed?: string | null
    strWikipediaID?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
  }

  export type AlbumEditedUncheckedCreateWithoutUserInput = {
    id?: number
    idAlbum: string
    idArtist: string
    strAlbum: string
    strArtist: string
    intYearReleased: string
    strGenre?: string | null
    strStyle?: string | null
    strLabel?: string | null
    strReleaseFormat?: string | null
    strAlbumThumb?: string | null
    strAlbumBack?: string | null
    strAlbumCDart?: string | null
    strAlbum3DThumb?: string | null
    strDescriptionEN?: string | null
    strMood?: string | null
    strSpeed?: string | null
    strWikipediaID?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
  }

  export type AlbumEditedCreateOrConnectWithoutUserInput = {
    where: AlbumEditedWhereUniqueInput
    create: XOR<AlbumEditedCreateWithoutUserInput, AlbumEditedUncheckedCreateWithoutUserInput>
  }

  export type AlbumEditedCreateManyUserInputEnvelope = {
    data: AlbumEditedCreateManyUserInput | AlbumEditedCreateManyUserInput[]
  }

  export type ArtistEditedCreateWithoutUserInput = {
    idArtist: string
    strArtist: string
    strArtistAlternate?: string | null
    strLabel?: string | null
    intFormedYear?: string | null
    strGenre?: string | null
    strStyle?: string | null
    strMood?: string | null
    strCountry?: string | null
    intMembers?: string | null
    strWebsite?: string | null
    strBiographyEN?: string | null
    strArtistThumb?: string | null
    strArtistLogo?: string | null
    strArtistClearart?: string | null
    strArtistWideThumb?: string | null
    strArtistFanart?: string | null
    strArtistBanner?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
  }

  export type ArtistEditedUncheckedCreateWithoutUserInput = {
    id?: number
    idArtist: string
    strArtist: string
    strArtistAlternate?: string | null
    strLabel?: string | null
    intFormedYear?: string | null
    strGenre?: string | null
    strStyle?: string | null
    strMood?: string | null
    strCountry?: string | null
    intMembers?: string | null
    strWebsite?: string | null
    strBiographyEN?: string | null
    strArtistThumb?: string | null
    strArtistLogo?: string | null
    strArtistClearart?: string | null
    strArtistWideThumb?: string | null
    strArtistFanart?: string | null
    strArtistBanner?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
  }

  export type ArtistEditedCreateOrConnectWithoutUserInput = {
    where: ArtistEditedWhereUniqueInput
    create: XOR<ArtistEditedCreateWithoutUserInput, ArtistEditedUncheckedCreateWithoutUserInput>
  }

  export type ArtistEditedCreateManyUserInputEnvelope = {
    data: ArtistEditedCreateManyUserInput | ArtistEditedCreateManyUserInput[]
  }

  export type UserCreateWithoutFollowersInput = {
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    tracks?: TrackEditedCreateNestedManyWithoutUserInput
    albums?: AlbumEditedCreateNestedManyWithoutUserInput
    artists?: ArtistEditedCreateNestedManyWithoutUserInput
    following?: UserCreateNestedManyWithoutFollowersInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tracks?: TrackEditedUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumEditedUncheckedCreateNestedManyWithoutUserInput
    artists?: ArtistEditedUncheckedCreateNestedManyWithoutUserInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowingInput = {
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    tracks?: TrackEditedCreateNestedManyWithoutUserInput
    albums?: AlbumEditedCreateNestedManyWithoutUserInput
    artists?: ArtistEditedCreateNestedManyWithoutUserInput
    followers?: UserCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tracks?: TrackEditedUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumEditedUncheckedCreateNestedManyWithoutUserInput
    artists?: ArtistEditedUncheckedCreateNestedManyWithoutUserInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type TrackEditedUpsertWithWhereUniqueWithoutUserInput = {
    where: TrackEditedWhereUniqueInput
    update: XOR<TrackEditedUpdateWithoutUserInput, TrackEditedUncheckedUpdateWithoutUserInput>
    create: XOR<TrackEditedCreateWithoutUserInput, TrackEditedUncheckedCreateWithoutUserInput>
  }

  export type TrackEditedUpdateWithWhereUniqueWithoutUserInput = {
    where: TrackEditedWhereUniqueInput
    data: XOR<TrackEditedUpdateWithoutUserInput, TrackEditedUncheckedUpdateWithoutUserInput>
  }

  export type TrackEditedUpdateManyWithWhereWithoutUserInput = {
    where: TrackEditedScalarWhereInput
    data: XOR<TrackEditedUpdateManyMutationInput, TrackEditedUncheckedUpdateManyWithoutUserInput>
  }

  export type TrackEditedScalarWhereInput = {
    AND?: TrackEditedScalarWhereInput | TrackEditedScalarWhereInput[]
    OR?: TrackEditedScalarWhereInput[]
    NOT?: TrackEditedScalarWhereInput | TrackEditedScalarWhereInput[]
    id?: IntFilter<"TrackEdited"> | number
    idTrack?: StringFilter<"TrackEdited"> | string
    idAlbum?: StringFilter<"TrackEdited"> | string
    idArtist?: StringFilter<"TrackEdited"> | string
    strTrack?: StringFilter<"TrackEdited"> | string
    strAlbum?: StringFilter<"TrackEdited"> | string
    strArtist?: StringFilter<"TrackEdited"> | string
    strGenre?: StringNullableFilter<"TrackEdited"> | string | null
    strMood?: StringNullableFilter<"TrackEdited"> | string | null
    strStyle?: StringNullableFilter<"TrackEdited"> | string | null
    intDuration?: StringNullableFilter<"TrackEdited"> | string | null
    strDescriptionEN?: StringNullableFilter<"TrackEdited"> | string | null
    strTrackThumb?: StringNullableFilter<"TrackEdited"> | string | null
    strMusicVid?: StringNullableFilter<"TrackEdited"> | string | null
    strMusicVidDirector?: StringNullableFilter<"TrackEdited"> | string | null
    strMusicVidCompany?: StringNullableFilter<"TrackEdited"> | string | null
    intMusicVidViews?: StringNullableFilter<"TrackEdited"> | string | null
    intMusicVidLikes?: StringNullableFilter<"TrackEdited"> | string | null
    intTrackNumber?: StringNullableFilter<"TrackEdited"> | string | null
    commentary?: StringFilter<"TrackEdited"> | string
    tag?: StringFilter<"TrackEdited"> | string
    rating?: StringFilter<"TrackEdited"> | string
    includesMetadata?: BoolFilter<"TrackEdited"> | boolean
    userId?: IntNullableFilter<"TrackEdited"> | number | null
  }

  export type AlbumEditedUpsertWithWhereUniqueWithoutUserInput = {
    where: AlbumEditedWhereUniqueInput
    update: XOR<AlbumEditedUpdateWithoutUserInput, AlbumEditedUncheckedUpdateWithoutUserInput>
    create: XOR<AlbumEditedCreateWithoutUserInput, AlbumEditedUncheckedCreateWithoutUserInput>
  }

  export type AlbumEditedUpdateWithWhereUniqueWithoutUserInput = {
    where: AlbumEditedWhereUniqueInput
    data: XOR<AlbumEditedUpdateWithoutUserInput, AlbumEditedUncheckedUpdateWithoutUserInput>
  }

  export type AlbumEditedUpdateManyWithWhereWithoutUserInput = {
    where: AlbumEditedScalarWhereInput
    data: XOR<AlbumEditedUpdateManyMutationInput, AlbumEditedUncheckedUpdateManyWithoutUserInput>
  }

  export type AlbumEditedScalarWhereInput = {
    AND?: AlbumEditedScalarWhereInput | AlbumEditedScalarWhereInput[]
    OR?: AlbumEditedScalarWhereInput[]
    NOT?: AlbumEditedScalarWhereInput | AlbumEditedScalarWhereInput[]
    id?: IntFilter<"AlbumEdited"> | number
    idAlbum?: StringFilter<"AlbumEdited"> | string
    idArtist?: StringFilter<"AlbumEdited"> | string
    strAlbum?: StringFilter<"AlbumEdited"> | string
    strArtist?: StringFilter<"AlbumEdited"> | string
    intYearReleased?: StringFilter<"AlbumEdited"> | string
    strGenre?: StringNullableFilter<"AlbumEdited"> | string | null
    strStyle?: StringNullableFilter<"AlbumEdited"> | string | null
    strLabel?: StringNullableFilter<"AlbumEdited"> | string | null
    strReleaseFormat?: StringNullableFilter<"AlbumEdited"> | string | null
    strAlbumThumb?: StringNullableFilter<"AlbumEdited"> | string | null
    strAlbumBack?: StringNullableFilter<"AlbumEdited"> | string | null
    strAlbumCDart?: StringNullableFilter<"AlbumEdited"> | string | null
    strAlbum3DThumb?: StringNullableFilter<"AlbumEdited"> | string | null
    strDescriptionEN?: StringNullableFilter<"AlbumEdited"> | string | null
    strMood?: StringNullableFilter<"AlbumEdited"> | string | null
    strSpeed?: StringNullableFilter<"AlbumEdited"> | string | null
    strWikipediaID?: StringNullableFilter<"AlbumEdited"> | string | null
    commentary?: StringFilter<"AlbumEdited"> | string
    tag?: StringFilter<"AlbumEdited"> | string
    rating?: StringFilter<"AlbumEdited"> | string
    includesMetadata?: BoolFilter<"AlbumEdited"> | boolean
    userId?: IntNullableFilter<"AlbumEdited"> | number | null
  }

  export type ArtistEditedUpsertWithWhereUniqueWithoutUserInput = {
    where: ArtistEditedWhereUniqueInput
    update: XOR<ArtistEditedUpdateWithoutUserInput, ArtistEditedUncheckedUpdateWithoutUserInput>
    create: XOR<ArtistEditedCreateWithoutUserInput, ArtistEditedUncheckedCreateWithoutUserInput>
  }

  export type ArtistEditedUpdateWithWhereUniqueWithoutUserInput = {
    where: ArtistEditedWhereUniqueInput
    data: XOR<ArtistEditedUpdateWithoutUserInput, ArtistEditedUncheckedUpdateWithoutUserInput>
  }

  export type ArtistEditedUpdateManyWithWhereWithoutUserInput = {
    where: ArtistEditedScalarWhereInput
    data: XOR<ArtistEditedUpdateManyMutationInput, ArtistEditedUncheckedUpdateManyWithoutUserInput>
  }

  export type ArtistEditedScalarWhereInput = {
    AND?: ArtistEditedScalarWhereInput | ArtistEditedScalarWhereInput[]
    OR?: ArtistEditedScalarWhereInput[]
    NOT?: ArtistEditedScalarWhereInput | ArtistEditedScalarWhereInput[]
    id?: IntFilter<"ArtistEdited"> | number
    idArtist?: StringFilter<"ArtistEdited"> | string
    strArtist?: StringFilter<"ArtistEdited"> | string
    strArtistAlternate?: StringNullableFilter<"ArtistEdited"> | string | null
    strLabel?: StringNullableFilter<"ArtistEdited"> | string | null
    intFormedYear?: StringNullableFilter<"ArtistEdited"> | string | null
    strGenre?: StringNullableFilter<"ArtistEdited"> | string | null
    strStyle?: StringNullableFilter<"ArtistEdited"> | string | null
    strMood?: StringNullableFilter<"ArtistEdited"> | string | null
    strCountry?: StringNullableFilter<"ArtistEdited"> | string | null
    intMembers?: StringNullableFilter<"ArtistEdited"> | string | null
    strWebsite?: StringNullableFilter<"ArtistEdited"> | string | null
    strBiographyEN?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistThumb?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistLogo?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistClearart?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistWideThumb?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistFanart?: StringNullableFilter<"ArtistEdited"> | string | null
    strArtistBanner?: StringNullableFilter<"ArtistEdited"> | string | null
    commentary?: StringFilter<"ArtistEdited"> | string
    tag?: StringFilter<"ArtistEdited"> | string
    rating?: StringFilter<"ArtistEdited"> | string
    includesMetadata?: BoolFilter<"ArtistEdited"> | boolean
    userId?: IntNullableFilter<"ArtistEdited"> | number | null
  }

  export type UserUpsertWithWhereUniqueWithoutFollowersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowersInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    imageStorageKey?: StringNullableFilter<"User"> | string | null
    passwordUpdatedAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowingInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowingInput>
  }

  export type UserCreateWithoutTracksInput = {
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    albums?: AlbumEditedCreateNestedManyWithoutUserInput
    artists?: ArtistEditedCreateNestedManyWithoutUserInput
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateWithoutTracksInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumEditedUncheckedCreateNestedManyWithoutUserInput
    artists?: ArtistEditedUncheckedCreateNestedManyWithoutUserInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserCreateOrConnectWithoutTracksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTracksInput, UserUncheckedCreateWithoutTracksInput>
  }

  export type UserUpsertWithoutTracksInput = {
    update: XOR<UserUpdateWithoutTracksInput, UserUncheckedUpdateWithoutTracksInput>
    create: XOR<UserCreateWithoutTracksInput, UserUncheckedCreateWithoutTracksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTracksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTracksInput, UserUncheckedUpdateWithoutTracksInput>
  }

  export type UserUpdateWithoutTracksInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    albums?: AlbumEditedUpdateManyWithoutUserNestedInput
    artists?: ArtistEditedUpdateManyWithoutUserNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumEditedUncheckedUpdateManyWithoutUserNestedInput
    artists?: ArtistEditedUncheckedUpdateManyWithoutUserNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type UserCreateWithoutAlbumsInput = {
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    tracks?: TrackEditedCreateNestedManyWithoutUserInput
    artists?: ArtistEditedCreateNestedManyWithoutUserInput
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateWithoutAlbumsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tracks?: TrackEditedUncheckedCreateNestedManyWithoutUserInput
    artists?: ArtistEditedUncheckedCreateNestedManyWithoutUserInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserCreateOrConnectWithoutAlbumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
  }

  export type UserUpsertWithoutAlbumsInput = {
    update: XOR<UserUpdateWithoutAlbumsInput, UserUncheckedUpdateWithoutAlbumsInput>
    create: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlbumsInput, UserUncheckedUpdateWithoutAlbumsInput>
  }

  export type UserUpdateWithoutAlbumsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tracks?: TrackEditedUpdateManyWithoutUserNestedInput
    artists?: ArtistEditedUpdateManyWithoutUserNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateWithoutAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tracks?: TrackEditedUncheckedUpdateManyWithoutUserNestedInput
    artists?: ArtistEditedUncheckedUpdateManyWithoutUserNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type UserCreateWithoutArtistsInput = {
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    tracks?: TrackEditedCreateNestedManyWithoutUserInput
    albums?: AlbumEditedCreateNestedManyWithoutUserInput
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateWithoutArtistsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    imageUrl?: string | null
    imageStorageKey?: string | null
    passwordUpdatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tracks?: TrackEditedUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumEditedUncheckedCreateNestedManyWithoutUserInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserCreateOrConnectWithoutArtistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArtistsInput, UserUncheckedCreateWithoutArtistsInput>
  }

  export type UserUpsertWithoutArtistsInput = {
    update: XOR<UserUpdateWithoutArtistsInput, UserUncheckedUpdateWithoutArtistsInput>
    create: XOR<UserCreateWithoutArtistsInput, UserUncheckedCreateWithoutArtistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArtistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArtistsInput, UserUncheckedUpdateWithoutArtistsInput>
  }

  export type UserUpdateWithoutArtistsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tracks?: TrackEditedUpdateManyWithoutUserNestedInput
    albums?: AlbumEditedUpdateManyWithoutUserNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateWithoutArtistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tracks?: TrackEditedUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumEditedUncheckedUpdateManyWithoutUserNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type TrackEditedCreateManyUserInput = {
    id?: number
    idTrack: string
    idAlbum: string
    idArtist: string
    strTrack: string
    strAlbum: string
    strArtist: string
    strGenre?: string | null
    strMood?: string | null
    strStyle?: string | null
    intDuration?: string | null
    strDescriptionEN?: string | null
    strTrackThumb?: string | null
    strMusicVid?: string | null
    strMusicVidDirector?: string | null
    strMusicVidCompany?: string | null
    intMusicVidViews?: string | null
    intMusicVidLikes?: string | null
    intTrackNumber?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
  }

  export type AlbumEditedCreateManyUserInput = {
    id?: number
    idAlbum: string
    idArtist: string
    strAlbum: string
    strArtist: string
    intYearReleased: string
    strGenre?: string | null
    strStyle?: string | null
    strLabel?: string | null
    strReleaseFormat?: string | null
    strAlbumThumb?: string | null
    strAlbumBack?: string | null
    strAlbumCDart?: string | null
    strAlbum3DThumb?: string | null
    strDescriptionEN?: string | null
    strMood?: string | null
    strSpeed?: string | null
    strWikipediaID?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
  }

  export type ArtistEditedCreateManyUserInput = {
    id?: number
    idArtist: string
    strArtist: string
    strArtistAlternate?: string | null
    strLabel?: string | null
    intFormedYear?: string | null
    strGenre?: string | null
    strStyle?: string | null
    strMood?: string | null
    strCountry?: string | null
    intMembers?: string | null
    strWebsite?: string | null
    strBiographyEN?: string | null
    strArtistThumb?: string | null
    strArtistLogo?: string | null
    strArtistClearart?: string | null
    strArtistWideThumb?: string | null
    strArtistFanart?: string | null
    strArtistBanner?: string | null
    commentary: string
    tag: string
    rating: string
    includesMetadata?: boolean
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackEditedUpdateWithoutUserInput = {
    idTrack?: StringFieldUpdateOperationsInput | string
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strTrack?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    intDuration?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strTrackThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVid?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidDirector?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidCompany?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidViews?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidLikes?: NullableStringFieldUpdateOperationsInput | string | null
    intTrackNumber?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackEditedUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTrack?: StringFieldUpdateOperationsInput | string
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strTrack?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    intDuration?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strTrackThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVid?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidDirector?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidCompany?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidViews?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidLikes?: NullableStringFieldUpdateOperationsInput | string | null
    intTrackNumber?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackEditedUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    idTrack?: StringFieldUpdateOperationsInput | string
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strTrack?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    intDuration?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strTrackThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVid?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidDirector?: NullableStringFieldUpdateOperationsInput | string | null
    strMusicVidCompany?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidViews?: NullableStringFieldUpdateOperationsInput | string | null
    intMusicVidLikes?: NullableStringFieldUpdateOperationsInput | string | null
    intTrackNumber?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlbumEditedUpdateWithoutUserInput = {
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    intYearReleased?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    strReleaseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumBack?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumCDart?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbum3DThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    strWikipediaID?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlbumEditedUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    intYearReleased?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    strReleaseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumBack?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumCDart?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbum3DThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    strWikipediaID?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlbumEditedUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    idAlbum?: StringFieldUpdateOperationsInput | string
    idArtist?: StringFieldUpdateOperationsInput | string
    strAlbum?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    intYearReleased?: StringFieldUpdateOperationsInput | string
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    strReleaseFormat?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumBack?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbumCDart?: NullableStringFieldUpdateOperationsInput | string | null
    strAlbum3DThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strDescriptionEN?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    strWikipediaID?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistEditedUpdateWithoutUserInput = {
    idArtist?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strArtistAlternate?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    intFormedYear?: NullableStringFieldUpdateOperationsInput | string | null
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strCountry?: NullableStringFieldUpdateOperationsInput | string | null
    intMembers?: NullableStringFieldUpdateOperationsInput | string | null
    strWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    strBiographyEN?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistLogo?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistClearart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistWideThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistFanart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistBanner?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistEditedUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    idArtist?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strArtistAlternate?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    intFormedYear?: NullableStringFieldUpdateOperationsInput | string | null
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strCountry?: NullableStringFieldUpdateOperationsInput | string | null
    intMembers?: NullableStringFieldUpdateOperationsInput | string | null
    strWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    strBiographyEN?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistLogo?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistClearart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistWideThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistFanart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistBanner?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistEditedUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    idArtist?: StringFieldUpdateOperationsInput | string
    strArtist?: StringFieldUpdateOperationsInput | string
    strArtistAlternate?: NullableStringFieldUpdateOperationsInput | string | null
    strLabel?: NullableStringFieldUpdateOperationsInput | string | null
    intFormedYear?: NullableStringFieldUpdateOperationsInput | string | null
    strGenre?: NullableStringFieldUpdateOperationsInput | string | null
    strStyle?: NullableStringFieldUpdateOperationsInput | string | null
    strMood?: NullableStringFieldUpdateOperationsInput | string | null
    strCountry?: NullableStringFieldUpdateOperationsInput | string | null
    intMembers?: NullableStringFieldUpdateOperationsInput | string | null
    strWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    strBiographyEN?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistLogo?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistClearart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistWideThumb?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistFanart?: NullableStringFieldUpdateOperationsInput | string | null
    strArtistBanner?: NullableStringFieldUpdateOperationsInput | string | null
    commentary?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    includesMetadata?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpdateWithoutFollowersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tracks?: TrackEditedUpdateManyWithoutUserNestedInput
    albums?: AlbumEditedUpdateManyWithoutUserNestedInput
    artists?: ArtistEditedUpdateManyWithoutUserNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tracks?: TrackEditedUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumEditedUncheckedUpdateManyWithoutUserNestedInput
    artists?: ArtistEditedUncheckedUpdateManyWithoutUserNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutFollowingInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tracks?: TrackEditedUpdateManyWithoutUserNestedInput
    albums?: AlbumEditedUpdateManyWithoutUserNestedInput
    artists?: ArtistEditedUpdateManyWithoutUserNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tracks?: TrackEditedUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumEditedUncheckedUpdateManyWithoutUserNestedInput
    artists?: ArtistEditedUncheckedUpdateManyWithoutUserNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageKey?: NullableStringFieldUpdateOperationsInput | string | null
    passwordUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}