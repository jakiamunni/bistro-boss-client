import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitlee/SectionTitle";
import { useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu]  = useState([]);
    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)})
    },[])
    return (
        <section className="mb-12">
            <SectionTitle
            heading="From Our Item"
            subHeading="Popular Menu"
            ></SectionTitle>
            <div  className="grid md:grid-cols-2 gap-12">
                {
                    menu.map(item => <MenuItem
                      key={item._id}
                      item={item}
                    ></MenuItem>)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;