import { AiOutlineLink } from "react-icons/ai";
import { RiFileLine } from "react-icons/ri";
import { RiFileInfoLine } from "react-icons/ri";
import './itemcard.scss';

const ItemCard = () => {
  return <div>
       <div className="card-body">
            <div className="card-container">
                <div className="card-box">
                </div>
                <div className="sub-container">
                    <h3>This is a headline</h3>
                    <div className="facts">
                        <div>
                            <p className="fact-letter">FACT 1</p>
                            <p className="headline">A Fact</p>
                        </div>
                        <div>
                            <p className="fact-letter">FACT 2</p>
                            <p className="headline">Another</p>
                        </div>
                        <div>
                            <p className="fact-letter">FACT 3</p>
                            <p className="headline"> Fact</p>
                        </div>
                        <div>
                            <p className="fact-letter">FACT 4</p>
                            <p className="headline">Value</p>
                        </div>
                    </div>

                </div>
                <h2 className="price-tag">534.000</h2>
            </div>
            <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus modi voluptatibus neque harum libero saepe ducimus fugiat magnam odit voluptas beatae consectetur....
            </p>
            <div className="card-links">
                <a href="/" className="card-tag">shop</a>
                <a href="/" className="card-tag">hot</a>
                <a href="/" className="card-tag">global</a>
                <a href="/" className="card-file"><AiOutlineLink size={30} /></a>
                <a href="/" className="card-icons"><RiFileLine size={30}/></a>
                <a href="/" className="card-icons"><RiFileLine size={30}/></a>
                <a href="/" className="card-icons"><RiFileLine size={30}/></a>
                <a href="/" className="card-icons"><RiFileInfoLine size={30}/></a>
            </div>
        </div>
  </div>;
};

export default ItemCard;
