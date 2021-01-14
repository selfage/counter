import { Counter } from "./counter";
import { assertThat, eq } from "@selfage/test_base/matcher";
import { TEST_RUNNER } from "@selfage/test_base/runner";

TEST_RUNNER.run({
  name: "CounterTest",
  cases: [
    {
      name: "GetAndIncrementOneKey",
      execute: () => {
        // Prepare
        let counter = new Counter<string>();

        // Execute
        let value = counter.get("key1");

        // Verify
        assertThat(value, eq(0), "init value");

        // Execute
        value = counter.increment("key1");

        // Verify
        assertThat(value, eq(1), "incremented once");

        // Execute
        value = counter.get("key1");

        // Verify
        assertThat(value, eq(1), "get after incremented once");

        // Execute
        value = counter.increment("key1", 6);

        // Verify
        assertThat(value, eq(7), "incremented the second by 6");

        // Execute
        value = counter.get("key1");

        // Verify
        assertThat(value, eq(7), "get after incremented by 6");

        // Execute
        value = counter.increment("key1");

        // Verify
        assertThat(value, eq(8), "incremented third time");

        // Execute
        value = counter.get("key1");

        // Verify
        assertThat(value, eq(8), "get after incremented third time");
      },
    },
    {
      name: "IncrementMultipleKeys",
      execute: () => {
        // Prepare
        let counter = new Counter<string>();

        // Execute
        let value1 = counter.increment("key1");

        // Verify
        assertThat(value1, eq(1), "key1 incremented by 1");

        // Execute
        let value10 = counter.increment("key10");

        // Verify
        assertThat(value10, eq(1), "key10 incremented by 1");

        // Execute
        let value22 = counter.increment("key22", 5);

        // Verify
        assertThat(value22, eq(5), "key22 incremented by 5");
      },
    },
    {
      name: "SizeAndIterate",
      execute: () => {
        // Prepare
        let counter = new Counter<string>();
        counter.get("zero key");
        counter.increment("one key");
        counter.increment("ten key", 10);
        let i = 0;

        // Execute
        let size = counter.size;

        // Verify
        assertThat(size, eq(2), "size");

        // Execute
        for (let [key, count] of counter) {
          // Verify
          if (i === 0) {
            assertThat(key, eq("one key"), "one key");
            assertThat(count, eq(1), "one key count");
          } else if (i === 1) {
            assertThat(key, eq("ten key"), "ten key");
            assertThat(count, eq(10), "ten key count");
          } else {
            throw new Error("No more key is expected.");
          }
          i++;
        }
      },
    },
  ],
});
