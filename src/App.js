import './App.css';
import FoodCard from "./components/Card/foodCard";
import burgerImage from './images/burger.png';


function App() {
    const cards = [
        {
            name: "Чизбургер",
            weight: "310 г",
            price: "430₽",
            imageUrl: burgerImage
        },
        {
            name: "Двойной Бургер",
            weight: "500 г",
            price: "530₽",
            imageUrl: burgerImage
        },
        {
            name: "Фиш Бургер",
            weight: "350 г",
            price: "450₽",
            imageUrl: burgerImage
        },
        {
            name: "Вегетарианский Бургер",
            weight: "300 г",
            price: "400₽",
            imageUrl: burgerImage
        }
    ];

    return (
        <div className="App">
            <div className="card-container">
                {cards.map(card => (
                    <FoodCard
                        key={card.name}
                        name={card.name}
                        weight={card.weight}
                        price={card.price}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
