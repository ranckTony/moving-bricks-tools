import setFormData from "./setFormData";

describe("setFormData", () => {
  test("setFormData 返回值", () => {
    const formData = {
      name: "",
      age: "",
    };

    setFormData(formData, {
      name: 2,
    })
    expect(
      formData
    ).toMatchObject({
      name: 2,
    });
  });
});
