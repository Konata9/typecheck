import typecheck from "../index";
import { expect } from "chai";

describe("Type check test:", () => {
  it("type [] is array", () => expect(typecheck([])).to.be.equal("array"));
  it("type {} is object", () => expect(typecheck({})).to.be.equal("object"));
  it("type new Set is set", () =>
    expect(typecheck(new Set())).to.be.equal("set"));
  it("type new Map is map", () =>
    expect(typecheck(new Map())).to.be.equal("map"));
  it('type "" is string', () => expect(typecheck("")).to.be.equal("string"));
  it("type 1 is number", () => expect(typecheck(1)).to.be.equal("number"));
  it("type true is boolean", () =>
    expect(typecheck(true)).to.be.equal("boolean"));
  it("type null is null", () => expect(typecheck(null)).to.be.equal("null"));
  it("type undefined is undefined", () =>
    expect(typecheck(undefined)).to.be.equal("undefined"));
  it("type symbol is symbol", () =>
    expect(typecheck(Symbol())).to.be.equal("symbol"));
  it("type function is function", () =>
    expect(typecheck((a, b) => a + b)).to.be.equal("function"));
});
