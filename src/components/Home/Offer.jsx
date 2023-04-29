
const Offer = (NewOffer ) => {
    const { image, title, } = NewOffer
    return (
        <div>
            <img src={image} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default Offer;