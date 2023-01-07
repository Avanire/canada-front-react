import {categoryRequest, menuRequest} from "./event";
import {$categories, $categoriesIsLoaded, $menu, $menuIsLoaded} from "./store";
import {fetchCategoryFx, fetchMenuFx} from "./fx";
import {forward} from "effector";

$menu
    .on(fetchMenuFx.doneData, (_, result) => result.data);

$menuIsLoaded
    .on(fetchMenuFx.pending, (_, isPending) => isPending);

$categories
    .on(fetchCategoryFx.doneData, (_, result) => result.data);

$categoriesIsLoaded
    .on(fetchCategoryFx.pending, (_, isPending) => isPending);

forward({
    from: menuRequest,
    to: fetchMenuFx
});

forward({
    from: categoryRequest,
    to: fetchCategoryFx
});