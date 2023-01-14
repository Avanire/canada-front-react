export interface IMenu {
    readonly id: number;
    readonly title: string;
    readonly url: string;
    readonly icon_class: string;
    readonly children: Array<IMenu>;
}

export interface IProduct {
    id: number;
    alias: string;
    image: string;
    rating: number | null;
    count_rating: number | null;
    name: string;
    brand: number;
    price: number;
    old_price: number | null;
    hit: boolean;
    new_product: boolean;
    recommended: boolean;
}

export interface IBanner {
    title: string;
    description: string;
    link: string | null;
    image: string;
}

export interface IImageList {
    heading: string;
    link: string;
    list: Array<IImage>;
}

export interface IImage {
    id: number;
    image: string;
    name: string;
    link: string;
}