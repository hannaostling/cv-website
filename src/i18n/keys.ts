import sv from "@/i18n/locales/sv.json";
import en from "@/i18n/locales/en.json";

// Build "a.b.c" union from nested JSON
type Join<K, P> = K extends string | number ? (P extends string | number ? `${K}.${P}` : never) : never;

type Paths<T> = T extends object
  ? { [K in keyof T & (string | number)]: T[K] extends object ? K | Join<K, Paths<T[K]>> : K }[keyof T &
      (string | number)]
  : never;

export type StringKey = Paths<typeof sv>;

// Compile-time check that sv/en have identical keys
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;
type AssertEqual<A, B> = Equal<A, B> extends true ? true : never;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type _KeysMatch = AssertEqual<Paths<typeof sv>, Paths<typeof en>>;
