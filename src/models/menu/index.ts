import {categoryRequest, menuRequest} from "./event";
import {$categories, $categoriesIsLoaded, $menu, $menuIsLoaded} from "./store";

export const modelMenu = {
    menuRequest,
    $menu,
    $menuIsLoaded,
    categoryRequest,
    $categories,
    $categoriesIsLoaded
}