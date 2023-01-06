import {createStore} from "effector";

interface IMenu {
    readonly id: number;
    readonly title: string;
    readonly url: string;
    readonly icon_class: string;
    readonly children: Array<IMenu>;
}

export const $menu = createStore<Array<IMenu>>([]);
export const $menuIsLoaded = createStore<boolean>(false);