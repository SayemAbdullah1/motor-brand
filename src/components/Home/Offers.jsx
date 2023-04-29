import offer1 from './../../assets/album/offer/1.jpeg'
import offer2 from './../../assets/album/offer/2.png'
import offer3 from './../../assets/album/offer/3.jpeg'


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
            <div className='grid grid-cols-5 my-12 mx-6'>
                <div className='col-span-1'>
                    <h2 className='lg:text-3xl font-bold sm:text-xl'>Offers & Promotions</h2>
                </div>
                <div className='border-b-2 border-green-600 col-span-4 mb-2'>
                    <p></p>

                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6 mx-6 my-22'>

            {
                ProductOffers.map(NewOffer => <>

                    <div className="card bg-base-100 shadow-xl rounded-none">
                        <figure><img src={NewOffer.image} alt="vivhicles" className='h-[400px] border-b-4 border-green-600' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {NewOffer.title}
                                
                            </h2>
                            <p>{NewOffer.des}</p>
                            <h2 className='font-bold'>{NewOffer.date}</h2>
                            
                        </div>
                    </div>

                    {/* <img src={NewOffer.image} alt="" className='h-[400px] border-b-4 border-green-600'/>
                    <h2>{NewOffer.title}</h2>
                    <p>{NewOffer.des}</p><br />
                    <p>{NewOffer.date}</p> */}
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