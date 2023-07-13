import { useState } from "react";

function App() {

  let [feedData, setFeedData] = useState([]);

  let foodData = [
    {
      id: 1,
      catagory: "Breakfast",
      foodView: "https://images.indianexpress.com/2019/04/idli.jpg",
      foodName: "Idly",
      foodRate: "80",
      foodDescription: "Idli is a healthy breakfast that is served with delicious coconut chutney and sambar. Idli is soft and fluffy. There are different variants of idli: rave idli, masala idli, flattened rice idli and many more."
    },
    {
      id: 2,
      catagory: "Breakfast",
      foodView: "https://cdn.shopify.com/s/files/1/1404/4695/products/87265222_2842542735781352_8082818105325125632_o_1024x1024.jpg?v=1583067976",
      foodName: "Dosa",
      foodRate: "110",
      foodDescription: "A dosa, also called dosai, is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are popular in South Asia as well as around the world. Dosas are served hot, often with chutney and sambar."
    },
    {
      id: 3,
      catagory: "Breakfast",
      foodView: "https://lh5.ggpht.com/-qOsH7EtYuiU/UpWAnSO-pMI/AAAAAAAAW98/ZvDHrB5cm0A/poori-picture_thumb3.jpg?imgmax=800",
      foodName: "Puri",
      foodRate: "70",
      foodDescription: "Puri (sometimes spelled as poori) is a deep-fried bread made from unleavened whole-wheat flour that originated in the Indian subcontinent. It is eaten for breakfast or as a snack or light meal."
    },
    {
      id: 4,
      catagory: "Breakfast",
      foodView: "https://www.sharmispassions.com/wp-content/uploads/2012/02/VenPongal6-500x500.jpg",
      foodName: "Pongal",
      foodRate: "70",
      foodDescription: "Ven Pongal recipe is a spicy and savory version where rice and moong dal are cooked together and tempered with cumin, pepper, ginger, and ghee."
    },
    {
      id: 5,
      catagory: "Breakfast",
      foodView: "https://i0.wp.com/gomathirecipes.com/wp-content/uploads/2021/10/vegkurma.jpg?fit=1080%2C720&ssl=1",
      foodName: "Idiyappam",
      foodRate: "60",
      foodDescription: "This idiyappam recipe gives you soft and smooth idiyappam which tastes very good with a curry or kurma or any side dish of your choice."
    },
    {
      id: 6,
      catagory: "Lunch",
      foodView: "https://imgmedia.lbb.in/media/2017/08/599bf9be632a0d4bbcf0d62f_599aca1a7cba110dead973ba_1503394238291.jpg",
      foodName: "Veg-Meals",
      foodRate: "90",
      foodDescription: "To get the most out of a vegetarian diet, choose a variety of healthy plant-based foods. These include whole fruits and vegetables and whole grains. Nuts and legumes, such as lentils, beans and peanuts, also are considered healthy plant-based foods. "
    },
    {
      id: 7,
      catagory: "Lunch",
      foodView: "https://www.shutterstock.com/shutterstock/photos/1852796557/display_1500/stock-photo-madurai-india-nov-non-veg-meals-with-all-dishes-1852796557.jpg",
      foodName: "NonVeg-Meals",
      foodRate: "120",
      foodDescription: "A non-vegetarian diet also has several health benefits because this type of food is rich in protein and vitamin B. Non-vegetarian food strengthens our muscles and helps them grow faster. It also helps to maintain body stamina and hemoglobin."
    },
    {
      id: 8,
      catagory: "Lunch",
      foodView: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
      foodName: "Chicken-Biryani",
      foodRate: "180",
      foodDescription: "Biryani is a very nutritive, delicious and convenient one-pot meal that can be served alone or just with some raita, curd or salad as it does not require any side dish or curry. So, in a way it is a time-saving and tempting lunch/dinner option that is being loved by kids and adults too."
    },
    {
      id: 9,
      catagory: "Lunch",
      foodView: "https://bfoodale.com/uploads/2021/12/Mutton-Biryani.jpg",
      foodName: "Mutton-Biryani",
      foodRate: "80",
      foodDescription: "Biryani is a very nutritive, delicious and convenient one-pot meal that can be served alone or just with some raita, curd or salad as it does not require any side dish or curry. So, in a way it is a time-saving and tempting lunch/dinner option that is being loved by kids and adults too."
    },
    {
      id: 10,
      catagory: "Lunch",
      foodView: "https://simmertoslimmer.com/wp-content/uploads/2023/04/Curd-rice-thayir-sadam.jpg",
      foodName: "Curd-Rice",
      foodRate: "60",
      foodDescription: "Curd rice helps to restore healthy microbial balance which, in turn, helps in better digestion.Curd is a good source of protein. It is also a good antioxidant and has high contents of calcium."
    },
    {
      id: 11,
      catagory: "Dinner",
      foodView: "https://cdn.shopify.com/s/files/1/0738/0195/7666/products/2.png?v=1679987080",
      foodName: "Chapati",
      foodRate: "80",
      foodDescription: "Chapati contains vitamins and minerals like magnesium, phosphorous, potassium, calcium and iron. - Also contains zinc and other minerals which are good for our skin. - Easily digested."
    },
    {
      id: 12,
      catagory: "Dinner",
      foodView: "https://www.allrecipes.com/thmb/P_PgxWliuXXRXVxLBq-5lKfFGdo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16954-chineese-chicken-fried-rice-ii-ddmfs-3X4-0240-3db2550810b1464a965a89a55cc95c7a.jpg",
      foodName: "Chicken-Friedrice",
      foodRate: "100",
      foodDescription: "Fried chicken nutrition fact is that they are packed with protein, which is essential for healthy bones, muscles, and skin. It also contains essential vitamins and minerals, such as iron, potassium, and phosphorus. Fried chicken is a great source of these nutrients, making it a well-rounded meal option."
    },
    {
      id: 13,
      catagory: "Dinner",
      foodView: "https://farm9.staticflickr.com/8586/16023214373_90552b64f6_o.jpg",
      foodName: "Parota",
      foodRate: "50",
      foodDescription: "Whole wheat parotta delivers many important nutrients like fiber, minerals, protein, and antioxidants. When you consume wheat parotta you are also adding good nutrients to your diet."
    },
    {
      id: 14,
      catagory: "Dinner",
      foodView: "https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-1.jpg",
      foodName: "Noodles",
      foodRate: "100",
      foodDescription: "Noodles are low in fat and calories, and they do not contain any cholesterol. Noodles are a good source of vitamins and minerals, such as iron, folate and thiamine. They can also be a good source of fibre."
    },
    {
      id: 15,
      catagory: "Dinner",
      foodView: "https://static.langimg.com/thumb/62947019/samayam-tamil-62947019.jpg?imgsize=154902&width=540&resizemode=3",
      foodName: "Adai-Dosai",
      foodRate: "60",
      foodDescription: "The multigrain ingredients in this South Indian delicacy offer a variety of health benefits as well. The dish is rich in fibre and can therefore significantly improve digestive functioning and health and can also alleviate digestive distress."
    },
    {
      id: 16,
      catagory: "Snacks",
      foodView: "https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2019/09/Mumbai-BhelPuri-02.jpg?fit=1024%2C683&ssl=1",
      foodName: "Bhel-Puri",
      foodRate: "60",
      foodDescription: "A snack with almost iconic status in the western region of India, bhel puri (or bhelpuri) is a low-fat, nutritious, and delicious food."
    },
    {
      id: 17,
      catagory: "Snacks",
      foodView: "https://www.kannammacooks.com/wp-content/uploads/bread-omelette-recipe-1-5.jpg",
      foodName: "Bread-omelette",
      foodRate: "70",
      foodDescription: "Creamy eggy filling, seasoned with scintillating flavours and finely chopped vegetables, is sandwiched between gloriously toasted breads that contain all the goodness of butter and carbs."
    },
    {
      id: 18,
      catagory: "Snacks",
      foodView: "https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800",
      foodName: "Samosa",
      foodRate: "50",
      foodDescription: "Sambosa is a fried South Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, peas, meat or fish."
    },
    {
      id: 19,
      catagory: "Snacks",
      foodView: "https://abicake.com/wp-content/uploads/2020/09/chicken-puffs-300x300.jpg",
      foodName: "Veg-puff",
      foodRate: "30",
      foodDescription: "This is a really delicious bakery style veg puff recipe made with mix veggies. These are also known as curry puff."
    },
    {
      id: 20,
      catagory: "Snacks",
      foodView: "https://www.awesomecuisine.com/wp-content/uploads/2009/05/french-fries.jpg",
      foodName: "French-fries",
      foodRate: "120",
      foodDescription: "French fries, also called chips, finger chips, fries, or French pommes frites, side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips."
    }

  ]

  console.log(feedData)

  const handleClick = (e) => {
    switch (e.target.innerText) {
      case "Breakfast":
        let newValue = foodData.filter((item) => {
          // console.log(item.catagory)
          return item.catagory === 'Breakfast'
        })
        setFeedData(newValue);
        break;
      case "Lunch":
        let newValue1 = foodData.filter((item) => {
          // console.log(item.catagory)
          return item.catagory === 'Lunch'
        })
        setFeedData(newValue1);
        break;
      case "Dinner":
        let newValue2 = foodData.filter((item) => {
          // console.log(item.catagory)
          return item.catagory === 'Dinner'
        })
        setFeedData(newValue2);
        break;
      case "Snacks":
        let newValue3 = foodData.filter((item) => {
          // console.log(item.catagory)
          return item.catagory === 'Snacks'
        })
        setFeedData(newValue3);
        break;
      case "All":
        let newValue4 = foodData.filter((item) => {
          // console.log(item.catagory)
          return item
        })
        setFeedData(newValue4);
        break;
      default:
        break;
    }

  }

  return (
    <div >
      <header>Welcome to Yummy Foods</header>
      <div className="App">
        <button onClick={handleClick}> All </button>
        <button onClick={handleClick}> Breakfast </button>
        <button onClick={handleClick}> Lunch </button>
        <button onClick={handleClick}> Dinner </button>
        <button onClick={handleClick}> Snacks </button>
      </div>
      {feedData.length ?
        <div className="maindisplay">
          {feedData.map((item) => {
            return (
              <div className="mainContent" key={item.id}>
                <div className="foodRate" >
                  <h1>{item.foodName} </h1>
                  <h3> ₹{item.foodRate} </h3>
                </div>
                <div >
                  <img src={item.foodView} alt='foodimg' width="200px" ></img>
                  <p>{item.foodDescription} </p>
                </div>
              </div>
            )
          })}
        </div> : <div className="menuSelect"> <p> Choose your menu item 😊</p></div>
      }

    </div>
  );
}

export default App;
