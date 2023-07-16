import React, {useEffect} from 'react'
import Form from '../components/form';

function ContactPage() {
    useEffect(() => {
        document.getElementById('contact_us').className = "nav-link active";
        return () => {
            document.getElementById('contact_us').className = "nav-link";
        }
    }, []);
    
    return (
        <div className='container my-5'>
        <div>
            <h1>Contact Us</h1>
        </div>
        <div className='d-flex my-5'>
            <div className="p-2 flex-fill">
                <h4 className='mb-4'>Get in touch</h4>
                <h6>Email: myStore@gmail.com</h6>
                <h6>Phone: +8801777777777</h6>
                <p className='mt-4 mb-1'>Feel free to contact with us for any query</p>
            </div>
            <div className="p-2 flex-fill">
                <Form/>
            </div>
        </div>
    </div>
    )
}

export default ContactPage