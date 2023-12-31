import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../UI/Card'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { useState } from "react"
import {testimonials} from '../data'

const Testimonials = () => {
  const [index,setIndex]=useState(0)
  const {name, quote, job} = testimonials[index];

  const prevTestimonial=()=>{
    setIndex(prev=>prev-1);
    if(index<=0){
        setIndex(testimonials.length-1);
    }
  }

  const nextTestimonial=()=>{
        setIndex(prev=>prev+1);
        if(index>=testimonials.length-1){
            setIndex(0);
        }
  }
    
  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testmonials__head"/>
            <Card className="testimonial">
                <div className="testimonial__avatar">
                    <img src={require('../images/avatar'+index+'.jpg')} alt={name} />
                </div>
                <p className="testimonial__quote">{`"${quote}`}</p>
                <h5>{name}</h5>
                <small className="testimonial__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={prevTestimonial}><IoIosArrowDropleftCircle/></button>
                <button className="testimonials__btn" onClick={nextTestimonial}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials