import {createStore} from "effector";

export const $address = createStore<string>('');
export const $addressIsLoading = createStore<boolean>(false);
export const $addressIsFailed = createStore<boolean>(false);

export const $phone = createStore<string>('');
export const $phoneIsLoading = createStore<boolean>(false);