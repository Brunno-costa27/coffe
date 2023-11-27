import { Card } from "./Card";
import coffe from '../assets/coffe_grid.svg'


const cards = [
    { 
        id: 1,
        title: "Expresso tradicional",
        img: coffe,
        price: "17,90"

    },
    { 
        id: 2,
        title: "Expresso",
        img: coffe,
        price: "9,90"
    },
    { 
        id: 3,
        title: "Expresso",
        img: coffe,
        price: "9,90"
    },
    { 
        id: 4,
        title: "Expresso",
        img: coffe,
        price: "9,90"
    }
] 


export function Products() {

    const handleCardClick = (id, title, price, foto) => {
        // Faça algo com o título e o preço, por exemplo, exibir no console
        console.log('Id:', id);
        console.log('Título:', title);
        console.log('Preço:', price);
        console.log('foto:', foto);
    }; 

   return (
       <div className="px-36 mt-8 mb-40 sm:px-20 md:px-10 lg:px-40">
           <h1 className="text-base-subtitle font-extrabold font-baloo-2 text-[32px]">Nossoa cafés</h1>
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cards.map(card => {
                       return (
                            <Card 
                                key={card.id}
                                id={card.id}
                                title={card.title}
                                img={card.img}
                                price={card.price}
                                onClick={handleCardClick}
                            />
                            )
                        })}
            </div>
       </div>
   )
}
