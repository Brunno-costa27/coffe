import coffeImg from '../assets/coffe.svg'
import {Coffee, Package, ShoppingCart, Timer} from 'phosphor-react'


export function Main() {

    return (
        <main className="flex flex-col justify-center items-center mt-24 gap-14 px-40 lg:flex lg:flex-row lg:justify-between lg:items-start lg:px-40 lg:mt-24 lg:gap-14">
            <div className='w-full'>
                <div className='flex-col gap-4'>
                    <p className='text-base-title text-3xl lg:text-5xl font-extrabold font-baloo-2'>
                    Encontre o café perfeito <br /> para qualquer hora do dia
                    </p>
                    <p className='lg:text-xl lg:font-normal text-xs text-base-subtitle mt-4'>
                    Com o Coffee Delivery você recebe seu 
                    café onde estiver, a <br /> qualquer hora
                    </p>
                </div>

                <div className="grid grid-cols-2 mt-16 gap-5">
                    <div className="flex gap-3">
                        <div className="flex justify-center items-center p-2 bg-yellow-dark rounded-full">
                            <ShoppingCart className='fill-white' size={16} weight="fill" />
                        </div>
                        <p className='flex justify-center items-center text-base-text text-base'>Compra simples e segura</p>
                    </div>

                    <div className='flex gap-3'>
                        <div className="flex justify-center items-center p-2 bg-base-text rounded-full">
                        <Package className='fill-white' size={16} weight="fill" /> 
                        </div>
                        <p className='flex justify-center items-center text-base-text text-base'>Embalagem mantém o café intacto</p>
                    </div>

                    <div className='flex gap-3'>
                        <div className="flex justify-center items-center p-2 bg-yellow rounded-full">
                            <Timer className='fill-white' size={16} weight="fill" />
                        </div>
                        <p className='flex justify-center items-center text-base-text text-base'>Entrega rápida e rastreada</p>
                    </div>

                    <div className='flex gap-3'>
                        <div className='flex justify-center items-center p-2 bg-purple rounded-full'>
                            <Coffee className='fill-white' size={16} weight="fill" />
                        </div>
                        <p className='flex justify-center items-center text-base-text text-base'>O café chega fresquinho até você</p>
                    </div>
                </div>
            </div>

            <div className='w-[60%] flex justify-end items-end'>
                    <img src={coffeImg} alt="Imagem de um café" />
            </div>
        </main>
    )
}