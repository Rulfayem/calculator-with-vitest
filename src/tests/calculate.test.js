import { test } from "vitest";
import { calculate } from "../calculate";

test("calculate addition", ({ expect }) => {
    expect(calculate(5, 7, "+")).toBe(12);
});

test("calculate subtraction", ({ expect }) => {
    expect(calculate(10, 5, "-")).toBe(5);
});

test("calculate multiplication", ({ expect }) => {
    expect(calculate(5, 2, "*")).toBe(10);
});

test("calculate division", ({ expect }) => {
    expect(calculate(10, 5, "/")).toBe(2);
});

test("handle division with 0", ({ expect }) => {
    expect(calculate(10, 0, "/")).toBe("Cannot divide by 0.");
});

test("handling invalid operator", ({ expect }) => {
    expect(() => calculate(5, 7, "&")).toThrow(new Error("Invalid operator!"));
});
