import {productRequest} from "./event";
import {$productIsLoading, $products} from "./store";
import {fetchProductFx} from "./fx";
import {forward} from "effector/compat";

$products
    .on(fetchProductFx.doneData, (_, result) => result.data);

$productIsLoading
    .on(fetchProductFx.pending, (_, isLoading) => isLoading);

forward({
    from: productRequest,
    to: fetchProductFx
});