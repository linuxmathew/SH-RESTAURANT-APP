import React from 'react'
import jessicaImg from '../images/xwoner.png';

 const  Book = ()=> {
  return (
      
    <section id='section-booking' className='container'>
        <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 mb-5 mb-sm-5 mb-md-0 mb-lg-0'>
                <img className='w-100' src={ jessicaImg } alt='Jessica Lynn' />
            </div>
            <div className='col-12 col-sm-12 col-md-6'>
                <div className='row'>
                    <h3 className='text-center'>Book a table</h3>
                        <form>
                            <div className="col-12 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="NumberofAdult" className="sr-only"></label>
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="form-group">
                                        <label htmlFor="date" className="sr-only"></label>
                                        <input type="date" className="form-control text-n" 
                                         placeholder="Enter date" id="date" />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="form-group">
                                        <label htmlFor="date" className="sr-only"></label>
                                        <input type="text" className="form-control text-n"  
                                        placeholder="Time" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                            <div className="form-group">
                                    <label htmlFor="NumberofChild" className="sr-only"></label>
                                    <input type="number" className="form-control" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="freeText" className="sr-only"></label>
                                    <textarea  row="5" className="form-control" name="message" placeholder="Your message" 
                                    aria-label="your message" aria-describedby="message" />
                                </div>
                            </div>
                        </form>
                        <div className="col-12 col-md-12 text-center mt-4">
                                <button id='book-button'className='btn text-center'>Send Request</button>
                        </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}


export default Book;
