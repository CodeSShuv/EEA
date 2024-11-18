import "./product.css"
import Section from "./Section";
const ProductPage = () => {
    const product = {
        name: "Amazing Product",
        price: "$49.99",
        description: "Join our expertly designed English course tailored for learners at all levels! Whether you're starting from scratch or looking to refine your skills, we have the perfect package for you. Our course is structured into four progressive levels: General, Basic, Intermediate, and Advanced English, ensuring that you build a strong foundation and advance confidently."
        , courseDetails: "",
        image: "./English Elevation(1).png" // Placeholder image
    };

    return (
        <div className="product-page">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-des">

                <h1 className="product-title">Unlock Your Potential with Our Comprehensive English Course!</h1>

                <p className="product-description">

                    Join our expertly designed English course tailored for learners at all levels! Whether you're starting from scratch or looking to refine your skills, we have the perfect package for you. Our course is structured into four progressive levels: General, Basic, Intermediate, and Advanced English, ensuring that you build a strong foundation and advance confidently.

                </p>

                <h2 className="why-choose-title">Why Choose Us?</h2>

<Section arr={1}/>

                <h2 className="package-title">Course Packages:</h2>


                    

               <Section></Section>


                <p className="call-to-action">

                    Start your journey to fluency today! Enroll now and transform your English skills with our comprehensive courses designed for every learner. Unlock new opportunities and gain the confidence to communicate effectively in English!

                </p>

            </div>
            {/* <p className="product-price">{product.price}</p> */}
            <button className="join-now-btn">Join Now</button>
        </div>
    );
};

export default ProductPage