import React, {FC} from "react";
import {Link} from "react-router-dom";
import {IImageList} from "../../utils/types";
import {STORAGE_URL} from "../../utils/constans";

const ImageList: FC<IImageList> = ({heading, link, list}) => {
    return (
        <section className={`mb-20`}>
            <div className={`flex justify-between items-center mb-8`}>
                <h3>{heading}</h3>
                <Link to='#' className={`leading-4`}>{link}</Link>
            </div>
            <div className={`flex flex-wrap`}>
                {list.map(item => <img key={item.id} className={`p-5`} src={STORAGE_URL + '/' + item.image}
                                       alt={item.name}/>)}
            </div>
        </section>
    );
}

export default ImageList;