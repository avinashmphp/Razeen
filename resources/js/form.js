import Errors from './errors'

export class Form {

    constructor(data) {

        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();

    }

    /**
     * Fill form data.
     *
     * @param {Object} data
     */
    fill(data) {
        for (let field in this.originalData) {
            this[field] = data[field];
        }
    }

    /**
      * Reset the form fields.
      */
    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }
        this.errors.clear();
    }


}
