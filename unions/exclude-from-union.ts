type Letters = "a" | "b" | "c" | "d" | "e";

type RemoveA<T> = T extends "a" ? never : T;

type WowWithoutA = RemoveA<Letters>; // "b" | "c" | "d" | "e"

