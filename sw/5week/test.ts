function add<T extends number | string | boolean>(a: T, b: T): T {
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a || b as T;
  }
  if (typeof a === 'string' || typeof b === 'string') {
    return String(a) + String(b) as T;
  }
  return Number(a) + Number(b) as T;
}


console.log(add<number>(13, 15));
console.log(add<string>('hell', 'o'));
console.log(add<boolean>(false, true));