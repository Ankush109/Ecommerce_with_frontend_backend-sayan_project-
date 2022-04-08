import React from 'react'
import ReactStars from 'react-rating-stars-component'
import "./productdetails.css"
const Reviewcard = ({review}) => {
    const options={
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size:window.innerWidth <600 ? 20:25,
        value:review.rating,
        isHalf:true
    }
    return (
    <div className='reviewCard'>
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYNJurwK2IVxe2vKUCbvFaAsRUkHnDgI8mg&usqp=CAU"alt="user"
        />
        <p>{review.name}</p>
        <ReactStars {...options}/>
        <span>{review.comment}</span>
    </div>
  )
}

export default Reviewcard