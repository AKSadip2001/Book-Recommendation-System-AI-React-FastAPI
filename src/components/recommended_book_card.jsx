import React from 'react'

function RecommededBookCard({book}) {
    return (
        <div className="card" style={{width: "15rem"}}>
            <img className="card-img-top" style={{height: "22rem", objectFit: "contain"}} src={book[2]} alt=""/>
            <div className="card-body">
                <h6 className="card-title">{book[0]}</h6>
                <p className="card-text">{book[1]}</p>
            </div>
        </div>
    )
}

export default RecommededBookCard