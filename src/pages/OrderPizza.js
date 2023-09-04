import React, { useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from 'styled-components';
//import axios from 'axios';
//import * as Yup from 'yup';
import './OrderPizza.css';


const malzemeler = [ 
{name:"Pepperoni", price: 5},
{name:"Sosis", price:15},
{name:"Kanada Jambonu", price:10 } ,
{name: "Tavuk Izgara", price: 20}, 
{name:"Soğan", price:5},
{name:"Domates", price: 5}, 
{name:"Mısır", price: 5}, 
{name: "Sucuk", price: 15}, 
{name: "Jalepeno", price: 5}, 
{name: "Sarımsak", price: 5}, 
{name: "Mantar", price: 10}, 
{name: "Biber", price: 5}];

const Button = styled.button`
  color:  #FDC913;
  font-size: 1em;
  margin: 0;
  padding: 0;
  display: block;
  background-color: #FDC913;
  border-radius: 3px;
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 10px;
`;

const ButtonQuantity = styled.button`
  width: 50px;
  height: 50px;
  margin: 0 15px; /* Butonlar arasında boşluk  */
  padding: 8px 16px; /* İlk değer üst ve alt için, ikinci değer sağ ve sol için, unutma!!*/
  border-radius: 20%; 
  background-color: #FDC913;
`;

const Aciklama = "Frontend Dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel,  olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir."

const Description = styled.div`
  width: 1100px;
  font-family: 'Barlow', sans-serif;
  max-width: 100%; /* Ekranın genişliğini aşmamalı */
  overflow-wrap:inherit; /* Eğer içerik taşarsa kaydırma çubuğunu göster */
  padding-left: 20%;
  padding-right: 20%;
  font-size: 0.9em;
  line-height: 1;
`;

const pizzaBazFiyat = 85.50; // Temel pizza fiyatı
const pizzaRating = 4.9; 
const pizzaBegeni = 200; 
/*
const initialErrors = {
  pizzaBoyutu: "",
  hamurTipi: "",
};
*/
function OrderPizza() {

  const history = useHistory();
  const [pizzaBoyutu, setPizzaBoyutu] = useState(null);
  const [hamurTipi, setHamurTipi] = useState('Hamur Kalınlığı');
  const [ekMalzemeSec, setEkMalzemeSec] = useState([]);
  const [notes, setNotes] = useState('');
  //const [errors, setErrors] = useState(initialErrors);

  const [pizzaFiyati, setPizzaFiyati] = useState(pizzaBazFiyat);
  const [ekMalzemeFiyati, setEkMalzemeFiyati] = useState(0);
  const [orderSayisi, setOrderSayisi] = useState(1);

  useEffect(() => {
    // Seçilen ek malzemelere göre fiyatı hesapla
    let malzemeFiyat = 0;
  
    ekMalzemeSec.forEach((secilenMalzeme) => {
      const malzeme = malzemeler.find((item) => item.name === secilenMalzeme);
      if (malzeme) {
        malzemeFiyat += malzeme.price;
      }
    });
    setEkMalzemeFiyati(malzemeFiyat)
    if((orderSayisi!==1) && (malzemeFiyat=== 0)){
      setPizzaFiyati(pizzaBazFiyat* orderSayisi);
    }if((orderSayisi===1) && (malzemeFiyat === 0)){
      setPizzaFiyati(pizzaBazFiyat);
    }else{
      setPizzaFiyati(((pizzaBazFiyat + malzemeFiyat)*orderSayisi));
    }
    
  }, [ekMalzemeSec, pizzaFiyati]);

/*
  const formSchema = Yup.object().shape({
    pizzaBoyutu: Yup.string()
      .oneOf(['small', 'orta', 'buyuk'], 'Geçerli bir pizza boyutu seçin')
      .required('Pizza boyutu gerekli'),
    hamurTipi: Yup.string()
      .oneOf(['ince', 'kalın'], 'Geçerli bir hamur tipi seçin')
      .required('Hamur tipi gerekli')
  });*/
  

  const handleEkMalzeme = (malzeme) => {
    if (ekMalzemeSec.includes(malzeme)) {
      setEkMalzemeSec(ekMalzemeSec.filter(item => item !== malzeme));
    } else {
      setEkMalzemeSec([...ekMalzemeSec, malzeme]);
    }
  };
/*
  const handleChange = event => {
    // Pull out the info of interest
    const { name, type, value, checked } = event.target;
    // Find out which value to use (the actual "value" of the target or its "checked" in the case of a checkbox)
    const updatedInfo = type === 'checkbox' ? checked : value;
    // Update state
    setPizzaBoyutu({ ...pizzaBoyutu, [name]: updatedInfo });
    setHamurTipi({ ...hamurTipi, [name]: updatedInfo });
    Yup.reach(formSchema, name)
        .validate(value)
        .then((success) => {
            setErrors({...errors, [name]: ""})
        })
        .catch(err => {
            setErrors({...errors, [name]: err.errors[0]})
        })
  }*/

  const handleSubmit = (event) => {
    const orderDetails = {
      pizzaBoyutu: pizzaBoyutu,
      hamurTipi: hamurTipi,
      ekMalzemeSec: ekMalzemeSec,
      notes: notes,
      pizzaFiyati: pizzaFiyati,
      ekMalzemeFiyati: ekMalzemeFiyati
    };
    history.push("/success");
    console.log("Sipariş Detayları:", orderDetails);
};

  return (
    <div className="order-page">
      <header className="baslik">
          <h1>Teknolojik Yemekler</h1>
              <nav>
                <a href="# ">Ana Sayfa - </a>
                <a href="# ">Seçenekler - </a>
                <a href="# ">Sipariş Oluştur</a>

              </nav>
      </header>
      <section id="bolumler" >
      <h2>Position Absolute Acı Pizza</h2>
        <div className="pizza-info">
          <p> {pizzaBazFiyat}₺</p>
          <p> {pizzaRating}</p>
          <p> {pizzaBegeni} </p>
        </div>
        <Description className="aciklama">
          <p> {Aciklama}</p>
        </Description>
      <form onSubmit={handleSubmit}>
        <div className="pizzaSecim">
          <div className="pizza-boyutu">
          <h3>Pizza Boyutu:</h3>
          <label> Küçük
            <input 
              type="radio"
              name="pizzaboyu"
              value="small"
              checked={pizzaBoyutu === "small"}
              onChange={() => setPizzaBoyutu("small")}

            />
          </label>
          <br/>
          <label> Orta
            <input 
              type="radio"
              name="pizzaboyu"
              value="orta"
              checked={pizzaBoyutu === "orta"}
              onChange={() => setPizzaBoyutu( "orta")}

            />
          </label>
          <br/>
          <label> Büyük
            <input 
              type="radio"
              name="pizzaboyu"
              value= "buyuk"
              checked={pizzaBoyutu === "buyuk"}
              onChange={() => setPizzaBoyutu("buyuk")}

            />
          </label>
        </div>

        <div className="hamur-tipi">
          <h3>Hamur Seç</h3>
          <label> 
            <select
              id="hamurTipi"
              value={hamurTipi}
              onChange={(e) => setHamurTipi(e.target.value)}
            >
              <option value="Hamur Kalınlığı">Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="kalın">Kalın</option>
            </select>
          </label>
        </div>
      </div>

      <div className="ekMalzeme">
        <h3>Ek Malzemeler: </h3>
        <br />
        {malzemeler.map((malzeme, index) => (
        <label key={index}>
          <br/>
          <input
            type="checkbox"
            checked={ekMalzemeSec.includes(malzeme.name)}
            onChange={() => handleEkMalzeme(malzeme.name)}
          />
          {malzeme.name}
          </label>
        ))}
      </div>

      <div className="siparis-notu">
      <label>
        <h3>Sipariş Notu: </h3>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        </label>
      </div> 
      </form>
      <div className="alt-container">
      <div className="order-quantity">
            <ButtonQuantity onClick={() => setOrderSayisi(orderSayisi - 1)} disabled={orderSayisi === 1}>-</ButtonQuantity>
            <p>{orderSayisi}</p>
            <ButtonQuantity onClick={() => setOrderSayisi(orderSayisi + 1)}>+ </ButtonQuantity>
        </div>
        <div className="order-summary">
          <h3>Sipariş Toplamı</h3>
          <br />
          <p>Ek Malzemeler: {ekMalzemeFiyati.toFixed(2)}₺</p>
          <p>Toplam Fiyat: {pizzaFiyati.toFixed(2)* orderSayisi}₺</p>
          <div className="order-summary-button">
          <Button id = "order-button" type="submit"><Link to="/siparisver">Siparişi Ver</Link></Button></div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default OrderPizza;
