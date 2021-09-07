//@ts-nocheck
import {useEffect, useLayoutEffect} from 'react';

/**
 * useMountEffect allows running an effect only once after component was mounted.
 *
 * @example
 * useMountEffect(() => {
 *   someAction(someProp);
 * });
 *
 * @summary Basically it's the same as writting
 * @example
 * useEffect(() => {
 *   someAction(someProp);
 *   // eslint-disable-next-line react-hooks/exhaustive-deps
 * }, []);
 * @summary However, it will show other developers that the funcion is intended to be run
 * once only on component's mount. That is why "missing" dependencies warning was
 * suppressed intentionally.
 */
// eslint-disable-next-line react-hooks/exhaustive-deps
export const useMountEffect = func => useEffect(func, []);
// eslint-disable-next-line react-hooks/exhaustive-deps
export const useMountLayoutEffect = func => useLayoutEffect(func, []);
