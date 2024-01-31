export { ajax } from '../internal/ajax/ajax.js';
export { AjaxError, AjaxTimeoutError } from '../internal/ajax/errors.js';
export { AjaxResponse } from '../internal/ajax/AjaxResponse.js';

// Detected by tsec.
document.body.innerHTML = 'hello';

export type { AjaxRequest, AjaxConfig, AjaxDirection } from '../internal/ajax/types.js';
