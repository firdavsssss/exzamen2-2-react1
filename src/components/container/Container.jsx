
import './Container.css'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Section from '../section/Section'

export default function Container() {
  return <>
    <div className='Container'>
      <Header />
      <Section />
      <Footer />
    </div>
  </>
}