class SmartError extends Error {
  errorCode?: number;
  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

class InvalidCredentials extends SmartError {
  constructor(message: string) {
    super(message);
    this.message = `Invalid credentials`;
    this.errorCode = 403;
  }
}

class Unauthorized extends SmartError {
  constructor(message: string) {
    super(message);
    this.message = `Unauthorized`;
    this.errorCode = 401;
  }
}

class Forbidden extends SmartError {
  constructor(message: string) {
    super(message);
    this.message = `Forbidden`;
    this.errorCode = 403;
  }
}

class TokenExpired extends SmartError {
  constructor(message: string) {
    super(message);
    this.message = `Token expired, please log in again`;
    this.errorCode = 401;
  }
}

class TaskNotFound extends SmartError {
  constructor(message: string) {
    super(message);
    this.message = `Task with data provided not found`;
    this.errorCode = 404;
  }
}

export {
  SmartError,
  InvalidCredentials,
  Unauthorized,
  TokenExpired,
  TaskNotFound,
  Forbidden,
};
