import React, { useEffect, useState } from 'react'
import BookCard from '../components/book_card';

function HomePage() {
    useEffect(() => {
        document.getElementById('home').className = "nav-link active";

        fetchUserData();
        console.log(data);

        return () => {
            document.getElementById('home').className = "nav-link";
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [data, setData] = useState({});

    const fetchUserData = () => {
        fetch("http://127.0.0.1:8000/top_books").then(response => {
            return response.json()
        }).then(data => {
            setData(data)
        })
    }

    return (
        <div className='container mt-5'>
            <div className='mb-5'>
                <h2>Top 50 Books</h2>
            </div>
            <div className='row row-cols-3 gap-4 justify-content-center'>
                {Object.keys(data).map((key, index) => {
                    return <BookCard key={key} book={data[key]}/>;
                    })
                }
            </div>
        </div>
    )
}

export default HomePage