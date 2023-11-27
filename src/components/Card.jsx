import { useContext, useState } from 'react'
import coffe from '../assets/coffe_grid.svg'
import {Minus, Plus, ShoppingCart} from 'phosphor-react'
import { Notifications } from '../context/Notifications';


export function Card({id, title, img, price, onClick}) {

   const {handleNotification, handleCheckoutItens, checkoutItens} = useContext(Notifications)


   const [count, setCount] = useState(0)

   const handleCardClick = () => {
    handleNotification()
    // Chama a função onClick com o título e o preço como argumentos
    onClick(id, title, price, img);
    handleCheckoutItens(id, title, price, img)
  };

   function handleClickAdd() {
    setCount(count + 1)
   }

   function handleClickRemove() {
    if(count == 0) return
    setCount(count - 1)
   }

   console.log(checkoutItens);

   return (
       <div  className='flex flex-col justify-center items-center w-[240px] mt-8 bg-base-card rounded-tr-3xl rounded-bl-3xl'>
           <img className='-mt-[20px]' src={img} alt="" />
           <p className='mt-3 py-1 px-2 rounded-full text-[10px] font-bold text-yellow-dark bg-yellow-light'>TRADICIONAL</p>
           <p className='font-baloo-2 mt-4 text-[20px]'>{title}</p>
           <p className='text-base-label text-center text-sm font-normal mt-2'>O tradicional café feito com água <br />
              quente e grãos moídos
           </p>
           <div className='w-full flex justify-between items-center mt-8 px-6 mb-5'>
               <div className='flex justify-center items-center gap-2'>
                   <p className='text-base-text'>R$</p><span className='font-baloo-2 text-3xl font-extrabold'>{price}</span>
               </div>
               <div className='flex justify-between items-center p-2 gap-1 rounded-md bg-base-button'>
                   <p><Minus onClick={handleClickRemove} className='text-purple cursor-pointer' size={14} weight="bold" /></p>
                   <p className='text-base-title text-base'>{count}</p>
                   <p><Plus onClick={handleClickAdd} className='text-purple cursor-pointer' size={14} weight="bold" /></p>
               </div>
               <div className='flex justify-center items-center p-2 cursor-pointer rounded-md bg-purple-dark'>
               <ShoppingCart onClick={handleCardClick} className='fill-white' size={22} weight="fill" />
               </div>
           </div>
       </div>
   )
}
