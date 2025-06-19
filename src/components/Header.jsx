// function Search() {
//     return(
//         <form action="">
//             <input type="text" name="" id="" placeholder="search more" className="search-input"/>
//         </form>
//     )
// }
import { TbHomeStar } from "react-icons/tb";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiFullPizza } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { GiCoolSpices } from "react-icons/gi";
import { GiWrappedSweet } from "react-icons/gi";

function Header() {
    return (
        <header className="header">
            <div className="category-wrapper">
                <div className="all-dishes-highlighted">
                    <TbHomeStar />
                    <div>All</div>
                </div>
                <div className="dish">
                    <RiDrinks2Fill />
                    <div>Drinks</div>
                </div>
                <div className="dish">
                    <GiFullPizza />
                    <div>Pizza</div>
                </div>
                <div className="dish">
                    <TbSalad />
                    <div>Salad</div>
                </div>
                <div className="dish">
                    <GiCoolSpices />
                    <div>Spicy</div>
                </div>
                <div className="dish">
                    <GiWrappedSweet />
                    <div>Sweets</div>
                </div>
                <div className="vieww-all">
                    <button className="view-btn">View All</button>
                </div>
            </div>
            
        </header>
    )
}


export default Header;