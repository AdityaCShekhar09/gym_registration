import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#100DaysofWorkout</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>Starting a gym routine doesn't mean you have to jump in all at once. Consistency is key, make fitness a regular part of your lifestyle. With each step, you'll experience the benefits and witness your progress, further motivating you to continue on your fitness journey.</p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'></div>
          <div className='main__header-image'>
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader