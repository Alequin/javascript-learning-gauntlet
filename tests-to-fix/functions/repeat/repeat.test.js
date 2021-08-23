import repeat from "./repeat";

describe("repeat", () => {
  it("Calls the given function the requested number of times", async () => {
    const mockFunction = jest.fn();
    await repeat(5, async () => {
      await sleep(100);
      mockFunction();
    });

    expect(mockFunction).toHaveBeenCalledTimes(5);
  });
});

const sleep = (timeToSleepFor) =>
  new Promise((resolve) => setTimeout(resolve, timeToSleepFor));
