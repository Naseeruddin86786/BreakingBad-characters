import "./FlipkartOptions.css"

let Items = [
  {
      Img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=367&q=80",
      name: "Mobiles"
  },
  {
         Img : "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1592920567-mid-century-double-pop-up-coffee-table-walnut-white-marble-2-c.jpg", 
          name: "Home"
      },
   {
      
          Img : "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80 ",
          name : "Electronics"
   },
   {
          Img : "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
          name : "Fashion"
   }
]

const Options = () => {

  return(
    <div className="options">
        {Items.map((item) => (
          <div className="img">
            <img src={item.Img}/>
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
 }

export default Options;