import Logo from '../assets/Logo.svg'
import {MapPin, ShoppingCart} from 'phosphor-react'
import { useNavigate } from "react-router-dom";
import { Notifications } from '../context/Notifications';
import { useContext } from 'react';

export function Header() {

   
    const {notification} = useContext(Notifications)


    const history = useNavigate()

    function handleRedirectCheckout() {
        history('/checkout')
    }

    function handleRedirectHome() {
        history('/')
    }

    return (
        <>
        <div className="flex justify-between items-center py-6 px-3 sm:py-8 sm:px-40">
            <img onClick={handleRedirectHome} className='w-16 h-10 sm:w-[84px] cursor-pointer sm:h-[40px]' src={Logo} alt="Logo" />

            <div className="flex gap-3">
                <div className="flex rounded-md bg-purple-light p-2">
                    <MapPin className='fill-purple' size={22} weight="fill" />
                    <p className='text-purple-dark text-[14px] font-ballo gap-3'>Porto alegre, RS</p>
                </div>

                <div onClick={handleRedirectCheckout} className='flex relative justify-center items-center cursor-pointer p-2 bg-yellow-light rounded-md'>
                    <ShoppingCart className='fill-yellow-dark' size={22} weight="fill" />
                        {notification > 0 && 
                            <div className='absolute -top-2 -right-2 bg-yellow-dark w-5 h-5 rounded-full flex items-center justify-center text-xs'>
                                <p className='text-white font-bold text-xs'>{notification}</p>
                            </div>
                        }
                </div>
                
            </div>

        </div>
        
        </>
    )
}