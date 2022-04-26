import React from 'react';


const Food = () => {
    return (
        <section id="section-food">
            <div className='container'>
                <div id='best'>
                    <h3 className="text-center">Best way to eat healthy food</h3>
                    <p className='text-center'>Making a reservation at Delicious restaurant is easy and takes just a couple of minutes</p>
                </div>
                <div className="row" id='card-content'>
                    <div className="card col-12 col-md-12 col-lg-3 d-flex flex-column align-items-center mb-5">
                        <div className="h1"><i id='card-title' className="fa bi-egg-fill mb-4"></i></div>
                        <h3 id='card-title' className="h4 mb-4 text-center">Healthy Food</h3>
                        <p> Having a reservation at Delicious restaurant is easy and takes just a couple of minutes.</p>
                    </div>
                    <div className="card col-12 col-md-12 col-lg-3 d-flex flex-column align-items-center mb-5">
                            <div className="h1"><i id='card-title' className="fa bi-emoji-smile mb-4"></i></div>
                        <h3 id='card-title' className="h4 mb-4 text-center">Fast Food</h3>
                        <p> Having a reservation at Delicious restaurant is easy and takes just a couple of minutes.</p>
                    </div>
                    <div className="card col-12 col-md-12 col-lg-3 d-flex flex-column align-items-center mb-5">
                            <div className="h1"><i id='card-title' className="fa bi-cup-fill mb-4"></i></div>
                        <h3 id='card-title' className="h4 mb-4 text-center">Delicious coffe</h3>
                        <p> Having a reservation at Delicious restaurant is easy and takes just a couple of minutes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Food;