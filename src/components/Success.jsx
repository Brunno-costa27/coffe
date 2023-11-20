import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Header } from "./Header";
import image_success from '../assets/image_success.svg'

export function Success() {

    return (
        <>
            <main className="flex justify-between px-40 mt-20">
                <div className="flex flex-col gap-10 ">

                    <div>
                        <p className="text-yellow-dark font-baloo-2 text-[40px]">Uhu! Pedido confirmado</p>
                        <p className="text-base-subtitle text-xl">Agora é só aguardar que logo o café chegará até você</p>
                    </div>

                    <div className="p-[2px] bg-gradient-to-tr from-yellow to-purple rounded-bl-[36px] rounded-tr-[36px]">
                    <div className="flex flex-col p-10 bg-white rounded-bl-[34px] rounded-tr-[34px]">
                        <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center p-2 bg-purple rounded-full">
                                <MapPin className="fill-white" size={16} weight="fill" />
                            </div> 

                            <p className="text-base text-base-text">Entrega em <span className="font-bold">Rua João Daniel Martinelli, 102</span> <br /> Farrapos - Porto Alegre, RS</p>

                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center p-2 bg-yellow rounded-full">
                                <Timer className="fill-white bg-yellow" size={16} weight="fill" />
                            </div>
                            <p className="text-base text-base-text">Previsão de entrega <br /> <span className="font-bold">20 min - 30 min</span></p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center p-2 bg-yellow-dark rounded-full">
                                <CurrencyDollar className="text-white bg-yellow-dark" size={16} />
                            </div>
                            <p className="text-base text-base-text">Pagamento na entrega <br /> <span className="font-bold">Cartão de crédito</span></p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="flex justify-center items-end">
                    <img src={image_success} alt="" />
                </div>
            </main>
        </>
    )
}