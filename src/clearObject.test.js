import clearObject from "./clearObject";

describe("clearObject", () => {
  test("clearObject 返回值", () => {
    const formData = {
      name: "ranck",
      age: "29",
    };

    clearObject(formData);
    expect(formData).toMatchObject({
      name: "",
      age: ""
    });
  });
});
