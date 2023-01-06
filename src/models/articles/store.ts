import {createStore} from "effector";

type TArticle = {
    readonly id: number;
    readonly name: string;
    readonly alias: string;
    readonly text: string;
};

export const $articles = createStore<Array<TArticle>>([]);
export const $articlesIsLoading = createStore<boolean>(false);