import {createEffect} from "effector";
import {getSettingByName} from "../../utils/api";

export const fetchAddressFx = createEffect((params: string) => getSettingByName(params));
export const fetchPhoneFx = createEffect((params: string) => getSettingByName(params));