import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsa! Veritatis, dicta perspiciatis velit fuga at vitae quas dolorum cupiditate!
    </Header>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:support@noreply@gmail.com" target='__blank' rel='nonreferrer noopener'><MdEmail/></a>
          <a href="http://m.me/" target='__blank' rel='nonreferrer noopener'><BsMessenger/></a>
          <a href="https://wa.me/+911234567890" target='__blank' rel='nonreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact