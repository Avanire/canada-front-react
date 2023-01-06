import {menuRequest} from "./event";
import {$menu, $menuIsLoaded} from "./store";
import {fetchMenuFx} from "./fx";
import {forward} from "effector";

$menu
    .on(fetchMenuFx.doneData, (_, result) => result.data);

$menuIsLoaded
    .on(fetchMenuFx.pending, (_, isPending) => isPending);

forward({
    from: menuRequest,
    to: fetchMenuFx
});