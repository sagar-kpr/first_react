import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();

        this.state = {
            price : 999,
            title : 'Phone',
            qty : 1,
            img: ''
        }
    }


    Increase = () => {
      this.setState( (prevState) => {
        return {
          qty: prevState.qty +=1
        }
        
      } )
    }

    Decrease = () => {
      this.setState( (prevState) => {
        if(prevState.qty === 0){
          return;
        }
        return {
          qty: prevState.qty -=1
        }
        
      } )

      

    }
   
    render(){
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
              <div className="left-block">
                <img style={styles.image}/>
              </div>
              <div className="right-block">
                <div style={ {fontSize:26} }>
                  {title}
                </div>
                <div style={ { color: '#777' } }>
                  Rs : {price}
                </div>
                <div style={ {color: '#777' } }>
                  Qty : {qty}
                </div>
                <div className="cart-item-actions">
                    <img 
                     className="action-icons"
                     src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                     onClick={ this.Increase }
                    />
                    <img 
                      className="action-icons" 
                      src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                      onClick={ this.Decrease }  
                    />
                    <img className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"/>
                </div>
              </div>
            </div>
            
          );
    }
}


const styles = {
    image : {
        height:120,
        width: 120,
        borderRadius: 5
    }
}


export default CartItem;