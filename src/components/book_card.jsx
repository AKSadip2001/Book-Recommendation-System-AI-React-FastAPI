import React from 'react'

function BookCard({book}) {
    return (
        <div className="card" style={{width: "15rem"}}>
            <img className="card-img-top" style={{height: "18rem", objectFit: "contain"}} src={book["Image-URL-M"]} alt=""/>
            <div className="card-body">
                <h6 className="card-title">{book["Book-Title"]}</h6>
                <p className="card-text">{book["Book-Author"]}</p>
                <p className="card-text">Votes - {book["num_ratings"]}</p>
                <p className="card-text">Rating - {book["avg_rating"]}</p>
            </div>
        </div>
    )
}

export default BookCard