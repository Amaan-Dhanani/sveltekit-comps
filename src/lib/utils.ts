/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS class names safely.
 *
 * Combines the power of `clsx` and `tailwind-merge`:
 * - `clsx` allows conditional and dynamic class composition
 * - `twMerge` removes conflicting Tailwind classes (e.g., `p-2` vs `p-4`)
 *
 * @param {...(ClassValue | unknown)[]} inputs - Any number of class values, including strings, arrays, or conditional objects
 * @returns {string} A single merged class string with conflicts resolved
 *
 * @example
 * cn("p-2", condition && "bg-red-500", "p-4")
 * // → "bg-red-500 p-4"
 *
 * Created by TreltaSev
 */
export function cn(...inputs: (ClassValue | unknown)[]) {
	return twMerge(clsx(inputs));
}