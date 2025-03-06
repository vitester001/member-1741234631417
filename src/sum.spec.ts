import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should add two positive numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 10)).toBe(15);
    expect(sum(100, 200)).toBe(300);
  });

  it('should add negative numbers correctly', () => {
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(-5, -10)).toBe(-15);
  });

  it('should add positive and negative numbers correctly', () => {
    expect(sum(1, -2)).toBe(-1);
    expect(sum(-5, 10)).toBe(5);
  });

  it('should add zero correctly', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, 5)).toBe(5);
  });

  it('should add decimal numbers correctly', () => {
    expect(sum(1.5, 2.5)).toBe(4);
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it('should handle large numbers', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    expect(sum(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
  });
});
