import { writable, type Writable } from 'svelte/store';

export interface Stop {}
export const stops: Writable<Array<Stop>> = writable([]);
