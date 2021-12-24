import Img1 from "./Images/Img1.png";
import Img2 from "./Images/Img2.png";
import Img3 from "./Images/Img3.png";

function Carousal() {
    return(
        <Carousal>
            <div>
                <img src={Img1}/>
                <img src={Img2}/>
                <img src={Img3}/>
            </div>
        </Carousal>
        
    );
}

export default Carousal;