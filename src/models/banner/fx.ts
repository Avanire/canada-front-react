import {createEffect} from "effector";
import {getBanner} from "../../utils/api";

export const fetchMainBannerFx = createEffect((params: string) => getBanner(params));