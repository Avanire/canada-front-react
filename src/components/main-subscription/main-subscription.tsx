import React, {FC} from "react";

const MainSubscription: FC = () => {
    return (
        <section className={`p-10 rounded-3xl bg-[var(--main-purple)] flex justify-between items-center`}>
            <div className={`basis-1/2`}>
                <div className={`text-white font-bold text-2xl mb-3`}>Хочу быть в курсе акций и новинок</div>
                <div className={`text-white text-sm`}>Подписывайтесь и получайте самые интересные предложения первыми</div>
            </div>
            <form action="" method='POST' className={`basis-1/2`}>
                <div className={`flex gap-2.5 mb-3`}>
                    <input type="email" placeholder='Введите e-mail' className={`py-3.5 px-5 rounded-xl min-w-[360px]`} />
                    <button className={`rounded-xl py-3.5 px-6 bg-white`}>Подписаться</button>
                </div>
                <div className={`text-white text-xs`}>Нажимая «Подписаться», вы соглашаетесь с политикой конфиденциальности</div>
            </form>
        </section>
    );
}

export default MainSubscription;