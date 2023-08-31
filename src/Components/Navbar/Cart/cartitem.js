import './cartitem.css'

const cartitem =()=>{
    const cart = [
        {
          title: 'Colors',
          price: 100,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        }]
     return(
        <div >
                {cart.map((item) => (
                <div className="cart-items" key={item.id}>
                    <div className="cart-item-name" >
                    <img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' alt=''></img>
                    <span className='title'>{item.title}</span>
                    </div>
                    <div  className="cart-items-price">
                    {item.price}
                    </div>
                <div className="cart-items-quantity"> 
                <input type='number' value='1'></input>
                <button onClick={()=>{}}>Remove</button>
                </div>
                </div>
            ))}

            </div>
     )
}

export default cartitem