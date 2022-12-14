/**
 * Mark a field's enumerable state. Useful for sensative information.
 */
export function enumerable(value: boolean) {
  return function (target: any, propertyKey: string) {
      const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
      if (descriptor.enumerable != value) {
          descriptor.enumerable = value;
          descriptor.writable= true;
          Object.defineProperty(target, propertyKey, descriptor)
      }
  };
}
