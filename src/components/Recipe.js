import React from 'react'
import mealImg from '../images/meal.png';


const Recipe = (props) => {
  return (
    <div>
        <div id='outer-cover' className=''>
            <div id='inner-cover' className='row'>
                <div className='col-4'>
                    <div>
                        <img src={mealImg} alt='chicken borritos' />
                    </div>
                </div>
                <div className='col-8'>
                    <h5 className='bbq'>{props.name}</h5>
                    <div className='row'>
                        <div className='col-8'>
                            <h4 id='price'>{props.price}</h4>
                        </div>
                        <div className='col-4'>
                            <i className='bi bi-basket2-fill'></i>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}
export default Recipe; 