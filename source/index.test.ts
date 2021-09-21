import { decode, encode } from "./index";

test("#encode", () => {
  expect(encode("f")).toStrictEqual("Zg");
});

test("#decode", () => {
  expect(decode("Zg").toString("utf8")).toStrictEqual("f");
});
