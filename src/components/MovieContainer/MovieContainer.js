import React from 'react'

const MovieContainer = ({ items }) => {
    return(
        <ul>
            {items.map((item, i) =>
        <li key={i}>{item}</li>
        )}
    </ul>
    )
}

export default MovieContainer