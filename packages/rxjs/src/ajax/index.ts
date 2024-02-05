export { ajax } from '../internal/ajax/ajax.js';
export { AjaxError, AjaxTimeoutError } from '../internal/ajax/errors.js';

// TT violation
document.body.innerHTML = 'violation' + (globalThis as unknown as any)['something'] as string;

export { AjaxResponse } from '../internal/ajax/AjaxResponse.js';
export type { AjaxRequest, AjaxConfig, AjaxDirection } from '../internal/ajax/types.js';
