import React, { useState } from 'react'
import { addbook } from '../api/index'


const AddBook = () => {

    const [data, setData] = useState({ Authorname: '', YearOfPublication: '', NoOfCopies: '' })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log([e.target.name])
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(data)
        addbook(data).then((res) => {
            console.log(res);
        })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <form onSubmit={handlesubmit} >
            <div className="form-group">
                <h3 className="mt-4">Add Book</h3>
            </div>
            <div className="form-group">
                <input type="text" name="Authorname" className="form-control"
                    placeholder="Author Name..."
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <input type="text" name="YearOfPublication" className="form-control"
                    onChange={handleChange}
                    placeholder="Year Of Publication..." />
            </div>
            <div className="form-group">
                <input type="text" name="NoOfCopies" className="form-control"
                    onChange={handleChange}
                    placeholder="No Of Copies..." />
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-info" value="Add Book" />
            </div>
        </form>
    )
}

export default AddBook;