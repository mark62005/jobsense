/**
 * Client
 **/

import * as runtime from "./runtime/client.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Organization
 *
 */
export type Organization =
	$Result.DefaultSelection<Prisma.$OrganizationPayload>;
/**
 * Model JobListing
 *
 */
export type JobListing = $Result.DefaultSelection<Prisma.$JobListingPayload>;
/**
 * Model Application
 *
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>;
/**
 * Model Resume
 *
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>;
/**
 * Model UserSettingUnderOrganization
 *
 */
export type UserSettingUnderOrganization =
	$Result.DefaultSelection<Prisma.$UserSettingUnderOrganizationPayload>;
/**
 * Model UserNotificationSetting
 *
 */
export type UserNotificationSetting =
	$Result.DefaultSelection<Prisma.$UserNotificationSettingPayload>;

/**
 * Enums
 */
export namespace $Enums {
	export const WageInterval: {
		Hourly: "Hourly";
		Yearly: "Yearly";
	};

	export type WageInterval = (typeof WageInterval)[keyof typeof WageInterval];

	export const LocationRequirement: {
		In_Office: "In_Office";
		Remote: "Remote";
		Hybrid: "Hybrid";
	};

	export type LocationRequirement =
		(typeof LocationRequirement)[keyof typeof LocationRequirement];

	export const ExperienceLevel: {
		Junior: "Junior";
		Mid_Level: "Mid_Level";
		Senior: "Senior";
	};

	export type ExperienceLevel =
		(typeof ExperienceLevel)[keyof typeof ExperienceLevel];

	export const JobListingStatus: {
		Draft: "Draft";
		Published: "Published";
		Delisted: "Delisted";
	};

	export type JobListingStatus =
		(typeof JobListingStatus)[keyof typeof JobListingStatus];

	export const JobListingType: {
		Internship: "Internship";
		Part_Time: "Part_Time";
		Full_Time: "Full_Time";
	};

	export type JobListingType =
		(typeof JobListingType)[keyof typeof JobListingType];

	export const ApplicationStage: {
		Interested: "Interested";
		Applied: "Applied";
		Interviewed: "Interviewed";
		Hired: "Hired";
		Denied: "Denied";
	};

	export type ApplicationStage =
		(typeof ApplicationStage)[keyof typeof ApplicationStage];
}

export type WageInterval = $Enums.WageInterval;

export const WageInterval: typeof $Enums.WageInterval;

export type LocationRequirement = $Enums.LocationRequirement;

export const LocationRequirement: typeof $Enums.LocationRequirement;

export type ExperienceLevel = $Enums.ExperienceLevel;

export const ExperienceLevel: typeof $Enums.ExperienceLevel;

export type JobListingStatus = $Enums.JobListingStatus;

export const JobListingStatus: typeof $Enums.JobListingStatus;

export type JobListingType = $Enums.JobListingType;

export const JobListingType: typeof $Enums.JobListingType;

export type ApplicationStage = $Enums.ApplicationStage;

export const ApplicationStage: typeof $Enums.ApplicationStage;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
	ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
	const U = "log" extends keyof ClientOptions
		? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
			? Prisma.GetEvents<ClientOptions["log"]>
			: never
		: never,
	ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
	[K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

	/**
	 * ##  Prisma Client ʲˢ
	 *
	 * Type-safe database client for TypeScript & Node.js
	 * @example
	 * ```
	 * const prisma = new PrismaClient()
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 *
	 *
	 * Read more in our [docs](https://pris.ly/d/client).
	 */

	constructor(
		optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
	);
	$on<V extends U>(
		eventType: V,
		callback: (
			event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
		) => void,
	): PrismaClient;

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
	 * Read more in our [docs](https://pris.ly/d/raw-queries).
	 */
	$executeRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<number>;

	/**
	 * Executes a raw query and returns the number of affected rows.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://pris.ly/d/raw-queries).
	 */
	$executeRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<number>;

	/**
	 * Performs a prepared raw query and returns the `SELECT` data.
	 * @example
	 * ```
	 * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://pris.ly/d/raw-queries).
	 */
	$queryRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<T>;

	/**
	 * Performs a raw query and returns the `SELECT` data.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://pris.ly/d/raw-queries).
	 */
	$queryRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<T>;

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
	$transaction<P extends Prisma.PrismaPromise<any>[]>(
		arg: [...P],
		options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
	): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

	$transaction<R>(
		fn: (
			prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
		) => $Utils.JsPromise<R>,
		options?: {
			maxWait?: number;
			timeout?: number;
			isolationLevel?: Prisma.TransactionIsolationLevel;
		},
	): $Utils.JsPromise<R>;

	$extends: $Extensions.ExtendsHook<
		"extends",
		Prisma.TypeMapCb<ClientOptions>,
		ExtArgs,
		$Utils.Call<
			Prisma.TypeMapCb<ClientOptions>,
			{
				extArgs: ExtArgs;
			}
		>
	>;

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
	 * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Organizations
	 * const organizations = await prisma.organization.findMany()
	 * ```
	 */
	get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.jobListing`: Exposes CRUD operations for the **JobListing** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more JobListings
	 * const jobListings = await prisma.jobListing.findMany()
	 * ```
	 */
	get jobListing(): Prisma.JobListingDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.application`: Exposes CRUD operations for the **Application** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Applications
	 * const applications = await prisma.application.findMany()
	 * ```
	 */
	get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Resumes
	 * const resumes = await prisma.resume.findMany()
	 * ```
	 */
	get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.userSettingUnderOrganization`: Exposes CRUD operations for the **UserSettingUnderOrganization** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more UserSettingUnderOrganizations
	 * const userSettingUnderOrganizations = await prisma.userSettingUnderOrganization.findMany()
	 * ```
	 */
	get userSettingUnderOrganization(): Prisma.UserSettingUnderOrganizationDelegate<
		ExtArgs,
		ClientOptions
	>;

	/**
	 * `prisma.userNotificationSetting`: Exposes CRUD operations for the **UserNotificationSetting** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more UserNotificationSettings
	 * const userNotificationSettings = await prisma.userNotificationSetting.findMany()
	 * ```
	 */
	get userNotificationSetting(): Prisma.UserNotificationSettingDelegate<
		ExtArgs,
		ClientOptions
	>;
}

export namespace Prisma {
	export import DMMF = runtime.DMMF;

	export type PrismaPromise<T> = $Public.PrismaPromise<T>;

	/**
	 * Validator
	 */
	export import validator = runtime.Public.validator;

	/**
	 * Prisma Errors
	 */
	export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
	export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
	export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
	export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
	export import PrismaClientValidationError = runtime.PrismaClientValidationError;

	/**
	 * Re-export of sql-template-tag
	 */
	export import sql = runtime.sqltag;
	export import empty = runtime.empty;
	export import join = runtime.join;
	export import raw = runtime.raw;
	export import Sql = runtime.Sql;

	/**
	 * Decimal.js
	 */
	export import Decimal = runtime.Decimal;

	export type DecimalJsLike = runtime.DecimalJsLike;

	/**
	 * Extensions
	 */
	export import Extension = $Extensions.UserArgs;
	export import getExtensionContext = runtime.Extensions.getExtensionContext;
	export import Args = $Public.Args;
	export import Payload = $Public.Payload;
	export import Result = $Public.Result;
	export import Exact = $Public.Exact;

	/**
	 * Prisma Client JS version: 7.3.0
	 * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
	 */
	export type PrismaVersion = {
		client: string;
		engine: string;
	};

	export const prismaVersion: PrismaVersion;

	/**
	 * Utility Types
	 */

	export import Bytes = runtime.Bytes;
	export import JsonObject = runtime.JsonObject;
	export import JsonArray = runtime.JsonArray;
	export import JsonValue = runtime.JsonValue;
	export import InputJsonObject = runtime.InputJsonObject;
	export import InputJsonArray = runtime.InputJsonArray;
	export import InputJsonValue = runtime.InputJsonValue;

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
			private DbNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.JsonNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class JsonNull {
			private JsonNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.AnyNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class AnyNull {
			private AnyNull: never;
			private constructor();
		}
	}

	/**
	 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const DbNull: NullTypes.DbNull;

	/**
	 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const JsonNull: NullTypes.JsonNull;

	/**
	 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const AnyNull: NullTypes.AnyNull;

	type SelectAndInclude = {
		select: any;
		include: any;
	};

	type SelectAndOmit = {
		select: any;
		omit: any;
	};

	/**
	 * Get the type of the value, that the Promise holds.
	 */
	export type PromiseType<T extends PromiseLike<any>> =
		T extends PromiseLike<infer U> ? U : T;

	/**
	 * Get the return type of a function which returns a Promise.
	 */
	export type PromiseReturnType<
		T extends (...args: any) => $Utils.JsPromise<any>,
	> = PromiseType<ReturnType<T>>;

	/**
	 * From T, pick a set of properties whose keys are in the union K
	 */
	type Prisma__Pick<T, K extends keyof T> = {
		[P in K]: T[P];
	};

	export type Enumerable<T> = T | Array<T>;

	export type RequiredKeys<T> = {
		[K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
	}[keyof T];

	export type TruthyKeys<T> = keyof {
		[K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
	};

	export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

	/**
	 * Subset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
	 */
	export type Subset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	};
	bi;

	/**
	 * SelectSubset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
	 * Additionally, it validates, if both select and include are present. If the case, it errors.
	 */
	export type SelectSubset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & (T extends SelectAndInclude
		? "Please either choose `select` or `include`."
		: T extends SelectAndOmit
			? "Please either choose `select` or `omit`."
			: {});

	/**
	 * Subset + Intersection
	 * @desc From `T` pick properties that exist in `U` and intersect `K`
	 */
	export type SubsetIntersection<T, U, K> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & K;

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

	/**
	 * XOR is needed to have a real mutually exclusive union type
	 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
	 */
	type XOR<T, U> = T extends object
		? U extends object
			? (Without<T, U> & U) | (Without<U, T> & T)
			: U
		: T;

	/**
	 * Is T a Record?
	 */
	type IsObject<T extends any> =
		T extends Array<any>
			? False
			: T extends Date
				? False
				: T extends Uint8Array
					? False
					: T extends BigInt
						? False
						: T extends object
							? True
							: False;

	/**
	 * If it's T[], return T
	 */
	export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

	/**
	 * From ts-toolbelt
	 */

	type __Either<O extends object, K extends Key> = Omit<O, K> &
		{
			// Merge all but K
			[P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
		}[K];

	type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

	type EitherLoose<O extends object, K extends Key> = ComputeRaw<
		__Either<O, K>
	>;

	type _Either<O extends object, K extends Key, strict extends Boolean> = {
		1: EitherStrict<O, K>;
		0: EitherLoose<O, K>;
	}[strict];

	type Either<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = O extends unknown ? _Either<O, K, strict> : never;

	export type Union = any;

	type PatchUndefined<O extends object, O1 extends object> = {
		[K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
	} & {};

	/** Helper Types for "Merge" **/
	export type IntersectOf<U extends Union> = (
		U extends unknown ? (k: U) => void : never
	) extends (k: infer I) => void
		? I
		: never;

	export type Overwrite<O extends object, O1 extends object> = {
		[K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
	} & {};

	type _Merge<U extends object> = IntersectOf<
		Overwrite<
			U,
			{
				[K in keyof U]-?: At<U, K>;
			}
		>
	>;

	type Key = string | number | symbol;
	type AtBasic<O extends object, K extends Key> = K extends keyof O
		? O[K]
		: never;
	type AtStrict<O extends object, K extends Key> = O[K & keyof O];
	type AtLoose<O extends object, K extends Key> = O extends unknown
		? AtStrict<O, K>
		: never;
	export type At<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = {
		1: AtStrict<O, K>;
		0: AtLoose<O, K>;
	}[strict];

	export type ComputeRaw<A extends any> = A extends Function
		? A
		: {
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
			?
					| (K extends keyof O ? { [P in K]: O[P] } & O : O)
					| ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
			: never
	>;

	type _Strict<U, _U = U> = U extends unknown
		? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
		: never;

	export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
	/** End Helper Types for "Merge" **/

	export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

	/**
  A [[Boolean]]
  */
	export type Boolean = True | False;

	// /**
	// 1
	// */
	export type True = 1;

	/**
  0
  */
	export type False = 0;

	export type Not<B extends Boolean> = {
		0: 1;
		1: 0;
	}[B];

	export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
		? 0 // anything `never` is false
		: A1 extends A2
			? 1
			: 0;

	export type Has<U extends Union, U1 extends Union> = Not<
		Extends<Exclude<U1, U>, U1>
	>;

	export type Or<B1 extends Boolean, B2 extends Boolean> = {
		0: {
			0: 0;
			1: 1;
		};
		1: {
			0: 1;
			1: 1;
		};
	}[B1][B2];

	export type Keys<U extends Union> = U extends unknown ? keyof U : never;

	type Cast<A, B> = A extends B ? A : B;

	export const type: unique symbol;

	/**
	 * Used by group by
	 */

	export type GetScalarType<T, O> = O extends object
		? {
				[P in keyof T]: P extends keyof O ? O[P] : never;
			}
		: never;

	type FieldPaths<
		T,
		U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
	> = IsObject<T> extends True ? U : T;

	type GetHavingFields<T> = {
		[K in keyof T]: Or<
			Or<Extends<"OR", K>, Extends<"AND", K>>,
			Extends<"NOT", K>
		> extends True
			? // infer is only needed to not hit TS limit
				// based on the brilliant idea of Pierre-Antoine Mills
				// https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
				T[K] extends infer TK
				? GetHavingFields<
						UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
					>
				: never
			: {} extends FieldPaths<T[K]>
				? never
				: K;
	}[keyof T];

	/**
	 * Convert tuple to union
	 */
	type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
	type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
	type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

	/**
	 * Like `Pick`, but additionally can also accept an array of keys
	 */
	type PickEnumerable<
		T,
		K extends Enumerable<keyof T> | keyof T,
	> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

	/**
	 * Exclude all keys with underscores
	 */
	type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
		? never
		: T;

	export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

	type FieldRefInputType<Model, FieldType> = Model extends never
		? never
		: FieldRef<Model, FieldType>;

	export const ModelName: {
		User: "User";
		Organization: "Organization";
		JobListing: "JobListing";
		Application: "Application";
		Resume: "Resume";
		UserSettingUnderOrganization: "UserSettingUnderOrganization";
		UserNotificationSetting: "UserNotificationSetting";
	};

	export type ModelName = (typeof ModelName)[keyof typeof ModelName];

	interface TypeMapCb<ClientOptions = {}>
		extends $Utils.Fn<
			{ extArgs: $Extensions.InternalArgs },
			$Utils.Record<string, any>
		> {
		returns: Prisma.TypeMap<
			this["params"]["extArgs"],
			ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
		>;
	}

	export type TypeMap<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> = {
		globalOmitOptions: {
			omit: GlobalOmitOptions;
		};
		meta: {
			modelProps:
				| "user"
				| "organization"
				| "jobListing"
				| "application"
				| "resume"
				| "userSettingUnderOrganization"
				| "userNotificationSetting";
			txIsolationLevel: Prisma.TransactionIsolationLevel;
		};
		model: {
			User: {
				payload: Prisma.$UserPayload<ExtArgs>;
				fields: Prisma.UserFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.UserFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findFirst: {
						args: Prisma.UserFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findMany: {
						args: Prisma.UserFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					create: {
						args: Prisma.UserCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					createMany: {
						args: Prisma.UserCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					delete: {
						args: Prisma.UserDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					update: {
						args: Prisma.UserUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					deleteMany: {
						args: Prisma.UserDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.UserUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					upsert: {
						args: Prisma.UserUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					aggregate: {
						args: Prisma.UserAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateUser>;
					};
					groupBy: {
						args: Prisma.UserGroupByArgs<ExtArgs>;
						result: $Utils.Optional<UserGroupByOutputType>[];
					};
					count: {
						args: Prisma.UserCountArgs<ExtArgs>;
						result: $Utils.Optional<UserCountAggregateOutputType> | number;
					};
				};
			};
			Organization: {
				payload: Prisma.$OrganizationPayload<ExtArgs>;
				fields: Prisma.OrganizationFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.OrganizationFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
					};
					findFirst: {
						args: Prisma.OrganizationFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
					};
					findMany: {
						args: Prisma.OrganizationFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
					};
					create: {
						args: Prisma.OrganizationCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
					};
					createMany: {
						args: Prisma.OrganizationCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
					};
					delete: {
						args: Prisma.OrganizationDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
					};
					update: {
						args: Prisma.OrganizationUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
					};
					deleteMany: {
						args: Prisma.OrganizationDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.OrganizationUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
					};
					upsert: {
						args: Prisma.OrganizationUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
					};
					aggregate: {
						args: Prisma.OrganizationAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateOrganization>;
					};
					groupBy: {
						args: Prisma.OrganizationGroupByArgs<ExtArgs>;
						result: $Utils.Optional<OrganizationGroupByOutputType>[];
					};
					count: {
						args: Prisma.OrganizationCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<OrganizationCountAggregateOutputType>
							| number;
					};
				};
			};
			JobListing: {
				payload: Prisma.$JobListingPayload<ExtArgs>;
				fields: Prisma.JobListingFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.JobListingFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$JobListingPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.JobListingFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$JobListingPayload>;
					};
					findFirst: {
						args: Prisma.JobListingFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$JobListingPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.JobListingFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$JobListingPayload>;
					};
					findMany: {
						args: Prisma.JobListingFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$JobListingPayload>[];
					};
					create: {
						args: Prisma.JobListingCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$JobListingPayload>;
					};
					createMany: {
						args: Prisma.JobListingCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.JobListingCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$JobListingPayload>[];
					};
					delete: {
						args: Prisma.JobListingDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$JobListingPayload>;
					};
					update: {
						args: Prisma.JobListingUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$JobListingPayload>;
					};
					deleteMany: {
						args: Prisma.JobListingDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.JobListingUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.JobListingUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$JobListingPayload>[];
					};
					upsert: {
						args: Prisma.JobListingUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$JobListingPayload>;
					};
					aggregate: {
						args: Prisma.JobListingAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateJobListing>;
					};
					groupBy: {
						args: Prisma.JobListingGroupByArgs<ExtArgs>;
						result: $Utils.Optional<JobListingGroupByOutputType>[];
					};
					count: {
						args: Prisma.JobListingCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<JobListingCountAggregateOutputType>
							| number;
					};
				};
			};
			Application: {
				payload: Prisma.$ApplicationPayload<ExtArgs>;
				fields: Prisma.ApplicationFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.ApplicationFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
					};
					findFirst: {
						args: Prisma.ApplicationFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
					};
					findMany: {
						args: Prisma.ApplicationFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
					};
					create: {
						args: Prisma.ApplicationCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
					};
					createMany: {
						args: Prisma.ApplicationCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
					};
					delete: {
						args: Prisma.ApplicationDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
					};
					update: {
						args: Prisma.ApplicationUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
					};
					deleteMany: {
						args: Prisma.ApplicationDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.ApplicationUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
					};
					upsert: {
						args: Prisma.ApplicationUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
					};
					aggregate: {
						args: Prisma.ApplicationAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateApplication>;
					};
					groupBy: {
						args: Prisma.ApplicationGroupByArgs<ExtArgs>;
						result: $Utils.Optional<ApplicationGroupByOutputType>[];
					};
					count: {
						args: Prisma.ApplicationCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<ApplicationCountAggregateOutputType>
							| number;
					};
				};
			};
			Resume: {
				payload: Prisma.$ResumePayload<ExtArgs>;
				fields: Prisma.ResumeFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.ResumeFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResumePayload>;
					};
					findFirst: {
						args: Prisma.ResumeFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResumePayload>;
					};
					findMany: {
						args: Prisma.ResumeFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResumePayload>[];
					};
					create: {
						args: Prisma.ResumeCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResumePayload>;
					};
					createMany: {
						args: Prisma.ResumeCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResumePayload>[];
					};
					delete: {
						args: Prisma.ResumeDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResumePayload>;
					};
					update: {
						args: Prisma.ResumeUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResumePayload>;
					};
					deleteMany: {
						args: Prisma.ResumeDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.ResumeUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResumePayload>[];
					};
					upsert: {
						args: Prisma.ResumeUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$ResumePayload>;
					};
					aggregate: {
						args: Prisma.ResumeAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateResume>;
					};
					groupBy: {
						args: Prisma.ResumeGroupByArgs<ExtArgs>;
						result: $Utils.Optional<ResumeGroupByOutputType>[];
					};
					count: {
						args: Prisma.ResumeCountArgs<ExtArgs>;
						result: $Utils.Optional<ResumeCountAggregateOutputType> | number;
					};
				};
			};
			UserSettingUnderOrganization: {
				payload: Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>;
				fields: Prisma.UserSettingUnderOrganizationFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.UserSettingUnderOrganizationFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserSettingUnderOrganizationPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.UserSettingUnderOrganizationFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserSettingUnderOrganizationPayload>;
					};
					findFirst: {
						args: Prisma.UserSettingUnderOrganizationFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserSettingUnderOrganizationPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.UserSettingUnderOrganizationFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserSettingUnderOrganizationPayload>;
					};
					findMany: {
						args: Prisma.UserSettingUnderOrganizationFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserSettingUnderOrganizationPayload>[];
					};
					create: {
						args: Prisma.UserSettingUnderOrganizationCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserSettingUnderOrganizationPayload>;
					};
					createMany: {
						args: Prisma.UserSettingUnderOrganizationCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.UserSettingUnderOrganizationCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserSettingUnderOrganizationPayload>[];
					};
					delete: {
						args: Prisma.UserSettingUnderOrganizationDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserSettingUnderOrganizationPayload>;
					};
					update: {
						args: Prisma.UserSettingUnderOrganizationUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserSettingUnderOrganizationPayload>;
					};
					deleteMany: {
						args: Prisma.UserSettingUnderOrganizationDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.UserSettingUnderOrganizationUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.UserSettingUnderOrganizationUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserSettingUnderOrganizationPayload>[];
					};
					upsert: {
						args: Prisma.UserSettingUnderOrganizationUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserSettingUnderOrganizationPayload>;
					};
					aggregate: {
						args: Prisma.UserSettingUnderOrganizationAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateUserSettingUnderOrganization>;
					};
					groupBy: {
						args: Prisma.UserSettingUnderOrganizationGroupByArgs<ExtArgs>;
						result: $Utils.Optional<UserSettingUnderOrganizationGroupByOutputType>[];
					};
					count: {
						args: Prisma.UserSettingUnderOrganizationCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<UserSettingUnderOrganizationCountAggregateOutputType>
							| number;
					};
				};
			};
			UserNotificationSetting: {
				payload: Prisma.$UserNotificationSettingPayload<ExtArgs>;
				fields: Prisma.UserNotificationSettingFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.UserNotificationSettingFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserNotificationSettingPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.UserNotificationSettingFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserNotificationSettingPayload>;
					};
					findFirst: {
						args: Prisma.UserNotificationSettingFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserNotificationSettingPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.UserNotificationSettingFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserNotificationSettingPayload>;
					};
					findMany: {
						args: Prisma.UserNotificationSettingFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserNotificationSettingPayload>[];
					};
					create: {
						args: Prisma.UserNotificationSettingCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserNotificationSettingPayload>;
					};
					createMany: {
						args: Prisma.UserNotificationSettingCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.UserNotificationSettingCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserNotificationSettingPayload>[];
					};
					delete: {
						args: Prisma.UserNotificationSettingDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserNotificationSettingPayload>;
					};
					update: {
						args: Prisma.UserNotificationSettingUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserNotificationSettingPayload>;
					};
					deleteMany: {
						args: Prisma.UserNotificationSettingDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.UserNotificationSettingUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.UserNotificationSettingUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserNotificationSettingPayload>[];
					};
					upsert: {
						args: Prisma.UserNotificationSettingUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserNotificationSettingPayload>;
					};
					aggregate: {
						args: Prisma.UserNotificationSettingAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateUserNotificationSetting>;
					};
					groupBy: {
						args: Prisma.UserNotificationSettingGroupByArgs<ExtArgs>;
						result: $Utils.Optional<UserNotificationSettingGroupByOutputType>[];
					};
					count: {
						args: Prisma.UserNotificationSettingCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<UserNotificationSettingCountAggregateOutputType>
							| number;
					};
				};
			};
		};
	} & {
		other: {
			payload: any;
			operations: {
				$executeRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
					result: any;
				};
				$executeRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
				$queryRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
					result: any;
				};
				$queryRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
			};
		};
	};
	export const defineExtension: $Extensions.ExtendsHook<
		"define",
		Prisma.TypeMapCb,
		$Extensions.DefaultArgs
	>;
	export type DefaultPrismaClient = PrismaClient;
	export type ErrorFormat = "pretty" | "colorless" | "minimal";
	export interface PrismaClientOptions {
		/**
		 * @default "colorless"
		 */
		errorFormat?: ErrorFormat;
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
		 * Read more in our [docs](https://pris.ly/d/logging).
		 */
		log?: (LogLevel | LogDefinition)[];
		/**
		 * The default values for transactionOptions
		 * maxWait ?= 2000
		 * timeout ?= 5000
		 */
		transactionOptions?: {
			maxWait?: number;
			timeout?: number;
			isolationLevel?: Prisma.TransactionIsolationLevel;
		};
		/**
		 * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
		 */
		adapter?: runtime.SqlDriverAdapterFactory;
		/**
		 * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
		 */
		accelerateUrl?: string;
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
		omit?: Prisma.GlobalOmitConfig;
		/**
		 * SQL commenter plugins that add metadata to SQL queries as comments.
		 * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
		 *
		 * @example
		 * ```
		 * const prisma = new PrismaClient({
		 *   adapter,
		 *   comments: [
		 *     traceContext(),
		 *     queryInsights(),
		 *   ],
		 * })
		 * ```
		 */
		comments?: runtime.SqlCommenterPlugin[];
	}
	export type GlobalOmitConfig = {
		user?: UserOmit;
		organization?: OrganizationOmit;
		jobListing?: JobListingOmit;
		application?: ApplicationOmit;
		resume?: ResumeOmit;
		userSettingUnderOrganization?: UserSettingUnderOrganizationOmit;
		userNotificationSetting?: UserNotificationSettingOmit;
	};

	/* Types for Logging */
	export type LogLevel = "info" | "query" | "warn" | "error";
	export type LogDefinition = {
		level: LogLevel;
		emit: "stdout" | "event";
	};

	export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

	export type GetLogType<T> = CheckIsLogLevel<
		T extends LogDefinition ? T["level"] : T
	>;

	export type GetEvents<T extends any[]> =
		T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

	export type QueryEvent = {
		timestamp: Date;
		query: string;
		params: string;
		duration: number;
		target: string;
	};

	export type LogEvent = {
		timestamp: Date;
		message: string;
		target: string;
	};
	/* End Types for Logging */

	export type PrismaAction =
		| "findUnique"
		| "findUniqueOrThrow"
		| "findMany"
		| "findFirst"
		| "findFirstOrThrow"
		| "create"
		| "createMany"
		| "createManyAndReturn"
		| "update"
		| "updateMany"
		| "updateManyAndReturn"
		| "upsert"
		| "delete"
		| "deleteMany"
		| "executeRaw"
		| "queryRaw"
		| "aggregate"
		| "count"
		| "runCommandRaw"
		| "findRaw"
		| "groupBy";

	// tested in getLogLevel.test.ts
	export function getLogLevel(
		log: Array<LogLevel | LogDefinition>,
	): LogLevel | undefined;

	/**
	 * `PrismaClient` proxy available in interactive transactions.
	 */
	export type TransactionClient = Omit<
		Prisma.DefaultPrismaClient,
		runtime.ITXClientDenyList
	>;

	export type Datasource = {
		url?: string;
	};

	/**
	 * Count Types
	 */

	/**
	 * Count Type UserCountOutputType
	 */

	export type UserCountOutputType = {
		userSettingUnderOrganizations: number;
		applications: number;
	};

	export type UserCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		userSettingUnderOrganizations?:
			| boolean
			| UserCountOutputTypeCountUserSettingUnderOrganizationsArgs;
		applications?: boolean | UserCountOutputTypeCountApplicationsArgs;
	};

	// Custom InputTypes
	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserCountOutputType
		 */
		select?: UserCountOutputTypeSelect<ExtArgs> | null;
	};

	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeCountUserSettingUnderOrganizationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: UserSettingUnderOrganizationWhereInput;
	};

	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeCountApplicationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ApplicationWhereInput;
	};

	/**
	 * Count Type OrganizationCountOutputType
	 */

	export type OrganizationCountOutputType = {
		jobListings: number;
		userSettingUnderOrganizations: number;
	};

	export type OrganizationCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		jobListings?: boolean | OrganizationCountOutputTypeCountJobListingsArgs;
		userSettingUnderOrganizations?:
			| boolean
			| OrganizationCountOutputTypeCountUserSettingUnderOrganizationsArgs;
	};

	// Custom InputTypes
	/**
	 * OrganizationCountOutputType without action
	 */
	export type OrganizationCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the OrganizationCountOutputType
		 */
		select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
	};

	/**
	 * OrganizationCountOutputType without action
	 */
	export type OrganizationCountOutputTypeCountJobListingsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: JobListingWhereInput;
	};

	/**
	 * OrganizationCountOutputType without action
	 */
	export type OrganizationCountOutputTypeCountUserSettingUnderOrganizationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: UserSettingUnderOrganizationWhereInput;
	};

	/**
	 * Count Type JobListingCountOutputType
	 */

	export type JobListingCountOutputType = {
		applications: number;
	};

	export type JobListingCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		applications?: boolean | JobListingCountOutputTypeCountApplicationsArgs;
	};

	// Custom InputTypes
	/**
	 * JobListingCountOutputType without action
	 */
	export type JobListingCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListingCountOutputType
		 */
		select?: JobListingCountOutputTypeSelect<ExtArgs> | null;
	};

	/**
	 * JobListingCountOutputType without action
	 */
	export type JobListingCountOutputTypeCountApplicationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ApplicationWhereInput;
	};

	/**
	 * Models
	 */

	/**
	 * Model User
	 */

	export type AggregateUser = {
		_count: UserCountAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	export type UserMinAggregateOutputType = {
		id: string | null;
		name: string | null;
		email: string | null;
		imageUrl: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type UserMaxAggregateOutputType = {
		id: string | null;
		name: string | null;
		email: string | null;
		imageUrl: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type UserCountAggregateOutputType = {
		id: number;
		name: number;
		email: number;
		imageUrl: number;
		createdAt: number;
		updatedAt: number;
		_all: number;
	};

	export type UserMinAggregateInputType = {
		id?: true;
		name?: true;
		email?: true;
		imageUrl?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type UserMaxAggregateInputType = {
		id?: true;
		name?: true;
		email?: true;
		imageUrl?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type UserCountAggregateInputType = {
		id?: true;
		name?: true;
		email?: true;
		imageUrl?: true;
		createdAt?: true;
		updatedAt?: true;
		_all?: true;
	};

	export type UserAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which User to aggregate.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Users
		 **/
		_count?: true | UserCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: UserMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: UserMaxAggregateInputType;
	};

	export type GetUserAggregateType<T extends UserAggregateArgs> = {
		[P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateUser[P]>
			: GetScalarType<T[P], AggregateUser[P]>;
	};

	export type UserGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: UserWhereInput;
		orderBy?:
			| UserOrderByWithAggregationInput
			| UserOrderByWithAggregationInput[];
		by: UserScalarFieldEnum[] | UserScalarFieldEnum;
		having?: UserScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: UserCountAggregateInputType | true;
		_min?: UserMinAggregateInputType;
		_max?: UserMaxAggregateInputType;
	};

	export type UserGroupByOutputType = {
		id: string;
		name: string;
		email: string;
		imageUrl: string;
		createdAt: Date;
		updatedAt: Date;
		_count: UserCountAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<UserGroupByOutputType, T["by"]> & {
				[P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], UserGroupByOutputType[P]>
					: GetScalarType<T[P], UserGroupByOutputType[P]>;
			}
		>
	>;

	export type UserSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			email?: boolean;
			imageUrl?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			notificationSetting?: boolean | User$notificationSettingArgs<ExtArgs>;
			resume?: boolean | User$resumeArgs<ExtArgs>;
			userSettingUnderOrganizations?:
				| boolean
				| User$userSettingUnderOrganizationsArgs<ExtArgs>;
			applications?: boolean | User$applicationsArgs<ExtArgs>;
			_count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["user"]
	>;

	export type UserSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			email?: boolean;
			imageUrl?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs["result"]["user"]
	>;

	export type UserSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			email?: boolean;
			imageUrl?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs["result"]["user"]
	>;

	export type UserSelectScalar = {
		id?: boolean;
		name?: boolean;
		email?: boolean;
		imageUrl?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	};

	export type UserOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "name" | "email" | "imageUrl" | "createdAt" | "updatedAt",
		ExtArgs["result"]["user"]
	>;
	export type UserInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		notificationSetting?: boolean | User$notificationSettingArgs<ExtArgs>;
		resume?: boolean | User$resumeArgs<ExtArgs>;
		userSettingUnderOrganizations?:
			| boolean
			| User$userSettingUnderOrganizationsArgs<ExtArgs>;
		applications?: boolean | User$applicationsArgs<ExtArgs>;
		_count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
	};
	export type UserIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};
	export type UserIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};

	export type $UserPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "User";
		objects: {
			notificationSetting: Prisma.$UserNotificationSettingPayload<ExtArgs> | null;
			resume: Prisma.$ResumePayload<ExtArgs> | null;
			userSettingUnderOrganizations: Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>[];
			applications: Prisma.$ApplicationPayload<ExtArgs>[];
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				name: string;
				email: string;
				imageUrl: string;
				createdAt: Date;
				updatedAt: Date;
			},
			ExtArgs["result"]["user"]
		>;
		composites: {};
	};

	type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
		$Result.GetResult<Prisma.$UserPayload, S>;

	type UserCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: UserCountAggregateInputType | true;
	};

	export interface UserDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["User"];
			meta: { name: "User" };
		};
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
		findUnique<T extends UserFindUniqueArgs>(
			args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

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
		findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
			args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

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
		findFirst<T extends UserFindFirstArgs>(
			args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

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
		findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
			args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

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
		findMany<T extends UserFindManyArgs>(
			args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

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
		create<T extends UserCreateArgs>(
			args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

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
		createMany<T extends UserCreateManyArgs>(
			args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

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
		createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
			args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

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
		delete<T extends UserDeleteArgs>(
			args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

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
		update<T extends UserUpdateArgs>(
			args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

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
		deleteMany<T extends UserDeleteManyArgs>(
			args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

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
		updateMany<T extends UserUpdateManyArgs>(
			args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

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
		updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
			args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

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
		upsert<T extends UserUpsertArgs>(
			args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

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
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], UserCountAggregateOutputType>
				: number
		>;

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
		aggregate<T extends UserAggregateArgs>(
			args: Subset<T, UserAggregateArgs>,
		): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: UserGroupByArgs["orderBy"] }
				: { orderBy?: UserGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetUserGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
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
	export interface Prisma__UserClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		notificationSetting<T extends User$notificationSettingArgs<ExtArgs> = {}>(
			args?: Subset<T, User$notificationSettingArgs<ExtArgs>>,
		): Prisma__UserNotificationSettingClient<
			$Result.GetResult<
				Prisma.$UserNotificationSettingPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;
		resume<T extends User$resumeArgs<ExtArgs> = {}>(
			args?: Subset<T, User$resumeArgs<ExtArgs>>,
		): Prisma__ResumeClient<
			$Result.GetResult<
				Prisma.$ResumePayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;
		userSettingUnderOrganizations<
			T extends User$userSettingUnderOrganizationsArgs<ExtArgs> = {},
		>(
			args?: Subset<T, User$userSettingUnderOrganizationsArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<
					Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
					T,
					"findMany",
					GlobalOmitOptions
			  >
			| Null
		>;
		applications<T extends User$applicationsArgs<ExtArgs> = {}>(
			args?: Subset<T, User$applicationsArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<
					Prisma.$ApplicationPayload<ExtArgs>,
					T,
					"findMany",
					GlobalOmitOptions
			  >
			| Null
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the User model
	 */
	interface UserFieldRefs {
		readonly id: FieldRef<"User", "String">;
		readonly name: FieldRef<"User", "String">;
		readonly email: FieldRef<"User", "String">;
		readonly imageUrl: FieldRef<"User", "String">;
		readonly createdAt: FieldRef<"User", "DateTime">;
		readonly updatedAt: FieldRef<"User", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * User findUnique
	 */
	export type UserFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findUniqueOrThrow
	 */
	export type UserFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findFirst
	 */
	export type UserFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findFirstOrThrow
	 */
	export type UserFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findMany
	 */
	export type UserFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which Users to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User create
	 */
	export type UserCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * The data needed to create a User.
		 */
		data: XOR<UserCreateInput, UserUncheckedCreateInput>;
	};

	/**
	 * User createMany
	 */
	export type UserCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User createManyAndReturn
	 */
	export type UserCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User update
	 */
	export type UserUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * The data needed to update a User.
		 */
		data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
		/**
		 * Choose, which User to update.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User updateMany
	 */
	export type UserUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to update.
		 */
		limit?: number;
	};

	/**
	 * User updateManyAndReturn
	 */
	export type UserUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to update.
		 */
		limit?: number;
	};

	/**
	 * User upsert
	 */
	export type UserUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * The filter to search for the User to update in case it exists.
		 */
		where: UserWhereUniqueInput;
		/**
		 * In case the User found by the `where` argument doesn't exist, create a new User with this data.
		 */
		create: XOR<UserCreateInput, UserUncheckedCreateInput>;
		/**
		 * In case the User was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
	};

	/**
	 * User delete
	 */
	export type UserDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter which User to delete.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User deleteMany
	 */
	export type UserDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Users to delete
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to delete.
		 */
		limit?: number;
	};

	/**
	 * User.notificationSetting
	 */
	export type User$notificationSettingArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingInclude<ExtArgs> | null;
		where?: UserNotificationSettingWhereInput;
	};

	/**
	 * User.resume
	 */
	export type User$resumeArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeInclude<ExtArgs> | null;
		where?: ResumeWhereInput;
	};

	/**
	 * User.userSettingUnderOrganizations
	 */
	export type User$userSettingUnderOrganizationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationInclude<ExtArgs> | null;
		where?: UserSettingUnderOrganizationWhereInput;
		orderBy?:
			| UserSettingUnderOrganizationOrderByWithRelationInput
			| UserSettingUnderOrganizationOrderByWithRelationInput[];
		cursor?: UserSettingUnderOrganizationWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?:
			| UserSettingUnderOrganizationScalarFieldEnum
			| UserSettingUnderOrganizationScalarFieldEnum[];
	};

	/**
	 * User.applications
	 */
	export type User$applicationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null;
		where?: ApplicationWhereInput;
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[];
		cursor?: ApplicationWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
	};

	/**
	 * User without action
	 */
	export type UserDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
	};

	/**
	 * Model Organization
	 */

	export type AggregateOrganization = {
		_count: OrganizationCountAggregateOutputType | null;
		_min: OrganizationMinAggregateOutputType | null;
		_max: OrganizationMaxAggregateOutputType | null;
	};

	export type OrganizationMinAggregateOutputType = {
		id: string | null;
		name: string | null;
		imageUrl: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type OrganizationMaxAggregateOutputType = {
		id: string | null;
		name: string | null;
		imageUrl: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type OrganizationCountAggregateOutputType = {
		id: number;
		name: number;
		imageUrl: number;
		createdAt: number;
		updatedAt: number;
		_all: number;
	};

	export type OrganizationMinAggregateInputType = {
		id?: true;
		name?: true;
		imageUrl?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type OrganizationMaxAggregateInputType = {
		id?: true;
		name?: true;
		imageUrl?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type OrganizationCountAggregateInputType = {
		id?: true;
		name?: true;
		imageUrl?: true;
		createdAt?: true;
		updatedAt?: true;
		_all?: true;
	};

	export type OrganizationAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Organization to aggregate.
		 */
		where?: OrganizationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Organizations to fetch.
		 */
		orderBy?:
			| OrganizationOrderByWithRelationInput
			| OrganizationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: OrganizationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Organizations from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Organizations.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Organizations
		 **/
		_count?: true | OrganizationCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: OrganizationMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: OrganizationMaxAggregateInputType;
	};

	export type GetOrganizationAggregateType<
		T extends OrganizationAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateOrganization]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateOrganization[P]>
			: GetScalarType<T[P], AggregateOrganization[P]>;
	};

	export type OrganizationGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: OrganizationWhereInput;
		orderBy?:
			| OrganizationOrderByWithAggregationInput
			| OrganizationOrderByWithAggregationInput[];
		by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
		having?: OrganizationScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: OrganizationCountAggregateInputType | true;
		_min?: OrganizationMinAggregateInputType;
		_max?: OrganizationMaxAggregateInputType;
	};

	export type OrganizationGroupByOutputType = {
		id: string;
		name: string;
		imageUrl: string;
		createdAt: Date;
		updatedAt: Date;
		_count: OrganizationCountAggregateOutputType | null;
		_min: OrganizationMinAggregateOutputType | null;
		_max: OrganizationMaxAggregateOutputType | null;
	};

	type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<OrganizationGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof OrganizationGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], OrganizationGroupByOutputType[P]>
						: GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
				}
			>
		>;

	export type OrganizationSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			imageUrl?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			jobListings?: boolean | Organization$jobListingsArgs<ExtArgs>;
			userSettingUnderOrganizations?:
				| boolean
				| Organization$userSettingUnderOrganizationsArgs<ExtArgs>;
			_count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["organization"]
	>;

	export type OrganizationSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			imageUrl?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs["result"]["organization"]
	>;

	export type OrganizationSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			name?: boolean;
			imageUrl?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs["result"]["organization"]
	>;

	export type OrganizationSelectScalar = {
		id?: boolean;
		name?: boolean;
		imageUrl?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	};

	export type OrganizationOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		"id" | "name" | "imageUrl" | "createdAt" | "updatedAt",
		ExtArgs["result"]["organization"]
	>;
	export type OrganizationInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		jobListings?: boolean | Organization$jobListingsArgs<ExtArgs>;
		userSettingUnderOrganizations?:
			| boolean
			| Organization$userSettingUnderOrganizationsArgs<ExtArgs>;
		_count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
	};
	export type OrganizationIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};
	export type OrganizationIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};

	export type $OrganizationPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Organization";
		objects: {
			jobListings: Prisma.$JobListingPayload<ExtArgs>[];
			userSettingUnderOrganizations: Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>[];
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				name: string;
				imageUrl: string;
				createdAt: Date;
				updatedAt: Date;
			},
			ExtArgs["result"]["organization"]
		>;
		composites: {};
	};

	type OrganizationGetPayload<
		S extends boolean | null | undefined | OrganizationDefaultArgs,
	> = $Result.GetResult<Prisma.$OrganizationPayload, S>;

	type OrganizationCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		OrganizationFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: OrganizationCountAggregateInputType | true;
	};

	export interface OrganizationDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Organization"];
			meta: { name: "Organization" };
		};
		/**
		 * Find zero or one Organization that matches the filter.
		 * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
		 * @example
		 * // Get one Organization
		 * const organization = await prisma.organization.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends OrganizationFindUniqueArgs>(
			args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>,
		): Prisma__OrganizationClient<
			$Result.GetResult<
				Prisma.$OrganizationPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
		 * @example
		 * // Get one Organization
		 * const organization = await prisma.organization.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(
			args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__OrganizationClient<
			$Result.GetResult<
				Prisma.$OrganizationPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Organization that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
		 * @example
		 * // Get one Organization
		 * const organization = await prisma.organization.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends OrganizationFindFirstArgs>(
			args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>,
		): Prisma__OrganizationClient<
			$Result.GetResult<
				Prisma.$OrganizationPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Organization that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
		 * @example
		 * // Get one Organization
		 * const organization = await prisma.organization.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(
			args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__OrganizationClient<
			$Result.GetResult<
				Prisma.$OrganizationPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Organizations that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Organizations
		 * const organizations = await prisma.organization.findMany()
		 *
		 * // Get first 10 Organizations
		 * const organizations = await prisma.organization.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends OrganizationFindManyArgs>(
			args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$OrganizationPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Organization.
		 * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
		 * @example
		 * // Create one Organization
		 * const Organization = await prisma.organization.create({
		 *   data: {
		 *     // ... data to create a Organization
		 *   }
		 * })
		 *
		 */
		create<T extends OrganizationCreateArgs>(
			args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>,
		): Prisma__OrganizationClient<
			$Result.GetResult<
				Prisma.$OrganizationPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Organizations.
		 * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
		 * @example
		 * // Create many Organizations
		 * const organization = await prisma.organization.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends OrganizationCreateManyArgs>(
			args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Organizations and returns the data saved in the database.
		 * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
		 * @example
		 * // Create many Organizations
		 * const organization = await prisma.organization.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Organizations and only return the `id`
		 * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(
			args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$OrganizationPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Organization.
		 * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
		 * @example
		 * // Delete one Organization
		 * const Organization = await prisma.organization.delete({
		 *   where: {
		 *     // ... filter to delete one Organization
		 *   }
		 * })
		 *
		 */
		delete<T extends OrganizationDeleteArgs>(
			args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>,
		): Prisma__OrganizationClient<
			$Result.GetResult<
				Prisma.$OrganizationPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Organization.
		 * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
		 * @example
		 * // Update one Organization
		 * const organization = await prisma.organization.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends OrganizationUpdateArgs>(
			args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>,
		): Prisma__OrganizationClient<
			$Result.GetResult<
				Prisma.$OrganizationPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Organizations.
		 * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
		 * @example
		 * // Delete a few Organizations
		 * const { count } = await prisma.organization.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends OrganizationDeleteManyArgs>(
			args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Organizations.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Organizations
		 * const organization = await prisma.organization.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends OrganizationUpdateManyArgs>(
			args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Organizations and returns the data updated in the database.
		 * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
		 * @example
		 * // Update many Organizations
		 * const organization = await prisma.organization.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Organizations and only return the `id`
		 * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
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
		updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(
			args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$OrganizationPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Organization.
		 * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
		 * @example
		 * // Update or create a Organization
		 * const organization = await prisma.organization.upsert({
		 *   create: {
		 *     // ... data to create a Organization
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Organization we want to update
		 *   }
		 * })
		 */
		upsert<T extends OrganizationUpsertArgs>(
			args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>,
		): Prisma__OrganizationClient<
			$Result.GetResult<
				Prisma.$OrganizationPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Organizations.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
		 * @example
		 * // Count the number of Organizations
		 * const count = await prisma.organization.count({
		 *   where: {
		 *     // ... the filter for the Organizations we want to count
		 *   }
		 * })
		 **/
		count<T extends OrganizationCountArgs>(
			args?: Subset<T, OrganizationCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], OrganizationCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Organization.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends OrganizationAggregateArgs>(
			args: Subset<T, OrganizationAggregateArgs>,
		): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

		/**
		 * Group by Organization.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {OrganizationGroupByArgs} args - Group by arguments.
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
			T extends OrganizationGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: OrganizationGroupByArgs["orderBy"] }
				: { orderBy?: OrganizationGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> &
				InputErrors,
		): {} extends InputErrors
			? GetOrganizationGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Organization model
		 */
		readonly fields: OrganizationFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Organization.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__OrganizationClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		jobListings<T extends Organization$jobListingsArgs<ExtArgs> = {}>(
			args?: Subset<T, Organization$jobListingsArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<
					Prisma.$JobListingPayload<ExtArgs>,
					T,
					"findMany",
					GlobalOmitOptions
			  >
			| Null
		>;
		userSettingUnderOrganizations<
			T extends Organization$userSettingUnderOrganizationsArgs<ExtArgs> = {},
		>(
			args?: Subset<T, Organization$userSettingUnderOrganizationsArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<
					Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
					T,
					"findMany",
					GlobalOmitOptions
			  >
			| Null
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Organization model
	 */
	interface OrganizationFieldRefs {
		readonly id: FieldRef<"Organization", "String">;
		readonly name: FieldRef<"Organization", "String">;
		readonly imageUrl: FieldRef<"Organization", "String">;
		readonly createdAt: FieldRef<"Organization", "DateTime">;
		readonly updatedAt: FieldRef<"Organization", "DateTime">;
	}

	// Custom InputTypes
	/**
	 * Organization findUnique
	 */
	export type OrganizationFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Organization
		 */
		select?: OrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Organization
		 */
		omit?: OrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: OrganizationInclude<ExtArgs> | null;
		/**
		 * Filter, which Organization to fetch.
		 */
		where: OrganizationWhereUniqueInput;
	};

	/**
	 * Organization findUniqueOrThrow
	 */
	export type OrganizationFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Organization
		 */
		select?: OrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Organization
		 */
		omit?: OrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: OrganizationInclude<ExtArgs> | null;
		/**
		 * Filter, which Organization to fetch.
		 */
		where: OrganizationWhereUniqueInput;
	};

	/**
	 * Organization findFirst
	 */
	export type OrganizationFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Organization
		 */
		select?: OrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Organization
		 */
		omit?: OrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: OrganizationInclude<ExtArgs> | null;
		/**
		 * Filter, which Organization to fetch.
		 */
		where?: OrganizationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Organizations to fetch.
		 */
		orderBy?:
			| OrganizationOrderByWithRelationInput
			| OrganizationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Organizations.
		 */
		cursor?: OrganizationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Organizations from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Organizations.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Organizations.
		 */
		distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
	};

	/**
	 * Organization findFirstOrThrow
	 */
	export type OrganizationFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Organization
		 */
		select?: OrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Organization
		 */
		omit?: OrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: OrganizationInclude<ExtArgs> | null;
		/**
		 * Filter, which Organization to fetch.
		 */
		where?: OrganizationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Organizations to fetch.
		 */
		orderBy?:
			| OrganizationOrderByWithRelationInput
			| OrganizationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Organizations.
		 */
		cursor?: OrganizationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Organizations from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Organizations.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Organizations.
		 */
		distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
	};

	/**
	 * Organization findMany
	 */
	export type OrganizationFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Organization
		 */
		select?: OrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Organization
		 */
		omit?: OrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: OrganizationInclude<ExtArgs> | null;
		/**
		 * Filter, which Organizations to fetch.
		 */
		where?: OrganizationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Organizations to fetch.
		 */
		orderBy?:
			| OrganizationOrderByWithRelationInput
			| OrganizationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Organizations.
		 */
		cursor?: OrganizationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Organizations from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Organizations.
		 */
		skip?: number;
		distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
	};

	/**
	 * Organization create
	 */
	export type OrganizationCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Organization
		 */
		select?: OrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Organization
		 */
		omit?: OrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: OrganizationInclude<ExtArgs> | null;
		/**
		 * The data needed to create a Organization.
		 */
		data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>;
	};

	/**
	 * Organization createMany
	 */
	export type OrganizationCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Organizations.
		 */
		data: OrganizationCreateManyInput | OrganizationCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Organization createManyAndReturn
	 */
	export type OrganizationCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Organization
		 */
		select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Organization
		 */
		omit?: OrganizationOmit<ExtArgs> | null;
		/**
		 * The data used to create many Organizations.
		 */
		data: OrganizationCreateManyInput | OrganizationCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Organization update
	 */
	export type OrganizationUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Organization
		 */
		select?: OrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Organization
		 */
		omit?: OrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: OrganizationInclude<ExtArgs> | null;
		/**
		 * The data needed to update a Organization.
		 */
		data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>;
		/**
		 * Choose, which Organization to update.
		 */
		where: OrganizationWhereUniqueInput;
	};

	/**
	 * Organization updateMany
	 */
	export type OrganizationUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Organizations.
		 */
		data: XOR<
			OrganizationUpdateManyMutationInput,
			OrganizationUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Organizations to update
		 */
		where?: OrganizationWhereInput;
		/**
		 * Limit how many Organizations to update.
		 */
		limit?: number;
	};

	/**
	 * Organization updateManyAndReturn
	 */
	export type OrganizationUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Organization
		 */
		select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Organization
		 */
		omit?: OrganizationOmit<ExtArgs> | null;
		/**
		 * The data used to update Organizations.
		 */
		data: XOR<
			OrganizationUpdateManyMutationInput,
			OrganizationUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Organizations to update
		 */
		where?: OrganizationWhereInput;
		/**
		 * Limit how many Organizations to update.
		 */
		limit?: number;
	};

	/**
	 * Organization upsert
	 */
	export type OrganizationUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Organization
		 */
		select?: OrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Organization
		 */
		omit?: OrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: OrganizationInclude<ExtArgs> | null;
		/**
		 * The filter to search for the Organization to update in case it exists.
		 */
		where: OrganizationWhereUniqueInput;
		/**
		 * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
		 */
		create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>;
		/**
		 * In case the Organization was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>;
	};

	/**
	 * Organization delete
	 */
	export type OrganizationDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Organization
		 */
		select?: OrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Organization
		 */
		omit?: OrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: OrganizationInclude<ExtArgs> | null;
		/**
		 * Filter which Organization to delete.
		 */
		where: OrganizationWhereUniqueInput;
	};

	/**
	 * Organization deleteMany
	 */
	export type OrganizationDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Organizations to delete
		 */
		where?: OrganizationWhereInput;
		/**
		 * Limit how many Organizations to delete.
		 */
		limit?: number;
	};

	/**
	 * Organization.jobListings
	 */
	export type Organization$jobListingsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingInclude<ExtArgs> | null;
		where?: JobListingWhereInput;
		orderBy?:
			| JobListingOrderByWithRelationInput
			| JobListingOrderByWithRelationInput[];
		cursor?: JobListingWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: JobListingScalarFieldEnum | JobListingScalarFieldEnum[];
	};

	/**
	 * Organization.userSettingUnderOrganizations
	 */
	export type Organization$userSettingUnderOrganizationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationInclude<ExtArgs> | null;
		where?: UserSettingUnderOrganizationWhereInput;
		orderBy?:
			| UserSettingUnderOrganizationOrderByWithRelationInput
			| UserSettingUnderOrganizationOrderByWithRelationInput[];
		cursor?: UserSettingUnderOrganizationWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?:
			| UserSettingUnderOrganizationScalarFieldEnum
			| UserSettingUnderOrganizationScalarFieldEnum[];
	};

	/**
	 * Organization without action
	 */
	export type OrganizationDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Organization
		 */
		select?: OrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Organization
		 */
		omit?: OrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: OrganizationInclude<ExtArgs> | null;
	};

	/**
	 * Model JobListing
	 */

	export type AggregateJobListing = {
		_count: JobListingCountAggregateOutputType | null;
		_avg: JobListingAvgAggregateOutputType | null;
		_sum: JobListingSumAggregateOutputType | null;
		_min: JobListingMinAggregateOutputType | null;
		_max: JobListingMaxAggregateOutputType | null;
	};

	export type JobListingAvgAggregateOutputType = {
		wage: number | null;
	};

	export type JobListingSumAggregateOutputType = {
		wage: number | null;
	};

	export type JobListingMinAggregateOutputType = {
		id: string | null;
		title: string | null;
		description: string | null;
		wage: number | null;
		wageInterval: $Enums.WageInterval | null;
		stateAbbreviation: string | null;
		city: string | null;
		isFeatured: boolean | null;
		locationRequirement: $Enums.LocationRequirement | null;
		experienceLevel: $Enums.ExperienceLevel | null;
		status: $Enums.JobListingStatus | null;
		type: $Enums.JobListingType | null;
		postedAt: Date | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		organizationId: string | null;
	};

	export type JobListingMaxAggregateOutputType = {
		id: string | null;
		title: string | null;
		description: string | null;
		wage: number | null;
		wageInterval: $Enums.WageInterval | null;
		stateAbbreviation: string | null;
		city: string | null;
		isFeatured: boolean | null;
		locationRequirement: $Enums.LocationRequirement | null;
		experienceLevel: $Enums.ExperienceLevel | null;
		status: $Enums.JobListingStatus | null;
		type: $Enums.JobListingType | null;
		postedAt: Date | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		organizationId: string | null;
	};

	export type JobListingCountAggregateOutputType = {
		id: number;
		title: number;
		description: number;
		wage: number;
		wageInterval: number;
		stateAbbreviation: number;
		city: number;
		isFeatured: number;
		locationRequirement: number;
		experienceLevel: number;
		status: number;
		type: number;
		postedAt: number;
		createdAt: number;
		updatedAt: number;
		organizationId: number;
		_all: number;
	};

	export type JobListingAvgAggregateInputType = {
		wage?: true;
	};

	export type JobListingSumAggregateInputType = {
		wage?: true;
	};

	export type JobListingMinAggregateInputType = {
		id?: true;
		title?: true;
		description?: true;
		wage?: true;
		wageInterval?: true;
		stateAbbreviation?: true;
		city?: true;
		isFeatured?: true;
		locationRequirement?: true;
		experienceLevel?: true;
		status?: true;
		type?: true;
		postedAt?: true;
		createdAt?: true;
		updatedAt?: true;
		organizationId?: true;
	};

	export type JobListingMaxAggregateInputType = {
		id?: true;
		title?: true;
		description?: true;
		wage?: true;
		wageInterval?: true;
		stateAbbreviation?: true;
		city?: true;
		isFeatured?: true;
		locationRequirement?: true;
		experienceLevel?: true;
		status?: true;
		type?: true;
		postedAt?: true;
		createdAt?: true;
		updatedAt?: true;
		organizationId?: true;
	};

	export type JobListingCountAggregateInputType = {
		id?: true;
		title?: true;
		description?: true;
		wage?: true;
		wageInterval?: true;
		stateAbbreviation?: true;
		city?: true;
		isFeatured?: true;
		locationRequirement?: true;
		experienceLevel?: true;
		status?: true;
		type?: true;
		postedAt?: true;
		createdAt?: true;
		updatedAt?: true;
		organizationId?: true;
		_all?: true;
	};

	export type JobListingAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which JobListing to aggregate.
		 */
		where?: JobListingWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of JobListings to fetch.
		 */
		orderBy?:
			| JobListingOrderByWithRelationInput
			| JobListingOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: JobListingWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` JobListings from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` JobListings.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned JobListings
		 **/
		_count?: true | JobListingCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: JobListingAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: JobListingSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: JobListingMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: JobListingMaxAggregateInputType;
	};

	export type GetJobListingAggregateType<T extends JobListingAggregateArgs> = {
		[P in keyof T & keyof AggregateJobListing]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateJobListing[P]>
			: GetScalarType<T[P], AggregateJobListing[P]>;
	};

	export type JobListingGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: JobListingWhereInput;
		orderBy?:
			| JobListingOrderByWithAggregationInput
			| JobListingOrderByWithAggregationInput[];
		by: JobListingScalarFieldEnum[] | JobListingScalarFieldEnum;
		having?: JobListingScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: JobListingCountAggregateInputType | true;
		_avg?: JobListingAvgAggregateInputType;
		_sum?: JobListingSumAggregateInputType;
		_min?: JobListingMinAggregateInputType;
		_max?: JobListingMaxAggregateInputType;
	};

	export type JobListingGroupByOutputType = {
		id: string;
		title: string;
		description: string;
		wage: number | null;
		wageInterval: $Enums.WageInterval;
		stateAbbreviation: string | null;
		city: string | null;
		isFeatured: boolean;
		locationRequirement: $Enums.LocationRequirement;
		experienceLevel: $Enums.ExperienceLevel;
		status: $Enums.JobListingStatus;
		type: $Enums.JobListingType;
		postedAt: Date;
		createdAt: Date;
		updatedAt: Date;
		organizationId: string;
		_count: JobListingCountAggregateOutputType | null;
		_avg: JobListingAvgAggregateOutputType | null;
		_sum: JobListingSumAggregateOutputType | null;
		_min: JobListingMinAggregateOutputType | null;
		_max: JobListingMaxAggregateOutputType | null;
	};

	type GetJobListingGroupByPayload<T extends JobListingGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<JobListingGroupByOutputType, T["by"]> & {
					[P in keyof T & keyof JobListingGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], JobListingGroupByOutputType[P]>
						: GetScalarType<T[P], JobListingGroupByOutputType[P]>;
				}
			>
		>;

	export type JobListingSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			title?: boolean;
			description?: boolean;
			wage?: boolean;
			wageInterval?: boolean;
			stateAbbreviation?: boolean;
			city?: boolean;
			isFeatured?: boolean;
			locationRequirement?: boolean;
			experienceLevel?: boolean;
			status?: boolean;
			type?: boolean;
			postedAt?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			organizationId?: boolean;
			applications?: boolean | JobListing$applicationsArgs<ExtArgs>;
			organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
			_count?: boolean | JobListingCountOutputTypeDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["jobListing"]
	>;

	export type JobListingSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			title?: boolean;
			description?: boolean;
			wage?: boolean;
			wageInterval?: boolean;
			stateAbbreviation?: boolean;
			city?: boolean;
			isFeatured?: boolean;
			locationRequirement?: boolean;
			experienceLevel?: boolean;
			status?: boolean;
			type?: boolean;
			postedAt?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			organizationId?: boolean;
			organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["jobListing"]
	>;

	export type JobListingSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			title?: boolean;
			description?: boolean;
			wage?: boolean;
			wageInterval?: boolean;
			stateAbbreviation?: boolean;
			city?: boolean;
			isFeatured?: boolean;
			locationRequirement?: boolean;
			experienceLevel?: boolean;
			status?: boolean;
			type?: boolean;
			postedAt?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			organizationId?: boolean;
			organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["jobListing"]
	>;

	export type JobListingSelectScalar = {
		id?: boolean;
		title?: boolean;
		description?: boolean;
		wage?: boolean;
		wageInterval?: boolean;
		stateAbbreviation?: boolean;
		city?: boolean;
		isFeatured?: boolean;
		locationRequirement?: boolean;
		experienceLevel?: boolean;
		status?: boolean;
		type?: boolean;
		postedAt?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		organizationId?: boolean;
	};

	export type JobListingOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| "id"
		| "title"
		| "description"
		| "wage"
		| "wageInterval"
		| "stateAbbreviation"
		| "city"
		| "isFeatured"
		| "locationRequirement"
		| "experienceLevel"
		| "status"
		| "type"
		| "postedAt"
		| "createdAt"
		| "updatedAt"
		| "organizationId",
		ExtArgs["result"]["jobListing"]
	>;
	export type JobListingInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		applications?: boolean | JobListing$applicationsArgs<ExtArgs>;
		organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
		_count?: boolean | JobListingCountOutputTypeDefaultArgs<ExtArgs>;
	};
	export type JobListingIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
	};
	export type JobListingIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
	};

	export type $JobListingPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "JobListing";
		objects: {
			applications: Prisma.$ApplicationPayload<ExtArgs>[];
			organization: Prisma.$OrganizationPayload<ExtArgs>;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				title: string;
				description: string;
				wage: number | null;
				wageInterval: $Enums.WageInterval;
				stateAbbreviation: string | null;
				city: string | null;
				isFeatured: boolean;
				locationRequirement: $Enums.LocationRequirement;
				experienceLevel: $Enums.ExperienceLevel;
				status: $Enums.JobListingStatus;
				type: $Enums.JobListingType;
				postedAt: Date;
				createdAt: Date;
				updatedAt: Date;
				organizationId: string;
			},
			ExtArgs["result"]["jobListing"]
		>;
		composites: {};
	};

	type JobListingGetPayload<
		S extends boolean | null | undefined | JobListingDefaultArgs,
	> = $Result.GetResult<Prisma.$JobListingPayload, S>;

	type JobListingCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		JobListingFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: JobListingCountAggregateInputType | true;
	};

	export interface JobListingDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["JobListing"];
			meta: { name: "JobListing" };
		};
		/**
		 * Find zero or one JobListing that matches the filter.
		 * @param {JobListingFindUniqueArgs} args - Arguments to find a JobListing
		 * @example
		 * // Get one JobListing
		 * const jobListing = await prisma.jobListing.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends JobListingFindUniqueArgs>(
			args: SelectSubset<T, JobListingFindUniqueArgs<ExtArgs>>,
		): Prisma__JobListingClient<
			$Result.GetResult<
				Prisma.$JobListingPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one JobListing that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {JobListingFindUniqueOrThrowArgs} args - Arguments to find a JobListing
		 * @example
		 * // Get one JobListing
		 * const jobListing = await prisma.jobListing.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends JobListingFindUniqueOrThrowArgs>(
			args: SelectSubset<T, JobListingFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__JobListingClient<
			$Result.GetResult<
				Prisma.$JobListingPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first JobListing that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {JobListingFindFirstArgs} args - Arguments to find a JobListing
		 * @example
		 * // Get one JobListing
		 * const jobListing = await prisma.jobListing.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends JobListingFindFirstArgs>(
			args?: SelectSubset<T, JobListingFindFirstArgs<ExtArgs>>,
		): Prisma__JobListingClient<
			$Result.GetResult<
				Prisma.$JobListingPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first JobListing that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {JobListingFindFirstOrThrowArgs} args - Arguments to find a JobListing
		 * @example
		 * // Get one JobListing
		 * const jobListing = await prisma.jobListing.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends JobListingFindFirstOrThrowArgs>(
			args?: SelectSubset<T, JobListingFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__JobListingClient<
			$Result.GetResult<
				Prisma.$JobListingPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more JobListings that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {JobListingFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all JobListings
		 * const jobListings = await prisma.jobListing.findMany()
		 *
		 * // Get first 10 JobListings
		 * const jobListings = await prisma.jobListing.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const jobListingWithIdOnly = await prisma.jobListing.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends JobListingFindManyArgs>(
			args?: SelectSubset<T, JobListingFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$JobListingPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a JobListing.
		 * @param {JobListingCreateArgs} args - Arguments to create a JobListing.
		 * @example
		 * // Create one JobListing
		 * const JobListing = await prisma.jobListing.create({
		 *   data: {
		 *     // ... data to create a JobListing
		 *   }
		 * })
		 *
		 */
		create<T extends JobListingCreateArgs>(
			args: SelectSubset<T, JobListingCreateArgs<ExtArgs>>,
		): Prisma__JobListingClient<
			$Result.GetResult<
				Prisma.$JobListingPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many JobListings.
		 * @param {JobListingCreateManyArgs} args - Arguments to create many JobListings.
		 * @example
		 * // Create many JobListings
		 * const jobListing = await prisma.jobListing.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends JobListingCreateManyArgs>(
			args?: SelectSubset<T, JobListingCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many JobListings and returns the data saved in the database.
		 * @param {JobListingCreateManyAndReturnArgs} args - Arguments to create many JobListings.
		 * @example
		 * // Create many JobListings
		 * const jobListing = await prisma.jobListing.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many JobListings and only return the `id`
		 * const jobListingWithIdOnly = await prisma.jobListing.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends JobListingCreateManyAndReturnArgs>(
			args?: SelectSubset<T, JobListingCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$JobListingPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a JobListing.
		 * @param {JobListingDeleteArgs} args - Arguments to delete one JobListing.
		 * @example
		 * // Delete one JobListing
		 * const JobListing = await prisma.jobListing.delete({
		 *   where: {
		 *     // ... filter to delete one JobListing
		 *   }
		 * })
		 *
		 */
		delete<T extends JobListingDeleteArgs>(
			args: SelectSubset<T, JobListingDeleteArgs<ExtArgs>>,
		): Prisma__JobListingClient<
			$Result.GetResult<
				Prisma.$JobListingPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one JobListing.
		 * @param {JobListingUpdateArgs} args - Arguments to update one JobListing.
		 * @example
		 * // Update one JobListing
		 * const jobListing = await prisma.jobListing.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends JobListingUpdateArgs>(
			args: SelectSubset<T, JobListingUpdateArgs<ExtArgs>>,
		): Prisma__JobListingClient<
			$Result.GetResult<
				Prisma.$JobListingPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more JobListings.
		 * @param {JobListingDeleteManyArgs} args - Arguments to filter JobListings to delete.
		 * @example
		 * // Delete a few JobListings
		 * const { count } = await prisma.jobListing.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends JobListingDeleteManyArgs>(
			args?: SelectSubset<T, JobListingDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more JobListings.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {JobListingUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many JobListings
		 * const jobListing = await prisma.jobListing.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends JobListingUpdateManyArgs>(
			args: SelectSubset<T, JobListingUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more JobListings and returns the data updated in the database.
		 * @param {JobListingUpdateManyAndReturnArgs} args - Arguments to update many JobListings.
		 * @example
		 * // Update many JobListings
		 * const jobListing = await prisma.jobListing.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more JobListings and only return the `id`
		 * const jobListingWithIdOnly = await prisma.jobListing.updateManyAndReturn({
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
		updateManyAndReturn<T extends JobListingUpdateManyAndReturnArgs>(
			args: SelectSubset<T, JobListingUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$JobListingPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one JobListing.
		 * @param {JobListingUpsertArgs} args - Arguments to update or create a JobListing.
		 * @example
		 * // Update or create a JobListing
		 * const jobListing = await prisma.jobListing.upsert({
		 *   create: {
		 *     // ... data to create a JobListing
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the JobListing we want to update
		 *   }
		 * })
		 */
		upsert<T extends JobListingUpsertArgs>(
			args: SelectSubset<T, JobListingUpsertArgs<ExtArgs>>,
		): Prisma__JobListingClient<
			$Result.GetResult<
				Prisma.$JobListingPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of JobListings.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {JobListingCountArgs} args - Arguments to filter JobListings to count.
		 * @example
		 * // Count the number of JobListings
		 * const count = await prisma.jobListing.count({
		 *   where: {
		 *     // ... the filter for the JobListings we want to count
		 *   }
		 * })
		 **/
		count<T extends JobListingCountArgs>(
			args?: Subset<T, JobListingCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], JobListingCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a JobListing.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {JobListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends JobListingAggregateArgs>(
			args: Subset<T, JobListingAggregateArgs>,
		): Prisma.PrismaPromise<GetJobListingAggregateType<T>>;

		/**
		 * Group by JobListing.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {JobListingGroupByArgs} args - Group by arguments.
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
			T extends JobListingGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: JobListingGroupByArgs["orderBy"] }
				: { orderBy?: JobListingGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, JobListingGroupByArgs, OrderByArg> &
				InputErrors,
		): {} extends InputErrors
			? GetJobListingGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the JobListing model
		 */
		readonly fields: JobListingFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for JobListing.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__JobListingClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		applications<T extends JobListing$applicationsArgs<ExtArgs> = {}>(
			args?: Subset<T, JobListing$applicationsArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<
					Prisma.$ApplicationPayload<ExtArgs>,
					T,
					"findMany",
					GlobalOmitOptions
			  >
			| Null
		>;
		organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
		): Prisma__OrganizationClient<
			| $Result.GetResult<
					Prisma.$OrganizationPayload<ExtArgs>,
					T,
					"findUniqueOrThrow",
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the JobListing model
	 */
	interface JobListingFieldRefs {
		readonly id: FieldRef<"JobListing", "String">;
		readonly title: FieldRef<"JobListing", "String">;
		readonly description: FieldRef<"JobListing", "String">;
		readonly wage: FieldRef<"JobListing", "Int">;
		readonly wageInterval: FieldRef<"JobListing", "WageInterval">;
		readonly stateAbbreviation: FieldRef<"JobListing", "String">;
		readonly city: FieldRef<"JobListing", "String">;
		readonly isFeatured: FieldRef<"JobListing", "Boolean">;
		readonly locationRequirement: FieldRef<"JobListing", "LocationRequirement">;
		readonly experienceLevel: FieldRef<"JobListing", "ExperienceLevel">;
		readonly status: FieldRef<"JobListing", "JobListingStatus">;
		readonly type: FieldRef<"JobListing", "JobListingType">;
		readonly postedAt: FieldRef<"JobListing", "DateTime">;
		readonly createdAt: FieldRef<"JobListing", "DateTime">;
		readonly updatedAt: FieldRef<"JobListing", "DateTime">;
		readonly organizationId: FieldRef<"JobListing", "String">;
	}

	// Custom InputTypes
	/**
	 * JobListing findUnique
	 */
	export type JobListingFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingInclude<ExtArgs> | null;
		/**
		 * Filter, which JobListing to fetch.
		 */
		where: JobListingWhereUniqueInput;
	};

	/**
	 * JobListing findUniqueOrThrow
	 */
	export type JobListingFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingInclude<ExtArgs> | null;
		/**
		 * Filter, which JobListing to fetch.
		 */
		where: JobListingWhereUniqueInput;
	};

	/**
	 * JobListing findFirst
	 */
	export type JobListingFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingInclude<ExtArgs> | null;
		/**
		 * Filter, which JobListing to fetch.
		 */
		where?: JobListingWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of JobListings to fetch.
		 */
		orderBy?:
			| JobListingOrderByWithRelationInput
			| JobListingOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for JobListings.
		 */
		cursor?: JobListingWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` JobListings from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` JobListings.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of JobListings.
		 */
		distinct?: JobListingScalarFieldEnum | JobListingScalarFieldEnum[];
	};

	/**
	 * JobListing findFirstOrThrow
	 */
	export type JobListingFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingInclude<ExtArgs> | null;
		/**
		 * Filter, which JobListing to fetch.
		 */
		where?: JobListingWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of JobListings to fetch.
		 */
		orderBy?:
			| JobListingOrderByWithRelationInput
			| JobListingOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for JobListings.
		 */
		cursor?: JobListingWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` JobListings from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` JobListings.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of JobListings.
		 */
		distinct?: JobListingScalarFieldEnum | JobListingScalarFieldEnum[];
	};

	/**
	 * JobListing findMany
	 */
	export type JobListingFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingInclude<ExtArgs> | null;
		/**
		 * Filter, which JobListings to fetch.
		 */
		where?: JobListingWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of JobListings to fetch.
		 */
		orderBy?:
			| JobListingOrderByWithRelationInput
			| JobListingOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing JobListings.
		 */
		cursor?: JobListingWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` JobListings from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` JobListings.
		 */
		skip?: number;
		distinct?: JobListingScalarFieldEnum | JobListingScalarFieldEnum[];
	};

	/**
	 * JobListing create
	 */
	export type JobListingCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingInclude<ExtArgs> | null;
		/**
		 * The data needed to create a JobListing.
		 */
		data: XOR<JobListingCreateInput, JobListingUncheckedCreateInput>;
	};

	/**
	 * JobListing createMany
	 */
	export type JobListingCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many JobListings.
		 */
		data: JobListingCreateManyInput | JobListingCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * JobListing createManyAndReturn
	 */
	export type JobListingCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * The data used to create many JobListings.
		 */
		data: JobListingCreateManyInput | JobListingCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * JobListing update
	 */
	export type JobListingUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingInclude<ExtArgs> | null;
		/**
		 * The data needed to update a JobListing.
		 */
		data: XOR<JobListingUpdateInput, JobListingUncheckedUpdateInput>;
		/**
		 * Choose, which JobListing to update.
		 */
		where: JobListingWhereUniqueInput;
	};

	/**
	 * JobListing updateMany
	 */
	export type JobListingUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update JobListings.
		 */
		data: XOR<
			JobListingUpdateManyMutationInput,
			JobListingUncheckedUpdateManyInput
		>;
		/**
		 * Filter which JobListings to update
		 */
		where?: JobListingWhereInput;
		/**
		 * Limit how many JobListings to update.
		 */
		limit?: number;
	};

	/**
	 * JobListing updateManyAndReturn
	 */
	export type JobListingUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * The data used to update JobListings.
		 */
		data: XOR<
			JobListingUpdateManyMutationInput,
			JobListingUncheckedUpdateManyInput
		>;
		/**
		 * Filter which JobListings to update
		 */
		where?: JobListingWhereInput;
		/**
		 * Limit how many JobListings to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * JobListing upsert
	 */
	export type JobListingUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingInclude<ExtArgs> | null;
		/**
		 * The filter to search for the JobListing to update in case it exists.
		 */
		where: JobListingWhereUniqueInput;
		/**
		 * In case the JobListing found by the `where` argument doesn't exist, create a new JobListing with this data.
		 */
		create: XOR<JobListingCreateInput, JobListingUncheckedCreateInput>;
		/**
		 * In case the JobListing was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<JobListingUpdateInput, JobListingUncheckedUpdateInput>;
	};

	/**
	 * JobListing delete
	 */
	export type JobListingDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingInclude<ExtArgs> | null;
		/**
		 * Filter which JobListing to delete.
		 */
		where: JobListingWhereUniqueInput;
	};

	/**
	 * JobListing deleteMany
	 */
	export type JobListingDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which JobListings to delete
		 */
		where?: JobListingWhereInput;
		/**
		 * Limit how many JobListings to delete.
		 */
		limit?: number;
	};

	/**
	 * JobListing.applications
	 */
	export type JobListing$applicationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null;
		where?: ApplicationWhereInput;
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[];
		cursor?: ApplicationWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
	};

	/**
	 * JobListing without action
	 */
	export type JobListingDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the JobListing
		 */
		select?: JobListingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the JobListing
		 */
		omit?: JobListingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: JobListingInclude<ExtArgs> | null;
	};

	/**
	 * Model Application
	 */

	export type AggregateApplication = {
		_count: ApplicationCountAggregateOutputType | null;
		_avg: ApplicationAvgAggregateOutputType | null;
		_sum: ApplicationSumAggregateOutputType | null;
		_min: ApplicationMinAggregateOutputType | null;
		_max: ApplicationMaxAggregateOutputType | null;
	};

	export type ApplicationAvgAggregateOutputType = {
		rating: number | null;
	};

	export type ApplicationSumAggregateOutputType = {
		rating: number | null;
	};

	export type ApplicationMinAggregateOutputType = {
		id: string | null;
		coverLetter: string | null;
		rating: number | null;
		stage: $Enums.ApplicationStage | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		jobListingId: string | null;
		userId: string | null;
	};

	export type ApplicationMaxAggregateOutputType = {
		id: string | null;
		coverLetter: string | null;
		rating: number | null;
		stage: $Enums.ApplicationStage | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		jobListingId: string | null;
		userId: string | null;
	};

	export type ApplicationCountAggregateOutputType = {
		id: number;
		coverLetter: number;
		rating: number;
		stage: number;
		createdAt: number;
		updatedAt: number;
		jobListingId: number;
		userId: number;
		_all: number;
	};

	export type ApplicationAvgAggregateInputType = {
		rating?: true;
	};

	export type ApplicationSumAggregateInputType = {
		rating?: true;
	};

	export type ApplicationMinAggregateInputType = {
		id?: true;
		coverLetter?: true;
		rating?: true;
		stage?: true;
		createdAt?: true;
		updatedAt?: true;
		jobListingId?: true;
		userId?: true;
	};

	export type ApplicationMaxAggregateInputType = {
		id?: true;
		coverLetter?: true;
		rating?: true;
		stage?: true;
		createdAt?: true;
		updatedAt?: true;
		jobListingId?: true;
		userId?: true;
	};

	export type ApplicationCountAggregateInputType = {
		id?: true;
		coverLetter?: true;
		rating?: true;
		stage?: true;
		createdAt?: true;
		updatedAt?: true;
		jobListingId?: true;
		userId?: true;
		_all?: true;
	};

	export type ApplicationAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Application to aggregate.
		 */
		where?: ApplicationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Applications to fetch.
		 */
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: ApplicationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Applications from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Applications.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Applications
		 **/
		_count?: true | ApplicationCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: ApplicationAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: ApplicationSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: ApplicationMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: ApplicationMaxAggregateInputType;
	};

	export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> =
		{
			[P in keyof T & keyof AggregateApplication]: P extends "_count" | "count"
				? T[P] extends true
					? number
					: GetScalarType<T[P], AggregateApplication[P]>
				: GetScalarType<T[P], AggregateApplication[P]>;
		};

	export type ApplicationGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ApplicationWhereInput;
		orderBy?:
			| ApplicationOrderByWithAggregationInput
			| ApplicationOrderByWithAggregationInput[];
		by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum;
		having?: ApplicationScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: ApplicationCountAggregateInputType | true;
		_avg?: ApplicationAvgAggregateInputType;
		_sum?: ApplicationSumAggregateInputType;
		_min?: ApplicationMinAggregateInputType;
		_max?: ApplicationMaxAggregateInputType;
	};

	export type ApplicationGroupByOutputType = {
		id: string;
		coverLetter: string | null;
		rating: number | null;
		stage: $Enums.ApplicationStage;
		createdAt: Date;
		updatedAt: Date;
		jobListingId: string;
		userId: string;
		_count: ApplicationCountAggregateOutputType | null;
		_avg: ApplicationAvgAggregateOutputType | null;
		_sum: ApplicationSumAggregateOutputType | null;
		_min: ApplicationMinAggregateOutputType | null;
		_max: ApplicationMaxAggregateOutputType | null;
	};

	type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<ApplicationGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof ApplicationGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], ApplicationGroupByOutputType[P]>
						: GetScalarType<T[P], ApplicationGroupByOutputType[P]>;
				}
			>
		>;

	export type ApplicationSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			coverLetter?: boolean;
			rating?: boolean;
			stage?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			jobListingId?: boolean;
			userId?: boolean;
			jobListing?: boolean | JobListingDefaultArgs<ExtArgs>;
			user?: boolean | UserDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["application"]
	>;

	export type ApplicationSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			coverLetter?: boolean;
			rating?: boolean;
			stage?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			jobListingId?: boolean;
			userId?: boolean;
			jobListing?: boolean | JobListingDefaultArgs<ExtArgs>;
			user?: boolean | UserDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["application"]
	>;

	export type ApplicationSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			coverLetter?: boolean;
			rating?: boolean;
			stage?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			jobListingId?: boolean;
			userId?: boolean;
			jobListing?: boolean | JobListingDefaultArgs<ExtArgs>;
			user?: boolean | UserDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["application"]
	>;

	export type ApplicationSelectScalar = {
		id?: boolean;
		coverLetter?: boolean;
		rating?: boolean;
		stage?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		jobListingId?: boolean;
		userId?: boolean;
	};

	export type ApplicationOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| "id"
		| "coverLetter"
		| "rating"
		| "stage"
		| "createdAt"
		| "updatedAt"
		| "jobListingId"
		| "userId",
		ExtArgs["result"]["application"]
	>;
	export type ApplicationInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		jobListing?: boolean | JobListingDefaultArgs<ExtArgs>;
		user?: boolean | UserDefaultArgs<ExtArgs>;
	};
	export type ApplicationIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		jobListing?: boolean | JobListingDefaultArgs<ExtArgs>;
		user?: boolean | UserDefaultArgs<ExtArgs>;
	};
	export type ApplicationIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		jobListing?: boolean | JobListingDefaultArgs<ExtArgs>;
		user?: boolean | UserDefaultArgs<ExtArgs>;
	};

	export type $ApplicationPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Application";
		objects: {
			jobListing: Prisma.$JobListingPayload<ExtArgs>;
			user: Prisma.$UserPayload<ExtArgs>;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				coverLetter: string | null;
				rating: number | null;
				stage: $Enums.ApplicationStage;
				createdAt: Date;
				updatedAt: Date;
				jobListingId: string;
				userId: string;
			},
			ExtArgs["result"]["application"]
		>;
		composites: {};
	};

	type ApplicationGetPayload<
		S extends boolean | null | undefined | ApplicationDefaultArgs,
	> = $Result.GetResult<Prisma.$ApplicationPayload, S>;

	type ApplicationCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		ApplicationFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: ApplicationCountAggregateInputType | true;
	};

	export interface ApplicationDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Application"];
			meta: { name: "Application" };
		};
		/**
		 * Find zero or one Application that matches the filter.
		 * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
		 * @example
		 * // Get one Application
		 * const application = await prisma.application.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends ApplicationFindUniqueArgs>(
			args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>,
		): Prisma__ApplicationClient<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Application that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
		 * @example
		 * // Get one Application
		 * const application = await prisma.application.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(
			args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__ApplicationClient<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Application that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
		 * @example
		 * // Get one Application
		 * const application = await prisma.application.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends ApplicationFindFirstArgs>(
			args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>,
		): Prisma__ApplicationClient<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Application that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
		 * @example
		 * // Get one Application
		 * const application = await prisma.application.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(
			args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__ApplicationClient<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Applications that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Applications
		 * const applications = await prisma.application.findMany()
		 *
		 * // Get first 10 Applications
		 * const applications = await prisma.application.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends ApplicationFindManyArgs>(
			args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Application.
		 * @param {ApplicationCreateArgs} args - Arguments to create a Application.
		 * @example
		 * // Create one Application
		 * const Application = await prisma.application.create({
		 *   data: {
		 *     // ... data to create a Application
		 *   }
		 * })
		 *
		 */
		create<T extends ApplicationCreateArgs>(
			args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>,
		): Prisma__ApplicationClient<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Applications.
		 * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
		 * @example
		 * // Create many Applications
		 * const application = await prisma.application.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends ApplicationCreateManyArgs>(
			args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Applications and returns the data saved in the database.
		 * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
		 * @example
		 * // Create many Applications
		 * const application = await prisma.application.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Applications and only return the `id`
		 * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(
			args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Application.
		 * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
		 * @example
		 * // Delete one Application
		 * const Application = await prisma.application.delete({
		 *   where: {
		 *     // ... filter to delete one Application
		 *   }
		 * })
		 *
		 */
		delete<T extends ApplicationDeleteArgs>(
			args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>,
		): Prisma__ApplicationClient<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Application.
		 * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
		 * @example
		 * // Update one Application
		 * const application = await prisma.application.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends ApplicationUpdateArgs>(
			args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>,
		): Prisma__ApplicationClient<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Applications.
		 * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
		 * @example
		 * // Delete a few Applications
		 * const { count } = await prisma.application.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends ApplicationDeleteManyArgs>(
			args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Applications.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Applications
		 * const application = await prisma.application.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends ApplicationUpdateManyArgs>(
			args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Applications and returns the data updated in the database.
		 * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
		 * @example
		 * // Update many Applications
		 * const application = await prisma.application.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Applications and only return the `id`
		 * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
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
		updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(
			args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Application.
		 * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
		 * @example
		 * // Update or create a Application
		 * const application = await prisma.application.upsert({
		 *   create: {
		 *     // ... data to create a Application
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Application we want to update
		 *   }
		 * })
		 */
		upsert<T extends ApplicationUpsertArgs>(
			args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>,
		): Prisma__ApplicationClient<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Applications.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
		 * @example
		 * // Count the number of Applications
		 * const count = await prisma.application.count({
		 *   where: {
		 *     // ... the filter for the Applications we want to count
		 *   }
		 * })
		 **/
		count<T extends ApplicationCountArgs>(
			args?: Subset<T, ApplicationCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], ApplicationCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Application.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends ApplicationAggregateArgs>(
			args: Subset<T, ApplicationAggregateArgs>,
		): Prisma.PrismaPromise<GetApplicationAggregateType<T>>;

		/**
		 * Group by Application.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationGroupByArgs} args - Group by arguments.
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
			T extends ApplicationGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: ApplicationGroupByArgs["orderBy"] }
				: { orderBy?: ApplicationGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> &
				InputErrors,
		): {} extends InputErrors
			? GetApplicationGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Application model
		 */
		readonly fields: ApplicationFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Application.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__ApplicationClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		jobListing<T extends JobListingDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, JobListingDefaultArgs<ExtArgs>>,
		): Prisma__JobListingClient<
			| $Result.GetResult<
					Prisma.$JobListingPayload<ExtArgs>,
					T,
					"findUniqueOrThrow",
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>;
		user<T extends UserDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, UserDefaultArgs<ExtArgs>>,
		): Prisma__UserClient<
			| $Result.GetResult<
					Prisma.$UserPayload<ExtArgs>,
					T,
					"findUniqueOrThrow",
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Application model
	 */
	interface ApplicationFieldRefs {
		readonly id: FieldRef<"Application", "String">;
		readonly coverLetter: FieldRef<"Application", "String">;
		readonly rating: FieldRef<"Application", "Int">;
		readonly stage: FieldRef<"Application", "ApplicationStage">;
		readonly createdAt: FieldRef<"Application", "DateTime">;
		readonly updatedAt: FieldRef<"Application", "DateTime">;
		readonly jobListingId: FieldRef<"Application", "String">;
		readonly userId: FieldRef<"Application", "String">;
	}

	// Custom InputTypes
	/**
	 * Application findUnique
	 */
	export type ApplicationFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null;
		/**
		 * Filter, which Application to fetch.
		 */
		where: ApplicationWhereUniqueInput;
	};

	/**
	 * Application findUniqueOrThrow
	 */
	export type ApplicationFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null;
		/**
		 * Filter, which Application to fetch.
		 */
		where: ApplicationWhereUniqueInput;
	};

	/**
	 * Application findFirst
	 */
	export type ApplicationFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null;
		/**
		 * Filter, which Application to fetch.
		 */
		where?: ApplicationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Applications to fetch.
		 */
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Applications.
		 */
		cursor?: ApplicationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Applications from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Applications.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Applications.
		 */
		distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
	};

	/**
	 * Application findFirstOrThrow
	 */
	export type ApplicationFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null;
		/**
		 * Filter, which Application to fetch.
		 */
		where?: ApplicationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Applications to fetch.
		 */
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Applications.
		 */
		cursor?: ApplicationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Applications from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Applications.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Applications.
		 */
		distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
	};

	/**
	 * Application findMany
	 */
	export type ApplicationFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null;
		/**
		 * Filter, which Applications to fetch.
		 */
		where?: ApplicationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Applications to fetch.
		 */
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Applications.
		 */
		cursor?: ApplicationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Applications from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Applications.
		 */
		skip?: number;
		distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
	};

	/**
	 * Application create
	 */
	export type ApplicationCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null;
		/**
		 * The data needed to create a Application.
		 */
		data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>;
	};

	/**
	 * Application createMany
	 */
	export type ApplicationCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Applications.
		 */
		data: ApplicationCreateManyInput | ApplicationCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Application createManyAndReturn
	 */
	export type ApplicationCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * The data used to create many Applications.
		 */
		data: ApplicationCreateManyInput | ApplicationCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Application update
	 */
	export type ApplicationUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null;
		/**
		 * The data needed to update a Application.
		 */
		data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>;
		/**
		 * Choose, which Application to update.
		 */
		where: ApplicationWhereUniqueInput;
	};

	/**
	 * Application updateMany
	 */
	export type ApplicationUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Applications.
		 */
		data: XOR<
			ApplicationUpdateManyMutationInput,
			ApplicationUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Applications to update
		 */
		where?: ApplicationWhereInput;
		/**
		 * Limit how many Applications to update.
		 */
		limit?: number;
	};

	/**
	 * Application updateManyAndReturn
	 */
	export type ApplicationUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * The data used to update Applications.
		 */
		data: XOR<
			ApplicationUpdateManyMutationInput,
			ApplicationUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Applications to update
		 */
		where?: ApplicationWhereInput;
		/**
		 * Limit how many Applications to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Application upsert
	 */
	export type ApplicationUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null;
		/**
		 * The filter to search for the Application to update in case it exists.
		 */
		where: ApplicationWhereUniqueInput;
		/**
		 * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
		 */
		create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>;
		/**
		 * In case the Application was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>;
	};

	/**
	 * Application delete
	 */
	export type ApplicationDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null;
		/**
		 * Filter which Application to delete.
		 */
		where: ApplicationWhereUniqueInput;
	};

	/**
	 * Application deleteMany
	 */
	export type ApplicationDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Applications to delete
		 */
		where?: ApplicationWhereInput;
		/**
		 * Limit how many Applications to delete.
		 */
		limit?: number;
	};

	/**
	 * Application without action
	 */
	export type ApplicationDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Application
		 */
		omit?: ApplicationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null;
	};

	/**
	 * Model Resume
	 */

	export type AggregateResume = {
		_count: ResumeCountAggregateOutputType | null;
		_avg: ResumeAvgAggregateOutputType | null;
		_sum: ResumeSumAggregateOutputType | null;
		_min: ResumeMinAggregateOutputType | null;
		_max: ResumeMaxAggregateOutputType | null;
	};

	export type ResumeAvgAggregateOutputType = {
		version: number | null;
	};

	export type ResumeSumAggregateOutputType = {
		version: number | null;
	};

	export type ResumeMinAggregateOutputType = {
		fileUrl: string | null;
		fileKey: string | null;
		version: number | null;
		aiSummary: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		userId: string | null;
	};

	export type ResumeMaxAggregateOutputType = {
		fileUrl: string | null;
		fileKey: string | null;
		version: number | null;
		aiSummary: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		userId: string | null;
	};

	export type ResumeCountAggregateOutputType = {
		fileUrl: number;
		fileKey: number;
		version: number;
		aiSummary: number;
		createdAt: number;
		updatedAt: number;
		userId: number;
		_all: number;
	};

	export type ResumeAvgAggregateInputType = {
		version?: true;
	};

	export type ResumeSumAggregateInputType = {
		version?: true;
	};

	export type ResumeMinAggregateInputType = {
		fileUrl?: true;
		fileKey?: true;
		version?: true;
		aiSummary?: true;
		createdAt?: true;
		updatedAt?: true;
		userId?: true;
	};

	export type ResumeMaxAggregateInputType = {
		fileUrl?: true;
		fileKey?: true;
		version?: true;
		aiSummary?: true;
		createdAt?: true;
		updatedAt?: true;
		userId?: true;
	};

	export type ResumeCountAggregateInputType = {
		fileUrl?: true;
		fileKey?: true;
		version?: true;
		aiSummary?: true;
		createdAt?: true;
		updatedAt?: true;
		userId?: true;
		_all?: true;
	};

	export type ResumeAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Resume to aggregate.
		 */
		where?: ResumeWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Resumes to fetch.
		 */
		orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: ResumeWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Resumes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Resumes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Resumes
		 **/
		_count?: true | ResumeCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: ResumeAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: ResumeSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: ResumeMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: ResumeMaxAggregateInputType;
	};

	export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
		[P in keyof T & keyof AggregateResume]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateResume[P]>
			: GetScalarType<T[P], AggregateResume[P]>;
	};

	export type ResumeGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: ResumeWhereInput;
		orderBy?:
			| ResumeOrderByWithAggregationInput
			| ResumeOrderByWithAggregationInput[];
		by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum;
		having?: ResumeScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: ResumeCountAggregateInputType | true;
		_avg?: ResumeAvgAggregateInputType;
		_sum?: ResumeSumAggregateInputType;
		_min?: ResumeMinAggregateInputType;
		_max?: ResumeMaxAggregateInputType;
	};

	export type ResumeGroupByOutputType = {
		fileUrl: string;
		fileKey: string;
		version: number;
		aiSummary: string | null;
		createdAt: Date;
		updatedAt: Date;
		userId: string;
		_count: ResumeCountAggregateOutputType | null;
		_avg: ResumeAvgAggregateOutputType | null;
		_sum: ResumeSumAggregateOutputType | null;
		_min: ResumeMinAggregateOutputType | null;
		_max: ResumeMaxAggregateOutputType | null;
	};

	type GetResumeGroupByPayload<T extends ResumeGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<ResumeGroupByOutputType, T["by"]> & {
					[P in keyof T & keyof ResumeGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], ResumeGroupByOutputType[P]>
						: GetScalarType<T[P], ResumeGroupByOutputType[P]>;
				}
			>
		>;

	export type ResumeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			fileUrl?: boolean;
			fileKey?: boolean;
			version?: boolean;
			aiSummary?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			userId?: boolean;
			user?: boolean | UserDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["resume"]
	>;

	export type ResumeSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			fileUrl?: boolean;
			fileKey?: boolean;
			version?: boolean;
			aiSummary?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			userId?: boolean;
			user?: boolean | UserDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["resume"]
	>;

	export type ResumeSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			fileUrl?: boolean;
			fileKey?: boolean;
			version?: boolean;
			aiSummary?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			userId?: boolean;
			user?: boolean | UserDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["resume"]
	>;

	export type ResumeSelectScalar = {
		fileUrl?: boolean;
		fileKey?: boolean;
		version?: boolean;
		aiSummary?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		userId?: boolean;
	};

	export type ResumeOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| "fileUrl"
		| "fileKey"
		| "version"
		| "aiSummary"
		| "createdAt"
		| "updatedAt"
		| "userId",
		ExtArgs["result"]["resume"]
	>;
	export type ResumeInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>;
	};
	export type ResumeIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>;
	};
	export type ResumeIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>;
	};

	export type $ResumePayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Resume";
		objects: {
			user: Prisma.$UserPayload<ExtArgs>;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				fileUrl: string;
				fileKey: string;
				version: number;
				aiSummary: string | null;
				createdAt: Date;
				updatedAt: Date;
				userId: string;
			},
			ExtArgs["result"]["resume"]
		>;
		composites: {};
	};

	type ResumeGetPayload<
		S extends boolean | null | undefined | ResumeDefaultArgs,
	> = $Result.GetResult<Prisma.$ResumePayload, S>;

	type ResumeCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<ResumeFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
		select?: ResumeCountAggregateInputType | true;
	};

	export interface ResumeDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Resume"];
			meta: { name: "Resume" };
		};
		/**
		 * Find zero or one Resume that matches the filter.
		 * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
		 * @example
		 * // Get one Resume
		 * const resume = await prisma.resume.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends ResumeFindUniqueArgs>(
			args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>,
		): Prisma__ResumeClient<
			$Result.GetResult<
				Prisma.$ResumePayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
		 * @example
		 * // Get one Resume
		 * const resume = await prisma.resume.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(
			args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__ResumeClient<
			$Result.GetResult<
				Prisma.$ResumePayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Resume that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
		 * @example
		 * // Get one Resume
		 * const resume = await prisma.resume.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends ResumeFindFirstArgs>(
			args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>,
		): Prisma__ResumeClient<
			$Result.GetResult<
				Prisma.$ResumePayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Resume that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
		 * @example
		 * // Get one Resume
		 * const resume = await prisma.resume.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(
			args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__ResumeClient<
			$Result.GetResult<
				Prisma.$ResumePayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Resumes that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Resumes
		 * const resumes = await prisma.resume.findMany()
		 *
		 * // Get first 10 Resumes
		 * const resumes = await prisma.resume.findMany({ take: 10 })
		 *
		 * // Only select the `fileUrl`
		 * const resumeWithFileUrlOnly = await prisma.resume.findMany({ select: { fileUrl: true } })
		 *
		 */
		findMany<T extends ResumeFindManyArgs>(
			args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ResumePayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Resume.
		 * @param {ResumeCreateArgs} args - Arguments to create a Resume.
		 * @example
		 * // Create one Resume
		 * const Resume = await prisma.resume.create({
		 *   data: {
		 *     // ... data to create a Resume
		 *   }
		 * })
		 *
		 */
		create<T extends ResumeCreateArgs>(
			args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>,
		): Prisma__ResumeClient<
			$Result.GetResult<
				Prisma.$ResumePayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Resumes.
		 * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
		 * @example
		 * // Create many Resumes
		 * const resume = await prisma.resume.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends ResumeCreateManyArgs>(
			args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Resumes and returns the data saved in the database.
		 * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
		 * @example
		 * // Create many Resumes
		 * const resume = await prisma.resume.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Resumes and only return the `fileUrl`
		 * const resumeWithFileUrlOnly = await prisma.resume.createManyAndReturn({
		 *   select: { fileUrl: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(
			args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ResumePayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Resume.
		 * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
		 * @example
		 * // Delete one Resume
		 * const Resume = await prisma.resume.delete({
		 *   where: {
		 *     // ... filter to delete one Resume
		 *   }
		 * })
		 *
		 */
		delete<T extends ResumeDeleteArgs>(
			args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>,
		): Prisma__ResumeClient<
			$Result.GetResult<
				Prisma.$ResumePayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Resume.
		 * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
		 * @example
		 * // Update one Resume
		 * const resume = await prisma.resume.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends ResumeUpdateArgs>(
			args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>,
		): Prisma__ResumeClient<
			$Result.GetResult<
				Prisma.$ResumePayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Resumes.
		 * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
		 * @example
		 * // Delete a few Resumes
		 * const { count } = await prisma.resume.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends ResumeDeleteManyArgs>(
			args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Resumes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Resumes
		 * const resume = await prisma.resume.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends ResumeUpdateManyArgs>(
			args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Resumes and returns the data updated in the database.
		 * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
		 * @example
		 * // Update many Resumes
		 * const resume = await prisma.resume.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Resumes and only return the `fileUrl`
		 * const resumeWithFileUrlOnly = await prisma.resume.updateManyAndReturn({
		 *   select: { fileUrl: true },
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
		updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(
			args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ResumePayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Resume.
		 * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
		 * @example
		 * // Update or create a Resume
		 * const resume = await prisma.resume.upsert({
		 *   create: {
		 *     // ... data to create a Resume
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Resume we want to update
		 *   }
		 * })
		 */
		upsert<T extends ResumeUpsertArgs>(
			args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>,
		): Prisma__ResumeClient<
			$Result.GetResult<
				Prisma.$ResumePayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Resumes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
		 * @example
		 * // Count the number of Resumes
		 * const count = await prisma.resume.count({
		 *   where: {
		 *     // ... the filter for the Resumes we want to count
		 *   }
		 * })
		 **/
		count<T extends ResumeCountArgs>(
			args?: Subset<T, ResumeCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], ResumeCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Resume.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends ResumeAggregateArgs>(
			args: Subset<T, ResumeAggregateArgs>,
		): Prisma.PrismaPromise<GetResumeAggregateType<T>>;

		/**
		 * Group by Resume.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ResumeGroupByArgs} args - Group by arguments.
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
			T extends ResumeGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: ResumeGroupByArgs["orderBy"] }
				: { orderBy?: ResumeGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetResumeGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Resume model
		 */
		readonly fields: ResumeFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Resume.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__ResumeClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		user<T extends UserDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, UserDefaultArgs<ExtArgs>>,
		): Prisma__UserClient<
			| $Result.GetResult<
					Prisma.$UserPayload<ExtArgs>,
					T,
					"findUniqueOrThrow",
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Resume model
	 */
	interface ResumeFieldRefs {
		readonly fileUrl: FieldRef<"Resume", "String">;
		readonly fileKey: FieldRef<"Resume", "String">;
		readonly version: FieldRef<"Resume", "Int">;
		readonly aiSummary: FieldRef<"Resume", "String">;
		readonly createdAt: FieldRef<"Resume", "DateTime">;
		readonly updatedAt: FieldRef<"Resume", "DateTime">;
		readonly userId: FieldRef<"Resume", "String">;
	}

	// Custom InputTypes
	/**
	 * Resume findUnique
	 */
	export type ResumeFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeInclude<ExtArgs> | null;
		/**
		 * Filter, which Resume to fetch.
		 */
		where: ResumeWhereUniqueInput;
	};

	/**
	 * Resume findUniqueOrThrow
	 */
	export type ResumeFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeInclude<ExtArgs> | null;
		/**
		 * Filter, which Resume to fetch.
		 */
		where: ResumeWhereUniqueInput;
	};

	/**
	 * Resume findFirst
	 */
	export type ResumeFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeInclude<ExtArgs> | null;
		/**
		 * Filter, which Resume to fetch.
		 */
		where?: ResumeWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Resumes to fetch.
		 */
		orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Resumes.
		 */
		cursor?: ResumeWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Resumes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Resumes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Resumes.
		 */
		distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[];
	};

	/**
	 * Resume findFirstOrThrow
	 */
	export type ResumeFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeInclude<ExtArgs> | null;
		/**
		 * Filter, which Resume to fetch.
		 */
		where?: ResumeWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Resumes to fetch.
		 */
		orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Resumes.
		 */
		cursor?: ResumeWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Resumes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Resumes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Resumes.
		 */
		distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[];
	};

	/**
	 * Resume findMany
	 */
	export type ResumeFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeInclude<ExtArgs> | null;
		/**
		 * Filter, which Resumes to fetch.
		 */
		where?: ResumeWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Resumes to fetch.
		 */
		orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Resumes.
		 */
		cursor?: ResumeWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Resumes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Resumes.
		 */
		skip?: number;
		distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[];
	};

	/**
	 * Resume create
	 */
	export type ResumeCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeInclude<ExtArgs> | null;
		/**
		 * The data needed to create a Resume.
		 */
		data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>;
	};

	/**
	 * Resume createMany
	 */
	export type ResumeCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Resumes.
		 */
		data: ResumeCreateManyInput | ResumeCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Resume createManyAndReturn
	 */
	export type ResumeCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * The data used to create many Resumes.
		 */
		data: ResumeCreateManyInput | ResumeCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Resume update
	 */
	export type ResumeUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeInclude<ExtArgs> | null;
		/**
		 * The data needed to update a Resume.
		 */
		data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>;
		/**
		 * Choose, which Resume to update.
		 */
		where: ResumeWhereUniqueInput;
	};

	/**
	 * Resume updateMany
	 */
	export type ResumeUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Resumes.
		 */
		data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>;
		/**
		 * Filter which Resumes to update
		 */
		where?: ResumeWhereInput;
		/**
		 * Limit how many Resumes to update.
		 */
		limit?: number;
	};

	/**
	 * Resume updateManyAndReturn
	 */
	export type ResumeUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * The data used to update Resumes.
		 */
		data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>;
		/**
		 * Filter which Resumes to update
		 */
		where?: ResumeWhereInput;
		/**
		 * Limit how many Resumes to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Resume upsert
	 */
	export type ResumeUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeInclude<ExtArgs> | null;
		/**
		 * The filter to search for the Resume to update in case it exists.
		 */
		where: ResumeWhereUniqueInput;
		/**
		 * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
		 */
		create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>;
		/**
		 * In case the Resume was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>;
	};

	/**
	 * Resume delete
	 */
	export type ResumeDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeInclude<ExtArgs> | null;
		/**
		 * Filter which Resume to delete.
		 */
		where: ResumeWhereUniqueInput;
	};

	/**
	 * Resume deleteMany
	 */
	export type ResumeDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Resumes to delete
		 */
		where?: ResumeWhereInput;
		/**
		 * Limit how many Resumes to delete.
		 */
		limit?: number;
	};

	/**
	 * Resume without action
	 */
	export type ResumeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Resume
		 */
		select?: ResumeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Resume
		 */
		omit?: ResumeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ResumeInclude<ExtArgs> | null;
	};

	/**
	 * Model UserSettingUnderOrganization
	 */

	export type AggregateUserSettingUnderOrganization = {
		_count: UserSettingUnderOrganizationCountAggregateOutputType | null;
		_avg: UserSettingUnderOrganizationAvgAggregateOutputType | null;
		_sum: UserSettingUnderOrganizationSumAggregateOutputType | null;
		_min: UserSettingUnderOrganizationMinAggregateOutputType | null;
		_max: UserSettingUnderOrganizationMaxAggregateOutputType | null;
	};

	export type UserSettingUnderOrganizationAvgAggregateOutputType = {
		minimumRating: number | null;
	};

	export type UserSettingUnderOrganizationSumAggregateOutputType = {
		minimumRating: number | null;
	};

	export type UserSettingUnderOrganizationMinAggregateOutputType = {
		newApplicationEmailNotifications: boolean | null;
		minimumRating: number | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		userId: string | null;
		organizationId: string | null;
	};

	export type UserSettingUnderOrganizationMaxAggregateOutputType = {
		newApplicationEmailNotifications: boolean | null;
		minimumRating: number | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		userId: string | null;
		organizationId: string | null;
	};

	export type UserSettingUnderOrganizationCountAggregateOutputType = {
		newApplicationEmailNotifications: number;
		minimumRating: number;
		createdAt: number;
		updatedAt: number;
		userId: number;
		organizationId: number;
		_all: number;
	};

	export type UserSettingUnderOrganizationAvgAggregateInputType = {
		minimumRating?: true;
	};

	export type UserSettingUnderOrganizationSumAggregateInputType = {
		minimumRating?: true;
	};

	export type UserSettingUnderOrganizationMinAggregateInputType = {
		newApplicationEmailNotifications?: true;
		minimumRating?: true;
		createdAt?: true;
		updatedAt?: true;
		userId?: true;
		organizationId?: true;
	};

	export type UserSettingUnderOrganizationMaxAggregateInputType = {
		newApplicationEmailNotifications?: true;
		minimumRating?: true;
		createdAt?: true;
		updatedAt?: true;
		userId?: true;
		organizationId?: true;
	};

	export type UserSettingUnderOrganizationCountAggregateInputType = {
		newApplicationEmailNotifications?: true;
		minimumRating?: true;
		createdAt?: true;
		updatedAt?: true;
		userId?: true;
		organizationId?: true;
		_all?: true;
	};

	export type UserSettingUnderOrganizationAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which UserSettingUnderOrganization to aggregate.
		 */
		where?: UserSettingUnderOrganizationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of UserSettingUnderOrganizations to fetch.
		 */
		orderBy?:
			| UserSettingUnderOrganizationOrderByWithRelationInput
			| UserSettingUnderOrganizationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: UserSettingUnderOrganizationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` UserSettingUnderOrganizations from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` UserSettingUnderOrganizations.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned UserSettingUnderOrganizations
		 **/
		_count?: true | UserSettingUnderOrganizationCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: UserSettingUnderOrganizationAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: UserSettingUnderOrganizationSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: UserSettingUnderOrganizationMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: UserSettingUnderOrganizationMaxAggregateInputType;
	};

	export type GetUserSettingUnderOrganizationAggregateType<
		T extends UserSettingUnderOrganizationAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateUserSettingUnderOrganization]: P extends
			| "_count"
			| "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateUserSettingUnderOrganization[P]>
			: GetScalarType<T[P], AggregateUserSettingUnderOrganization[P]>;
	};

	export type UserSettingUnderOrganizationGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: UserSettingUnderOrganizationWhereInput;
		orderBy?:
			| UserSettingUnderOrganizationOrderByWithAggregationInput
			| UserSettingUnderOrganizationOrderByWithAggregationInput[];
		by:
			| UserSettingUnderOrganizationScalarFieldEnum[]
			| UserSettingUnderOrganizationScalarFieldEnum;
		having?: UserSettingUnderOrganizationScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: UserSettingUnderOrganizationCountAggregateInputType | true;
		_avg?: UserSettingUnderOrganizationAvgAggregateInputType;
		_sum?: UserSettingUnderOrganizationSumAggregateInputType;
		_min?: UserSettingUnderOrganizationMinAggregateInputType;
		_max?: UserSettingUnderOrganizationMaxAggregateInputType;
	};

	export type UserSettingUnderOrganizationGroupByOutputType = {
		newApplicationEmailNotifications: boolean;
		minimumRating: number | null;
		createdAt: Date;
		updatedAt: Date;
		userId: string;
		organizationId: string;
		_count: UserSettingUnderOrganizationCountAggregateOutputType | null;
		_avg: UserSettingUnderOrganizationAvgAggregateOutputType | null;
		_sum: UserSettingUnderOrganizationSumAggregateOutputType | null;
		_min: UserSettingUnderOrganizationMinAggregateOutputType | null;
		_max: UserSettingUnderOrganizationMaxAggregateOutputType | null;
	};

	type GetUserSettingUnderOrganizationGroupByPayload<
		T extends UserSettingUnderOrganizationGroupByArgs,
	> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<UserSettingUnderOrganizationGroupByOutputType, T["by"]> & {
				[P in keyof T &
					keyof UserSettingUnderOrganizationGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: GetScalarType<
								T[P],
								UserSettingUnderOrganizationGroupByOutputType[P]
							>
					: GetScalarType<
							T[P],
							UserSettingUnderOrganizationGroupByOutputType[P]
						>;
			}
		>
	>;

	export type UserSettingUnderOrganizationSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			newApplicationEmailNotifications?: boolean;
			minimumRating?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			userId?: boolean;
			organizationId?: boolean;
			user?: boolean | UserDefaultArgs<ExtArgs>;
			organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["userSettingUnderOrganization"]
	>;

	export type UserSettingUnderOrganizationSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			newApplicationEmailNotifications?: boolean;
			minimumRating?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			userId?: boolean;
			organizationId?: boolean;
			user?: boolean | UserDefaultArgs<ExtArgs>;
			organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["userSettingUnderOrganization"]
	>;

	export type UserSettingUnderOrganizationSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			newApplicationEmailNotifications?: boolean;
			minimumRating?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			userId?: boolean;
			organizationId?: boolean;
			user?: boolean | UserDefaultArgs<ExtArgs>;
			organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["userSettingUnderOrganization"]
	>;

	export type UserSettingUnderOrganizationSelectScalar = {
		newApplicationEmailNotifications?: boolean;
		minimumRating?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		userId?: boolean;
		organizationId?: boolean;
	};

	export type UserSettingUnderOrganizationOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| "newApplicationEmailNotifications"
		| "minimumRating"
		| "createdAt"
		| "updatedAt"
		| "userId"
		| "organizationId",
		ExtArgs["result"]["userSettingUnderOrganization"]
	>;
	export type UserSettingUnderOrganizationInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>;
		organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
	};
	export type UserSettingUnderOrganizationIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>;
		organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
	};
	export type UserSettingUnderOrganizationIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>;
		organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
	};

	export type $UserSettingUnderOrganizationPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "UserSettingUnderOrganization";
		objects: {
			user: Prisma.$UserPayload<ExtArgs>;
			organization: Prisma.$OrganizationPayload<ExtArgs>;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				newApplicationEmailNotifications: boolean;
				minimumRating: number | null;
				createdAt: Date;
				updatedAt: Date;
				userId: string;
				organizationId: string;
			},
			ExtArgs["result"]["userSettingUnderOrganization"]
		>;
		composites: {};
	};

	type UserSettingUnderOrganizationGetPayload<
		S extends
			| boolean
			| null
			| undefined
			| UserSettingUnderOrganizationDefaultArgs,
	> = $Result.GetResult<Prisma.$UserSettingUnderOrganizationPayload, S>;

	type UserSettingUnderOrganizationCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		UserSettingUnderOrganizationFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: UserSettingUnderOrganizationCountAggregateInputType | true;
	};

	export interface UserSettingUnderOrganizationDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["UserSettingUnderOrganization"];
			meta: { name: "UserSettingUnderOrganization" };
		};
		/**
		 * Find zero or one UserSettingUnderOrganization that matches the filter.
		 * @param {UserSettingUnderOrganizationFindUniqueArgs} args - Arguments to find a UserSettingUnderOrganization
		 * @example
		 * // Get one UserSettingUnderOrganization
		 * const userSettingUnderOrganization = await prisma.userSettingUnderOrganization.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends UserSettingUnderOrganizationFindUniqueArgs>(
			args: SelectSubset<
				T,
				UserSettingUnderOrganizationFindUniqueArgs<ExtArgs>
			>,
		): Prisma__UserSettingUnderOrganizationClient<
			$Result.GetResult<
				Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one UserSettingUnderOrganization that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {UserSettingUnderOrganizationFindUniqueOrThrowArgs} args - Arguments to find a UserSettingUnderOrganization
		 * @example
		 * // Get one UserSettingUnderOrganization
		 * const userSettingUnderOrganization = await prisma.userSettingUnderOrganization.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<
			T extends UserSettingUnderOrganizationFindUniqueOrThrowArgs,
		>(
			args: SelectSubset<
				T,
				UserSettingUnderOrganizationFindUniqueOrThrowArgs<ExtArgs>
			>,
		): Prisma__UserSettingUnderOrganizationClient<
			$Result.GetResult<
				Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first UserSettingUnderOrganization that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserSettingUnderOrganizationFindFirstArgs} args - Arguments to find a UserSettingUnderOrganization
		 * @example
		 * // Get one UserSettingUnderOrganization
		 * const userSettingUnderOrganization = await prisma.userSettingUnderOrganization.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends UserSettingUnderOrganizationFindFirstArgs>(
			args?: SelectSubset<
				T,
				UserSettingUnderOrganizationFindFirstArgs<ExtArgs>
			>,
		): Prisma__UserSettingUnderOrganizationClient<
			$Result.GetResult<
				Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first UserSettingUnderOrganization that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserSettingUnderOrganizationFindFirstOrThrowArgs} args - Arguments to find a UserSettingUnderOrganization
		 * @example
		 * // Get one UserSettingUnderOrganization
		 * const userSettingUnderOrganization = await prisma.userSettingUnderOrganization.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<
			T extends UserSettingUnderOrganizationFindFirstOrThrowArgs,
		>(
			args?: SelectSubset<
				T,
				UserSettingUnderOrganizationFindFirstOrThrowArgs<ExtArgs>
			>,
		): Prisma__UserSettingUnderOrganizationClient<
			$Result.GetResult<
				Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more UserSettingUnderOrganizations that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserSettingUnderOrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all UserSettingUnderOrganizations
		 * const userSettingUnderOrganizations = await prisma.userSettingUnderOrganization.findMany()
		 *
		 * // Get first 10 UserSettingUnderOrganizations
		 * const userSettingUnderOrganizations = await prisma.userSettingUnderOrganization.findMany({ take: 10 })
		 *
		 * // Only select the `newApplicationEmailNotifications`
		 * const userSettingUnderOrganizationWithNewApplicationEmailNotificationsOnly = await prisma.userSettingUnderOrganization.findMany({ select: { newApplicationEmailNotifications: true } })
		 *
		 */
		findMany<T extends UserSettingUnderOrganizationFindManyArgs>(
			args?: SelectSubset<T, UserSettingUnderOrganizationFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a UserSettingUnderOrganization.
		 * @param {UserSettingUnderOrganizationCreateArgs} args - Arguments to create a UserSettingUnderOrganization.
		 * @example
		 * // Create one UserSettingUnderOrganization
		 * const UserSettingUnderOrganization = await prisma.userSettingUnderOrganization.create({
		 *   data: {
		 *     // ... data to create a UserSettingUnderOrganization
		 *   }
		 * })
		 *
		 */
		create<T extends UserSettingUnderOrganizationCreateArgs>(
			args: SelectSubset<T, UserSettingUnderOrganizationCreateArgs<ExtArgs>>,
		): Prisma__UserSettingUnderOrganizationClient<
			$Result.GetResult<
				Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many UserSettingUnderOrganizations.
		 * @param {UserSettingUnderOrganizationCreateManyArgs} args - Arguments to create many UserSettingUnderOrganizations.
		 * @example
		 * // Create many UserSettingUnderOrganizations
		 * const userSettingUnderOrganization = await prisma.userSettingUnderOrganization.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends UserSettingUnderOrganizationCreateManyArgs>(
			args?: SelectSubset<
				T,
				UserSettingUnderOrganizationCreateManyArgs<ExtArgs>
			>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many UserSettingUnderOrganizations and returns the data saved in the database.
		 * @param {UserSettingUnderOrganizationCreateManyAndReturnArgs} args - Arguments to create many UserSettingUnderOrganizations.
		 * @example
		 * // Create many UserSettingUnderOrganizations
		 * const userSettingUnderOrganization = await prisma.userSettingUnderOrganization.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many UserSettingUnderOrganizations and only return the `newApplicationEmailNotifications`
		 * const userSettingUnderOrganizationWithNewApplicationEmailNotificationsOnly = await prisma.userSettingUnderOrganization.createManyAndReturn({
		 *   select: { newApplicationEmailNotifications: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<
			T extends UserSettingUnderOrganizationCreateManyAndReturnArgs,
		>(
			args?: SelectSubset<
				T,
				UserSettingUnderOrganizationCreateManyAndReturnArgs<ExtArgs>
			>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a UserSettingUnderOrganization.
		 * @param {UserSettingUnderOrganizationDeleteArgs} args - Arguments to delete one UserSettingUnderOrganization.
		 * @example
		 * // Delete one UserSettingUnderOrganization
		 * const UserSettingUnderOrganization = await prisma.userSettingUnderOrganization.delete({
		 *   where: {
		 *     // ... filter to delete one UserSettingUnderOrganization
		 *   }
		 * })
		 *
		 */
		delete<T extends UserSettingUnderOrganizationDeleteArgs>(
			args: SelectSubset<T, UserSettingUnderOrganizationDeleteArgs<ExtArgs>>,
		): Prisma__UserSettingUnderOrganizationClient<
			$Result.GetResult<
				Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one UserSettingUnderOrganization.
		 * @param {UserSettingUnderOrganizationUpdateArgs} args - Arguments to update one UserSettingUnderOrganization.
		 * @example
		 * // Update one UserSettingUnderOrganization
		 * const userSettingUnderOrganization = await prisma.userSettingUnderOrganization.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends UserSettingUnderOrganizationUpdateArgs>(
			args: SelectSubset<T, UserSettingUnderOrganizationUpdateArgs<ExtArgs>>,
		): Prisma__UserSettingUnderOrganizationClient<
			$Result.GetResult<
				Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more UserSettingUnderOrganizations.
		 * @param {UserSettingUnderOrganizationDeleteManyArgs} args - Arguments to filter UserSettingUnderOrganizations to delete.
		 * @example
		 * // Delete a few UserSettingUnderOrganizations
		 * const { count } = await prisma.userSettingUnderOrganization.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends UserSettingUnderOrganizationDeleteManyArgs>(
			args?: SelectSubset<
				T,
				UserSettingUnderOrganizationDeleteManyArgs<ExtArgs>
			>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more UserSettingUnderOrganizations.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserSettingUnderOrganizationUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many UserSettingUnderOrganizations
		 * const userSettingUnderOrganization = await prisma.userSettingUnderOrganization.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends UserSettingUnderOrganizationUpdateManyArgs>(
			args: SelectSubset<
				T,
				UserSettingUnderOrganizationUpdateManyArgs<ExtArgs>
			>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more UserSettingUnderOrganizations and returns the data updated in the database.
		 * @param {UserSettingUnderOrganizationUpdateManyAndReturnArgs} args - Arguments to update many UserSettingUnderOrganizations.
		 * @example
		 * // Update many UserSettingUnderOrganizations
		 * const userSettingUnderOrganization = await prisma.userSettingUnderOrganization.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more UserSettingUnderOrganizations and only return the `newApplicationEmailNotifications`
		 * const userSettingUnderOrganizationWithNewApplicationEmailNotificationsOnly = await prisma.userSettingUnderOrganization.updateManyAndReturn({
		 *   select: { newApplicationEmailNotifications: true },
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
		updateManyAndReturn<
			T extends UserSettingUnderOrganizationUpdateManyAndReturnArgs,
		>(
			args: SelectSubset<
				T,
				UserSettingUnderOrganizationUpdateManyAndReturnArgs<ExtArgs>
			>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one UserSettingUnderOrganization.
		 * @param {UserSettingUnderOrganizationUpsertArgs} args - Arguments to update or create a UserSettingUnderOrganization.
		 * @example
		 * // Update or create a UserSettingUnderOrganization
		 * const userSettingUnderOrganization = await prisma.userSettingUnderOrganization.upsert({
		 *   create: {
		 *     // ... data to create a UserSettingUnderOrganization
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the UserSettingUnderOrganization we want to update
		 *   }
		 * })
		 */
		upsert<T extends UserSettingUnderOrganizationUpsertArgs>(
			args: SelectSubset<T, UserSettingUnderOrganizationUpsertArgs<ExtArgs>>,
		): Prisma__UserSettingUnderOrganizationClient<
			$Result.GetResult<
				Prisma.$UserSettingUnderOrganizationPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of UserSettingUnderOrganizations.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserSettingUnderOrganizationCountArgs} args - Arguments to filter UserSettingUnderOrganizations to count.
		 * @example
		 * // Count the number of UserSettingUnderOrganizations
		 * const count = await prisma.userSettingUnderOrganization.count({
		 *   where: {
		 *     // ... the filter for the UserSettingUnderOrganizations we want to count
		 *   }
		 * })
		 **/
		count<T extends UserSettingUnderOrganizationCountArgs>(
			args?: Subset<T, UserSettingUnderOrganizationCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							UserSettingUnderOrganizationCountAggregateOutputType
						>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a UserSettingUnderOrganization.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserSettingUnderOrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends UserSettingUnderOrganizationAggregateArgs>(
			args: Subset<T, UserSettingUnderOrganizationAggregateArgs>,
		): Prisma.PrismaPromise<GetUserSettingUnderOrganizationAggregateType<T>>;

		/**
		 * Group by UserSettingUnderOrganization.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserSettingUnderOrganizationGroupByArgs} args - Group by arguments.
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
			T extends UserSettingUnderOrganizationGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: UserSettingUnderOrganizationGroupByArgs["orderBy"] }
				: { orderBy?: UserSettingUnderOrganizationGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<
				T,
				UserSettingUnderOrganizationGroupByArgs,
				OrderByArg
			> &
				InputErrors,
		): {} extends InputErrors
			? GetUserSettingUnderOrganizationGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the UserSettingUnderOrganization model
		 */
		readonly fields: UserSettingUnderOrganizationFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for UserSettingUnderOrganization.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__UserSettingUnderOrganizationClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		user<T extends UserDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, UserDefaultArgs<ExtArgs>>,
		): Prisma__UserClient<
			| $Result.GetResult<
					Prisma.$UserPayload<ExtArgs>,
					T,
					"findUniqueOrThrow",
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>;
		organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
		): Prisma__OrganizationClient<
			| $Result.GetResult<
					Prisma.$OrganizationPayload<ExtArgs>,
					T,
					"findUniqueOrThrow",
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the UserSettingUnderOrganization model
	 */
	interface UserSettingUnderOrganizationFieldRefs {
		readonly newApplicationEmailNotifications: FieldRef<
			"UserSettingUnderOrganization",
			"Boolean"
		>;
		readonly minimumRating: FieldRef<"UserSettingUnderOrganization", "Int">;
		readonly createdAt: FieldRef<"UserSettingUnderOrganization", "DateTime">;
		readonly updatedAt: FieldRef<"UserSettingUnderOrganization", "DateTime">;
		readonly userId: FieldRef<"UserSettingUnderOrganization", "String">;
		readonly organizationId: FieldRef<"UserSettingUnderOrganization", "String">;
	}

	// Custom InputTypes
	/**
	 * UserSettingUnderOrganization findUnique
	 */
	export type UserSettingUnderOrganizationFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationInclude<ExtArgs> | null;
		/**
		 * Filter, which UserSettingUnderOrganization to fetch.
		 */
		where: UserSettingUnderOrganizationWhereUniqueInput;
	};

	/**
	 * UserSettingUnderOrganization findUniqueOrThrow
	 */
	export type UserSettingUnderOrganizationFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationInclude<ExtArgs> | null;
		/**
		 * Filter, which UserSettingUnderOrganization to fetch.
		 */
		where: UserSettingUnderOrganizationWhereUniqueInput;
	};

	/**
	 * UserSettingUnderOrganization findFirst
	 */
	export type UserSettingUnderOrganizationFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationInclude<ExtArgs> | null;
		/**
		 * Filter, which UserSettingUnderOrganization to fetch.
		 */
		where?: UserSettingUnderOrganizationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of UserSettingUnderOrganizations to fetch.
		 */
		orderBy?:
			| UserSettingUnderOrganizationOrderByWithRelationInput
			| UserSettingUnderOrganizationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for UserSettingUnderOrganizations.
		 */
		cursor?: UserSettingUnderOrganizationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` UserSettingUnderOrganizations from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` UserSettingUnderOrganizations.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of UserSettingUnderOrganizations.
		 */
		distinct?:
			| UserSettingUnderOrganizationScalarFieldEnum
			| UserSettingUnderOrganizationScalarFieldEnum[];
	};

	/**
	 * UserSettingUnderOrganization findFirstOrThrow
	 */
	export type UserSettingUnderOrganizationFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationInclude<ExtArgs> | null;
		/**
		 * Filter, which UserSettingUnderOrganization to fetch.
		 */
		where?: UserSettingUnderOrganizationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of UserSettingUnderOrganizations to fetch.
		 */
		orderBy?:
			| UserSettingUnderOrganizationOrderByWithRelationInput
			| UserSettingUnderOrganizationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for UserSettingUnderOrganizations.
		 */
		cursor?: UserSettingUnderOrganizationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` UserSettingUnderOrganizations from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` UserSettingUnderOrganizations.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of UserSettingUnderOrganizations.
		 */
		distinct?:
			| UserSettingUnderOrganizationScalarFieldEnum
			| UserSettingUnderOrganizationScalarFieldEnum[];
	};

	/**
	 * UserSettingUnderOrganization findMany
	 */
	export type UserSettingUnderOrganizationFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationInclude<ExtArgs> | null;
		/**
		 * Filter, which UserSettingUnderOrganizations to fetch.
		 */
		where?: UserSettingUnderOrganizationWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of UserSettingUnderOrganizations to fetch.
		 */
		orderBy?:
			| UserSettingUnderOrganizationOrderByWithRelationInput
			| UserSettingUnderOrganizationOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing UserSettingUnderOrganizations.
		 */
		cursor?: UserSettingUnderOrganizationWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` UserSettingUnderOrganizations from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` UserSettingUnderOrganizations.
		 */
		skip?: number;
		distinct?:
			| UserSettingUnderOrganizationScalarFieldEnum
			| UserSettingUnderOrganizationScalarFieldEnum[];
	};

	/**
	 * UserSettingUnderOrganization create
	 */
	export type UserSettingUnderOrganizationCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationInclude<ExtArgs> | null;
		/**
		 * The data needed to create a UserSettingUnderOrganization.
		 */
		data: XOR<
			UserSettingUnderOrganizationCreateInput,
			UserSettingUnderOrganizationUncheckedCreateInput
		>;
	};

	/**
	 * UserSettingUnderOrganization createMany
	 */
	export type UserSettingUnderOrganizationCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many UserSettingUnderOrganizations.
		 */
		data:
			| UserSettingUnderOrganizationCreateManyInput
			| UserSettingUnderOrganizationCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * UserSettingUnderOrganization createManyAndReturn
	 */
	export type UserSettingUnderOrganizationCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * The data used to create many UserSettingUnderOrganizations.
		 */
		data:
			| UserSettingUnderOrganizationCreateManyInput
			| UserSettingUnderOrganizationCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * UserSettingUnderOrganization update
	 */
	export type UserSettingUnderOrganizationUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationInclude<ExtArgs> | null;
		/**
		 * The data needed to update a UserSettingUnderOrganization.
		 */
		data: XOR<
			UserSettingUnderOrganizationUpdateInput,
			UserSettingUnderOrganizationUncheckedUpdateInput
		>;
		/**
		 * Choose, which UserSettingUnderOrganization to update.
		 */
		where: UserSettingUnderOrganizationWhereUniqueInput;
	};

	/**
	 * UserSettingUnderOrganization updateMany
	 */
	export type UserSettingUnderOrganizationUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update UserSettingUnderOrganizations.
		 */
		data: XOR<
			UserSettingUnderOrganizationUpdateManyMutationInput,
			UserSettingUnderOrganizationUncheckedUpdateManyInput
		>;
		/**
		 * Filter which UserSettingUnderOrganizations to update
		 */
		where?: UserSettingUnderOrganizationWhereInput;
		/**
		 * Limit how many UserSettingUnderOrganizations to update.
		 */
		limit?: number;
	};

	/**
	 * UserSettingUnderOrganization updateManyAndReturn
	 */
	export type UserSettingUnderOrganizationUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * The data used to update UserSettingUnderOrganizations.
		 */
		data: XOR<
			UserSettingUnderOrganizationUpdateManyMutationInput,
			UserSettingUnderOrganizationUncheckedUpdateManyInput
		>;
		/**
		 * Filter which UserSettingUnderOrganizations to update
		 */
		where?: UserSettingUnderOrganizationWhereInput;
		/**
		 * Limit how many UserSettingUnderOrganizations to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * UserSettingUnderOrganization upsert
	 */
	export type UserSettingUnderOrganizationUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationInclude<ExtArgs> | null;
		/**
		 * The filter to search for the UserSettingUnderOrganization to update in case it exists.
		 */
		where: UserSettingUnderOrganizationWhereUniqueInput;
		/**
		 * In case the UserSettingUnderOrganization found by the `where` argument doesn't exist, create a new UserSettingUnderOrganization with this data.
		 */
		create: XOR<
			UserSettingUnderOrganizationCreateInput,
			UserSettingUnderOrganizationUncheckedCreateInput
		>;
		/**
		 * In case the UserSettingUnderOrganization was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<
			UserSettingUnderOrganizationUpdateInput,
			UserSettingUnderOrganizationUncheckedUpdateInput
		>;
	};

	/**
	 * UserSettingUnderOrganization delete
	 */
	export type UserSettingUnderOrganizationDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationInclude<ExtArgs> | null;
		/**
		 * Filter which UserSettingUnderOrganization to delete.
		 */
		where: UserSettingUnderOrganizationWhereUniqueInput;
	};

	/**
	 * UserSettingUnderOrganization deleteMany
	 */
	export type UserSettingUnderOrganizationDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which UserSettingUnderOrganizations to delete
		 */
		where?: UserSettingUnderOrganizationWhereInput;
		/**
		 * Limit how many UserSettingUnderOrganizations to delete.
		 */
		limit?: number;
	};

	/**
	 * UserSettingUnderOrganization without action
	 */
	export type UserSettingUnderOrganizationDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserSettingUnderOrganization
		 */
		select?: UserSettingUnderOrganizationSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserSettingUnderOrganization
		 */
		omit?: UserSettingUnderOrganizationOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserSettingUnderOrganizationInclude<ExtArgs> | null;
	};

	/**
	 * Model UserNotificationSetting
	 */

	export type AggregateUserNotificationSetting = {
		_count: UserNotificationSettingCountAggregateOutputType | null;
		_min: UserNotificationSettingMinAggregateOutputType | null;
		_max: UserNotificationSettingMaxAggregateOutputType | null;
	};

	export type UserNotificationSettingMinAggregateOutputType = {
		newJobEmailNotifications: boolean | null;
		aiPrompt: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		userId: string | null;
	};

	export type UserNotificationSettingMaxAggregateOutputType = {
		newJobEmailNotifications: boolean | null;
		aiPrompt: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		userId: string | null;
	};

	export type UserNotificationSettingCountAggregateOutputType = {
		newJobEmailNotifications: number;
		aiPrompt: number;
		createdAt: number;
		updatedAt: number;
		userId: number;
		_all: number;
	};

	export type UserNotificationSettingMinAggregateInputType = {
		newJobEmailNotifications?: true;
		aiPrompt?: true;
		createdAt?: true;
		updatedAt?: true;
		userId?: true;
	};

	export type UserNotificationSettingMaxAggregateInputType = {
		newJobEmailNotifications?: true;
		aiPrompt?: true;
		createdAt?: true;
		updatedAt?: true;
		userId?: true;
	};

	export type UserNotificationSettingCountAggregateInputType = {
		newJobEmailNotifications?: true;
		aiPrompt?: true;
		createdAt?: true;
		updatedAt?: true;
		userId?: true;
		_all?: true;
	};

	export type UserNotificationSettingAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which UserNotificationSetting to aggregate.
		 */
		where?: UserNotificationSettingWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of UserNotificationSettings to fetch.
		 */
		orderBy?:
			| UserNotificationSettingOrderByWithRelationInput
			| UserNotificationSettingOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: UserNotificationSettingWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` UserNotificationSettings from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` UserNotificationSettings.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned UserNotificationSettings
		 **/
		_count?: true | UserNotificationSettingCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: UserNotificationSettingMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: UserNotificationSettingMaxAggregateInputType;
	};

	export type GetUserNotificationSettingAggregateType<
		T extends UserNotificationSettingAggregateArgs,
	> = {
		[P in keyof T & keyof AggregateUserNotificationSetting]: P extends
			| "_count"
			| "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateUserNotificationSetting[P]>
			: GetScalarType<T[P], AggregateUserNotificationSetting[P]>;
	};

	export type UserNotificationSettingGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: UserNotificationSettingWhereInput;
		orderBy?:
			| UserNotificationSettingOrderByWithAggregationInput
			| UserNotificationSettingOrderByWithAggregationInput[];
		by:
			| UserNotificationSettingScalarFieldEnum[]
			| UserNotificationSettingScalarFieldEnum;
		having?: UserNotificationSettingScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: UserNotificationSettingCountAggregateInputType | true;
		_min?: UserNotificationSettingMinAggregateInputType;
		_max?: UserNotificationSettingMaxAggregateInputType;
	};

	export type UserNotificationSettingGroupByOutputType = {
		newJobEmailNotifications: boolean;
		aiPrompt: string | null;
		createdAt: Date;
		updatedAt: Date;
		userId: string;
		_count: UserNotificationSettingCountAggregateOutputType | null;
		_min: UserNotificationSettingMinAggregateOutputType | null;
		_max: UserNotificationSettingMaxAggregateOutputType | null;
	};

	type GetUserNotificationSettingGroupByPayload<
		T extends UserNotificationSettingGroupByArgs,
	> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<UserNotificationSettingGroupByOutputType, T["by"]> & {
				[P in keyof T &
					keyof UserNotificationSettingGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], UserNotificationSettingGroupByOutputType[P]>
					: GetScalarType<T[P], UserNotificationSettingGroupByOutputType[P]>;
			}
		>
	>;

	export type UserNotificationSettingSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			newJobEmailNotifications?: boolean;
			aiPrompt?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			userId?: boolean;
			user?: boolean | UserDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["userNotificationSetting"]
	>;

	export type UserNotificationSettingSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			newJobEmailNotifications?: boolean;
			aiPrompt?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			userId?: boolean;
			user?: boolean | UserDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["userNotificationSetting"]
	>;

	export type UserNotificationSettingSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			newJobEmailNotifications?: boolean;
			aiPrompt?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			userId?: boolean;
			user?: boolean | UserDefaultArgs<ExtArgs>;
		},
		ExtArgs["result"]["userNotificationSetting"]
	>;

	export type UserNotificationSettingSelectScalar = {
		newJobEmailNotifications?: boolean;
		aiPrompt?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		userId?: boolean;
	};

	export type UserNotificationSettingOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| "newJobEmailNotifications"
		| "aiPrompt"
		| "createdAt"
		| "updatedAt"
		| "userId",
		ExtArgs["result"]["userNotificationSetting"]
	>;
	export type UserNotificationSettingInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>;
	};
	export type UserNotificationSettingIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>;
	};
	export type UserNotificationSettingIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | UserDefaultArgs<ExtArgs>;
	};

	export type $UserNotificationSettingPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "UserNotificationSetting";
		objects: {
			user: Prisma.$UserPayload<ExtArgs>;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				newJobEmailNotifications: boolean;
				aiPrompt: string | null;
				createdAt: Date;
				updatedAt: Date;
				userId: string;
			},
			ExtArgs["result"]["userNotificationSetting"]
		>;
		composites: {};
	};

	type UserNotificationSettingGetPayload<
		S extends boolean | null | undefined | UserNotificationSettingDefaultArgs,
	> = $Result.GetResult<Prisma.$UserNotificationSettingPayload, S>;

	type UserNotificationSettingCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		UserNotificationSettingFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: UserNotificationSettingCountAggregateInputType | true;
	};

	export interface UserNotificationSettingDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["UserNotificationSetting"];
			meta: { name: "UserNotificationSetting" };
		};
		/**
		 * Find zero or one UserNotificationSetting that matches the filter.
		 * @param {UserNotificationSettingFindUniqueArgs} args - Arguments to find a UserNotificationSetting
		 * @example
		 * // Get one UserNotificationSetting
		 * const userNotificationSetting = await prisma.userNotificationSetting.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends UserNotificationSettingFindUniqueArgs>(
			args: SelectSubset<T, UserNotificationSettingFindUniqueArgs<ExtArgs>>,
		): Prisma__UserNotificationSettingClient<
			$Result.GetResult<
				Prisma.$UserNotificationSettingPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one UserNotificationSetting that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {UserNotificationSettingFindUniqueOrThrowArgs} args - Arguments to find a UserNotificationSetting
		 * @example
		 * // Get one UserNotificationSetting
		 * const userNotificationSetting = await prisma.userNotificationSetting.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends UserNotificationSettingFindUniqueOrThrowArgs>(
			args: SelectSubset<
				T,
				UserNotificationSettingFindUniqueOrThrowArgs<ExtArgs>
			>,
		): Prisma__UserNotificationSettingClient<
			$Result.GetResult<
				Prisma.$UserNotificationSettingPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first UserNotificationSetting that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserNotificationSettingFindFirstArgs} args - Arguments to find a UserNotificationSetting
		 * @example
		 * // Get one UserNotificationSetting
		 * const userNotificationSetting = await prisma.userNotificationSetting.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends UserNotificationSettingFindFirstArgs>(
			args?: SelectSubset<T, UserNotificationSettingFindFirstArgs<ExtArgs>>,
		): Prisma__UserNotificationSettingClient<
			$Result.GetResult<
				Prisma.$UserNotificationSettingPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first UserNotificationSetting that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserNotificationSettingFindFirstOrThrowArgs} args - Arguments to find a UserNotificationSetting
		 * @example
		 * // Get one UserNotificationSetting
		 * const userNotificationSetting = await prisma.userNotificationSetting.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends UserNotificationSettingFindFirstOrThrowArgs>(
			args?: SelectSubset<
				T,
				UserNotificationSettingFindFirstOrThrowArgs<ExtArgs>
			>,
		): Prisma__UserNotificationSettingClient<
			$Result.GetResult<
				Prisma.$UserNotificationSettingPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more UserNotificationSettings that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserNotificationSettingFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all UserNotificationSettings
		 * const userNotificationSettings = await prisma.userNotificationSetting.findMany()
		 *
		 * // Get first 10 UserNotificationSettings
		 * const userNotificationSettings = await prisma.userNotificationSetting.findMany({ take: 10 })
		 *
		 * // Only select the `newJobEmailNotifications`
		 * const userNotificationSettingWithNewJobEmailNotificationsOnly = await prisma.userNotificationSetting.findMany({ select: { newJobEmailNotifications: true } })
		 *
		 */
		findMany<T extends UserNotificationSettingFindManyArgs>(
			args?: SelectSubset<T, UserNotificationSettingFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserNotificationSettingPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a UserNotificationSetting.
		 * @param {UserNotificationSettingCreateArgs} args - Arguments to create a UserNotificationSetting.
		 * @example
		 * // Create one UserNotificationSetting
		 * const UserNotificationSetting = await prisma.userNotificationSetting.create({
		 *   data: {
		 *     // ... data to create a UserNotificationSetting
		 *   }
		 * })
		 *
		 */
		create<T extends UserNotificationSettingCreateArgs>(
			args: SelectSubset<T, UserNotificationSettingCreateArgs<ExtArgs>>,
		): Prisma__UserNotificationSettingClient<
			$Result.GetResult<
				Prisma.$UserNotificationSettingPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many UserNotificationSettings.
		 * @param {UserNotificationSettingCreateManyArgs} args - Arguments to create many UserNotificationSettings.
		 * @example
		 * // Create many UserNotificationSettings
		 * const userNotificationSetting = await prisma.userNotificationSetting.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends UserNotificationSettingCreateManyArgs>(
			args?: SelectSubset<T, UserNotificationSettingCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many UserNotificationSettings and returns the data saved in the database.
		 * @param {UserNotificationSettingCreateManyAndReturnArgs} args - Arguments to create many UserNotificationSettings.
		 * @example
		 * // Create many UserNotificationSettings
		 * const userNotificationSetting = await prisma.userNotificationSetting.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many UserNotificationSettings and only return the `newJobEmailNotifications`
		 * const userNotificationSettingWithNewJobEmailNotificationsOnly = await prisma.userNotificationSetting.createManyAndReturn({
		 *   select: { newJobEmailNotifications: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<
			T extends UserNotificationSettingCreateManyAndReturnArgs,
		>(
			args?: SelectSubset<
				T,
				UserNotificationSettingCreateManyAndReturnArgs<ExtArgs>
			>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserNotificationSettingPayload<ExtArgs>,
				T,
				"createManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a UserNotificationSetting.
		 * @param {UserNotificationSettingDeleteArgs} args - Arguments to delete one UserNotificationSetting.
		 * @example
		 * // Delete one UserNotificationSetting
		 * const UserNotificationSetting = await prisma.userNotificationSetting.delete({
		 *   where: {
		 *     // ... filter to delete one UserNotificationSetting
		 *   }
		 * })
		 *
		 */
		delete<T extends UserNotificationSettingDeleteArgs>(
			args: SelectSubset<T, UserNotificationSettingDeleteArgs<ExtArgs>>,
		): Prisma__UserNotificationSettingClient<
			$Result.GetResult<
				Prisma.$UserNotificationSettingPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one UserNotificationSetting.
		 * @param {UserNotificationSettingUpdateArgs} args - Arguments to update one UserNotificationSetting.
		 * @example
		 * // Update one UserNotificationSetting
		 * const userNotificationSetting = await prisma.userNotificationSetting.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends UserNotificationSettingUpdateArgs>(
			args: SelectSubset<T, UserNotificationSettingUpdateArgs<ExtArgs>>,
		): Prisma__UserNotificationSettingClient<
			$Result.GetResult<
				Prisma.$UserNotificationSettingPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more UserNotificationSettings.
		 * @param {UserNotificationSettingDeleteManyArgs} args - Arguments to filter UserNotificationSettings to delete.
		 * @example
		 * // Delete a few UserNotificationSettings
		 * const { count } = await prisma.userNotificationSetting.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends UserNotificationSettingDeleteManyArgs>(
			args?: SelectSubset<T, UserNotificationSettingDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more UserNotificationSettings.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserNotificationSettingUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many UserNotificationSettings
		 * const userNotificationSetting = await prisma.userNotificationSetting.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends UserNotificationSettingUpdateManyArgs>(
			args: SelectSubset<T, UserNotificationSettingUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more UserNotificationSettings and returns the data updated in the database.
		 * @param {UserNotificationSettingUpdateManyAndReturnArgs} args - Arguments to update many UserNotificationSettings.
		 * @example
		 * // Update many UserNotificationSettings
		 * const userNotificationSetting = await prisma.userNotificationSetting.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more UserNotificationSettings and only return the `newJobEmailNotifications`
		 * const userNotificationSettingWithNewJobEmailNotificationsOnly = await prisma.userNotificationSetting.updateManyAndReturn({
		 *   select: { newJobEmailNotifications: true },
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
		updateManyAndReturn<
			T extends UserNotificationSettingUpdateManyAndReturnArgs,
		>(
			args: SelectSubset<
				T,
				UserNotificationSettingUpdateManyAndReturnArgs<ExtArgs>
			>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserNotificationSettingPayload<ExtArgs>,
				T,
				"updateManyAndReturn",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one UserNotificationSetting.
		 * @param {UserNotificationSettingUpsertArgs} args - Arguments to update or create a UserNotificationSetting.
		 * @example
		 * // Update or create a UserNotificationSetting
		 * const userNotificationSetting = await prisma.userNotificationSetting.upsert({
		 *   create: {
		 *     // ... data to create a UserNotificationSetting
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the UserNotificationSetting we want to update
		 *   }
		 * })
		 */
		upsert<T extends UserNotificationSettingUpsertArgs>(
			args: SelectSubset<T, UserNotificationSettingUpsertArgs<ExtArgs>>,
		): Prisma__UserNotificationSettingClient<
			$Result.GetResult<
				Prisma.$UserNotificationSettingPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of UserNotificationSettings.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserNotificationSettingCountArgs} args - Arguments to filter UserNotificationSettings to count.
		 * @example
		 * // Count the number of UserNotificationSettings
		 * const count = await prisma.userNotificationSetting.count({
		 *   where: {
		 *     // ... the filter for the UserNotificationSettings we want to count
		 *   }
		 * })
		 **/
		count<T extends UserNotificationSettingCountArgs>(
			args?: Subset<T, UserNotificationSettingCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							UserNotificationSettingCountAggregateOutputType
						>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a UserNotificationSetting.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserNotificationSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends UserNotificationSettingAggregateArgs>(
			args: Subset<T, UserNotificationSettingAggregateArgs>,
		): Prisma.PrismaPromise<GetUserNotificationSettingAggregateType<T>>;

		/**
		 * Group by UserNotificationSetting.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserNotificationSettingGroupByArgs} args - Group by arguments.
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
			T extends UserNotificationSettingGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: UserNotificationSettingGroupByArgs["orderBy"] }
				: { orderBy?: UserNotificationSettingGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<
				T,
				UserNotificationSettingGroupByArgs,
				OrderByArg
			> &
				InputErrors,
		): {} extends InputErrors
			? GetUserNotificationSettingGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the UserNotificationSetting model
		 */
		readonly fields: UserNotificationSettingFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for UserNotificationSetting.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__UserNotificationSettingClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		user<T extends UserDefaultArgs<ExtArgs> = {}>(
			args?: Subset<T, UserDefaultArgs<ExtArgs>>,
		): Prisma__UserClient<
			| $Result.GetResult<
					Prisma.$UserPayload<ExtArgs>,
					T,
					"findUniqueOrThrow",
					GlobalOmitOptions
			  >
			| Null,
			Null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the UserNotificationSetting model
	 */
	interface UserNotificationSettingFieldRefs {
		readonly newJobEmailNotifications: FieldRef<
			"UserNotificationSetting",
			"Boolean"
		>;
		readonly aiPrompt: FieldRef<"UserNotificationSetting", "String">;
		readonly createdAt: FieldRef<"UserNotificationSetting", "DateTime">;
		readonly updatedAt: FieldRef<"UserNotificationSetting", "DateTime">;
		readonly userId: FieldRef<"UserNotificationSetting", "String">;
	}

	// Custom InputTypes
	/**
	 * UserNotificationSetting findUnique
	 */
	export type UserNotificationSettingFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingInclude<ExtArgs> | null;
		/**
		 * Filter, which UserNotificationSetting to fetch.
		 */
		where: UserNotificationSettingWhereUniqueInput;
	};

	/**
	 * UserNotificationSetting findUniqueOrThrow
	 */
	export type UserNotificationSettingFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingInclude<ExtArgs> | null;
		/**
		 * Filter, which UserNotificationSetting to fetch.
		 */
		where: UserNotificationSettingWhereUniqueInput;
	};

	/**
	 * UserNotificationSetting findFirst
	 */
	export type UserNotificationSettingFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingInclude<ExtArgs> | null;
		/**
		 * Filter, which UserNotificationSetting to fetch.
		 */
		where?: UserNotificationSettingWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of UserNotificationSettings to fetch.
		 */
		orderBy?:
			| UserNotificationSettingOrderByWithRelationInput
			| UserNotificationSettingOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for UserNotificationSettings.
		 */
		cursor?: UserNotificationSettingWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` UserNotificationSettings from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` UserNotificationSettings.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of UserNotificationSettings.
		 */
		distinct?:
			| UserNotificationSettingScalarFieldEnum
			| UserNotificationSettingScalarFieldEnum[];
	};

	/**
	 * UserNotificationSetting findFirstOrThrow
	 */
	export type UserNotificationSettingFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingInclude<ExtArgs> | null;
		/**
		 * Filter, which UserNotificationSetting to fetch.
		 */
		where?: UserNotificationSettingWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of UserNotificationSettings to fetch.
		 */
		orderBy?:
			| UserNotificationSettingOrderByWithRelationInput
			| UserNotificationSettingOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for UserNotificationSettings.
		 */
		cursor?: UserNotificationSettingWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` UserNotificationSettings from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` UserNotificationSettings.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of UserNotificationSettings.
		 */
		distinct?:
			| UserNotificationSettingScalarFieldEnum
			| UserNotificationSettingScalarFieldEnum[];
	};

	/**
	 * UserNotificationSetting findMany
	 */
	export type UserNotificationSettingFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingInclude<ExtArgs> | null;
		/**
		 * Filter, which UserNotificationSettings to fetch.
		 */
		where?: UserNotificationSettingWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of UserNotificationSettings to fetch.
		 */
		orderBy?:
			| UserNotificationSettingOrderByWithRelationInput
			| UserNotificationSettingOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing UserNotificationSettings.
		 */
		cursor?: UserNotificationSettingWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` UserNotificationSettings from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` UserNotificationSettings.
		 */
		skip?: number;
		distinct?:
			| UserNotificationSettingScalarFieldEnum
			| UserNotificationSettingScalarFieldEnum[];
	};

	/**
	 * UserNotificationSetting create
	 */
	export type UserNotificationSettingCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingInclude<ExtArgs> | null;
		/**
		 * The data needed to create a UserNotificationSetting.
		 */
		data: XOR<
			UserNotificationSettingCreateInput,
			UserNotificationSettingUncheckedCreateInput
		>;
	};

	/**
	 * UserNotificationSetting createMany
	 */
	export type UserNotificationSettingCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many UserNotificationSettings.
		 */
		data:
			| UserNotificationSettingCreateManyInput
			| UserNotificationSettingCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * UserNotificationSetting createManyAndReturn
	 */
	export type UserNotificationSettingCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * The data used to create many UserNotificationSettings.
		 */
		data:
			| UserNotificationSettingCreateManyInput
			| UserNotificationSettingCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * UserNotificationSetting update
	 */
	export type UserNotificationSettingUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingInclude<ExtArgs> | null;
		/**
		 * The data needed to update a UserNotificationSetting.
		 */
		data: XOR<
			UserNotificationSettingUpdateInput,
			UserNotificationSettingUncheckedUpdateInput
		>;
		/**
		 * Choose, which UserNotificationSetting to update.
		 */
		where: UserNotificationSettingWhereUniqueInput;
	};

	/**
	 * UserNotificationSetting updateMany
	 */
	export type UserNotificationSettingUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update UserNotificationSettings.
		 */
		data: XOR<
			UserNotificationSettingUpdateManyMutationInput,
			UserNotificationSettingUncheckedUpdateManyInput
		>;
		/**
		 * Filter which UserNotificationSettings to update
		 */
		where?: UserNotificationSettingWhereInput;
		/**
		 * Limit how many UserNotificationSettings to update.
		 */
		limit?: number;
	};

	/**
	 * UserNotificationSetting updateManyAndReturn
	 */
	export type UserNotificationSettingUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * The data used to update UserNotificationSettings.
		 */
		data: XOR<
			UserNotificationSettingUpdateManyMutationInput,
			UserNotificationSettingUncheckedUpdateManyInput
		>;
		/**
		 * Filter which UserNotificationSettings to update
		 */
		where?: UserNotificationSettingWhereInput;
		/**
		 * Limit how many UserNotificationSettings to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * UserNotificationSetting upsert
	 */
	export type UserNotificationSettingUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingInclude<ExtArgs> | null;
		/**
		 * The filter to search for the UserNotificationSetting to update in case it exists.
		 */
		where: UserNotificationSettingWhereUniqueInput;
		/**
		 * In case the UserNotificationSetting found by the `where` argument doesn't exist, create a new UserNotificationSetting with this data.
		 */
		create: XOR<
			UserNotificationSettingCreateInput,
			UserNotificationSettingUncheckedCreateInput
		>;
		/**
		 * In case the UserNotificationSetting was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<
			UserNotificationSettingUpdateInput,
			UserNotificationSettingUncheckedUpdateInput
		>;
	};

	/**
	 * UserNotificationSetting delete
	 */
	export type UserNotificationSettingDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingInclude<ExtArgs> | null;
		/**
		 * Filter which UserNotificationSetting to delete.
		 */
		where: UserNotificationSettingWhereUniqueInput;
	};

	/**
	 * UserNotificationSetting deleteMany
	 */
	export type UserNotificationSettingDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which UserNotificationSettings to delete
		 */
		where?: UserNotificationSettingWhereInput;
		/**
		 * Limit how many UserNotificationSettings to delete.
		 */
		limit?: number;
	};

	/**
	 * UserNotificationSetting without action
	 */
	export type UserNotificationSettingDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserNotificationSetting
		 */
		select?: UserNotificationSettingSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the UserNotificationSetting
		 */
		omit?: UserNotificationSettingOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserNotificationSettingInclude<ExtArgs> | null;
	};

	/**
	 * Enums
	 */

	export const TransactionIsolationLevel: {
		ReadUncommitted: "ReadUncommitted";
		ReadCommitted: "ReadCommitted";
		RepeatableRead: "RepeatableRead";
		Serializable: "Serializable";
	};

	export type TransactionIsolationLevel =
		(typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

	export const UserScalarFieldEnum: {
		id: "id";
		name: "name";
		email: "email";
		imageUrl: "imageUrl";
		createdAt: "createdAt";
		updatedAt: "updatedAt";
	};

	export type UserScalarFieldEnum =
		(typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

	export const OrganizationScalarFieldEnum: {
		id: "id";
		name: "name";
		imageUrl: "imageUrl";
		createdAt: "createdAt";
		updatedAt: "updatedAt";
	};

	export type OrganizationScalarFieldEnum =
		(typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

	export const JobListingScalarFieldEnum: {
		id: "id";
		title: "title";
		description: "description";
		wage: "wage";
		wageInterval: "wageInterval";
		stateAbbreviation: "stateAbbreviation";
		city: "city";
		isFeatured: "isFeatured";
		locationRequirement: "locationRequirement";
		experienceLevel: "experienceLevel";
		status: "status";
		type: "type";
		postedAt: "postedAt";
		createdAt: "createdAt";
		updatedAt: "updatedAt";
		organizationId: "organizationId";
	};

	export type JobListingScalarFieldEnum =
		(typeof JobListingScalarFieldEnum)[keyof typeof JobListingScalarFieldEnum];

	export const ApplicationScalarFieldEnum: {
		id: "id";
		coverLetter: "coverLetter";
		rating: "rating";
		stage: "stage";
		createdAt: "createdAt";
		updatedAt: "updatedAt";
		jobListingId: "jobListingId";
		userId: "userId";
	};

	export type ApplicationScalarFieldEnum =
		(typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum];

	export const ResumeScalarFieldEnum: {
		fileUrl: "fileUrl";
		fileKey: "fileKey";
		version: "version";
		aiSummary: "aiSummary";
		createdAt: "createdAt";
		updatedAt: "updatedAt";
		userId: "userId";
	};

	export type ResumeScalarFieldEnum =
		(typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum];

	export const UserSettingUnderOrganizationScalarFieldEnum: {
		newApplicationEmailNotifications: "newApplicationEmailNotifications";
		minimumRating: "minimumRating";
		createdAt: "createdAt";
		updatedAt: "updatedAt";
		userId: "userId";
		organizationId: "organizationId";
	};

	export type UserSettingUnderOrganizationScalarFieldEnum =
		(typeof UserSettingUnderOrganizationScalarFieldEnum)[keyof typeof UserSettingUnderOrganizationScalarFieldEnum];

	export const UserNotificationSettingScalarFieldEnum: {
		newJobEmailNotifications: "newJobEmailNotifications";
		aiPrompt: "aiPrompt";
		createdAt: "createdAt";
		updatedAt: "updatedAt";
		userId: "userId";
	};

	export type UserNotificationSettingScalarFieldEnum =
		(typeof UserNotificationSettingScalarFieldEnum)[keyof typeof UserNotificationSettingScalarFieldEnum];

	export const SortOrder: {
		asc: "asc";
		desc: "desc";
	};

	export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

	export const QueryMode: {
		default: "default";
		insensitive: "insensitive";
	};

	export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

	export const NullsOrder: {
		first: "first";
		last: "last";
	};

	export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

	/**
	 * Field references
	 */

	/**
	 * Reference to a field of type 'String'
	 */
	export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"String"
	>;

	/**
	 * Reference to a field of type 'String[]'
	 */
	export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"String[]"
	>;

	/**
	 * Reference to a field of type 'DateTime'
	 */
	export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"DateTime"
	>;

	/**
	 * Reference to a field of type 'DateTime[]'
	 */
	export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"DateTime[]"
	>;

	/**
	 * Reference to a field of type 'Int'
	 */
	export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Int"
	>;

	/**
	 * Reference to a field of type 'Int[]'
	 */
	export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Int[]"
	>;

	/**
	 * Reference to a field of type 'WageInterval'
	 */
	export type EnumWageIntervalFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"WageInterval"
	>;

	/**
	 * Reference to a field of type 'WageInterval[]'
	 */
	export type ListEnumWageIntervalFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "WageInterval[]">;

	/**
	 * Reference to a field of type 'Boolean'
	 */
	export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Boolean"
	>;

	/**
	 * Reference to a field of type 'LocationRequirement'
	 */
	export type EnumLocationRequirementFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "LocationRequirement">;

	/**
	 * Reference to a field of type 'LocationRequirement[]'
	 */
	export type ListEnumLocationRequirementFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "LocationRequirement[]">;

	/**
	 * Reference to a field of type 'ExperienceLevel'
	 */
	export type EnumExperienceLevelFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "ExperienceLevel">;

	/**
	 * Reference to a field of type 'ExperienceLevel[]'
	 */
	export type ListEnumExperienceLevelFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "ExperienceLevel[]">;

	/**
	 * Reference to a field of type 'JobListingStatus'
	 */
	export type EnumJobListingStatusFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "JobListingStatus">;

	/**
	 * Reference to a field of type 'JobListingStatus[]'
	 */
	export type ListEnumJobListingStatusFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "JobListingStatus[]">;

	/**
	 * Reference to a field of type 'JobListingType'
	 */
	export type EnumJobListingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"JobListingType"
	>;

	/**
	 * Reference to a field of type 'JobListingType[]'
	 */
	export type ListEnumJobListingTypeFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "JobListingType[]">;

	/**
	 * Reference to a field of type 'ApplicationStage'
	 */
	export type EnumApplicationStageFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "ApplicationStage">;

	/**
	 * Reference to a field of type 'ApplicationStage[]'
	 */
	export type ListEnumApplicationStageFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "ApplicationStage[]">;

	/**
	 * Reference to a field of type 'Float'
	 */
	export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Float"
	>;

	/**
	 * Reference to a field of type 'Float[]'
	 */
	export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Float[]"
	>;

	/**
	 * Deep Input Types
	 */

	export type UserWhereInput = {
		AND?: UserWhereInput | UserWhereInput[];
		OR?: UserWhereInput[];
		NOT?: UserWhereInput | UserWhereInput[];
		id?: StringFilter<"User"> | string;
		name?: StringFilter<"User"> | string;
		email?: StringFilter<"User"> | string;
		imageUrl?: StringFilter<"User"> | string;
		createdAt?: DateTimeFilter<"User"> | Date | string;
		updatedAt?: DateTimeFilter<"User"> | Date | string;
		notificationSetting?: XOR<
			UserNotificationSettingNullableScalarRelationFilter,
			UserNotificationSettingWhereInput
		> | null;
		resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationListRelationFilter;
		applications?: ApplicationListRelationFilter;
	};

	export type UserOrderByWithRelationInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		imageUrl?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		notificationSetting?: UserNotificationSettingOrderByWithRelationInput;
		resume?: ResumeOrderByWithRelationInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationOrderByRelationAggregateInput;
		applications?: ApplicationOrderByRelationAggregateInput;
	};

	export type UserWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			email?: string;
			AND?: UserWhereInput | UserWhereInput[];
			OR?: UserWhereInput[];
			NOT?: UserWhereInput | UserWhereInput[];
			name?: StringFilter<"User"> | string;
			imageUrl?: StringFilter<"User"> | string;
			createdAt?: DateTimeFilter<"User"> | Date | string;
			updatedAt?: DateTimeFilter<"User"> | Date | string;
			notificationSetting?: XOR<
				UserNotificationSettingNullableScalarRelationFilter,
				UserNotificationSettingWhereInput
			> | null;
			resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null;
			userSettingUnderOrganizations?: UserSettingUnderOrganizationListRelationFilter;
			applications?: ApplicationListRelationFilter;
		},
		"id" | "email"
	>;

	export type UserOrderByWithAggregationInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		imageUrl?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		_count?: UserCountOrderByAggregateInput;
		_max?: UserMaxOrderByAggregateInput;
		_min?: UserMinOrderByAggregateInput;
	};

	export type UserScalarWhereWithAggregatesInput = {
		AND?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[];
		OR?: UserScalarWhereWithAggregatesInput[];
		NOT?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"User"> | string;
		name?: StringWithAggregatesFilter<"User"> | string;
		email?: StringWithAggregatesFilter<"User"> | string;
		imageUrl?: StringWithAggregatesFilter<"User"> | string;
		createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
	};

	export type OrganizationWhereInput = {
		AND?: OrganizationWhereInput | OrganizationWhereInput[];
		OR?: OrganizationWhereInput[];
		NOT?: OrganizationWhereInput | OrganizationWhereInput[];
		id?: StringFilter<"Organization"> | string;
		name?: StringFilter<"Organization"> | string;
		imageUrl?: StringFilter<"Organization"> | string;
		createdAt?: DateTimeFilter<"Organization"> | Date | string;
		updatedAt?: DateTimeFilter<"Organization"> | Date | string;
		jobListings?: JobListingListRelationFilter;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationListRelationFilter;
	};

	export type OrganizationOrderByWithRelationInput = {
		id?: SortOrder;
		name?: SortOrder;
		imageUrl?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		jobListings?: JobListingOrderByRelationAggregateInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationOrderByRelationAggregateInput;
	};

	export type OrganizationWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: OrganizationWhereInput | OrganizationWhereInput[];
			OR?: OrganizationWhereInput[];
			NOT?: OrganizationWhereInput | OrganizationWhereInput[];
			name?: StringFilter<"Organization"> | string;
			imageUrl?: StringFilter<"Organization"> | string;
			createdAt?: DateTimeFilter<"Organization"> | Date | string;
			updatedAt?: DateTimeFilter<"Organization"> | Date | string;
			jobListings?: JobListingListRelationFilter;
			userSettingUnderOrganizations?: UserSettingUnderOrganizationListRelationFilter;
		},
		"id"
	>;

	export type OrganizationOrderByWithAggregationInput = {
		id?: SortOrder;
		name?: SortOrder;
		imageUrl?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		_count?: OrganizationCountOrderByAggregateInput;
		_max?: OrganizationMaxOrderByAggregateInput;
		_min?: OrganizationMinOrderByAggregateInput;
	};

	export type OrganizationScalarWhereWithAggregatesInput = {
		AND?:
			| OrganizationScalarWhereWithAggregatesInput
			| OrganizationScalarWhereWithAggregatesInput[];
		OR?: OrganizationScalarWhereWithAggregatesInput[];
		NOT?:
			| OrganizationScalarWhereWithAggregatesInput
			| OrganizationScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"Organization"> | string;
		name?: StringWithAggregatesFilter<"Organization"> | string;
		imageUrl?: StringWithAggregatesFilter<"Organization"> | string;
		createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string;
	};

	export type JobListingWhereInput = {
		AND?: JobListingWhereInput | JobListingWhereInput[];
		OR?: JobListingWhereInput[];
		NOT?: JobListingWhereInput | JobListingWhereInput[];
		id?: StringFilter<"JobListing"> | string;
		title?: StringFilter<"JobListing"> | string;
		description?: StringFilter<"JobListing"> | string;
		wage?: IntNullableFilter<"JobListing"> | number | null;
		wageInterval?: EnumWageIntervalFilter<"JobListing"> | $Enums.WageInterval;
		stateAbbreviation?: StringNullableFilter<"JobListing"> | string | null;
		city?: StringNullableFilter<"JobListing"> | string | null;
		isFeatured?: BoolFilter<"JobListing"> | boolean;
		locationRequirement?:
			| EnumLocationRequirementFilter<"JobListing">
			| $Enums.LocationRequirement;
		experienceLevel?:
			| EnumExperienceLevelFilter<"JobListing">
			| $Enums.ExperienceLevel;
		status?: EnumJobListingStatusFilter<"JobListing"> | $Enums.JobListingStatus;
		type?: EnumJobListingTypeFilter<"JobListing"> | $Enums.JobListingType;
		postedAt?: DateTimeFilter<"JobListing"> | Date | string;
		createdAt?: DateTimeFilter<"JobListing"> | Date | string;
		updatedAt?: DateTimeFilter<"JobListing"> | Date | string;
		organizationId?: StringFilter<"JobListing"> | string;
		applications?: ApplicationListRelationFilter;
		organization?: XOR<
			OrganizationScalarRelationFilter,
			OrganizationWhereInput
		>;
	};

	export type JobListingOrderByWithRelationInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrder;
		wage?: SortOrderInput | SortOrder;
		wageInterval?: SortOrder;
		stateAbbreviation?: SortOrderInput | SortOrder;
		city?: SortOrderInput | SortOrder;
		isFeatured?: SortOrder;
		locationRequirement?: SortOrder;
		experienceLevel?: SortOrder;
		status?: SortOrder;
		type?: SortOrder;
		postedAt?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		organizationId?: SortOrder;
		applications?: ApplicationOrderByRelationAggregateInput;
		organization?: OrganizationOrderByWithRelationInput;
	};

	export type JobListingWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: JobListingWhereInput | JobListingWhereInput[];
			OR?: JobListingWhereInput[];
			NOT?: JobListingWhereInput | JobListingWhereInput[];
			title?: StringFilter<"JobListing"> | string;
			description?: StringFilter<"JobListing"> | string;
			wage?: IntNullableFilter<"JobListing"> | number | null;
			wageInterval?: EnumWageIntervalFilter<"JobListing"> | $Enums.WageInterval;
			stateAbbreviation?: StringNullableFilter<"JobListing"> | string | null;
			city?: StringNullableFilter<"JobListing"> | string | null;
			isFeatured?: BoolFilter<"JobListing"> | boolean;
			locationRequirement?:
				| EnumLocationRequirementFilter<"JobListing">
				| $Enums.LocationRequirement;
			experienceLevel?:
				| EnumExperienceLevelFilter<"JobListing">
				| $Enums.ExperienceLevel;
			status?:
				| EnumJobListingStatusFilter<"JobListing">
				| $Enums.JobListingStatus;
			type?: EnumJobListingTypeFilter<"JobListing"> | $Enums.JobListingType;
			postedAt?: DateTimeFilter<"JobListing"> | Date | string;
			createdAt?: DateTimeFilter<"JobListing"> | Date | string;
			updatedAt?: DateTimeFilter<"JobListing"> | Date | string;
			organizationId?: StringFilter<"JobListing"> | string;
			applications?: ApplicationListRelationFilter;
			organization?: XOR<
				OrganizationScalarRelationFilter,
				OrganizationWhereInput
			>;
		},
		"id"
	>;

	export type JobListingOrderByWithAggregationInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrder;
		wage?: SortOrderInput | SortOrder;
		wageInterval?: SortOrder;
		stateAbbreviation?: SortOrderInput | SortOrder;
		city?: SortOrderInput | SortOrder;
		isFeatured?: SortOrder;
		locationRequirement?: SortOrder;
		experienceLevel?: SortOrder;
		status?: SortOrder;
		type?: SortOrder;
		postedAt?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		organizationId?: SortOrder;
		_count?: JobListingCountOrderByAggregateInput;
		_avg?: JobListingAvgOrderByAggregateInput;
		_max?: JobListingMaxOrderByAggregateInput;
		_min?: JobListingMinOrderByAggregateInput;
		_sum?: JobListingSumOrderByAggregateInput;
	};

	export type JobListingScalarWhereWithAggregatesInput = {
		AND?:
			| JobListingScalarWhereWithAggregatesInput
			| JobListingScalarWhereWithAggregatesInput[];
		OR?: JobListingScalarWhereWithAggregatesInput[];
		NOT?:
			| JobListingScalarWhereWithAggregatesInput
			| JobListingScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"JobListing"> | string;
		title?: StringWithAggregatesFilter<"JobListing"> | string;
		description?: StringWithAggregatesFilter<"JobListing"> | string;
		wage?: IntNullableWithAggregatesFilter<"JobListing"> | number | null;
		wageInterval?:
			| EnumWageIntervalWithAggregatesFilter<"JobListing">
			| $Enums.WageInterval;
		stateAbbreviation?:
			| StringNullableWithAggregatesFilter<"JobListing">
			| string
			| null;
		city?: StringNullableWithAggregatesFilter<"JobListing"> | string | null;
		isFeatured?: BoolWithAggregatesFilter<"JobListing"> | boolean;
		locationRequirement?:
			| EnumLocationRequirementWithAggregatesFilter<"JobListing">
			| $Enums.LocationRequirement;
		experienceLevel?:
			| EnumExperienceLevelWithAggregatesFilter<"JobListing">
			| $Enums.ExperienceLevel;
		status?:
			| EnumJobListingStatusWithAggregatesFilter<"JobListing">
			| $Enums.JobListingStatus;
		type?:
			| EnumJobListingTypeWithAggregatesFilter<"JobListing">
			| $Enums.JobListingType;
		postedAt?: DateTimeWithAggregatesFilter<"JobListing"> | Date | string;
		createdAt?: DateTimeWithAggregatesFilter<"JobListing"> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<"JobListing"> | Date | string;
		organizationId?: StringWithAggregatesFilter<"JobListing"> | string;
	};

	export type ApplicationWhereInput = {
		AND?: ApplicationWhereInput | ApplicationWhereInput[];
		OR?: ApplicationWhereInput[];
		NOT?: ApplicationWhereInput | ApplicationWhereInput[];
		id?: StringFilter<"Application"> | string;
		coverLetter?: StringNullableFilter<"Application"> | string | null;
		rating?: IntNullableFilter<"Application"> | number | null;
		stage?: EnumApplicationStageFilter<"Application"> | $Enums.ApplicationStage;
		createdAt?: DateTimeFilter<"Application"> | Date | string;
		updatedAt?: DateTimeFilter<"Application"> | Date | string;
		jobListingId?: StringFilter<"Application"> | string;
		userId?: StringFilter<"Application"> | string;
		jobListing?: XOR<JobListingScalarRelationFilter, JobListingWhereInput>;
		user?: XOR<UserScalarRelationFilter, UserWhereInput>;
	};

	export type ApplicationOrderByWithRelationInput = {
		id?: SortOrder;
		coverLetter?: SortOrderInput | SortOrder;
		rating?: SortOrderInput | SortOrder;
		stage?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		jobListingId?: SortOrder;
		userId?: SortOrder;
		jobListing?: JobListingOrderByWithRelationInput;
		user?: UserOrderByWithRelationInput;
	};

	export type ApplicationWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			userId_jobListingId?: ApplicationUserIdJobListingIdCompoundUniqueInput;
			AND?: ApplicationWhereInput | ApplicationWhereInput[];
			OR?: ApplicationWhereInput[];
			NOT?: ApplicationWhereInput | ApplicationWhereInput[];
			coverLetter?: StringNullableFilter<"Application"> | string | null;
			rating?: IntNullableFilter<"Application"> | number | null;
			stage?:
				| EnumApplicationStageFilter<"Application">
				| $Enums.ApplicationStage;
			createdAt?: DateTimeFilter<"Application"> | Date | string;
			updatedAt?: DateTimeFilter<"Application"> | Date | string;
			jobListingId?: StringFilter<"Application"> | string;
			userId?: StringFilter<"Application"> | string;
			jobListing?: XOR<JobListingScalarRelationFilter, JobListingWhereInput>;
			user?: XOR<UserScalarRelationFilter, UserWhereInput>;
		},
		"id" | "userId_jobListingId"
	>;

	export type ApplicationOrderByWithAggregationInput = {
		id?: SortOrder;
		coverLetter?: SortOrderInput | SortOrder;
		rating?: SortOrderInput | SortOrder;
		stage?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		jobListingId?: SortOrder;
		userId?: SortOrder;
		_count?: ApplicationCountOrderByAggregateInput;
		_avg?: ApplicationAvgOrderByAggregateInput;
		_max?: ApplicationMaxOrderByAggregateInput;
		_min?: ApplicationMinOrderByAggregateInput;
		_sum?: ApplicationSumOrderByAggregateInput;
	};

	export type ApplicationScalarWhereWithAggregatesInput = {
		AND?:
			| ApplicationScalarWhereWithAggregatesInput
			| ApplicationScalarWhereWithAggregatesInput[];
		OR?: ApplicationScalarWhereWithAggregatesInput[];
		NOT?:
			| ApplicationScalarWhereWithAggregatesInput
			| ApplicationScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"Application"> | string;
		coverLetter?:
			| StringNullableWithAggregatesFilter<"Application">
			| string
			| null;
		rating?: IntNullableWithAggregatesFilter<"Application"> | number | null;
		stage?:
			| EnumApplicationStageWithAggregatesFilter<"Application">
			| $Enums.ApplicationStage;
		createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string;
		jobListingId?: StringWithAggregatesFilter<"Application"> | string;
		userId?: StringWithAggregatesFilter<"Application"> | string;
	};

	export type ResumeWhereInput = {
		AND?: ResumeWhereInput | ResumeWhereInput[];
		OR?: ResumeWhereInput[];
		NOT?: ResumeWhereInput | ResumeWhereInput[];
		fileUrl?: StringFilter<"Resume"> | string;
		fileKey?: StringFilter<"Resume"> | string;
		version?: IntFilter<"Resume"> | number;
		aiSummary?: StringNullableFilter<"Resume"> | string | null;
		createdAt?: DateTimeFilter<"Resume"> | Date | string;
		updatedAt?: DateTimeFilter<"Resume"> | Date | string;
		userId?: StringFilter<"Resume"> | string;
		user?: XOR<UserScalarRelationFilter, UserWhereInput>;
	};

	export type ResumeOrderByWithRelationInput = {
		fileUrl?: SortOrder;
		fileKey?: SortOrder;
		version?: SortOrder;
		aiSummary?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
		user?: UserOrderByWithRelationInput;
	};

	export type ResumeWhereUniqueInput = Prisma.AtLeast<
		{
			userId?: string;
			AND?: ResumeWhereInput | ResumeWhereInput[];
			OR?: ResumeWhereInput[];
			NOT?: ResumeWhereInput | ResumeWhereInput[];
			fileUrl?: StringFilter<"Resume"> | string;
			fileKey?: StringFilter<"Resume"> | string;
			version?: IntFilter<"Resume"> | number;
			aiSummary?: StringNullableFilter<"Resume"> | string | null;
			createdAt?: DateTimeFilter<"Resume"> | Date | string;
			updatedAt?: DateTimeFilter<"Resume"> | Date | string;
			user?: XOR<UserScalarRelationFilter, UserWhereInput>;
		},
		"userId"
	>;

	export type ResumeOrderByWithAggregationInput = {
		fileUrl?: SortOrder;
		fileKey?: SortOrder;
		version?: SortOrder;
		aiSummary?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
		_count?: ResumeCountOrderByAggregateInput;
		_avg?: ResumeAvgOrderByAggregateInput;
		_max?: ResumeMaxOrderByAggregateInput;
		_min?: ResumeMinOrderByAggregateInput;
		_sum?: ResumeSumOrderByAggregateInput;
	};

	export type ResumeScalarWhereWithAggregatesInput = {
		AND?:
			| ResumeScalarWhereWithAggregatesInput
			| ResumeScalarWhereWithAggregatesInput[];
		OR?: ResumeScalarWhereWithAggregatesInput[];
		NOT?:
			| ResumeScalarWhereWithAggregatesInput
			| ResumeScalarWhereWithAggregatesInput[];
		fileUrl?: StringWithAggregatesFilter<"Resume"> | string;
		fileKey?: StringWithAggregatesFilter<"Resume"> | string;
		version?: IntWithAggregatesFilter<"Resume"> | number;
		aiSummary?: StringNullableWithAggregatesFilter<"Resume"> | string | null;
		createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string;
		userId?: StringWithAggregatesFilter<"Resume"> | string;
	};

	export type UserSettingUnderOrganizationWhereInput = {
		AND?:
			| UserSettingUnderOrganizationWhereInput
			| UserSettingUnderOrganizationWhereInput[];
		OR?: UserSettingUnderOrganizationWhereInput[];
		NOT?:
			| UserSettingUnderOrganizationWhereInput
			| UserSettingUnderOrganizationWhereInput[];
		newApplicationEmailNotifications?:
			| BoolFilter<"UserSettingUnderOrganization">
			| boolean;
		minimumRating?:
			| IntNullableFilter<"UserSettingUnderOrganization">
			| number
			| null;
		createdAt?: DateTimeFilter<"UserSettingUnderOrganization"> | Date | string;
		updatedAt?: DateTimeFilter<"UserSettingUnderOrganization"> | Date | string;
		userId?: StringFilter<"UserSettingUnderOrganization"> | string;
		organizationId?: StringFilter<"UserSettingUnderOrganization"> | string;
		user?: XOR<UserScalarRelationFilter, UserWhereInput>;
		organization?: XOR<
			OrganizationScalarRelationFilter,
			OrganizationWhereInput
		>;
	};

	export type UserSettingUnderOrganizationOrderByWithRelationInput = {
		newApplicationEmailNotifications?: SortOrder;
		minimumRating?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
		organizationId?: SortOrder;
		user?: UserOrderByWithRelationInput;
		organization?: OrganizationOrderByWithRelationInput;
	};

	export type UserSettingUnderOrganizationWhereUniqueInput = Prisma.AtLeast<
		{
			userId_organizationId?: UserSettingUnderOrganizationUserIdOrganizationIdCompoundUniqueInput;
			AND?:
				| UserSettingUnderOrganizationWhereInput
				| UserSettingUnderOrganizationWhereInput[];
			OR?: UserSettingUnderOrganizationWhereInput[];
			NOT?:
				| UserSettingUnderOrganizationWhereInput
				| UserSettingUnderOrganizationWhereInput[];
			newApplicationEmailNotifications?:
				| BoolFilter<"UserSettingUnderOrganization">
				| boolean;
			minimumRating?:
				| IntNullableFilter<"UserSettingUnderOrganization">
				| number
				| null;
			createdAt?:
				| DateTimeFilter<"UserSettingUnderOrganization">
				| Date
				| string;
			updatedAt?:
				| DateTimeFilter<"UserSettingUnderOrganization">
				| Date
				| string;
			userId?: StringFilter<"UserSettingUnderOrganization"> | string;
			organizationId?: StringFilter<"UserSettingUnderOrganization"> | string;
			user?: XOR<UserScalarRelationFilter, UserWhereInput>;
			organization?: XOR<
				OrganizationScalarRelationFilter,
				OrganizationWhereInput
			>;
		},
		"userId_organizationId"
	>;

	export type UserSettingUnderOrganizationOrderByWithAggregationInput = {
		newApplicationEmailNotifications?: SortOrder;
		minimumRating?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
		organizationId?: SortOrder;
		_count?: UserSettingUnderOrganizationCountOrderByAggregateInput;
		_avg?: UserSettingUnderOrganizationAvgOrderByAggregateInput;
		_max?: UserSettingUnderOrganizationMaxOrderByAggregateInput;
		_min?: UserSettingUnderOrganizationMinOrderByAggregateInput;
		_sum?: UserSettingUnderOrganizationSumOrderByAggregateInput;
	};

	export type UserSettingUnderOrganizationScalarWhereWithAggregatesInput = {
		AND?:
			| UserSettingUnderOrganizationScalarWhereWithAggregatesInput
			| UserSettingUnderOrganizationScalarWhereWithAggregatesInput[];
		OR?: UserSettingUnderOrganizationScalarWhereWithAggregatesInput[];
		NOT?:
			| UserSettingUnderOrganizationScalarWhereWithAggregatesInput
			| UserSettingUnderOrganizationScalarWhereWithAggregatesInput[];
		newApplicationEmailNotifications?:
			| BoolWithAggregatesFilter<"UserSettingUnderOrganization">
			| boolean;
		minimumRating?:
			| IntNullableWithAggregatesFilter<"UserSettingUnderOrganization">
			| number
			| null;
		createdAt?:
			| DateTimeWithAggregatesFilter<"UserSettingUnderOrganization">
			| Date
			| string;
		updatedAt?:
			| DateTimeWithAggregatesFilter<"UserSettingUnderOrganization">
			| Date
			| string;
		userId?:
			| StringWithAggregatesFilter<"UserSettingUnderOrganization">
			| string;
		organizationId?:
			| StringWithAggregatesFilter<"UserSettingUnderOrganization">
			| string;
	};

	export type UserNotificationSettingWhereInput = {
		AND?:
			| UserNotificationSettingWhereInput
			| UserNotificationSettingWhereInput[];
		OR?: UserNotificationSettingWhereInput[];
		NOT?:
			| UserNotificationSettingWhereInput
			| UserNotificationSettingWhereInput[];
		newJobEmailNotifications?: BoolFilter<"UserNotificationSetting"> | boolean;
		aiPrompt?: StringNullableFilter<"UserNotificationSetting"> | string | null;
		createdAt?: DateTimeFilter<"UserNotificationSetting"> | Date | string;
		updatedAt?: DateTimeFilter<"UserNotificationSetting"> | Date | string;
		userId?: StringFilter<"UserNotificationSetting"> | string;
		user?: XOR<UserScalarRelationFilter, UserWhereInput>;
	};

	export type UserNotificationSettingOrderByWithRelationInput = {
		newJobEmailNotifications?: SortOrder;
		aiPrompt?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
		user?: UserOrderByWithRelationInput;
	};

	export type UserNotificationSettingWhereUniqueInput = Prisma.AtLeast<
		{
			userId?: string;
			AND?:
				| UserNotificationSettingWhereInput
				| UserNotificationSettingWhereInput[];
			OR?: UserNotificationSettingWhereInput[];
			NOT?:
				| UserNotificationSettingWhereInput
				| UserNotificationSettingWhereInput[];
			newJobEmailNotifications?:
				| BoolFilter<"UserNotificationSetting">
				| boolean;
			aiPrompt?:
				| StringNullableFilter<"UserNotificationSetting">
				| string
				| null;
			createdAt?: DateTimeFilter<"UserNotificationSetting"> | Date | string;
			updatedAt?: DateTimeFilter<"UserNotificationSetting"> | Date | string;
			user?: XOR<UserScalarRelationFilter, UserWhereInput>;
		},
		"userId"
	>;

	export type UserNotificationSettingOrderByWithAggregationInput = {
		newJobEmailNotifications?: SortOrder;
		aiPrompt?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
		_count?: UserNotificationSettingCountOrderByAggregateInput;
		_max?: UserNotificationSettingMaxOrderByAggregateInput;
		_min?: UserNotificationSettingMinOrderByAggregateInput;
	};

	export type UserNotificationSettingScalarWhereWithAggregatesInput = {
		AND?:
			| UserNotificationSettingScalarWhereWithAggregatesInput
			| UserNotificationSettingScalarWhereWithAggregatesInput[];
		OR?: UserNotificationSettingScalarWhereWithAggregatesInput[];
		NOT?:
			| UserNotificationSettingScalarWhereWithAggregatesInput
			| UserNotificationSettingScalarWhereWithAggregatesInput[];
		newJobEmailNotifications?:
			| BoolWithAggregatesFilter<"UserNotificationSetting">
			| boolean;
		aiPrompt?:
			| StringNullableWithAggregatesFilter<"UserNotificationSetting">
			| string
			| null;
		createdAt?:
			| DateTimeWithAggregatesFilter<"UserNotificationSetting">
			| Date
			| string;
		updatedAt?:
			| DateTimeWithAggregatesFilter<"UserNotificationSetting">
			| Date
			| string;
		userId?: StringWithAggregatesFilter<"UserNotificationSetting"> | string;
	};

	export type UserCreateInput = {
		id: string;
		name: string;
		email: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		notificationSetting?: UserNotificationSettingCreateNestedOneWithoutUserInput;
		resume?: ResumeCreateNestedOneWithoutUserInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationCreateNestedManyWithoutUserInput;
		applications?: ApplicationCreateNestedManyWithoutUserInput;
	};

	export type UserUncheckedCreateInput = {
		id: string;
		name: string;
		email: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		notificationSetting?: UserNotificationSettingUncheckedCreateNestedOneWithoutUserInput;
		resume?: ResumeUncheckedCreateNestedOneWithoutUserInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUncheckedCreateNestedManyWithoutUserInput;
		applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput;
	};

	export type UserUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		notificationSetting?: UserNotificationSettingUpdateOneWithoutUserNestedInput;
		resume?: ResumeUpdateOneWithoutUserNestedInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUpdateManyWithoutUserNestedInput;
		applications?: ApplicationUpdateManyWithoutUserNestedInput;
	};

	export type UserUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		notificationSetting?: UserNotificationSettingUncheckedUpdateOneWithoutUserNestedInput;
		resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUncheckedUpdateManyWithoutUserNestedInput;
		applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput;
	};

	export type UserCreateManyInput = {
		id: string;
		name: string;
		email: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type OrganizationCreateInput = {
		id?: string;
		name: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		jobListings?: JobListingCreateNestedManyWithoutOrganizationInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationCreateNestedManyWithoutOrganizationInput;
	};

	export type OrganizationUncheckedCreateInput = {
		id?: string;
		name: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		jobListings?: JobListingUncheckedCreateNestedManyWithoutOrganizationInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUncheckedCreateNestedManyWithoutOrganizationInput;
	};

	export type OrganizationUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		jobListings?: JobListingUpdateManyWithoutOrganizationNestedInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUpdateManyWithoutOrganizationNestedInput;
	};

	export type OrganizationUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		jobListings?: JobListingUncheckedUpdateManyWithoutOrganizationNestedInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUncheckedUpdateManyWithoutOrganizationNestedInput;
	};

	export type OrganizationCreateManyInput = {
		id?: string;
		name: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type OrganizationUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type OrganizationUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type JobListingCreateInput = {
		id?: string;
		title: string;
		description: string;
		wage?: number | null;
		wageInterval?: $Enums.WageInterval;
		stateAbbreviation?: string | null;
		city?: string | null;
		isFeatured?: boolean;
		locationRequirement?: $Enums.LocationRequirement;
		experienceLevel?: $Enums.ExperienceLevel;
		status?: $Enums.JobListingStatus;
		type?: $Enums.JobListingType;
		postedAt: Date | string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		applications?: ApplicationCreateNestedManyWithoutJobListingInput;
		organization: OrganizationCreateNestedOneWithoutJobListingsInput;
	};

	export type JobListingUncheckedCreateInput = {
		id?: string;
		title: string;
		description: string;
		wage?: number | null;
		wageInterval?: $Enums.WageInterval;
		stateAbbreviation?: string | null;
		city?: string | null;
		isFeatured?: boolean;
		locationRequirement?: $Enums.LocationRequirement;
		experienceLevel?: $Enums.ExperienceLevel;
		status?: $Enums.JobListingStatus;
		type?: $Enums.JobListingType;
		postedAt: Date | string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		organizationId: string;
		applications?: ApplicationUncheckedCreateNestedManyWithoutJobListingInput;
	};

	export type JobListingUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		wage?: NullableIntFieldUpdateOperationsInput | number | null;
		wageInterval?:
			| EnumWageIntervalFieldUpdateOperationsInput
			| $Enums.WageInterval;
		stateAbbreviation?:
			| NullableStringFieldUpdateOperationsInput
			| string
			| null;
		city?: NullableStringFieldUpdateOperationsInput | string | null;
		isFeatured?: BoolFieldUpdateOperationsInput | boolean;
		locationRequirement?:
			| EnumLocationRequirementFieldUpdateOperationsInput
			| $Enums.LocationRequirement;
		experienceLevel?:
			| EnumExperienceLevelFieldUpdateOperationsInput
			| $Enums.ExperienceLevel;
		status?:
			| EnumJobListingStatusFieldUpdateOperationsInput
			| $Enums.JobListingStatus;
		type?: EnumJobListingTypeFieldUpdateOperationsInput | $Enums.JobListingType;
		postedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		applications?: ApplicationUpdateManyWithoutJobListingNestedInput;
		organization?: OrganizationUpdateOneRequiredWithoutJobListingsNestedInput;
	};

	export type JobListingUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		wage?: NullableIntFieldUpdateOperationsInput | number | null;
		wageInterval?:
			| EnumWageIntervalFieldUpdateOperationsInput
			| $Enums.WageInterval;
		stateAbbreviation?:
			| NullableStringFieldUpdateOperationsInput
			| string
			| null;
		city?: NullableStringFieldUpdateOperationsInput | string | null;
		isFeatured?: BoolFieldUpdateOperationsInput | boolean;
		locationRequirement?:
			| EnumLocationRequirementFieldUpdateOperationsInput
			| $Enums.LocationRequirement;
		experienceLevel?:
			| EnumExperienceLevelFieldUpdateOperationsInput
			| $Enums.ExperienceLevel;
		status?:
			| EnumJobListingStatusFieldUpdateOperationsInput
			| $Enums.JobListingStatus;
		type?: EnumJobListingTypeFieldUpdateOperationsInput | $Enums.JobListingType;
		postedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		organizationId?: StringFieldUpdateOperationsInput | string;
		applications?: ApplicationUncheckedUpdateManyWithoutJobListingNestedInput;
	};

	export type JobListingCreateManyInput = {
		id?: string;
		title: string;
		description: string;
		wage?: number | null;
		wageInterval?: $Enums.WageInterval;
		stateAbbreviation?: string | null;
		city?: string | null;
		isFeatured?: boolean;
		locationRequirement?: $Enums.LocationRequirement;
		experienceLevel?: $Enums.ExperienceLevel;
		status?: $Enums.JobListingStatus;
		type?: $Enums.JobListingType;
		postedAt: Date | string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		organizationId: string;
	};

	export type JobListingUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		wage?: NullableIntFieldUpdateOperationsInput | number | null;
		wageInterval?:
			| EnumWageIntervalFieldUpdateOperationsInput
			| $Enums.WageInterval;
		stateAbbreviation?:
			| NullableStringFieldUpdateOperationsInput
			| string
			| null;
		city?: NullableStringFieldUpdateOperationsInput | string | null;
		isFeatured?: BoolFieldUpdateOperationsInput | boolean;
		locationRequirement?:
			| EnumLocationRequirementFieldUpdateOperationsInput
			| $Enums.LocationRequirement;
		experienceLevel?:
			| EnumExperienceLevelFieldUpdateOperationsInput
			| $Enums.ExperienceLevel;
		status?:
			| EnumJobListingStatusFieldUpdateOperationsInput
			| $Enums.JobListingStatus;
		type?: EnumJobListingTypeFieldUpdateOperationsInput | $Enums.JobListingType;
		postedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type JobListingUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		wage?: NullableIntFieldUpdateOperationsInput | number | null;
		wageInterval?:
			| EnumWageIntervalFieldUpdateOperationsInput
			| $Enums.WageInterval;
		stateAbbreviation?:
			| NullableStringFieldUpdateOperationsInput
			| string
			| null;
		city?: NullableStringFieldUpdateOperationsInput | string | null;
		isFeatured?: BoolFieldUpdateOperationsInput | boolean;
		locationRequirement?:
			| EnumLocationRequirementFieldUpdateOperationsInput
			| $Enums.LocationRequirement;
		experienceLevel?:
			| EnumExperienceLevelFieldUpdateOperationsInput
			| $Enums.ExperienceLevel;
		status?:
			| EnumJobListingStatusFieldUpdateOperationsInput
			| $Enums.JobListingStatus;
		type?: EnumJobListingTypeFieldUpdateOperationsInput | $Enums.JobListingType;
		postedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		organizationId?: StringFieldUpdateOperationsInput | string;
	};

	export type ApplicationCreateInput = {
		id?: string;
		coverLetter?: string | null;
		rating?: number | null;
		stage?: $Enums.ApplicationStage;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		jobListing: JobListingCreateNestedOneWithoutApplicationsInput;
		user: UserCreateNestedOneWithoutApplicationsInput;
	};

	export type ApplicationUncheckedCreateInput = {
		id?: string;
		coverLetter?: string | null;
		rating?: number | null;
		stage?: $Enums.ApplicationStage;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		jobListingId: string;
		userId: string;
	};

	export type ApplicationUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
		rating?: NullableIntFieldUpdateOperationsInput | number | null;
		stage?:
			| EnumApplicationStageFieldUpdateOperationsInput
			| $Enums.ApplicationStage;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		jobListing?: JobListingUpdateOneRequiredWithoutApplicationsNestedInput;
		user?: UserUpdateOneRequiredWithoutApplicationsNestedInput;
	};

	export type ApplicationUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
		rating?: NullableIntFieldUpdateOperationsInput | number | null;
		stage?:
			| EnumApplicationStageFieldUpdateOperationsInput
			| $Enums.ApplicationStage;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		jobListingId?: StringFieldUpdateOperationsInput | string;
		userId?: StringFieldUpdateOperationsInput | string;
	};

	export type ApplicationCreateManyInput = {
		id?: string;
		coverLetter?: string | null;
		rating?: number | null;
		stage?: $Enums.ApplicationStage;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		jobListingId: string;
		userId: string;
	};

	export type ApplicationUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
		rating?: NullableIntFieldUpdateOperationsInput | number | null;
		stage?:
			| EnumApplicationStageFieldUpdateOperationsInput
			| $Enums.ApplicationStage;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ApplicationUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
		rating?: NullableIntFieldUpdateOperationsInput | number | null;
		stage?:
			| EnumApplicationStageFieldUpdateOperationsInput
			| $Enums.ApplicationStage;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		jobListingId?: StringFieldUpdateOperationsInput | string;
		userId?: StringFieldUpdateOperationsInput | string;
	};

	export type ResumeCreateInput = {
		fileUrl: string;
		fileKey: string;
		version?: number;
		aiSummary?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user: UserCreateNestedOneWithoutResumeInput;
	};

	export type ResumeUncheckedCreateInput = {
		fileUrl: string;
		fileKey: string;
		version?: number;
		aiSummary?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId: string;
	};

	export type ResumeUpdateInput = {
		fileUrl?: StringFieldUpdateOperationsInput | string;
		fileKey?: StringFieldUpdateOperationsInput | string;
		version?: IntFieldUpdateOperationsInput | number;
		aiSummary?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneRequiredWithoutResumeNestedInput;
	};

	export type ResumeUncheckedUpdateInput = {
		fileUrl?: StringFieldUpdateOperationsInput | string;
		fileKey?: StringFieldUpdateOperationsInput | string;
		version?: IntFieldUpdateOperationsInput | number;
		aiSummary?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userId?: StringFieldUpdateOperationsInput | string;
	};

	export type ResumeCreateManyInput = {
		fileUrl: string;
		fileKey: string;
		version?: number;
		aiSummary?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId: string;
	};

	export type ResumeUpdateManyMutationInput = {
		fileUrl?: StringFieldUpdateOperationsInput | string;
		fileKey?: StringFieldUpdateOperationsInput | string;
		version?: IntFieldUpdateOperationsInput | number;
		aiSummary?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ResumeUncheckedUpdateManyInput = {
		fileUrl?: StringFieldUpdateOperationsInput | string;
		fileKey?: StringFieldUpdateOperationsInput | string;
		version?: IntFieldUpdateOperationsInput | number;
		aiSummary?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userId?: StringFieldUpdateOperationsInput | string;
	};

	export type UserSettingUnderOrganizationCreateInput = {
		newApplicationEmailNotifications?: boolean;
		minimumRating?: number | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user: UserCreateNestedOneWithoutUserSettingUnderOrganizationsInput;
		organization: OrganizationCreateNestedOneWithoutUserSettingUnderOrganizationsInput;
	};

	export type UserSettingUnderOrganizationUncheckedCreateInput = {
		newApplicationEmailNotifications?: boolean;
		minimumRating?: number | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId: string;
		organizationId: string;
	};

	export type UserSettingUnderOrganizationUpdateInput = {
		newApplicationEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		minimumRating?: NullableIntFieldUpdateOperationsInput | number | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneRequiredWithoutUserSettingUnderOrganizationsNestedInput;
		organization?: OrganizationUpdateOneRequiredWithoutUserSettingUnderOrganizationsNestedInput;
	};

	export type UserSettingUnderOrganizationUncheckedUpdateInput = {
		newApplicationEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		minimumRating?: NullableIntFieldUpdateOperationsInput | number | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userId?: StringFieldUpdateOperationsInput | string;
		organizationId?: StringFieldUpdateOperationsInput | string;
	};

	export type UserSettingUnderOrganizationCreateManyInput = {
		newApplicationEmailNotifications?: boolean;
		minimumRating?: number | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId: string;
		organizationId: string;
	};

	export type UserSettingUnderOrganizationUpdateManyMutationInput = {
		newApplicationEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		minimumRating?: NullableIntFieldUpdateOperationsInput | number | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserSettingUnderOrganizationUncheckedUpdateManyInput = {
		newApplicationEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		minimumRating?: NullableIntFieldUpdateOperationsInput | number | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userId?: StringFieldUpdateOperationsInput | string;
		organizationId?: StringFieldUpdateOperationsInput | string;
	};

	export type UserNotificationSettingCreateInput = {
		newJobEmailNotifications?: boolean;
		aiPrompt?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user: UserCreateNestedOneWithoutNotificationSettingInput;
	};

	export type UserNotificationSettingUncheckedCreateInput = {
		newJobEmailNotifications?: boolean;
		aiPrompt?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId: string;
	};

	export type UserNotificationSettingUpdateInput = {
		newJobEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneRequiredWithoutNotificationSettingNestedInput;
	};

	export type UserNotificationSettingUncheckedUpdateInput = {
		newJobEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userId?: StringFieldUpdateOperationsInput | string;
	};

	export type UserNotificationSettingCreateManyInput = {
		newJobEmailNotifications?: boolean;
		aiPrompt?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId: string;
	};

	export type UserNotificationSettingUpdateManyMutationInput = {
		newJobEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserNotificationSettingUncheckedUpdateManyInput = {
		newJobEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userId?: StringFieldUpdateOperationsInput | string;
	};

	export type StringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type DateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type UserNotificationSettingNullableScalarRelationFilter = {
		is?: UserNotificationSettingWhereInput | null;
		isNot?: UserNotificationSettingWhereInput | null;
	};

	export type ResumeNullableScalarRelationFilter = {
		is?: ResumeWhereInput | null;
		isNot?: ResumeWhereInput | null;
	};

	export type UserSettingUnderOrganizationListRelationFilter = {
		every?: UserSettingUnderOrganizationWhereInput;
		some?: UserSettingUnderOrganizationWhereInput;
		none?: UserSettingUnderOrganizationWhereInput;
	};

	export type ApplicationListRelationFilter = {
		every?: ApplicationWhereInput;
		some?: ApplicationWhereInput;
		none?: ApplicationWhereInput;
	};

	export type UserSettingUnderOrganizationOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type ApplicationOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type UserCountOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		imageUrl?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type UserMaxOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		imageUrl?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type UserMinOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		email?: SortOrder;
		imageUrl?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type StringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type JobListingListRelationFilter = {
		every?: JobListingWhereInput;
		some?: JobListingWhereInput;
		none?: JobListingWhereInput;
	};

	export type JobListingOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type OrganizationCountOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		imageUrl?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type OrganizationMaxOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		imageUrl?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type OrganizationMinOrderByAggregateInput = {
		id?: SortOrder;
		name?: SortOrder;
		imageUrl?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type IntNullableFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntNullableFilter<$PrismaModel> | number | null;
	};

	export type EnumWageIntervalFilter<$PrismaModel = never> = {
		equals?: $Enums.WageInterval | EnumWageIntervalFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.WageInterval[]
			| ListEnumWageIntervalFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.WageInterval[]
			| ListEnumWageIntervalFieldRefInput<$PrismaModel>;
		not?: NestedEnumWageIntervalFilter<$PrismaModel> | $Enums.WageInterval;
	};

	export type StringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringNullableFilter<$PrismaModel> | string | null;
	};

	export type BoolFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
		not?: NestedBoolFilter<$PrismaModel> | boolean;
	};

	export type EnumLocationRequirementFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.LocationRequirement
			| EnumLocationRequirementFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.LocationRequirement[]
			| ListEnumLocationRequirementFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.LocationRequirement[]
			| ListEnumLocationRequirementFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumLocationRequirementFilter<$PrismaModel>
			| $Enums.LocationRequirement;
	};

	export type EnumExperienceLevelFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.ExperienceLevel
			| EnumExperienceLevelFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.ExperienceLevel[]
			| ListEnumExperienceLevelFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.ExperienceLevel[]
			| ListEnumExperienceLevelFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumExperienceLevelFilter<$PrismaModel>
			| $Enums.ExperienceLevel;
	};

	export type EnumJobListingStatusFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.JobListingStatus
			| EnumJobListingStatusFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.JobListingStatus[]
			| ListEnumJobListingStatusFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.JobListingStatus[]
			| ListEnumJobListingStatusFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumJobListingStatusFilter<$PrismaModel>
			| $Enums.JobListingStatus;
	};

	export type EnumJobListingTypeFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.JobListingType
			| EnumJobListingTypeFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.JobListingType[]
			| ListEnumJobListingTypeFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.JobListingType[]
			| ListEnumJobListingTypeFieldRefInput<$PrismaModel>;
		not?: NestedEnumJobListingTypeFilter<$PrismaModel> | $Enums.JobListingType;
	};

	export type OrganizationScalarRelationFilter = {
		is?: OrganizationWhereInput;
		isNot?: OrganizationWhereInput;
	};

	export type SortOrderInput = {
		sort: SortOrder;
		nulls?: NullsOrder;
	};

	export type JobListingCountOrderByAggregateInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrder;
		wage?: SortOrder;
		wageInterval?: SortOrder;
		stateAbbreviation?: SortOrder;
		city?: SortOrder;
		isFeatured?: SortOrder;
		locationRequirement?: SortOrder;
		experienceLevel?: SortOrder;
		status?: SortOrder;
		type?: SortOrder;
		postedAt?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		organizationId?: SortOrder;
	};

	export type JobListingAvgOrderByAggregateInput = {
		wage?: SortOrder;
	};

	export type JobListingMaxOrderByAggregateInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrder;
		wage?: SortOrder;
		wageInterval?: SortOrder;
		stateAbbreviation?: SortOrder;
		city?: SortOrder;
		isFeatured?: SortOrder;
		locationRequirement?: SortOrder;
		experienceLevel?: SortOrder;
		status?: SortOrder;
		type?: SortOrder;
		postedAt?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		organizationId?: SortOrder;
	};

	export type JobListingMinOrderByAggregateInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrder;
		wage?: SortOrder;
		wageInterval?: SortOrder;
		stateAbbreviation?: SortOrder;
		city?: SortOrder;
		isFeatured?: SortOrder;
		locationRequirement?: SortOrder;
		experienceLevel?: SortOrder;
		status?: SortOrder;
		type?: SortOrder;
		postedAt?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		organizationId?: SortOrder;
	};

	export type JobListingSumOrderByAggregateInput = {
		wage?: SortOrder;
	};

	export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_avg?: NestedFloatNullableFilter<$PrismaModel>;
		_sum?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedIntNullableFilter<$PrismaModel>;
		_max?: NestedIntNullableFilter<$PrismaModel>;
	};

	export type EnumWageIntervalWithAggregatesFilter<$PrismaModel = never> = {
		equals?: $Enums.WageInterval | EnumWageIntervalFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.WageInterval[]
			| ListEnumWageIntervalFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.WageInterval[]
			| ListEnumWageIntervalFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumWageIntervalWithAggregatesFilter<$PrismaModel>
			| $Enums.WageInterval;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumWageIntervalFilter<$PrismaModel>;
		_max?: NestedEnumWageIntervalFilter<$PrismaModel>;
	};

	export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?:
			| NestedStringNullableWithAggregatesFilter<$PrismaModel>
			| string
			| null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedStringNullableFilter<$PrismaModel>;
		_max?: NestedStringNullableFilter<$PrismaModel>;
	};

	export type BoolWithAggregatesFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
		not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedBoolFilter<$PrismaModel>;
		_max?: NestedBoolFilter<$PrismaModel>;
	};

	export type EnumLocationRequirementWithAggregatesFilter<
		$PrismaModel = never,
	> = {
		equals?:
			| $Enums.LocationRequirement
			| EnumLocationRequirementFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.LocationRequirement[]
			| ListEnumLocationRequirementFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.LocationRequirement[]
			| ListEnumLocationRequirementFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumLocationRequirementWithAggregatesFilter<$PrismaModel>
			| $Enums.LocationRequirement;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumLocationRequirementFilter<$PrismaModel>;
		_max?: NestedEnumLocationRequirementFilter<$PrismaModel>;
	};

	export type EnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.ExperienceLevel
			| EnumExperienceLevelFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.ExperienceLevel[]
			| ListEnumExperienceLevelFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.ExperienceLevel[]
			| ListEnumExperienceLevelFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel>
			| $Enums.ExperienceLevel;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumExperienceLevelFilter<$PrismaModel>;
		_max?: NestedEnumExperienceLevelFilter<$PrismaModel>;
	};

	export type EnumJobListingStatusWithAggregatesFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.JobListingStatus
			| EnumJobListingStatusFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.JobListingStatus[]
			| ListEnumJobListingStatusFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.JobListingStatus[]
			| ListEnumJobListingStatusFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumJobListingStatusWithAggregatesFilter<$PrismaModel>
			| $Enums.JobListingStatus;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumJobListingStatusFilter<$PrismaModel>;
		_max?: NestedEnumJobListingStatusFilter<$PrismaModel>;
	};

	export type EnumJobListingTypeWithAggregatesFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.JobListingType
			| EnumJobListingTypeFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.JobListingType[]
			| ListEnumJobListingTypeFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.JobListingType[]
			| ListEnumJobListingTypeFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumJobListingTypeWithAggregatesFilter<$PrismaModel>
			| $Enums.JobListingType;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumJobListingTypeFilter<$PrismaModel>;
		_max?: NestedEnumJobListingTypeFilter<$PrismaModel>;
	};

	export type EnumApplicationStageFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.ApplicationStage
			| EnumApplicationStageFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.ApplicationStage[]
			| ListEnumApplicationStageFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.ApplicationStage[]
			| ListEnumApplicationStageFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumApplicationStageFilter<$PrismaModel>
			| $Enums.ApplicationStage;
	};

	export type JobListingScalarRelationFilter = {
		is?: JobListingWhereInput;
		isNot?: JobListingWhereInput;
	};

	export type UserScalarRelationFilter = {
		is?: UserWhereInput;
		isNot?: UserWhereInput;
	};

	export type ApplicationUserIdJobListingIdCompoundUniqueInput = {
		userId: string;
		jobListingId: string;
	};

	export type ApplicationCountOrderByAggregateInput = {
		id?: SortOrder;
		coverLetter?: SortOrder;
		rating?: SortOrder;
		stage?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		jobListingId?: SortOrder;
		userId?: SortOrder;
	};

	export type ApplicationAvgOrderByAggregateInput = {
		rating?: SortOrder;
	};

	export type ApplicationMaxOrderByAggregateInput = {
		id?: SortOrder;
		coverLetter?: SortOrder;
		rating?: SortOrder;
		stage?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		jobListingId?: SortOrder;
		userId?: SortOrder;
	};

	export type ApplicationMinOrderByAggregateInput = {
		id?: SortOrder;
		coverLetter?: SortOrder;
		rating?: SortOrder;
		stage?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		jobListingId?: SortOrder;
		userId?: SortOrder;
	};

	export type ApplicationSumOrderByAggregateInput = {
		rating?: SortOrder;
	};

	export type EnumApplicationStageWithAggregatesFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.ApplicationStage
			| EnumApplicationStageFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.ApplicationStage[]
			| ListEnumApplicationStageFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.ApplicationStage[]
			| ListEnumApplicationStageFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumApplicationStageWithAggregatesFilter<$PrismaModel>
			| $Enums.ApplicationStage;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumApplicationStageFilter<$PrismaModel>;
		_max?: NestedEnumApplicationStageFilter<$PrismaModel>;
	};

	export type IntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type ResumeCountOrderByAggregateInput = {
		fileUrl?: SortOrder;
		fileKey?: SortOrder;
		version?: SortOrder;
		aiSummary?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
	};

	export type ResumeAvgOrderByAggregateInput = {
		version?: SortOrder;
	};

	export type ResumeMaxOrderByAggregateInput = {
		fileUrl?: SortOrder;
		fileKey?: SortOrder;
		version?: SortOrder;
		aiSummary?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
	};

	export type ResumeMinOrderByAggregateInput = {
		fileUrl?: SortOrder;
		fileKey?: SortOrder;
		version?: SortOrder;
		aiSummary?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
	};

	export type ResumeSumOrderByAggregateInput = {
		version?: SortOrder;
	};

	export type IntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type UserSettingUnderOrganizationUserIdOrganizationIdCompoundUniqueInput =
		{
			userId: string;
			organizationId: string;
		};

	export type UserSettingUnderOrganizationCountOrderByAggregateInput = {
		newApplicationEmailNotifications?: SortOrder;
		minimumRating?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
		organizationId?: SortOrder;
	};

	export type UserSettingUnderOrganizationAvgOrderByAggregateInput = {
		minimumRating?: SortOrder;
	};

	export type UserSettingUnderOrganizationMaxOrderByAggregateInput = {
		newApplicationEmailNotifications?: SortOrder;
		minimumRating?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
		organizationId?: SortOrder;
	};

	export type UserSettingUnderOrganizationMinOrderByAggregateInput = {
		newApplicationEmailNotifications?: SortOrder;
		minimumRating?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
		organizationId?: SortOrder;
	};

	export type UserSettingUnderOrganizationSumOrderByAggregateInput = {
		minimumRating?: SortOrder;
	};

	export type UserNotificationSettingCountOrderByAggregateInput = {
		newJobEmailNotifications?: SortOrder;
		aiPrompt?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
	};

	export type UserNotificationSettingMaxOrderByAggregateInput = {
		newJobEmailNotifications?: SortOrder;
		aiPrompt?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
	};

	export type UserNotificationSettingMinOrderByAggregateInput = {
		newJobEmailNotifications?: SortOrder;
		aiPrompt?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		userId?: SortOrder;
	};

	export type UserNotificationSettingCreateNestedOneWithoutUserInput = {
		create?: XOR<
			UserNotificationSettingCreateWithoutUserInput,
			UserNotificationSettingUncheckedCreateWithoutUserInput
		>;
		connectOrCreate?: UserNotificationSettingCreateOrConnectWithoutUserInput;
		connect?: UserNotificationSettingWhereUniqueInput;
	};

	export type ResumeCreateNestedOneWithoutUserInput = {
		create?: XOR<
			ResumeCreateWithoutUserInput,
			ResumeUncheckedCreateWithoutUserInput
		>;
		connectOrCreate?: ResumeCreateOrConnectWithoutUserInput;
		connect?: ResumeWhereUniqueInput;
	};

	export type UserSettingUnderOrganizationCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<
					UserSettingUnderOrganizationCreateWithoutUserInput,
					UserSettingUnderOrganizationUncheckedCreateWithoutUserInput
			  >
			| UserSettingUnderOrganizationCreateWithoutUserInput[]
			| UserSettingUnderOrganizationUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| UserSettingUnderOrganizationCreateOrConnectWithoutUserInput
			| UserSettingUnderOrganizationCreateOrConnectWithoutUserInput[];
		createMany?: UserSettingUnderOrganizationCreateManyUserInputEnvelope;
		connect?:
			| UserSettingUnderOrganizationWhereUniqueInput
			| UserSettingUnderOrganizationWhereUniqueInput[];
	};

	export type ApplicationCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutUserInput,
					ApplicationUncheckedCreateWithoutUserInput
			  >
			| ApplicationCreateWithoutUserInput[]
			| ApplicationUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutUserInput
			| ApplicationCreateOrConnectWithoutUserInput[];
		createMany?: ApplicationCreateManyUserInputEnvelope;
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
	};

	export type UserNotificationSettingUncheckedCreateNestedOneWithoutUserInput =
		{
			create?: XOR<
				UserNotificationSettingCreateWithoutUserInput,
				UserNotificationSettingUncheckedCreateWithoutUserInput
			>;
			connectOrCreate?: UserNotificationSettingCreateOrConnectWithoutUserInput;
			connect?: UserNotificationSettingWhereUniqueInput;
		};

	export type ResumeUncheckedCreateNestedOneWithoutUserInput = {
		create?: XOR<
			ResumeCreateWithoutUserInput,
			ResumeUncheckedCreateWithoutUserInput
		>;
		connectOrCreate?: ResumeCreateOrConnectWithoutUserInput;
		connect?: ResumeWhereUniqueInput;
	};

	export type UserSettingUnderOrganizationUncheckedCreateNestedManyWithoutUserInput =
		{
			create?:
				| XOR<
						UserSettingUnderOrganizationCreateWithoutUserInput,
						UserSettingUnderOrganizationUncheckedCreateWithoutUserInput
				  >
				| UserSettingUnderOrganizationCreateWithoutUserInput[]
				| UserSettingUnderOrganizationUncheckedCreateWithoutUserInput[];
			connectOrCreate?:
				| UserSettingUnderOrganizationCreateOrConnectWithoutUserInput
				| UserSettingUnderOrganizationCreateOrConnectWithoutUserInput[];
			createMany?: UserSettingUnderOrganizationCreateManyUserInputEnvelope;
			connect?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
		};

	export type ApplicationUncheckedCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutUserInput,
					ApplicationUncheckedCreateWithoutUserInput
			  >
			| ApplicationCreateWithoutUserInput[]
			| ApplicationUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutUserInput
			| ApplicationCreateOrConnectWithoutUserInput[];
		createMany?: ApplicationCreateManyUserInputEnvelope;
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
	};

	export type StringFieldUpdateOperationsInput = {
		set?: string;
	};

	export type DateTimeFieldUpdateOperationsInput = {
		set?: Date | string;
	};

	export type UserNotificationSettingUpdateOneWithoutUserNestedInput = {
		create?: XOR<
			UserNotificationSettingCreateWithoutUserInput,
			UserNotificationSettingUncheckedCreateWithoutUserInput
		>;
		connectOrCreate?: UserNotificationSettingCreateOrConnectWithoutUserInput;
		upsert?: UserNotificationSettingUpsertWithoutUserInput;
		disconnect?: UserNotificationSettingWhereInput | boolean;
		delete?: UserNotificationSettingWhereInput | boolean;
		connect?: UserNotificationSettingWhereUniqueInput;
		update?: XOR<
			XOR<
				UserNotificationSettingUpdateToOneWithWhereWithoutUserInput,
				UserNotificationSettingUpdateWithoutUserInput
			>,
			UserNotificationSettingUncheckedUpdateWithoutUserInput
		>;
	};

	export type ResumeUpdateOneWithoutUserNestedInput = {
		create?: XOR<
			ResumeCreateWithoutUserInput,
			ResumeUncheckedCreateWithoutUserInput
		>;
		connectOrCreate?: ResumeCreateOrConnectWithoutUserInput;
		upsert?: ResumeUpsertWithoutUserInput;
		disconnect?: ResumeWhereInput | boolean;
		delete?: ResumeWhereInput | boolean;
		connect?: ResumeWhereUniqueInput;
		update?: XOR<
			XOR<
				ResumeUpdateToOneWithWhereWithoutUserInput,
				ResumeUpdateWithoutUserInput
			>,
			ResumeUncheckedUpdateWithoutUserInput
		>;
	};

	export type UserSettingUnderOrganizationUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<
					UserSettingUnderOrganizationCreateWithoutUserInput,
					UserSettingUnderOrganizationUncheckedCreateWithoutUserInput
			  >
			| UserSettingUnderOrganizationCreateWithoutUserInput[]
			| UserSettingUnderOrganizationUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| UserSettingUnderOrganizationCreateOrConnectWithoutUserInput
			| UserSettingUnderOrganizationCreateOrConnectWithoutUserInput[];
		upsert?:
			| UserSettingUnderOrganizationUpsertWithWhereUniqueWithoutUserInput
			| UserSettingUnderOrganizationUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: UserSettingUnderOrganizationCreateManyUserInputEnvelope;
		set?:
			| UserSettingUnderOrganizationWhereUniqueInput
			| UserSettingUnderOrganizationWhereUniqueInput[];
		disconnect?:
			| UserSettingUnderOrganizationWhereUniqueInput
			| UserSettingUnderOrganizationWhereUniqueInput[];
		delete?:
			| UserSettingUnderOrganizationWhereUniqueInput
			| UserSettingUnderOrganizationWhereUniqueInput[];
		connect?:
			| UserSettingUnderOrganizationWhereUniqueInput
			| UserSettingUnderOrganizationWhereUniqueInput[];
		update?:
			| UserSettingUnderOrganizationUpdateWithWhereUniqueWithoutUserInput
			| UserSettingUnderOrganizationUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| UserSettingUnderOrganizationUpdateManyWithWhereWithoutUserInput
			| UserSettingUnderOrganizationUpdateManyWithWhereWithoutUserInput[];
		deleteMany?:
			| UserSettingUnderOrganizationScalarWhereInput
			| UserSettingUnderOrganizationScalarWhereInput[];
	};

	export type ApplicationUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutUserInput,
					ApplicationUncheckedCreateWithoutUserInput
			  >
			| ApplicationCreateWithoutUserInput[]
			| ApplicationUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutUserInput
			| ApplicationCreateOrConnectWithoutUserInput[];
		upsert?:
			| ApplicationUpsertWithWhereUniqueWithoutUserInput
			| ApplicationUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: ApplicationCreateManyUserInputEnvelope;
		set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		update?:
			| ApplicationUpdateWithWhereUniqueWithoutUserInput
			| ApplicationUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| ApplicationUpdateManyWithWhereWithoutUserInput
			| ApplicationUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
	};

	export type UserNotificationSettingUncheckedUpdateOneWithoutUserNestedInput =
		{
			create?: XOR<
				UserNotificationSettingCreateWithoutUserInput,
				UserNotificationSettingUncheckedCreateWithoutUserInput
			>;
			connectOrCreate?: UserNotificationSettingCreateOrConnectWithoutUserInput;
			upsert?: UserNotificationSettingUpsertWithoutUserInput;
			disconnect?: UserNotificationSettingWhereInput | boolean;
			delete?: UserNotificationSettingWhereInput | boolean;
			connect?: UserNotificationSettingWhereUniqueInput;
			update?: XOR<
				XOR<
					UserNotificationSettingUpdateToOneWithWhereWithoutUserInput,
					UserNotificationSettingUpdateWithoutUserInput
				>,
				UserNotificationSettingUncheckedUpdateWithoutUserInput
			>;
		};

	export type ResumeUncheckedUpdateOneWithoutUserNestedInput = {
		create?: XOR<
			ResumeCreateWithoutUserInput,
			ResumeUncheckedCreateWithoutUserInput
		>;
		connectOrCreate?: ResumeCreateOrConnectWithoutUserInput;
		upsert?: ResumeUpsertWithoutUserInput;
		disconnect?: ResumeWhereInput | boolean;
		delete?: ResumeWhereInput | boolean;
		connect?: ResumeWhereUniqueInput;
		update?: XOR<
			XOR<
				ResumeUpdateToOneWithWhereWithoutUserInput,
				ResumeUpdateWithoutUserInput
			>,
			ResumeUncheckedUpdateWithoutUserInput
		>;
	};

	export type UserSettingUnderOrganizationUncheckedUpdateManyWithoutUserNestedInput =
		{
			create?:
				| XOR<
						UserSettingUnderOrganizationCreateWithoutUserInput,
						UserSettingUnderOrganizationUncheckedCreateWithoutUserInput
				  >
				| UserSettingUnderOrganizationCreateWithoutUserInput[]
				| UserSettingUnderOrganizationUncheckedCreateWithoutUserInput[];
			connectOrCreate?:
				| UserSettingUnderOrganizationCreateOrConnectWithoutUserInput
				| UserSettingUnderOrganizationCreateOrConnectWithoutUserInput[];
			upsert?:
				| UserSettingUnderOrganizationUpsertWithWhereUniqueWithoutUserInput
				| UserSettingUnderOrganizationUpsertWithWhereUniqueWithoutUserInput[];
			createMany?: UserSettingUnderOrganizationCreateManyUserInputEnvelope;
			set?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
			disconnect?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
			delete?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
			connect?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
			update?:
				| UserSettingUnderOrganizationUpdateWithWhereUniqueWithoutUserInput
				| UserSettingUnderOrganizationUpdateWithWhereUniqueWithoutUserInput[];
			updateMany?:
				| UserSettingUnderOrganizationUpdateManyWithWhereWithoutUserInput
				| UserSettingUnderOrganizationUpdateManyWithWhereWithoutUserInput[];
			deleteMany?:
				| UserSettingUnderOrganizationScalarWhereInput
				| UserSettingUnderOrganizationScalarWhereInput[];
		};

	export type ApplicationUncheckedUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutUserInput,
					ApplicationUncheckedCreateWithoutUserInput
			  >
			| ApplicationCreateWithoutUserInput[]
			| ApplicationUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutUserInput
			| ApplicationCreateOrConnectWithoutUserInput[];
		upsert?:
			| ApplicationUpsertWithWhereUniqueWithoutUserInput
			| ApplicationUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: ApplicationCreateManyUserInputEnvelope;
		set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		update?:
			| ApplicationUpdateWithWhereUniqueWithoutUserInput
			| ApplicationUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| ApplicationUpdateManyWithWhereWithoutUserInput
			| ApplicationUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
	};

	export type JobListingCreateNestedManyWithoutOrganizationInput = {
		create?:
			| XOR<
					JobListingCreateWithoutOrganizationInput,
					JobListingUncheckedCreateWithoutOrganizationInput
			  >
			| JobListingCreateWithoutOrganizationInput[]
			| JobListingUncheckedCreateWithoutOrganizationInput[];
		connectOrCreate?:
			| JobListingCreateOrConnectWithoutOrganizationInput
			| JobListingCreateOrConnectWithoutOrganizationInput[];
		createMany?: JobListingCreateManyOrganizationInputEnvelope;
		connect?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[];
	};

	export type UserSettingUnderOrganizationCreateNestedManyWithoutOrganizationInput =
		{
			create?:
				| XOR<
						UserSettingUnderOrganizationCreateWithoutOrganizationInput,
						UserSettingUnderOrganizationUncheckedCreateWithoutOrganizationInput
				  >
				| UserSettingUnderOrganizationCreateWithoutOrganizationInput[]
				| UserSettingUnderOrganizationUncheckedCreateWithoutOrganizationInput[];
			connectOrCreate?:
				| UserSettingUnderOrganizationCreateOrConnectWithoutOrganizationInput
				| UserSettingUnderOrganizationCreateOrConnectWithoutOrganizationInput[];
			createMany?: UserSettingUnderOrganizationCreateManyOrganizationInputEnvelope;
			connect?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
		};

	export type JobListingUncheckedCreateNestedManyWithoutOrganizationInput = {
		create?:
			| XOR<
					JobListingCreateWithoutOrganizationInput,
					JobListingUncheckedCreateWithoutOrganizationInput
			  >
			| JobListingCreateWithoutOrganizationInput[]
			| JobListingUncheckedCreateWithoutOrganizationInput[];
		connectOrCreate?:
			| JobListingCreateOrConnectWithoutOrganizationInput
			| JobListingCreateOrConnectWithoutOrganizationInput[];
		createMany?: JobListingCreateManyOrganizationInputEnvelope;
		connect?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[];
	};

	export type UserSettingUnderOrganizationUncheckedCreateNestedManyWithoutOrganizationInput =
		{
			create?:
				| XOR<
						UserSettingUnderOrganizationCreateWithoutOrganizationInput,
						UserSettingUnderOrganizationUncheckedCreateWithoutOrganizationInput
				  >
				| UserSettingUnderOrganizationCreateWithoutOrganizationInput[]
				| UserSettingUnderOrganizationUncheckedCreateWithoutOrganizationInput[];
			connectOrCreate?:
				| UserSettingUnderOrganizationCreateOrConnectWithoutOrganizationInput
				| UserSettingUnderOrganizationCreateOrConnectWithoutOrganizationInput[];
			createMany?: UserSettingUnderOrganizationCreateManyOrganizationInputEnvelope;
			connect?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
		};

	export type JobListingUpdateManyWithoutOrganizationNestedInput = {
		create?:
			| XOR<
					JobListingCreateWithoutOrganizationInput,
					JobListingUncheckedCreateWithoutOrganizationInput
			  >
			| JobListingCreateWithoutOrganizationInput[]
			| JobListingUncheckedCreateWithoutOrganizationInput[];
		connectOrCreate?:
			| JobListingCreateOrConnectWithoutOrganizationInput
			| JobListingCreateOrConnectWithoutOrganizationInput[];
		upsert?:
			| JobListingUpsertWithWhereUniqueWithoutOrganizationInput
			| JobListingUpsertWithWhereUniqueWithoutOrganizationInput[];
		createMany?: JobListingCreateManyOrganizationInputEnvelope;
		set?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[];
		disconnect?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[];
		delete?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[];
		connect?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[];
		update?:
			| JobListingUpdateWithWhereUniqueWithoutOrganizationInput
			| JobListingUpdateWithWhereUniqueWithoutOrganizationInput[];
		updateMany?:
			| JobListingUpdateManyWithWhereWithoutOrganizationInput
			| JobListingUpdateManyWithWhereWithoutOrganizationInput[];
		deleteMany?: JobListingScalarWhereInput | JobListingScalarWhereInput[];
	};

	export type UserSettingUnderOrganizationUpdateManyWithoutOrganizationNestedInput =
		{
			create?:
				| XOR<
						UserSettingUnderOrganizationCreateWithoutOrganizationInput,
						UserSettingUnderOrganizationUncheckedCreateWithoutOrganizationInput
				  >
				| UserSettingUnderOrganizationCreateWithoutOrganizationInput[]
				| UserSettingUnderOrganizationUncheckedCreateWithoutOrganizationInput[];
			connectOrCreate?:
				| UserSettingUnderOrganizationCreateOrConnectWithoutOrganizationInput
				| UserSettingUnderOrganizationCreateOrConnectWithoutOrganizationInput[];
			upsert?:
				| UserSettingUnderOrganizationUpsertWithWhereUniqueWithoutOrganizationInput
				| UserSettingUnderOrganizationUpsertWithWhereUniqueWithoutOrganizationInput[];
			createMany?: UserSettingUnderOrganizationCreateManyOrganizationInputEnvelope;
			set?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
			disconnect?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
			delete?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
			connect?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
			update?:
				| UserSettingUnderOrganizationUpdateWithWhereUniqueWithoutOrganizationInput
				| UserSettingUnderOrganizationUpdateWithWhereUniqueWithoutOrganizationInput[];
			updateMany?:
				| UserSettingUnderOrganizationUpdateManyWithWhereWithoutOrganizationInput
				| UserSettingUnderOrganizationUpdateManyWithWhereWithoutOrganizationInput[];
			deleteMany?:
				| UserSettingUnderOrganizationScalarWhereInput
				| UserSettingUnderOrganizationScalarWhereInput[];
		};

	export type JobListingUncheckedUpdateManyWithoutOrganizationNestedInput = {
		create?:
			| XOR<
					JobListingCreateWithoutOrganizationInput,
					JobListingUncheckedCreateWithoutOrganizationInput
			  >
			| JobListingCreateWithoutOrganizationInput[]
			| JobListingUncheckedCreateWithoutOrganizationInput[];
		connectOrCreate?:
			| JobListingCreateOrConnectWithoutOrganizationInput
			| JobListingCreateOrConnectWithoutOrganizationInput[];
		upsert?:
			| JobListingUpsertWithWhereUniqueWithoutOrganizationInput
			| JobListingUpsertWithWhereUniqueWithoutOrganizationInput[];
		createMany?: JobListingCreateManyOrganizationInputEnvelope;
		set?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[];
		disconnect?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[];
		delete?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[];
		connect?: JobListingWhereUniqueInput | JobListingWhereUniqueInput[];
		update?:
			| JobListingUpdateWithWhereUniqueWithoutOrganizationInput
			| JobListingUpdateWithWhereUniqueWithoutOrganizationInput[];
		updateMany?:
			| JobListingUpdateManyWithWhereWithoutOrganizationInput
			| JobListingUpdateManyWithWhereWithoutOrganizationInput[];
		deleteMany?: JobListingScalarWhereInput | JobListingScalarWhereInput[];
	};

	export type UserSettingUnderOrganizationUncheckedUpdateManyWithoutOrganizationNestedInput =
		{
			create?:
				| XOR<
						UserSettingUnderOrganizationCreateWithoutOrganizationInput,
						UserSettingUnderOrganizationUncheckedCreateWithoutOrganizationInput
				  >
				| UserSettingUnderOrganizationCreateWithoutOrganizationInput[]
				| UserSettingUnderOrganizationUncheckedCreateWithoutOrganizationInput[];
			connectOrCreate?:
				| UserSettingUnderOrganizationCreateOrConnectWithoutOrganizationInput
				| UserSettingUnderOrganizationCreateOrConnectWithoutOrganizationInput[];
			upsert?:
				| UserSettingUnderOrganizationUpsertWithWhereUniqueWithoutOrganizationInput
				| UserSettingUnderOrganizationUpsertWithWhereUniqueWithoutOrganizationInput[];
			createMany?: UserSettingUnderOrganizationCreateManyOrganizationInputEnvelope;
			set?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
			disconnect?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
			delete?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
			connect?:
				| UserSettingUnderOrganizationWhereUniqueInput
				| UserSettingUnderOrganizationWhereUniqueInput[];
			update?:
				| UserSettingUnderOrganizationUpdateWithWhereUniqueWithoutOrganizationInput
				| UserSettingUnderOrganizationUpdateWithWhereUniqueWithoutOrganizationInput[];
			updateMany?:
				| UserSettingUnderOrganizationUpdateManyWithWhereWithoutOrganizationInput
				| UserSettingUnderOrganizationUpdateManyWithWhereWithoutOrganizationInput[];
			deleteMany?:
				| UserSettingUnderOrganizationScalarWhereInput
				| UserSettingUnderOrganizationScalarWhereInput[];
		};

	export type ApplicationCreateNestedManyWithoutJobListingInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutJobListingInput,
					ApplicationUncheckedCreateWithoutJobListingInput
			  >
			| ApplicationCreateWithoutJobListingInput[]
			| ApplicationUncheckedCreateWithoutJobListingInput[];
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutJobListingInput
			| ApplicationCreateOrConnectWithoutJobListingInput[];
		createMany?: ApplicationCreateManyJobListingInputEnvelope;
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
	};

	export type OrganizationCreateNestedOneWithoutJobListingsInput = {
		create?: XOR<
			OrganizationCreateWithoutJobListingsInput,
			OrganizationUncheckedCreateWithoutJobListingsInput
		>;
		connectOrCreate?: OrganizationCreateOrConnectWithoutJobListingsInput;
		connect?: OrganizationWhereUniqueInput;
	};

	export type ApplicationUncheckedCreateNestedManyWithoutJobListingInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutJobListingInput,
					ApplicationUncheckedCreateWithoutJobListingInput
			  >
			| ApplicationCreateWithoutJobListingInput[]
			| ApplicationUncheckedCreateWithoutJobListingInput[];
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutJobListingInput
			| ApplicationCreateOrConnectWithoutJobListingInput[];
		createMany?: ApplicationCreateManyJobListingInputEnvelope;
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
	};

	export type NullableIntFieldUpdateOperationsInput = {
		set?: number | null;
		increment?: number;
		decrement?: number;
		multiply?: number;
		divide?: number;
	};

	export type EnumWageIntervalFieldUpdateOperationsInput = {
		set?: $Enums.WageInterval;
	};

	export type NullableStringFieldUpdateOperationsInput = {
		set?: string | null;
	};

	export type BoolFieldUpdateOperationsInput = {
		set?: boolean;
	};

	export type EnumLocationRequirementFieldUpdateOperationsInput = {
		set?: $Enums.LocationRequirement;
	};

	export type EnumExperienceLevelFieldUpdateOperationsInput = {
		set?: $Enums.ExperienceLevel;
	};

	export type EnumJobListingStatusFieldUpdateOperationsInput = {
		set?: $Enums.JobListingStatus;
	};

	export type EnumJobListingTypeFieldUpdateOperationsInput = {
		set?: $Enums.JobListingType;
	};

	export type ApplicationUpdateManyWithoutJobListingNestedInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutJobListingInput,
					ApplicationUncheckedCreateWithoutJobListingInput
			  >
			| ApplicationCreateWithoutJobListingInput[]
			| ApplicationUncheckedCreateWithoutJobListingInput[];
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutJobListingInput
			| ApplicationCreateOrConnectWithoutJobListingInput[];
		upsert?:
			| ApplicationUpsertWithWhereUniqueWithoutJobListingInput
			| ApplicationUpsertWithWhereUniqueWithoutJobListingInput[];
		createMany?: ApplicationCreateManyJobListingInputEnvelope;
		set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		update?:
			| ApplicationUpdateWithWhereUniqueWithoutJobListingInput
			| ApplicationUpdateWithWhereUniqueWithoutJobListingInput[];
		updateMany?:
			| ApplicationUpdateManyWithWhereWithoutJobListingInput
			| ApplicationUpdateManyWithWhereWithoutJobListingInput[];
		deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
	};

	export type OrganizationUpdateOneRequiredWithoutJobListingsNestedInput = {
		create?: XOR<
			OrganizationCreateWithoutJobListingsInput,
			OrganizationUncheckedCreateWithoutJobListingsInput
		>;
		connectOrCreate?: OrganizationCreateOrConnectWithoutJobListingsInput;
		upsert?: OrganizationUpsertWithoutJobListingsInput;
		connect?: OrganizationWhereUniqueInput;
		update?: XOR<
			XOR<
				OrganizationUpdateToOneWithWhereWithoutJobListingsInput,
				OrganizationUpdateWithoutJobListingsInput
			>,
			OrganizationUncheckedUpdateWithoutJobListingsInput
		>;
	};

	export type ApplicationUncheckedUpdateManyWithoutJobListingNestedInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutJobListingInput,
					ApplicationUncheckedCreateWithoutJobListingInput
			  >
			| ApplicationCreateWithoutJobListingInput[]
			| ApplicationUncheckedCreateWithoutJobListingInput[];
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutJobListingInput
			| ApplicationCreateOrConnectWithoutJobListingInput[];
		upsert?:
			| ApplicationUpsertWithWhereUniqueWithoutJobListingInput
			| ApplicationUpsertWithWhereUniqueWithoutJobListingInput[];
		createMany?: ApplicationCreateManyJobListingInputEnvelope;
		set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
		update?:
			| ApplicationUpdateWithWhereUniqueWithoutJobListingInput
			| ApplicationUpdateWithWhereUniqueWithoutJobListingInput[];
		updateMany?:
			| ApplicationUpdateManyWithWhereWithoutJobListingInput
			| ApplicationUpdateManyWithWhereWithoutJobListingInput[];
		deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
	};

	export type JobListingCreateNestedOneWithoutApplicationsInput = {
		create?: XOR<
			JobListingCreateWithoutApplicationsInput,
			JobListingUncheckedCreateWithoutApplicationsInput
		>;
		connectOrCreate?: JobListingCreateOrConnectWithoutApplicationsInput;
		connect?: JobListingWhereUniqueInput;
	};

	export type UserCreateNestedOneWithoutApplicationsInput = {
		create?: XOR<
			UserCreateWithoutApplicationsInput,
			UserUncheckedCreateWithoutApplicationsInput
		>;
		connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput;
		connect?: UserWhereUniqueInput;
	};

	export type EnumApplicationStageFieldUpdateOperationsInput = {
		set?: $Enums.ApplicationStage;
	};

	export type JobListingUpdateOneRequiredWithoutApplicationsNestedInput = {
		create?: XOR<
			JobListingCreateWithoutApplicationsInput,
			JobListingUncheckedCreateWithoutApplicationsInput
		>;
		connectOrCreate?: JobListingCreateOrConnectWithoutApplicationsInput;
		upsert?: JobListingUpsertWithoutApplicationsInput;
		connect?: JobListingWhereUniqueInput;
		update?: XOR<
			XOR<
				JobListingUpdateToOneWithWhereWithoutApplicationsInput,
				JobListingUpdateWithoutApplicationsInput
			>,
			JobListingUncheckedUpdateWithoutApplicationsInput
		>;
	};

	export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
		create?: XOR<
			UserCreateWithoutApplicationsInput,
			UserUncheckedCreateWithoutApplicationsInput
		>;
		connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput;
		upsert?: UserUpsertWithoutApplicationsInput;
		connect?: UserWhereUniqueInput;
		update?: XOR<
			XOR<
				UserUpdateToOneWithWhereWithoutApplicationsInput,
				UserUpdateWithoutApplicationsInput
			>,
			UserUncheckedUpdateWithoutApplicationsInput
		>;
	};

	export type UserCreateNestedOneWithoutResumeInput = {
		create?: XOR<
			UserCreateWithoutResumeInput,
			UserUncheckedCreateWithoutResumeInput
		>;
		connectOrCreate?: UserCreateOrConnectWithoutResumeInput;
		connect?: UserWhereUniqueInput;
	};

	export type IntFieldUpdateOperationsInput = {
		set?: number;
		increment?: number;
		decrement?: number;
		multiply?: number;
		divide?: number;
	};

	export type UserUpdateOneRequiredWithoutResumeNestedInput = {
		create?: XOR<
			UserCreateWithoutResumeInput,
			UserUncheckedCreateWithoutResumeInput
		>;
		connectOrCreate?: UserCreateOrConnectWithoutResumeInput;
		upsert?: UserUpsertWithoutResumeInput;
		connect?: UserWhereUniqueInput;
		update?: XOR<
			XOR<
				UserUpdateToOneWithWhereWithoutResumeInput,
				UserUpdateWithoutResumeInput
			>,
			UserUncheckedUpdateWithoutResumeInput
		>;
	};

	export type UserCreateNestedOneWithoutUserSettingUnderOrganizationsInput = {
		create?: XOR<
			UserCreateWithoutUserSettingUnderOrganizationsInput,
			UserUncheckedCreateWithoutUserSettingUnderOrganizationsInput
		>;
		connectOrCreate?: UserCreateOrConnectWithoutUserSettingUnderOrganizationsInput;
		connect?: UserWhereUniqueInput;
	};

	export type OrganizationCreateNestedOneWithoutUserSettingUnderOrganizationsInput =
		{
			create?: XOR<
				OrganizationCreateWithoutUserSettingUnderOrganizationsInput,
				OrganizationUncheckedCreateWithoutUserSettingUnderOrganizationsInput
			>;
			connectOrCreate?: OrganizationCreateOrConnectWithoutUserSettingUnderOrganizationsInput;
			connect?: OrganizationWhereUniqueInput;
		};

	export type UserUpdateOneRequiredWithoutUserSettingUnderOrganizationsNestedInput =
		{
			create?: XOR<
				UserCreateWithoutUserSettingUnderOrganizationsInput,
				UserUncheckedCreateWithoutUserSettingUnderOrganizationsInput
			>;
			connectOrCreate?: UserCreateOrConnectWithoutUserSettingUnderOrganizationsInput;
			upsert?: UserUpsertWithoutUserSettingUnderOrganizationsInput;
			connect?: UserWhereUniqueInput;
			update?: XOR<
				XOR<
					UserUpdateToOneWithWhereWithoutUserSettingUnderOrganizationsInput,
					UserUpdateWithoutUserSettingUnderOrganizationsInput
				>,
				UserUncheckedUpdateWithoutUserSettingUnderOrganizationsInput
			>;
		};

	export type OrganizationUpdateOneRequiredWithoutUserSettingUnderOrganizationsNestedInput =
		{
			create?: XOR<
				OrganizationCreateWithoutUserSettingUnderOrganizationsInput,
				OrganizationUncheckedCreateWithoutUserSettingUnderOrganizationsInput
			>;
			connectOrCreate?: OrganizationCreateOrConnectWithoutUserSettingUnderOrganizationsInput;
			upsert?: OrganizationUpsertWithoutUserSettingUnderOrganizationsInput;
			connect?: OrganizationWhereUniqueInput;
			update?: XOR<
				XOR<
					OrganizationUpdateToOneWithWhereWithoutUserSettingUnderOrganizationsInput,
					OrganizationUpdateWithoutUserSettingUnderOrganizationsInput
				>,
				OrganizationUncheckedUpdateWithoutUserSettingUnderOrganizationsInput
			>;
		};

	export type UserCreateNestedOneWithoutNotificationSettingInput = {
		create?: XOR<
			UserCreateWithoutNotificationSettingInput,
			UserUncheckedCreateWithoutNotificationSettingInput
		>;
		connectOrCreate?: UserCreateOrConnectWithoutNotificationSettingInput;
		connect?: UserWhereUniqueInput;
	};

	export type UserUpdateOneRequiredWithoutNotificationSettingNestedInput = {
		create?: XOR<
			UserCreateWithoutNotificationSettingInput,
			UserUncheckedCreateWithoutNotificationSettingInput
		>;
		connectOrCreate?: UserCreateOrConnectWithoutNotificationSettingInput;
		upsert?: UserUpsertWithoutNotificationSettingInput;
		connect?: UserWhereUniqueInput;
		update?: XOR<
			XOR<
				UserUpdateToOneWithWhereWithoutNotificationSettingInput,
				UserUpdateWithoutNotificationSettingInput
			>,
			UserUncheckedUpdateWithoutNotificationSettingInput
		>;
	};

	export type NestedStringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type NestedDateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type NestedIntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type NestedIntNullableFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntNullableFilter<$PrismaModel> | number | null;
	};

	export type NestedEnumWageIntervalFilter<$PrismaModel = never> = {
		equals?: $Enums.WageInterval | EnumWageIntervalFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.WageInterval[]
			| ListEnumWageIntervalFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.WageInterval[]
			| ListEnumWageIntervalFieldRefInput<$PrismaModel>;
		not?: NestedEnumWageIntervalFilter<$PrismaModel> | $Enums.WageInterval;
	};

	export type NestedStringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringNullableFilter<$PrismaModel> | string | null;
	};

	export type NestedBoolFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
		not?: NestedBoolFilter<$PrismaModel> | boolean;
	};

	export type NestedEnumLocationRequirementFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.LocationRequirement
			| EnumLocationRequirementFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.LocationRequirement[]
			| ListEnumLocationRequirementFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.LocationRequirement[]
			| ListEnumLocationRequirementFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumLocationRequirementFilter<$PrismaModel>
			| $Enums.LocationRequirement;
	};

	export type NestedEnumExperienceLevelFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.ExperienceLevel
			| EnumExperienceLevelFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.ExperienceLevel[]
			| ListEnumExperienceLevelFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.ExperienceLevel[]
			| ListEnumExperienceLevelFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumExperienceLevelFilter<$PrismaModel>
			| $Enums.ExperienceLevel;
	};

	export type NestedEnumJobListingStatusFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.JobListingStatus
			| EnumJobListingStatusFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.JobListingStatus[]
			| ListEnumJobListingStatusFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.JobListingStatus[]
			| ListEnumJobListingStatusFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumJobListingStatusFilter<$PrismaModel>
			| $Enums.JobListingStatus;
	};

	export type NestedEnumJobListingTypeFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.JobListingType
			| EnumJobListingTypeFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.JobListingType[]
			| ListEnumJobListingTypeFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.JobListingType[]
			| ListEnumJobListingTypeFieldRefInput<$PrismaModel>;
		not?: NestedEnumJobListingTypeFilter<$PrismaModel> | $Enums.JobListingType;
	};

	export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_avg?: NestedFloatNullableFilter<$PrismaModel>;
		_sum?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedIntNullableFilter<$PrismaModel>;
		_max?: NestedIntNullableFilter<$PrismaModel>;
	};

	export type NestedFloatNullableFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
	};

	export type NestedEnumWageIntervalWithAggregatesFilter<$PrismaModel = never> =
		{
			equals?:
				| $Enums.WageInterval
				| EnumWageIntervalFieldRefInput<$PrismaModel>;
			in?:
				| $Enums.WageInterval[]
				| ListEnumWageIntervalFieldRefInput<$PrismaModel>;
			notIn?:
				| $Enums.WageInterval[]
				| ListEnumWageIntervalFieldRefInput<$PrismaModel>;
			not?:
				| NestedEnumWageIntervalWithAggregatesFilter<$PrismaModel>
				| $Enums.WageInterval;
			_count?: NestedIntFilter<$PrismaModel>;
			_min?: NestedEnumWageIntervalFilter<$PrismaModel>;
			_max?: NestedEnumWageIntervalFilter<$PrismaModel>;
		};

	export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?:
			| NestedStringNullableWithAggregatesFilter<$PrismaModel>
			| string
			| null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedStringNullableFilter<$PrismaModel>;
		_max?: NestedStringNullableFilter<$PrismaModel>;
	};

	export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
		not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedBoolFilter<$PrismaModel>;
		_max?: NestedBoolFilter<$PrismaModel>;
	};

	export type NestedEnumLocationRequirementWithAggregatesFilter<
		$PrismaModel = never,
	> = {
		equals?:
			| $Enums.LocationRequirement
			| EnumLocationRequirementFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.LocationRequirement[]
			| ListEnumLocationRequirementFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.LocationRequirement[]
			| ListEnumLocationRequirementFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumLocationRequirementWithAggregatesFilter<$PrismaModel>
			| $Enums.LocationRequirement;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumLocationRequirementFilter<$PrismaModel>;
		_max?: NestedEnumLocationRequirementFilter<$PrismaModel>;
	};

	export type NestedEnumExperienceLevelWithAggregatesFilter<
		$PrismaModel = never,
	> = {
		equals?:
			| $Enums.ExperienceLevel
			| EnumExperienceLevelFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.ExperienceLevel[]
			| ListEnumExperienceLevelFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.ExperienceLevel[]
			| ListEnumExperienceLevelFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel>
			| $Enums.ExperienceLevel;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumExperienceLevelFilter<$PrismaModel>;
		_max?: NestedEnumExperienceLevelFilter<$PrismaModel>;
	};

	export type NestedEnumJobListingStatusWithAggregatesFilter<
		$PrismaModel = never,
	> = {
		equals?:
			| $Enums.JobListingStatus
			| EnumJobListingStatusFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.JobListingStatus[]
			| ListEnumJobListingStatusFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.JobListingStatus[]
			| ListEnumJobListingStatusFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumJobListingStatusWithAggregatesFilter<$PrismaModel>
			| $Enums.JobListingStatus;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumJobListingStatusFilter<$PrismaModel>;
		_max?: NestedEnumJobListingStatusFilter<$PrismaModel>;
	};

	export type NestedEnumJobListingTypeWithAggregatesFilter<
		$PrismaModel = never,
	> = {
		equals?:
			| $Enums.JobListingType
			| EnumJobListingTypeFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.JobListingType[]
			| ListEnumJobListingTypeFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.JobListingType[]
			| ListEnumJobListingTypeFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumJobListingTypeWithAggregatesFilter<$PrismaModel>
			| $Enums.JobListingType;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumJobListingTypeFilter<$PrismaModel>;
		_max?: NestedEnumJobListingTypeFilter<$PrismaModel>;
	};

	export type NestedEnumApplicationStageFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.ApplicationStage
			| EnumApplicationStageFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.ApplicationStage[]
			| ListEnumApplicationStageFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.ApplicationStage[]
			| ListEnumApplicationStageFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumApplicationStageFilter<$PrismaModel>
			| $Enums.ApplicationStage;
	};

	export type NestedEnumApplicationStageWithAggregatesFilter<
		$PrismaModel = never,
	> = {
		equals?:
			| $Enums.ApplicationStage
			| EnumApplicationStageFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.ApplicationStage[]
			| ListEnumApplicationStageFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.ApplicationStage[]
			| ListEnumApplicationStageFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumApplicationStageWithAggregatesFilter<$PrismaModel>
			| $Enums.ApplicationStage;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumApplicationStageFilter<$PrismaModel>;
		_max?: NestedEnumApplicationStageFilter<$PrismaModel>;
	};

	export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type NestedFloatFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatFilter<$PrismaModel> | number;
	};

	export type UserNotificationSettingCreateWithoutUserInput = {
		newJobEmailNotifications?: boolean;
		aiPrompt?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserNotificationSettingUncheckedCreateWithoutUserInput = {
		newJobEmailNotifications?: boolean;
		aiPrompt?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserNotificationSettingCreateOrConnectWithoutUserInput = {
		where: UserNotificationSettingWhereUniqueInput;
		create: XOR<
			UserNotificationSettingCreateWithoutUserInput,
			UserNotificationSettingUncheckedCreateWithoutUserInput
		>;
	};

	export type ResumeCreateWithoutUserInput = {
		fileUrl: string;
		fileKey: string;
		version?: number;
		aiSummary?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type ResumeUncheckedCreateWithoutUserInput = {
		fileUrl: string;
		fileKey: string;
		version?: number;
		aiSummary?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type ResumeCreateOrConnectWithoutUserInput = {
		where: ResumeWhereUniqueInput;
		create: XOR<
			ResumeCreateWithoutUserInput,
			ResumeUncheckedCreateWithoutUserInput
		>;
	};

	export type UserSettingUnderOrganizationCreateWithoutUserInput = {
		newApplicationEmailNotifications?: boolean;
		minimumRating?: number | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		organization: OrganizationCreateNestedOneWithoutUserSettingUnderOrganizationsInput;
	};

	export type UserSettingUnderOrganizationUncheckedCreateWithoutUserInput = {
		newApplicationEmailNotifications?: boolean;
		minimumRating?: number | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		organizationId: string;
	};

	export type UserSettingUnderOrganizationCreateOrConnectWithoutUserInput = {
		where: UserSettingUnderOrganizationWhereUniqueInput;
		create: XOR<
			UserSettingUnderOrganizationCreateWithoutUserInput,
			UserSettingUnderOrganizationUncheckedCreateWithoutUserInput
		>;
	};

	export type UserSettingUnderOrganizationCreateManyUserInputEnvelope = {
		data:
			| UserSettingUnderOrganizationCreateManyUserInput
			| UserSettingUnderOrganizationCreateManyUserInput[];
		skipDuplicates?: boolean;
	};

	export type ApplicationCreateWithoutUserInput = {
		id?: string;
		coverLetter?: string | null;
		rating?: number | null;
		stage?: $Enums.ApplicationStage;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		jobListing: JobListingCreateNestedOneWithoutApplicationsInput;
	};

	export type ApplicationUncheckedCreateWithoutUserInput = {
		id?: string;
		coverLetter?: string | null;
		rating?: number | null;
		stage?: $Enums.ApplicationStage;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		jobListingId: string;
	};

	export type ApplicationCreateOrConnectWithoutUserInput = {
		where: ApplicationWhereUniqueInput;
		create: XOR<
			ApplicationCreateWithoutUserInput,
			ApplicationUncheckedCreateWithoutUserInput
		>;
	};

	export type ApplicationCreateManyUserInputEnvelope = {
		data: ApplicationCreateManyUserInput | ApplicationCreateManyUserInput[];
		skipDuplicates?: boolean;
	};

	export type UserNotificationSettingUpsertWithoutUserInput = {
		update: XOR<
			UserNotificationSettingUpdateWithoutUserInput,
			UserNotificationSettingUncheckedUpdateWithoutUserInput
		>;
		create: XOR<
			UserNotificationSettingCreateWithoutUserInput,
			UserNotificationSettingUncheckedCreateWithoutUserInput
		>;
		where?: UserNotificationSettingWhereInput;
	};

	export type UserNotificationSettingUpdateToOneWithWhereWithoutUserInput = {
		where?: UserNotificationSettingWhereInput;
		data: XOR<
			UserNotificationSettingUpdateWithoutUserInput,
			UserNotificationSettingUncheckedUpdateWithoutUserInput
		>;
	};

	export type UserNotificationSettingUpdateWithoutUserInput = {
		newJobEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserNotificationSettingUncheckedUpdateWithoutUserInput = {
		newJobEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ResumeUpsertWithoutUserInput = {
		update: XOR<
			ResumeUpdateWithoutUserInput,
			ResumeUncheckedUpdateWithoutUserInput
		>;
		create: XOR<
			ResumeCreateWithoutUserInput,
			ResumeUncheckedCreateWithoutUserInput
		>;
		where?: ResumeWhereInput;
	};

	export type ResumeUpdateToOneWithWhereWithoutUserInput = {
		where?: ResumeWhereInput;
		data: XOR<
			ResumeUpdateWithoutUserInput,
			ResumeUncheckedUpdateWithoutUserInput
		>;
	};

	export type ResumeUpdateWithoutUserInput = {
		fileUrl?: StringFieldUpdateOperationsInput | string;
		fileKey?: StringFieldUpdateOperationsInput | string;
		version?: IntFieldUpdateOperationsInput | number;
		aiSummary?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type ResumeUncheckedUpdateWithoutUserInput = {
		fileUrl?: StringFieldUpdateOperationsInput | string;
		fileKey?: StringFieldUpdateOperationsInput | string;
		version?: IntFieldUpdateOperationsInput | number;
		aiSummary?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserSettingUnderOrganizationUpsertWithWhereUniqueWithoutUserInput =
		{
			where: UserSettingUnderOrganizationWhereUniqueInput;
			update: XOR<
				UserSettingUnderOrganizationUpdateWithoutUserInput,
				UserSettingUnderOrganizationUncheckedUpdateWithoutUserInput
			>;
			create: XOR<
				UserSettingUnderOrganizationCreateWithoutUserInput,
				UserSettingUnderOrganizationUncheckedCreateWithoutUserInput
			>;
		};

	export type UserSettingUnderOrganizationUpdateWithWhereUniqueWithoutUserInput =
		{
			where: UserSettingUnderOrganizationWhereUniqueInput;
			data: XOR<
				UserSettingUnderOrganizationUpdateWithoutUserInput,
				UserSettingUnderOrganizationUncheckedUpdateWithoutUserInput
			>;
		};

	export type UserSettingUnderOrganizationUpdateManyWithWhereWithoutUserInput =
		{
			where: UserSettingUnderOrganizationScalarWhereInput;
			data: XOR<
				UserSettingUnderOrganizationUpdateManyMutationInput,
				UserSettingUnderOrganizationUncheckedUpdateManyWithoutUserInput
			>;
		};

	export type UserSettingUnderOrganizationScalarWhereInput = {
		AND?:
			| UserSettingUnderOrganizationScalarWhereInput
			| UserSettingUnderOrganizationScalarWhereInput[];
		OR?: UserSettingUnderOrganizationScalarWhereInput[];
		NOT?:
			| UserSettingUnderOrganizationScalarWhereInput
			| UserSettingUnderOrganizationScalarWhereInput[];
		newApplicationEmailNotifications?:
			| BoolFilter<"UserSettingUnderOrganization">
			| boolean;
		minimumRating?:
			| IntNullableFilter<"UserSettingUnderOrganization">
			| number
			| null;
		createdAt?: DateTimeFilter<"UserSettingUnderOrganization"> | Date | string;
		updatedAt?: DateTimeFilter<"UserSettingUnderOrganization"> | Date | string;
		userId?: StringFilter<"UserSettingUnderOrganization"> | string;
		organizationId?: StringFilter<"UserSettingUnderOrganization"> | string;
	};

	export type ApplicationUpsertWithWhereUniqueWithoutUserInput = {
		where: ApplicationWhereUniqueInput;
		update: XOR<
			ApplicationUpdateWithoutUserInput,
			ApplicationUncheckedUpdateWithoutUserInput
		>;
		create: XOR<
			ApplicationCreateWithoutUserInput,
			ApplicationUncheckedCreateWithoutUserInput
		>;
	};

	export type ApplicationUpdateWithWhereUniqueWithoutUserInput = {
		where: ApplicationWhereUniqueInput;
		data: XOR<
			ApplicationUpdateWithoutUserInput,
			ApplicationUncheckedUpdateWithoutUserInput
		>;
	};

	export type ApplicationUpdateManyWithWhereWithoutUserInput = {
		where: ApplicationScalarWhereInput;
		data: XOR<
			ApplicationUpdateManyMutationInput,
			ApplicationUncheckedUpdateManyWithoutUserInput
		>;
	};

	export type ApplicationScalarWhereInput = {
		AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
		OR?: ApplicationScalarWhereInput[];
		NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
		id?: StringFilter<"Application"> | string;
		coverLetter?: StringNullableFilter<"Application"> | string | null;
		rating?: IntNullableFilter<"Application"> | number | null;
		stage?: EnumApplicationStageFilter<"Application"> | $Enums.ApplicationStage;
		createdAt?: DateTimeFilter<"Application"> | Date | string;
		updatedAt?: DateTimeFilter<"Application"> | Date | string;
		jobListingId?: StringFilter<"Application"> | string;
		userId?: StringFilter<"Application"> | string;
	};

	export type JobListingCreateWithoutOrganizationInput = {
		id?: string;
		title: string;
		description: string;
		wage?: number | null;
		wageInterval?: $Enums.WageInterval;
		stateAbbreviation?: string | null;
		city?: string | null;
		isFeatured?: boolean;
		locationRequirement?: $Enums.LocationRequirement;
		experienceLevel?: $Enums.ExperienceLevel;
		status?: $Enums.JobListingStatus;
		type?: $Enums.JobListingType;
		postedAt: Date | string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		applications?: ApplicationCreateNestedManyWithoutJobListingInput;
	};

	export type JobListingUncheckedCreateWithoutOrganizationInput = {
		id?: string;
		title: string;
		description: string;
		wage?: number | null;
		wageInterval?: $Enums.WageInterval;
		stateAbbreviation?: string | null;
		city?: string | null;
		isFeatured?: boolean;
		locationRequirement?: $Enums.LocationRequirement;
		experienceLevel?: $Enums.ExperienceLevel;
		status?: $Enums.JobListingStatus;
		type?: $Enums.JobListingType;
		postedAt: Date | string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		applications?: ApplicationUncheckedCreateNestedManyWithoutJobListingInput;
	};

	export type JobListingCreateOrConnectWithoutOrganizationInput = {
		where: JobListingWhereUniqueInput;
		create: XOR<
			JobListingCreateWithoutOrganizationInput,
			JobListingUncheckedCreateWithoutOrganizationInput
		>;
	};

	export type JobListingCreateManyOrganizationInputEnvelope = {
		data:
			| JobListingCreateManyOrganizationInput
			| JobListingCreateManyOrganizationInput[];
		skipDuplicates?: boolean;
	};

	export type UserSettingUnderOrganizationCreateWithoutOrganizationInput = {
		newApplicationEmailNotifications?: boolean;
		minimumRating?: number | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user: UserCreateNestedOneWithoutUserSettingUnderOrganizationsInput;
	};

	export type UserSettingUnderOrganizationUncheckedCreateWithoutOrganizationInput =
		{
			newApplicationEmailNotifications?: boolean;
			minimumRating?: number | null;
			createdAt?: Date | string;
			updatedAt?: Date | string;
			userId: string;
		};

	export type UserSettingUnderOrganizationCreateOrConnectWithoutOrganizationInput =
		{
			where: UserSettingUnderOrganizationWhereUniqueInput;
			create: XOR<
				UserSettingUnderOrganizationCreateWithoutOrganizationInput,
				UserSettingUnderOrganizationUncheckedCreateWithoutOrganizationInput
			>;
		};

	export type UserSettingUnderOrganizationCreateManyOrganizationInputEnvelope =
		{
			data:
				| UserSettingUnderOrganizationCreateManyOrganizationInput
				| UserSettingUnderOrganizationCreateManyOrganizationInput[];
			skipDuplicates?: boolean;
		};

	export type JobListingUpsertWithWhereUniqueWithoutOrganizationInput = {
		where: JobListingWhereUniqueInput;
		update: XOR<
			JobListingUpdateWithoutOrganizationInput,
			JobListingUncheckedUpdateWithoutOrganizationInput
		>;
		create: XOR<
			JobListingCreateWithoutOrganizationInput,
			JobListingUncheckedCreateWithoutOrganizationInput
		>;
	};

	export type JobListingUpdateWithWhereUniqueWithoutOrganizationInput = {
		where: JobListingWhereUniqueInput;
		data: XOR<
			JobListingUpdateWithoutOrganizationInput,
			JobListingUncheckedUpdateWithoutOrganizationInput
		>;
	};

	export type JobListingUpdateManyWithWhereWithoutOrganizationInput = {
		where: JobListingScalarWhereInput;
		data: XOR<
			JobListingUpdateManyMutationInput,
			JobListingUncheckedUpdateManyWithoutOrganizationInput
		>;
	};

	export type JobListingScalarWhereInput = {
		AND?: JobListingScalarWhereInput | JobListingScalarWhereInput[];
		OR?: JobListingScalarWhereInput[];
		NOT?: JobListingScalarWhereInput | JobListingScalarWhereInput[];
		id?: StringFilter<"JobListing"> | string;
		title?: StringFilter<"JobListing"> | string;
		description?: StringFilter<"JobListing"> | string;
		wage?: IntNullableFilter<"JobListing"> | number | null;
		wageInterval?: EnumWageIntervalFilter<"JobListing"> | $Enums.WageInterval;
		stateAbbreviation?: StringNullableFilter<"JobListing"> | string | null;
		city?: StringNullableFilter<"JobListing"> | string | null;
		isFeatured?: BoolFilter<"JobListing"> | boolean;
		locationRequirement?:
			| EnumLocationRequirementFilter<"JobListing">
			| $Enums.LocationRequirement;
		experienceLevel?:
			| EnumExperienceLevelFilter<"JobListing">
			| $Enums.ExperienceLevel;
		status?: EnumJobListingStatusFilter<"JobListing"> | $Enums.JobListingStatus;
		type?: EnumJobListingTypeFilter<"JobListing"> | $Enums.JobListingType;
		postedAt?: DateTimeFilter<"JobListing"> | Date | string;
		createdAt?: DateTimeFilter<"JobListing"> | Date | string;
		updatedAt?: DateTimeFilter<"JobListing"> | Date | string;
		organizationId?: StringFilter<"JobListing"> | string;
	};

	export type UserSettingUnderOrganizationUpsertWithWhereUniqueWithoutOrganizationInput =
		{
			where: UserSettingUnderOrganizationWhereUniqueInput;
			update: XOR<
				UserSettingUnderOrganizationUpdateWithoutOrganizationInput,
				UserSettingUnderOrganizationUncheckedUpdateWithoutOrganizationInput
			>;
			create: XOR<
				UserSettingUnderOrganizationCreateWithoutOrganizationInput,
				UserSettingUnderOrganizationUncheckedCreateWithoutOrganizationInput
			>;
		};

	export type UserSettingUnderOrganizationUpdateWithWhereUniqueWithoutOrganizationInput =
		{
			where: UserSettingUnderOrganizationWhereUniqueInput;
			data: XOR<
				UserSettingUnderOrganizationUpdateWithoutOrganizationInput,
				UserSettingUnderOrganizationUncheckedUpdateWithoutOrganizationInput
			>;
		};

	export type UserSettingUnderOrganizationUpdateManyWithWhereWithoutOrganizationInput =
		{
			where: UserSettingUnderOrganizationScalarWhereInput;
			data: XOR<
				UserSettingUnderOrganizationUpdateManyMutationInput,
				UserSettingUnderOrganizationUncheckedUpdateManyWithoutOrganizationInput
			>;
		};

	export type ApplicationCreateWithoutJobListingInput = {
		id?: string;
		coverLetter?: string | null;
		rating?: number | null;
		stage?: $Enums.ApplicationStage;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user: UserCreateNestedOneWithoutApplicationsInput;
	};

	export type ApplicationUncheckedCreateWithoutJobListingInput = {
		id?: string;
		coverLetter?: string | null;
		rating?: number | null;
		stage?: $Enums.ApplicationStage;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId: string;
	};

	export type ApplicationCreateOrConnectWithoutJobListingInput = {
		where: ApplicationWhereUniqueInput;
		create: XOR<
			ApplicationCreateWithoutJobListingInput,
			ApplicationUncheckedCreateWithoutJobListingInput
		>;
	};

	export type ApplicationCreateManyJobListingInputEnvelope = {
		data:
			| ApplicationCreateManyJobListingInput
			| ApplicationCreateManyJobListingInput[];
		skipDuplicates?: boolean;
	};

	export type OrganizationCreateWithoutJobListingsInput = {
		id?: string;
		name: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationCreateNestedManyWithoutOrganizationInput;
	};

	export type OrganizationUncheckedCreateWithoutJobListingsInput = {
		id?: string;
		name: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUncheckedCreateNestedManyWithoutOrganizationInput;
	};

	export type OrganizationCreateOrConnectWithoutJobListingsInput = {
		where: OrganizationWhereUniqueInput;
		create: XOR<
			OrganizationCreateWithoutJobListingsInput,
			OrganizationUncheckedCreateWithoutJobListingsInput
		>;
	};

	export type ApplicationUpsertWithWhereUniqueWithoutJobListingInput = {
		where: ApplicationWhereUniqueInput;
		update: XOR<
			ApplicationUpdateWithoutJobListingInput,
			ApplicationUncheckedUpdateWithoutJobListingInput
		>;
		create: XOR<
			ApplicationCreateWithoutJobListingInput,
			ApplicationUncheckedCreateWithoutJobListingInput
		>;
	};

	export type ApplicationUpdateWithWhereUniqueWithoutJobListingInput = {
		where: ApplicationWhereUniqueInput;
		data: XOR<
			ApplicationUpdateWithoutJobListingInput,
			ApplicationUncheckedUpdateWithoutJobListingInput
		>;
	};

	export type ApplicationUpdateManyWithWhereWithoutJobListingInput = {
		where: ApplicationScalarWhereInput;
		data: XOR<
			ApplicationUpdateManyMutationInput,
			ApplicationUncheckedUpdateManyWithoutJobListingInput
		>;
	};

	export type OrganizationUpsertWithoutJobListingsInput = {
		update: XOR<
			OrganizationUpdateWithoutJobListingsInput,
			OrganizationUncheckedUpdateWithoutJobListingsInput
		>;
		create: XOR<
			OrganizationCreateWithoutJobListingsInput,
			OrganizationUncheckedCreateWithoutJobListingsInput
		>;
		where?: OrganizationWhereInput;
	};

	export type OrganizationUpdateToOneWithWhereWithoutJobListingsInput = {
		where?: OrganizationWhereInput;
		data: XOR<
			OrganizationUpdateWithoutJobListingsInput,
			OrganizationUncheckedUpdateWithoutJobListingsInput
		>;
	};

	export type OrganizationUpdateWithoutJobListingsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUpdateManyWithoutOrganizationNestedInput;
	};

	export type OrganizationUncheckedUpdateWithoutJobListingsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUncheckedUpdateManyWithoutOrganizationNestedInput;
	};

	export type JobListingCreateWithoutApplicationsInput = {
		id?: string;
		title: string;
		description: string;
		wage?: number | null;
		wageInterval?: $Enums.WageInterval;
		stateAbbreviation?: string | null;
		city?: string | null;
		isFeatured?: boolean;
		locationRequirement?: $Enums.LocationRequirement;
		experienceLevel?: $Enums.ExperienceLevel;
		status?: $Enums.JobListingStatus;
		type?: $Enums.JobListingType;
		postedAt: Date | string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		organization: OrganizationCreateNestedOneWithoutJobListingsInput;
	};

	export type JobListingUncheckedCreateWithoutApplicationsInput = {
		id?: string;
		title: string;
		description: string;
		wage?: number | null;
		wageInterval?: $Enums.WageInterval;
		stateAbbreviation?: string | null;
		city?: string | null;
		isFeatured?: boolean;
		locationRequirement?: $Enums.LocationRequirement;
		experienceLevel?: $Enums.ExperienceLevel;
		status?: $Enums.JobListingStatus;
		type?: $Enums.JobListingType;
		postedAt: Date | string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		organizationId: string;
	};

	export type JobListingCreateOrConnectWithoutApplicationsInput = {
		where: JobListingWhereUniqueInput;
		create: XOR<
			JobListingCreateWithoutApplicationsInput,
			JobListingUncheckedCreateWithoutApplicationsInput
		>;
	};

	export type UserCreateWithoutApplicationsInput = {
		id: string;
		name: string;
		email: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		notificationSetting?: UserNotificationSettingCreateNestedOneWithoutUserInput;
		resume?: ResumeCreateNestedOneWithoutUserInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationCreateNestedManyWithoutUserInput;
	};

	export type UserUncheckedCreateWithoutApplicationsInput = {
		id: string;
		name: string;
		email: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		notificationSetting?: UserNotificationSettingUncheckedCreateNestedOneWithoutUserInput;
		resume?: ResumeUncheckedCreateNestedOneWithoutUserInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUncheckedCreateNestedManyWithoutUserInput;
	};

	export type UserCreateOrConnectWithoutApplicationsInput = {
		where: UserWhereUniqueInput;
		create: XOR<
			UserCreateWithoutApplicationsInput,
			UserUncheckedCreateWithoutApplicationsInput
		>;
	};

	export type JobListingUpsertWithoutApplicationsInput = {
		update: XOR<
			JobListingUpdateWithoutApplicationsInput,
			JobListingUncheckedUpdateWithoutApplicationsInput
		>;
		create: XOR<
			JobListingCreateWithoutApplicationsInput,
			JobListingUncheckedCreateWithoutApplicationsInput
		>;
		where?: JobListingWhereInput;
	};

	export type JobListingUpdateToOneWithWhereWithoutApplicationsInput = {
		where?: JobListingWhereInput;
		data: XOR<
			JobListingUpdateWithoutApplicationsInput,
			JobListingUncheckedUpdateWithoutApplicationsInput
		>;
	};

	export type JobListingUpdateWithoutApplicationsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		wage?: NullableIntFieldUpdateOperationsInput | number | null;
		wageInterval?:
			| EnumWageIntervalFieldUpdateOperationsInput
			| $Enums.WageInterval;
		stateAbbreviation?:
			| NullableStringFieldUpdateOperationsInput
			| string
			| null;
		city?: NullableStringFieldUpdateOperationsInput | string | null;
		isFeatured?: BoolFieldUpdateOperationsInput | boolean;
		locationRequirement?:
			| EnumLocationRequirementFieldUpdateOperationsInput
			| $Enums.LocationRequirement;
		experienceLevel?:
			| EnumExperienceLevelFieldUpdateOperationsInput
			| $Enums.ExperienceLevel;
		status?:
			| EnumJobListingStatusFieldUpdateOperationsInput
			| $Enums.JobListingStatus;
		type?: EnumJobListingTypeFieldUpdateOperationsInput | $Enums.JobListingType;
		postedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		organization?: OrganizationUpdateOneRequiredWithoutJobListingsNestedInput;
	};

	export type JobListingUncheckedUpdateWithoutApplicationsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		wage?: NullableIntFieldUpdateOperationsInput | number | null;
		wageInterval?:
			| EnumWageIntervalFieldUpdateOperationsInput
			| $Enums.WageInterval;
		stateAbbreviation?:
			| NullableStringFieldUpdateOperationsInput
			| string
			| null;
		city?: NullableStringFieldUpdateOperationsInput | string | null;
		isFeatured?: BoolFieldUpdateOperationsInput | boolean;
		locationRequirement?:
			| EnumLocationRequirementFieldUpdateOperationsInput
			| $Enums.LocationRequirement;
		experienceLevel?:
			| EnumExperienceLevelFieldUpdateOperationsInput
			| $Enums.ExperienceLevel;
		status?:
			| EnumJobListingStatusFieldUpdateOperationsInput
			| $Enums.JobListingStatus;
		type?: EnumJobListingTypeFieldUpdateOperationsInput | $Enums.JobListingType;
		postedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		organizationId?: StringFieldUpdateOperationsInput | string;
	};

	export type UserUpsertWithoutApplicationsInput = {
		update: XOR<
			UserUpdateWithoutApplicationsInput,
			UserUncheckedUpdateWithoutApplicationsInput
		>;
		create: XOR<
			UserCreateWithoutApplicationsInput,
			UserUncheckedCreateWithoutApplicationsInput
		>;
		where?: UserWhereInput;
	};

	export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
		where?: UserWhereInput;
		data: XOR<
			UserUpdateWithoutApplicationsInput,
			UserUncheckedUpdateWithoutApplicationsInput
		>;
	};

	export type UserUpdateWithoutApplicationsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		notificationSetting?: UserNotificationSettingUpdateOneWithoutUserNestedInput;
		resume?: ResumeUpdateOneWithoutUserNestedInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUpdateManyWithoutUserNestedInput;
	};

	export type UserUncheckedUpdateWithoutApplicationsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		notificationSetting?: UserNotificationSettingUncheckedUpdateOneWithoutUserNestedInput;
		resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUncheckedUpdateManyWithoutUserNestedInput;
	};

	export type UserCreateWithoutResumeInput = {
		id: string;
		name: string;
		email: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		notificationSetting?: UserNotificationSettingCreateNestedOneWithoutUserInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationCreateNestedManyWithoutUserInput;
		applications?: ApplicationCreateNestedManyWithoutUserInput;
	};

	export type UserUncheckedCreateWithoutResumeInput = {
		id: string;
		name: string;
		email: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		notificationSetting?: UserNotificationSettingUncheckedCreateNestedOneWithoutUserInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUncheckedCreateNestedManyWithoutUserInput;
		applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput;
	};

	export type UserCreateOrConnectWithoutResumeInput = {
		where: UserWhereUniqueInput;
		create: XOR<
			UserCreateWithoutResumeInput,
			UserUncheckedCreateWithoutResumeInput
		>;
	};

	export type UserUpsertWithoutResumeInput = {
		update: XOR<
			UserUpdateWithoutResumeInput,
			UserUncheckedUpdateWithoutResumeInput
		>;
		create: XOR<
			UserCreateWithoutResumeInput,
			UserUncheckedCreateWithoutResumeInput
		>;
		where?: UserWhereInput;
	};

	export type UserUpdateToOneWithWhereWithoutResumeInput = {
		where?: UserWhereInput;
		data: XOR<
			UserUpdateWithoutResumeInput,
			UserUncheckedUpdateWithoutResumeInput
		>;
	};

	export type UserUpdateWithoutResumeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		notificationSetting?: UserNotificationSettingUpdateOneWithoutUserNestedInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUpdateManyWithoutUserNestedInput;
		applications?: ApplicationUpdateManyWithoutUserNestedInput;
	};

	export type UserUncheckedUpdateWithoutResumeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		notificationSetting?: UserNotificationSettingUncheckedUpdateOneWithoutUserNestedInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUncheckedUpdateManyWithoutUserNestedInput;
		applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput;
	};

	export type UserCreateWithoutUserSettingUnderOrganizationsInput = {
		id: string;
		name: string;
		email: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		notificationSetting?: UserNotificationSettingCreateNestedOneWithoutUserInput;
		resume?: ResumeCreateNestedOneWithoutUserInput;
		applications?: ApplicationCreateNestedManyWithoutUserInput;
	};

	export type UserUncheckedCreateWithoutUserSettingUnderOrganizationsInput = {
		id: string;
		name: string;
		email: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		notificationSetting?: UserNotificationSettingUncheckedCreateNestedOneWithoutUserInput;
		resume?: ResumeUncheckedCreateNestedOneWithoutUserInput;
		applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput;
	};

	export type UserCreateOrConnectWithoutUserSettingUnderOrganizationsInput = {
		where: UserWhereUniqueInput;
		create: XOR<
			UserCreateWithoutUserSettingUnderOrganizationsInput,
			UserUncheckedCreateWithoutUserSettingUnderOrganizationsInput
		>;
	};

	export type OrganizationCreateWithoutUserSettingUnderOrganizationsInput = {
		id?: string;
		name: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		jobListings?: JobListingCreateNestedManyWithoutOrganizationInput;
	};

	export type OrganizationUncheckedCreateWithoutUserSettingUnderOrganizationsInput =
		{
			id?: string;
			name: string;
			imageUrl: string;
			createdAt?: Date | string;
			updatedAt?: Date | string;
			jobListings?: JobListingUncheckedCreateNestedManyWithoutOrganizationInput;
		};

	export type OrganizationCreateOrConnectWithoutUserSettingUnderOrganizationsInput =
		{
			where: OrganizationWhereUniqueInput;
			create: XOR<
				OrganizationCreateWithoutUserSettingUnderOrganizationsInput,
				OrganizationUncheckedCreateWithoutUserSettingUnderOrganizationsInput
			>;
		};

	export type UserUpsertWithoutUserSettingUnderOrganizationsInput = {
		update: XOR<
			UserUpdateWithoutUserSettingUnderOrganizationsInput,
			UserUncheckedUpdateWithoutUserSettingUnderOrganizationsInput
		>;
		create: XOR<
			UserCreateWithoutUserSettingUnderOrganizationsInput,
			UserUncheckedCreateWithoutUserSettingUnderOrganizationsInput
		>;
		where?: UserWhereInput;
	};

	export type UserUpdateToOneWithWhereWithoutUserSettingUnderOrganizationsInput =
		{
			where?: UserWhereInput;
			data: XOR<
				UserUpdateWithoutUserSettingUnderOrganizationsInput,
				UserUncheckedUpdateWithoutUserSettingUnderOrganizationsInput
			>;
		};

	export type UserUpdateWithoutUserSettingUnderOrganizationsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		notificationSetting?: UserNotificationSettingUpdateOneWithoutUserNestedInput;
		resume?: ResumeUpdateOneWithoutUserNestedInput;
		applications?: ApplicationUpdateManyWithoutUserNestedInput;
	};

	export type UserUncheckedUpdateWithoutUserSettingUnderOrganizationsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		notificationSetting?: UserNotificationSettingUncheckedUpdateOneWithoutUserNestedInput;
		resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput;
		applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput;
	};

	export type OrganizationUpsertWithoutUserSettingUnderOrganizationsInput = {
		update: XOR<
			OrganizationUpdateWithoutUserSettingUnderOrganizationsInput,
			OrganizationUncheckedUpdateWithoutUserSettingUnderOrganizationsInput
		>;
		create: XOR<
			OrganizationCreateWithoutUserSettingUnderOrganizationsInput,
			OrganizationUncheckedCreateWithoutUserSettingUnderOrganizationsInput
		>;
		where?: OrganizationWhereInput;
	};

	export type OrganizationUpdateToOneWithWhereWithoutUserSettingUnderOrganizationsInput =
		{
			where?: OrganizationWhereInput;
			data: XOR<
				OrganizationUpdateWithoutUserSettingUnderOrganizationsInput,
				OrganizationUncheckedUpdateWithoutUserSettingUnderOrganizationsInput
			>;
		};

	export type OrganizationUpdateWithoutUserSettingUnderOrganizationsInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		jobListings?: JobListingUpdateManyWithoutOrganizationNestedInput;
	};

	export type OrganizationUncheckedUpdateWithoutUserSettingUnderOrganizationsInput =
		{
			id?: StringFieldUpdateOperationsInput | string;
			name?: StringFieldUpdateOperationsInput | string;
			imageUrl?: StringFieldUpdateOperationsInput | string;
			createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
			updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
			jobListings?: JobListingUncheckedUpdateManyWithoutOrganizationNestedInput;
		};

	export type UserCreateWithoutNotificationSettingInput = {
		id: string;
		name: string;
		email: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		resume?: ResumeCreateNestedOneWithoutUserInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationCreateNestedManyWithoutUserInput;
		applications?: ApplicationCreateNestedManyWithoutUserInput;
	};

	export type UserUncheckedCreateWithoutNotificationSettingInput = {
		id: string;
		name: string;
		email: string;
		imageUrl: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		resume?: ResumeUncheckedCreateNestedOneWithoutUserInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUncheckedCreateNestedManyWithoutUserInput;
		applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput;
	};

	export type UserCreateOrConnectWithoutNotificationSettingInput = {
		where: UserWhereUniqueInput;
		create: XOR<
			UserCreateWithoutNotificationSettingInput,
			UserUncheckedCreateWithoutNotificationSettingInput
		>;
	};

	export type UserUpsertWithoutNotificationSettingInput = {
		update: XOR<
			UserUpdateWithoutNotificationSettingInput,
			UserUncheckedUpdateWithoutNotificationSettingInput
		>;
		create: XOR<
			UserCreateWithoutNotificationSettingInput,
			UserUncheckedCreateWithoutNotificationSettingInput
		>;
		where?: UserWhereInput;
	};

	export type UserUpdateToOneWithWhereWithoutNotificationSettingInput = {
		where?: UserWhereInput;
		data: XOR<
			UserUpdateWithoutNotificationSettingInput,
			UserUncheckedUpdateWithoutNotificationSettingInput
		>;
	};

	export type UserUpdateWithoutNotificationSettingInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		resume?: ResumeUpdateOneWithoutUserNestedInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUpdateManyWithoutUserNestedInput;
		applications?: ApplicationUpdateManyWithoutUserNestedInput;
	};

	export type UserUncheckedUpdateWithoutNotificationSettingInput = {
		id?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		imageUrl?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput;
		userSettingUnderOrganizations?: UserSettingUnderOrganizationUncheckedUpdateManyWithoutUserNestedInput;
		applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput;
	};

	export type UserSettingUnderOrganizationCreateManyUserInput = {
		newApplicationEmailNotifications?: boolean;
		minimumRating?: number | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		organizationId: string;
	};

	export type ApplicationCreateManyUserInput = {
		id?: string;
		coverLetter?: string | null;
		rating?: number | null;
		stage?: $Enums.ApplicationStage;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		jobListingId: string;
	};

	export type UserSettingUnderOrganizationUpdateWithoutUserInput = {
		newApplicationEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		minimumRating?: NullableIntFieldUpdateOperationsInput | number | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		organization?: OrganizationUpdateOneRequiredWithoutUserSettingUnderOrganizationsNestedInput;
	};

	export type UserSettingUnderOrganizationUncheckedUpdateWithoutUserInput = {
		newApplicationEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		minimumRating?: NullableIntFieldUpdateOperationsInput | number | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		organizationId?: StringFieldUpdateOperationsInput | string;
	};

	export type UserSettingUnderOrganizationUncheckedUpdateManyWithoutUserInput =
		{
			newApplicationEmailNotifications?:
				| BoolFieldUpdateOperationsInput
				| boolean;
			minimumRating?: NullableIntFieldUpdateOperationsInput | number | null;
			createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
			updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
			organizationId?: StringFieldUpdateOperationsInput | string;
		};

	export type ApplicationUpdateWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
		rating?: NullableIntFieldUpdateOperationsInput | number | null;
		stage?:
			| EnumApplicationStageFieldUpdateOperationsInput
			| $Enums.ApplicationStage;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		jobListing?: JobListingUpdateOneRequiredWithoutApplicationsNestedInput;
	};

	export type ApplicationUncheckedUpdateWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
		rating?: NullableIntFieldUpdateOperationsInput | number | null;
		stage?:
			| EnumApplicationStageFieldUpdateOperationsInput
			| $Enums.ApplicationStage;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		jobListingId?: StringFieldUpdateOperationsInput | string;
	};

	export type ApplicationUncheckedUpdateManyWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
		rating?: NullableIntFieldUpdateOperationsInput | number | null;
		stage?:
			| EnumApplicationStageFieldUpdateOperationsInput
			| $Enums.ApplicationStage;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		jobListingId?: StringFieldUpdateOperationsInput | string;
	};

	export type JobListingCreateManyOrganizationInput = {
		id?: string;
		title: string;
		description: string;
		wage?: number | null;
		wageInterval?: $Enums.WageInterval;
		stateAbbreviation?: string | null;
		city?: string | null;
		isFeatured?: boolean;
		locationRequirement?: $Enums.LocationRequirement;
		experienceLevel?: $Enums.ExperienceLevel;
		status?: $Enums.JobListingStatus;
		type?: $Enums.JobListingType;
		postedAt: Date | string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserSettingUnderOrganizationCreateManyOrganizationInput = {
		newApplicationEmailNotifications?: boolean;
		minimumRating?: number | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId: string;
	};

	export type JobListingUpdateWithoutOrganizationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		wage?: NullableIntFieldUpdateOperationsInput | number | null;
		wageInterval?:
			| EnumWageIntervalFieldUpdateOperationsInput
			| $Enums.WageInterval;
		stateAbbreviation?:
			| NullableStringFieldUpdateOperationsInput
			| string
			| null;
		city?: NullableStringFieldUpdateOperationsInput | string | null;
		isFeatured?: BoolFieldUpdateOperationsInput | boolean;
		locationRequirement?:
			| EnumLocationRequirementFieldUpdateOperationsInput
			| $Enums.LocationRequirement;
		experienceLevel?:
			| EnumExperienceLevelFieldUpdateOperationsInput
			| $Enums.ExperienceLevel;
		status?:
			| EnumJobListingStatusFieldUpdateOperationsInput
			| $Enums.JobListingStatus;
		type?: EnumJobListingTypeFieldUpdateOperationsInput | $Enums.JobListingType;
		postedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		applications?: ApplicationUpdateManyWithoutJobListingNestedInput;
	};

	export type JobListingUncheckedUpdateWithoutOrganizationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		wage?: NullableIntFieldUpdateOperationsInput | number | null;
		wageInterval?:
			| EnumWageIntervalFieldUpdateOperationsInput
			| $Enums.WageInterval;
		stateAbbreviation?:
			| NullableStringFieldUpdateOperationsInput
			| string
			| null;
		city?: NullableStringFieldUpdateOperationsInput | string | null;
		isFeatured?: BoolFieldUpdateOperationsInput | boolean;
		locationRequirement?:
			| EnumLocationRequirementFieldUpdateOperationsInput
			| $Enums.LocationRequirement;
		experienceLevel?:
			| EnumExperienceLevelFieldUpdateOperationsInput
			| $Enums.ExperienceLevel;
		status?:
			| EnumJobListingStatusFieldUpdateOperationsInput
			| $Enums.JobListingStatus;
		type?: EnumJobListingTypeFieldUpdateOperationsInput | $Enums.JobListingType;
		postedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		applications?: ApplicationUncheckedUpdateManyWithoutJobListingNestedInput;
	};

	export type JobListingUncheckedUpdateManyWithoutOrganizationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		wage?: NullableIntFieldUpdateOperationsInput | number | null;
		wageInterval?:
			| EnumWageIntervalFieldUpdateOperationsInput
			| $Enums.WageInterval;
		stateAbbreviation?:
			| NullableStringFieldUpdateOperationsInput
			| string
			| null;
		city?: NullableStringFieldUpdateOperationsInput | string | null;
		isFeatured?: BoolFieldUpdateOperationsInput | boolean;
		locationRequirement?:
			| EnumLocationRequirementFieldUpdateOperationsInput
			| $Enums.LocationRequirement;
		experienceLevel?:
			| EnumExperienceLevelFieldUpdateOperationsInput
			| $Enums.ExperienceLevel;
		status?:
			| EnumJobListingStatusFieldUpdateOperationsInput
			| $Enums.JobListingStatus;
		type?: EnumJobListingTypeFieldUpdateOperationsInput | $Enums.JobListingType;
		postedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserSettingUnderOrganizationUpdateWithoutOrganizationInput = {
		newApplicationEmailNotifications?: BoolFieldUpdateOperationsInput | boolean;
		minimumRating?: NullableIntFieldUpdateOperationsInput | number | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneRequiredWithoutUserSettingUnderOrganizationsNestedInput;
	};

	export type UserSettingUnderOrganizationUncheckedUpdateWithoutOrganizationInput =
		{
			newApplicationEmailNotifications?:
				| BoolFieldUpdateOperationsInput
				| boolean;
			minimumRating?: NullableIntFieldUpdateOperationsInput | number | null;
			createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
			updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
			userId?: StringFieldUpdateOperationsInput | string;
		};

	export type UserSettingUnderOrganizationUncheckedUpdateManyWithoutOrganizationInput =
		{
			newApplicationEmailNotifications?:
				| BoolFieldUpdateOperationsInput
				| boolean;
			minimumRating?: NullableIntFieldUpdateOperationsInput | number | null;
			createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
			updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
			userId?: StringFieldUpdateOperationsInput | string;
		};

	export type ApplicationCreateManyJobListingInput = {
		id?: string;
		coverLetter?: string | null;
		rating?: number | null;
		stage?: $Enums.ApplicationStage;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		userId: string;
	};

	export type ApplicationUpdateWithoutJobListingInput = {
		id?: StringFieldUpdateOperationsInput | string;
		coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
		rating?: NullableIntFieldUpdateOperationsInput | number | null;
		stage?:
			| EnumApplicationStageFieldUpdateOperationsInput
			| $Enums.ApplicationStage;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneRequiredWithoutApplicationsNestedInput;
	};

	export type ApplicationUncheckedUpdateWithoutJobListingInput = {
		id?: StringFieldUpdateOperationsInput | string;
		coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
		rating?: NullableIntFieldUpdateOperationsInput | number | null;
		stage?:
			| EnumApplicationStageFieldUpdateOperationsInput
			| $Enums.ApplicationStage;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userId?: StringFieldUpdateOperationsInput | string;
	};

	export type ApplicationUncheckedUpdateManyWithoutJobListingInput = {
		id?: StringFieldUpdateOperationsInput | string;
		coverLetter?: NullableStringFieldUpdateOperationsInput | string | null;
		rating?: NullableIntFieldUpdateOperationsInput | number | null;
		stage?:
			| EnumApplicationStageFieldUpdateOperationsInput
			| $Enums.ApplicationStage;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		userId?: StringFieldUpdateOperationsInput | string;
	};

	/**
	 * Batch Payload for updateMany & deleteMany & createMany
	 */

	export type BatchPayload = {
		count: number;
	};

	/**
	 * DMMF
	 */
	export const dmmf: runtime.BaseDMMF;
}
