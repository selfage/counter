import { Counter } from "./counter";
import { MatchFn, assertThat, eq } from "@selfage/test_matcher";

export function eqCounter<K>(
  expected?: Array<[MatchFn<K>, number]>
): MatchFn<Counter<K>> {
  return (actual) => {
    if (expected === undefined) {
      assertThat(actual, eq(undefined), `nullity`);
      return;
    }
    assertThat(actual.size, eq(expected.length), `counter size`);
    let i = 0;
    for (let [key, count] of actual) {
      assertThat(key, expected[i][0], `${i}th key`);
      assertThat(count, eq(expected[i][1]), `${i}th count`);
      i++;
    }
  };
}
