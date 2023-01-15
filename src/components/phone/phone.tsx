import React, {FC, useEffect} from "react";
import {useStore} from "effector-react";
import {modelSetting} from "../../models/settings";

const Phone: FC = () => {
    const phone = useStore(modelSetting.$phone);

    useEffect(() => {
        modelSetting.phoneRequest('phone');
    }, []);

    return (
        <a className={`font-medium text-lg text-[var(--text-color)]`} href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
    );
}

export default Phone;