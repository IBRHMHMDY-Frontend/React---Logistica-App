import CarouselItem from './CarouselItem'
import { Carousel1, Carousel2 } from '../../assets/images';

const CarouselSlider = () => {
   return (
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-inner position-relative">
            <CarouselItem 
               imagePath={Carousel1} 
               subTitle="Transport & Logistics Solution" 
               title="Logistics"
               content="Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr."
            />
            <CarouselItem 
               imagePath={Carousel2}
               subTitle="Transport & Logistics Solution"
               title="Transport"
               content="Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr."
            />
         </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
         </button>
      </div>
   )
}

export default CarouselSlider