
const AboutImage = (props) => {
   return (
      <div className='col-lg-6 ps-lg-0'>
         <div className='position-relative h-100'>
            <img src={props.img} className='img-fluid w-100 h-100' alt="" />
         </div>
      </div>
   )
}

export default AboutImage