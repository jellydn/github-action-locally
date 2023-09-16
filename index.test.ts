import { describe, test, expect } from "bun:test";
import { sum } from ".";

describe("sum", () => {
  test("can sum two number", () => {
    expect(sum(1, 2)).toBe(3);
  });
})
