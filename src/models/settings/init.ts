import {forward} from "effector";
import {addressRequest, phoneRequest} from "./event";
import {$address, $addressIsLoading, $phone, $phoneIsLoading} from "./store";
import {fetchAddressFx, fetchPhoneFx} from "./fx";

$address
    .on(fetchAddressFx.doneData, (_, result) => result.data);

$addressIsLoading
    .on(fetchAddressFx.pending, (_, isPending) => isPending);

$phone
    .on(fetchPhoneFx.doneData, (_, result) => result.data);

$phoneIsLoading
    .on(fetchPhoneFx.pending, (_, isPending) => isPending);

forward({
    from: addressRequest,
    to: fetchAddressFx
});

forward({
    from: phoneRequest,
    to: fetchPhoneFx
});