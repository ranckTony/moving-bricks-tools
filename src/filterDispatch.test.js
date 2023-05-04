import filterDispatch from "./filterDispatch";

describe("filterDispatch", () => {
  test("filterDispatch 返回值", () => {
    expect(filterDispatch([])).toEqual([]);
  });

  test("filterDispatch 过滤", () => {
    const data = [
      {
        id: 1,
        filterFn: () => {
          return false;
        },
      },
    ];
    expect(filterDispatch(data)).toEqual([]);
  });


  test("filterDispatch 过滤", () => {
    const data = [
      {
        id: 1,
        filterFn: () => {
          return true;
        },
      },
    ];
    expect(filterDispatch(data)).toHaveLength(1);
  });
});
