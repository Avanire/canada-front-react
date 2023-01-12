import {createStore} from "effector";

interface IBanner {
    title: string;
    description: string;
    image: string;
    link: string;
}

export const $mainBanner = createStore<IBanner | null>(null);
export const $mainBannerIsLoading = createStore<boolean>(false);