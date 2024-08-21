const NOT_FOUND = "NOT_FOUND";
const VALIDATION_FAILED = "VALIDATION_FAILED";

class ServiceError extends Error {
  constructor(message, code, details = {}) {
    super(message);
    this.code = code;
    this.details = details;
    this.name = "ServiceError";
  }
  static notFound(message, details) {
    return new ServiceError(message, NOT_FOUND, details);
  }
  static validationFailed(message, details) {
    return new ServiceError(message, VALIDATION_FAILED, details);
  }
  get isNotFound() {
    return this.code === NOT_FOUND;
  }
  get isValidationFailed() {
    return this.code === VALIDATION_FAILED;
  }
}

module.exports = ServiceError;
