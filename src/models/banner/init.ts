import {mainBannerRequest} from "./event";
import {$mainBanner, $mainBannerIsLoading} from "./store";
import {fetchMainBannerFx} from "./fx";
import {forward} from "effector";

$mainBanner.on(fetchMainBannerFx.doneData, (_, result) => result.data);

$mainBannerIsLoading.on(fetchMainBannerFx.pending, (_, isLoading) => isLoading);

forward({
    from: mainBannerRequest,
    to: fetchMainBannerFx
});