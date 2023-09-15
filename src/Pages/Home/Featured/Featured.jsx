import SectionTitle from "../../../components/SectionTitlee/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle 
              subHeading= "check it out"
              heading= "featured item"
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 px-36">
            <div className="">
                <img src={featuredImage} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2023</p>
                <p className="uppercase">Where can i get some?</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia architecto enim id quaerat, impedit minus nostrum modi quia dolorum! Fuga mollitia rem officia repellendus similique esse atque. Sunt, libero sequi. Repellendus ducimus nemo dolore non tenetur cum ea! Reiciendis velit ex ullam iure necessitatibus consequuntur nam eum delectus, in dolore.
                 </p>
                 <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
        </div>
            </div>
    );
};

export default Featured;