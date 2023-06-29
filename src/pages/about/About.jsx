import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, pariatur cum. Natus maxime animi sunt deserunt! Id neque repellat reiciendis?
    </Header>
    <section className='about__story'>
      <div className="container about__story-container">
      <div className="about__section-image">
        <img src={StoryImage} alt="Our Vision" />
      </div>
      <div className="about__section-content">
        <h1 className='about_h1'>Our Story</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe rerum non incidunt excepturi error distinctio voluptas culpa eos, omnis ipsum doloribus vero officia reiciendis obcaecati possimus consequuntur sapiente ipsam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit deserunt eligendi temporibus, necessitatibus sed reiciendis sit ab! Quam, eveniet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quam hic error laudantium debitis quo!</p>
      </div>
      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision-container">
      <div className="about__section-content">
        <h1 className='about_h1'>Our Vision</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe rerum non incidunt excepturi error distinctio voluptas culpa eos, omnis ipsum doloribus vero officia reiciendis obcaecati possimus consequuntur sapiente ipsam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit deserunt eligendi temporibus, necessitatibus sed reiciendis sit ab! Quam, eveniet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quam hic error laudantium debitis quo!</p>
      </div>
      <div className="about__section-image">
        <img src={VisionImage} alt="Our Story" />
      </div>
      </div>
    </section>

    <section className='about__mission'>
      <div className="container about__mission-container">
      <div className="about__section-image">
        <img src={MissionImage} alt="Our Mission" />
      </div>
      <div className="about__section-content">
        <h1 className='about_h1'>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe rerum non incidunt excepturi error distinctio voluptas culpa eos, omnis ipsum doloribus vero officia reiciendis obcaecati possimus consequuntur sapiente ipsam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit deserunt eligendi temporibus, necessitatibus sed reiciendis sit ab! Quam, eveniet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quam hic error laudantium debitis quo!</p>
      </div>
      </div>
    </section>
    </>
  )
}

export default About