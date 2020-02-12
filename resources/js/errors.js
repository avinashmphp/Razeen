export default class Errors {
  constructor() {
    this.errors = {};
  }

  set(field, messages) {
    if (typeof field === "object") {
      this.errors = field;
    } else {
      this.set({ ...this.errors, [field]: this.arrayWrap(messages) });
    }
  }

  all() {
    return this.errors;
  }

  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  get(field) {
    if (this.errors[field]) return this.errors[field][0];
  }

  getall(field) {
    if (this.errors[field]) return this.errors[field] || [];
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }

  record(errors) {
    this.errors = errors;
  }

  clear(field) {
    if (field) {
      delete this.errors[field];
      return;
    }

    this.errors = {};
  }

  arrayWrap(value) {
    return Array.isArray(value) ? value : [value];
  }
}
