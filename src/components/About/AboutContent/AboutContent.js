import { Card } from '../../index'
import { FaGlobe, FaShippingFast } from 'react-icons/fa'
import { ButtonPrimary } from '../../Button/Button'

const AboutContent = () => {
  return (
   <div className='col-lg-6 about-text'>
      <h6 className='text-secondary text-uppercase mb-3'>ABOUT US</h6>
      <h1 className='mb-5'>Quick Transport and Logistics Solutions</h1>
      <p className='mb-5'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
      <div className='row g-4 mb-5'>
         <Card icon={<FaGlobe size='70' />} 
            title="Global Coverage" 
            text="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo."
         />
         <Card icon={<FaShippingFast size='70'/>} 
            title="On Time Delivery" 
            text="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo."
         />
      </div>
      <ButtonPrimary URL="" title="Explore More"/>
   </div>
  )
}

export default AboutContent