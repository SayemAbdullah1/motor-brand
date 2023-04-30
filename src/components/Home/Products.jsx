import Product1 from './../../assets/album/products/1.png'
import Product2 from './../../assets/album/products/2.png'
import Product3 from './../../assets/album/products/3.png'
import Product4 from './../../assets/album/products/4.png'
import Product5 from './../../assets/album/products/5.png'
import Product6 from './../../assets/album/products/6.png'

const Products = () => {
    const OurProducts = [
        {
            id: 1,
            image: Product1,
            title: "Yamaha R15",
            price: 6500
        },
        {
            id: 2,
            image: Product2,
            title: "BMW Mezda 99R",
            price: 25000
        },
        {
            id: 3,
            image: Product3,
            title: "Jet Sky Ultra 160 XL",
            price: 27300
        },
        {
            id: 4,
            image: Product4,
            title: "SnowMobile",
            price: 21000
        },
        {
            id: 5,
            image: Product5,
            title: "Kawasaki KLX 9",
            price: 9000
        },
        {
            id: 6,
            image: Product6,
            title: "Terya KRX 4 1000 Special",
            price: 24900
        },
    ]
    return (
        <div className='bg-white my-24 py-6'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-24'>
                {
                    OurProducts.map(product => <div
                        key={product.id}>
                        <div className="card bg-base-100 rounded-none">
                            <figure><img src={product.image} alt="vivhicles" className='h-[250px]' /></figure>
                            <div className="text-center font-bold text-3xl">
                                <h2 className="">
                                    {product.title}
                                </h2>
                                <h3 className='text-[14px] text-gray-500'>MSRP ${product.price}</h3>
                                <div className='mx-auto mt-1 border-b-4 w-12 border-green-600'></div>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;