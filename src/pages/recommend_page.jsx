import React, {useEffect, useState} from 'react'
import RecommededBookCard from '../components/recommended_book_card';

function RecommendPage() {
    useEffect(() => {
        document.getElementById('recommend').className = "nav-link active";
        return () => {
            document.getElementById('recommend').className = "nav-link";
        }
    }, []);

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(search!==""){
            fetch(`http://127.0.0.1:8000/recommend/${search}`).then(response => {
                return response.json()
            }).then(data => {
                setData(data)
            })
        }
    }


    return (
        <div className='container d-flex flex-column justify-content-center my-4'>
            <div className="d-flex flex-column justify-content-center align-items-center">
                {data.length === 0 && <h6 className='my-2'>Enter book name to get suggestions</h6>}
                <form onSubmit={handleSubmit}>
                    <input
                    className='form-control'
                    type="text" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search'
                    />
                </form>
            </div>
            <div className='container mt-4'>
                {data.length > 0 && <h2 className='mb-4'>Recommeded Books</h2>}
                <div className='row row-cols-3 gap-4 justify-content-around'>
                    {data.map((book, index)=>{
                        return <RecommededBookCard key={index} book={book}/>;
                    })}
                </div>
            </div>
        </div>
    )
}

export default RecommendPage