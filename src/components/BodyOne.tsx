import BannerAd from './BannerAd'
import BestSales from './BestSales'
import HotDeals from './HotDeals'
import FeaturedProducts from './FeaturedProducts'

function BodyOne() {
  return (
    <div>
        <BannerAd/>  
            <BestSales/>
            <HotDeals />  
            <FeaturedProducts />    
    </div>
  )
}

export default BodyOne