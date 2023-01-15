import React, {FC} from 'react';
import Phone from "../phone/phone";

const HeaderPhoneBlock: FC = () => {
    return (
        <div className={`basis-40`}>
            <Phone/>
            <div className={`text-[var(--link-color)] text-bases cursor-pointer`}>Заказать звонок</div>
        </div>
    );
}

export default HeaderPhoneBlock;