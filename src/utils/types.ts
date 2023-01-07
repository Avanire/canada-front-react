export interface IMenu {
    readonly id: number;
    readonly title: string;
    readonly url: string;
    readonly icon_class: string;
    readonly children: Array<IMenu>;
}