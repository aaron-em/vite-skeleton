import assert from "assert";

import { renderHook, act } from "@testing-library/react";
import { describe, it } from "vitest";

import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("should set initial value and return value", () => {
    const { result } = renderHook(() => useCounter(4));
    assert.equal(result.current.value(), 4);
  });

  it("should increment", () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => result.current.increment());
    assert.equal(result.current.value(), 1);
  });

  it("should decrement", () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => result.current.decrement());
    assert.equal(result.current.value(), -1);
  });
});
