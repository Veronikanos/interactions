export class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
    // this.code = code;
    // Error.captureStackTrace(this, this.constructor);
  }
}

// try {
//   throw new CustomError('Тест', 500);
// } catch (error) {
//   console.error(`${error.code}: ${error.message}`);
// }
