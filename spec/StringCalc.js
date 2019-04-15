describe("Add functionality", function() {
  it("should return zero when passed an empty string", function() {
    const result = Add("");
    expect(result).toEqual(0);
  });

  it("should return a number if it is passed just one number eg: Add('3') => 3", function() {
    let result;
    result = Add("55");
    expect(result).toEqual(55);

    result = Add("12");
    expect(result).toEqual(12);

    result = Add("585");
    expect(result).toEqual(585);
  });

  it("should be able to add up 2 numbers", function() {
    let result;
    result = Add("1,2");
    expect(result).toEqual(3);

    result = Add("12,12");
    expect(result).toEqual(24);

    result = Add("12,12,1,1,1,1,1");
    expect(result).toEqual(29);
  });

  it("should be able to split numbers by comma and newline", function() {
    let result;
    result = Add("1,2\n3,4");
    expect(result).toBe(10);
  });

  it("should handle stuff like this: '1,\n'", function() {
    const result = Add("1,\n");
    expect(result).toBe(1);
  });
});
