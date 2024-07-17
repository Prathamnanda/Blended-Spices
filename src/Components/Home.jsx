import React from 'react';
import '../index.css';
import { TruckIcon, CreditCardIcon, GiftIcon, HeadphonesIcon } from './Icons';
import Card from './Card';
function Home() {
  return (
    <>
    <div className="banner">
          <div className="banner-text">
              <h1>DO YOU WANT ITALIAN FLAVOR?</h1>
              <p>WE BRING YOU FRESH SPICES FROM THERE</p>
              <button>Shop Now</button>
          </div>
          </div>
          <div className="features">
              <div className="feature">
                  <TruckIcon className="banner-icon" />
                  <div className="text">
                  <h3>Free Shipping</h3>
                  <p>On order over $150</p>
                  </div>
              </div>
              <div className="feature">
                  <CreditCardIcon className="banner-icon" />
                  <div className="text">
                  <h3>Cash on Delivery</h3>
                  <p>100% money back guarantee</p>
                  </div>
              </div>
              <div className="feature">
                  <GiftIcon className="banner-icon" />
                  <div className="text">
                  <h3>Special Gift Card</h3>
                  <p>Offer special bonuses with gift</p>
                  </div>
              </div>
              <div className="feature">
                  <HeadphonesIcon className="banner-icon" />
                  <div className="text">
                  <div className="card-text">
                  <h3>24/7 Customer Service</h3>
                  <p>Call us 24/7 at 123-456-789</p>
                  </div>
                  </div>
              </div>
              
          </div>
          <div className="title">
                Products we deliver
              </div>
              <div className="all-cards">
              <Card
        image="https://via.placeholder.com/300" 
        title="Sample Product" 
        price="29.99" 
        weight="1.5 kg" 
        origin="USA" 
      />
      <Card
        image="https://via.placeholder.com/300" 
        title="Sample Product" 
        price="29.99" 
        weight="1.5 kg" 
        origin="USA" 
      /><Card
      image="https://via.placeholder.com/300" 
      title="Sample Product" 
      price="29.99" 
      weight="1.5 kg" 
      origin="USA" 
    /><Card
    image="https://via.placeholder.com/300" 
    title="Sample Product" 
    price="29.99" 
    weight="1.5 kg" 
    origin="USA" 
  /><Card
  image="https://via.placeholder.com/300" 
  title="Sample Product" 
  price="29.99" 
  weight="1.5 kg" 
  origin="USA" 
/><Card
        image="https://via.placeholder.com/300" 
        title="Sample Product" 
        price="29.99" 
        weight="1.5 kg" 
        origin="USA" 
      /><Card
        image="https://via.placeholder.com/300" 
        title="Sample Product" 
        price="29.99" 
        weight="1.5 kg" 
        origin="USA" 
      />
</div>
      
      </>

  );
}

export default Home;
