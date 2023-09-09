import { atom } from 'nanostores'

export const counter = atom<number>(0)

export function increment() {
  counter.set(counter.get() + 1);
}

export function decrement() {
  const current = counter.get();
  if (current > 0) {
    counter.set(current - 1);
  }
}
