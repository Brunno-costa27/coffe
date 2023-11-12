import Logo from '../assets/Logo.svg'
import {MapPin, ShoppingCart} from 'phosphor-react'

export function Header() {

    return (
        <>
        <div className="flex justify-between items-center py-6 px-3 sm:py-8 sm:px-40">
            <img className='w-16 h-10 sm:w-[84px] sm:h-[40px]' src={Logo} alt="Logo" />

            <div className="flex gap-3">
                <div className="flex rounded-md bg-purple-light p-2">
                    <MapPin className='fill-purple' size={22} weight="fill" />
                    <p className='text-purple-dark text-[14px] font-ballo gap-3'>Porto alegre, RS</p>
                </div>

                <div className='flex relative justify-center items-center p-2 bg-yellow-light rounded-md'>
                    <ShoppingCart className='fill-yellow-dark' size={22} weight="fill" />
                    <div className='absolute -top-2 -right-2 bg-yellow-dark w-5 h-5 rounded-full flex items-center justify-center text-xs'>
                        <p className='text-white font-bold text-xs'>3</p>
                    </div>
                </div>
                
            </div>

        </div>
        
        </>
    )
}