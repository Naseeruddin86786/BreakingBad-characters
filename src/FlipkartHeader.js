import "./FlipkartHeader.css"

function Header() {
    return(
        <div className="header">
            <h3>Flipkart </h3>
            <input placeholder="Search For products, Brands and more"  />
            <button className="login">Login</button>
            <button className="more">More </button>
        </div>
    );
}

export default Header;