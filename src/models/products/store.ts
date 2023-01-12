import {createStore} from "effector";
import {IProduct} from "../../utils/types";

export const $products = createStore<Array<IProduct>>([]);
export const $productIsLoading = createStore<boolean>(false);