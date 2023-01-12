import React, {FC, useState} from "react";
import searchImage from '../../images/Search.svg';
import styles from './search.module.css';

const Search: FC = () => {
    const [search, setSearch] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
        <form action="" method='POST' className={`${styles.searchForm} basis-96 h-12 `}>
            <input type="text" placeholder='Поиск по сайту' value={search} className={styles.searchInput}
                   onChange={handleSearch}/>
            <button className={styles.searchBtn}><img src={searchImage} alt=""/></button>
        </form>
    );
}

export default Search;