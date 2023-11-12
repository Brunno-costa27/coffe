import Logo from '../assets/Logo.svg'
import {MapPin, ShoppingCart} from 'phosphor-react'

export function Home() {

    return (
        <>
        <div className="flex justify-between items-center py-8 px-40">
            <img src={Logo} alt="Logo" />

            <div className="flex gap-3">
                <div className="flex rounded-md bg-purple-light p-2">
                    <MapPin className='fill-purple' size={22} weight="fill" />
                    <p className='text-purple-dark text-[14px] font-ballo gap-3'>Porto alegre, RS</p>
                </div>

                <div className='flex justify-center items-center p-2 bg-yellow-light rounded-md'>
                    <ShoppingCart className='fill-yellow-dark' size={22} weight="fill" />
                </div>
                
            </div>

        </div>
        
        </>
    )
}