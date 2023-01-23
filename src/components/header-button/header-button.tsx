import React, {FC} from "react";
import {Link} from "react-router-dom";

interface IHeaderButton {
    readonly image: string;
    readonly link: string;
    readonly text: string;
    readonly handleFunction?: () => void;
}

const HeaderButton: FC<IHeaderButton> = ({image, link, text}) => {
    return (
        <Link to={link} className={`flex flex-col justify-center max-h-12`}>
            <img src={image} alt=""/>
            <div className={`text-[var(--link-more)] text-center text-sm`}>{text}</div>
        </Link>
    );
}

export default HeaderButton;