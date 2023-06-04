import SectionTitle from "../../../components/SectionTitlee/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div>
            <SectionTitle 
              subHeading= "check it out"
              heading= "featured item"
            ></SectionTitle>
            <div>
                <img src={featuredImage} alt="" />
            </div>
            <div>
                <p>Aug 20, 2023</p>
                <p className="uppercase">Where can i get some?</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia architecto enim id quaerat, impedit minus nostrum modi quia dolorum! Fuga mollitia rem officia repellendus similique esse atque. Sunt, libero sequi. Repellendus ducimus nemo dolore non tenetur cum ea! Reiciendis velit ex ullam iure necessitatibus consequuntur nam eum delectus, in dolore.
                 </p>
            </div>
        </div>
    );
};

export default Featured;