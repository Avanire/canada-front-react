import React, {FC} from "react";
import Advantage from "../advantage/advantage";

const Advantages:FC = () => {
    return (
        <section className={`flex flex-wrap gap-8 justify-between mb-16`}>
            <Advantage name='Ветеринарные центры 24/7' description='круглосуточная помощь питомцам' />
            <Advantage name='Доставка за 1 час' description='При оформлении заказа
с 10:00 до 20:00' />
            <Advantage name='Самовывоз заказа' description='через 30 мин из 350+ магазинов' />
            <Advantage name='Бонусная программа' description='кэшбэк до 7% на бонусную карту' />
        </section>
    );
}

export default Advantages;