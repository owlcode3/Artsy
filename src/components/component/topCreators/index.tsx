import React from 'react'


function TopCreators() {
  return (
    <div className='creators'>
      <div className='creators__inner'>
        <div className='creators__container'>
          <h2 className='creators__heading'>TOP CREATORS OF THE WEEK</h2>
          <div className='creators__editorials'>
            <span className='creators__bar'></span>
            <ul className='creators__lists'>
              <li className='creators__list'>Editorials</li>
              <li className='creators__list'>Fashion</li>
              <li className='creators__list'>Lifestyle</li>
              <li className='creators__list'>Blueprint</li>
            </ul>
          </div>
        </div>
        <p className='creators__paragraph'>
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black and
          white photograph. It just makes it seem that there were more people at a
          gig, more people at a football match, than with colour photography.
          Everything looks more exciting.”– Jack Lowden
        </p>
      </div>
      <div className='creators__circa'>
        <span className='creators__text-1'>circa</span>
        <span className='creators__text-2'>1985</span>
      </div>
    </div>
  )
}

export default TopCreators;