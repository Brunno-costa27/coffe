import { useContext, useState } from 'react'
import coffe from '../assets/coffe_grid.svg'
import {Minus, Plus, ShoppingCart} from 'phosphor-react'
import { Notifications } from '../context/Notifications';


export function Card() {

   const {handleNotification} = useContext(Notifications)


   const [count, setCount] = useState(0)

   

   function handleClickAdd() {
    setCount(count + 1)
   }

   function handleClickRemove() {
    if(count == 0) return
    setCount(count - 1)
   }

   return (
       <div className='flex flex-col justify-center items-center w-[240px] mt-8 bg-base-card rounded-tr-3xl rounded-bl-3xl'>
           <img className='-mt-[20px]' src={coffe} alt="" />
           <p className='mt-3 py-1 px-2 rounded-full text-[10px] font-bold text-yellow-dark bg-yellow-light'>TRADICIONAL</p>
           <p className='font-baloo-2 mt-4 text-[20px]'>Expresso tradicional</p>
           <p className='text-base-label text-center text-sm font-normal mt-2'>O tradicional café feito com água <br />
              quente e grãos moídos
           </p>
           <div className='w-full flex justify-between items-center mt-8 px-6 mb-5'>
               <div className='flex justify-center items-center gap-2'>
                   <p className='text-base-text'>R$</p><span className='font-baloo-2 text-3xl font-extrabold'>9,90</span>
               </div>
               <div className='flex justify-between items-center p-2 gap-1 rounded-md bg-base-button'>
                   <p><Minus onClick={handleClickRemove} className='text-purple cursor-pointer' size={14} weight="bold" /></p>
                   <p className='text-base-title text-base'>{count}</p>
                   <p><Plus onClick={handleClickAdd} className='text-purple cursor-pointer' size={14} weight="bold" /></p>
               </div>
               <div className='flex justify-center items-center p-2 cursor-pointer rounded-md bg-purple-dark'>
               <ShoppingCart onClick={handleNotification} className='fill-white' size={22} weight="fill" />
               </div>
           </div>
       </div>
   )
}
