import {createEffect} from "effector";
import {getProducts} from "../../utils/api";

export const fetchProductFx = createEffect(getProducts);