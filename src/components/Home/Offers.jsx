import offer1 from './../../assets/album/offer/1.jpeg'
import offer2 from './../../assets/album/offer/2.png'
import offer3 from './../../assets/album/offer/3.jpeg'
import Offer from './Offer';

const Offers = () => {
    const ProductOffers = [
        {
            id: 1,
            image: offer1,
            title: "View Offer",
            des: "*Model & year exclusions apply. Incentives are available at participating Kawasaki dealerships. Offer valid through 6/30/23. Subject to change without notice. Offer available on approved purchases of select new, unregistered Kawasaki vehicles. Professional riders on a closed course.",
            date: "Valid throw: July, 2023"
        },
        {
            id: 2,
            image: offer2,
            title: "View Offer",
            des: "*Model & year exclusions apply. Incentives are available at participating Kawasaki dealerships. Offer valid through 6/30/23. Subject to change without notice. Offer available on approved purchases of select new, unregistered Kawasaki vehicles. Professional riders on a closed course.",
            date: "Valid throw: July, 2023"
        },
        {
            id: 3,
            image: offer3,
            title: "View Offer",
            des: "*Model & year exclusions apply. Incentives are available at participating Kawasaki dealerships. Offer valid through 6/30/23. Subject to change without notice. Offer available on approved purchases of select new, unregistered Kawasaki vehicles. Professional riders on a closed course.",
            date: "Valid throw: July, 2023"
        },
    ]
    return (
        <div className='my-24'>
                        <div>
                <h2>Offers & Promotions</h2>
            </div>
        <div className='grid grid-cols-3 gap-6 mx-6 my-22'>

            {
                ProductOffers.map(NewOffer => <>
                    <img src={NewOffer.image} alt="" className='h-[400px]'/>
                </>

                    // <Offer
                    //     key={NewOffer.id}
                    //     NewOffer={NewOffer}
                    // ></Offer>
                    )
                }
        </div>
        </div>
    );
};

export default Offers;