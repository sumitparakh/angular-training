export function sealed(constructor: Function): void {
  console.log('sealed decorator');
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
