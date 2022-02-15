import React, { useEffect, useState } from'react';
import "./MovieRow.css"

export default ({title, items}) => {

    const [ movieList, setMovieList ] = useState([]);

    return(
        <div className={''}>
            <h2>{title}</h2>
            <div className={"movieRow--listarea"}>
                {items.results.length > 0 && items.results.map((item, key)=>(
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                ))}
            </div>
        </div>
    )
}