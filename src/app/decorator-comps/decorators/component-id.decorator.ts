export function uniqueId<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  console.log({ constructor });

  return class extends constructor {
    compid = Math.random().toString();
    log(message: string): void {
      console.log(message);
    }
  };
}
