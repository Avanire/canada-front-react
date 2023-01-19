import {addressRequest, phoneRequest, emailRequest, workTimeRequest} from "./event";
import {
    $address,
    $addressIsLoading,
    $phone,
    $phoneIsLoading,
    $email,
    $emailIsLoading,
    $workTime,
    $workTimeIsLoading
} from "./store";

export const modelSetting = {
    addressRequest,
    $address,
    $addressIsLoading,
    phoneRequest,
    $phone,
    $phoneIsLoading,
    emailRequest,
    $email,
    $emailIsLoading,
    workTimeRequest,
    $workTime,
    $workTimeIsLoading
}