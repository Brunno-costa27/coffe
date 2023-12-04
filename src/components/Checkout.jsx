import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import line from '../assets/line.svg'
import {Minus, Plus, Trash} from 'phosphor-react'
import { useContext, useState } from 'react';
import { Notifications } from '../context/Notifications';



export function Checkout() {

   const {checkoutItens} = useContext(Notifications)

   const [isStyled, setIsStyled] = useState(false);
   const [isStyledInput, setIsStyledInput] = useState(false);


    const handleButtonClick = () => {
        // Inverte o estado ao clicar no botão
        setIsStyled(!isStyled);
    };

    const handleInputClick = () => {
        // Inverte o estado ao clicar no botão
        setIsStyledInput(!isStyledInput);
    };

    const handleClearForm = () => {
        // Inverte o estado ao clicar no botão
        if(isStyledInput) {
            setIsStyledInput(false);
        }
    };

    const handleClearButton = () => {
        // Inverte o estado ao clicar no botão
        if(isStyled) {
            setIsStyled(false);
        }
    };

    console.log(isStyledInput)

   return (
       <>
           <div className="flex px-40 gap-3 w-full">
               <div className="flex flex-col  gap-3 w-full">
                   <div className="flex justify-normal gap-2 p-10 flex-col bg-base-card rounded-md">
                       <MapPinLine className="text-yellow-dark" size={22} />
                       <p className="text-base-subtitle">
                           Endereço de entrega <br />
                       <p className="text-base-text text-sm">
                           Informe o Endereço onde deseja receber o pedido
                       </p>
                       </p>

                       <form onClick={handleClearForm} className="flex flex-col mt-8 gap-4" action="">
                           <input
                               onClick={handleInputClick}
                               className={`w-[188px] p-3 rounded bg-base-input border-2  ${isStyledInput ? 'border-yellow-dark' : 'border-base-button'}`}                           
                               type="text"
                               placeholder="CEP"
                            />


                           <input
                               className="p-3 rounded bg-base-input border-2 border-base-button "                           
                               type="text"
                               placeholder="Rua"
                            />


                               <div className="flex gap-3">
                                   <input
                                       className="p-3 rounded bg-base-input border-2 border-base-button "                           
                                       type="text"
                                       placeholder="Número"
                                   />  


                                   <input
                                       className="p-3 rounded bg-base-input w-full border-2 border-base-button "                           
                                       type="text"
                                       placeholder="Complemento"
                                   />
                               </div>


                               <div className="flex gap-3">
                                   <input
                                       className="p-3 rounded bg-base-input border-2 border-base-button "                           
                                       type="text"
                                       placeholder="Bairro"
                                   />  


                                   <input
                                       className="p-3 rounded bg-base-input w-full border-2 border-base-button "                           
                                       type="text"
                                       placeholder="Cidade"
                                   />


                                   <input
                                       className="p-3 rounded bg-base-input w-[55px] border-2 border-base-button "                           
                                       type="text"
                                       placeholder="UF"
                                   />
                               </div>
                          
                       </form>

                   </div>

                   <div onClick={handleClearButton} className="flex flex-col p-10 bg-base-card rounded-md gap-8">
                        <div className="flex">
                                <CurrencyDollar className="text-purple" size={22} />
                                <p className="text-base text-base-subtitle">Pagamento
                                <br />
                                <p className="text-[14px] text-base-text">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                </p>
                        </div>
                    
                        <div className="flex justify-between items-center gap-3">
                            <div onClick={handleButtonClick}
                                 className={`flex gap-3 justify-center items-center bg-base-button p-3 rounded-md hover:cursor-pointer ${isStyled ? 'bg-purple-light border-2 border-purple' : 'hover:bg-base-hover'}`}
                            >
                                <CreditCard className="text-purple" size={16} />
                                <p className="text-base-text text-xs uppercase">Cartão de crédito</p>
                            </div>
                            
                            <div className="flex gap-3 justify-center items-center bg-base-button p-3 rounded-md hover:bg-base-hover hover:cursor-pointer">
                                <Bank className="text-purple"  size={16} />
                                <p  className="text-base-text text-xs uppercase">Cartão de débito</p>
                            </div>

                            <div className="flex gap-3 justify-center items-center bg-base-button p-3 rounded-md hover:bg-base-hover hover:cursor-pointer">
                                <Money className="text-purple"  size={16} />
                                <p  className="text-base-text text-xs uppercase">Dinheiro</p>
                            </div>
                        </div>
                    </div>
                </div>

               <div className="p-10 bg-base-card w-[50%] h-4/5 rounded-tr-[44px] rounded-bl-[44px]">
                    
                   {checkoutItens.length > 0 ? (
                   <div>
                        {checkoutItens.map(checkoutItem => {
                        return (<>
                            <div className="p-2">
                                <div className="flex justify-between">
                                    <div className="flex gap-5 justify-between items-center">
                                        <img className="w-[64px]" src={checkoutItem.img} alt="" />
                                        <div className='flex flex-col gap-2'>
                                            <p className="text-base text-base-subtitle">{checkoutItem.title}</p>
                                            <div className="flex gap-2 m-0">
                                                <div className="flex justify-between items-center p-2 gap-1 rounded-md bg-base-button">
                                                    <p><Minus className='text-purple' size={14} weight="bold" /></p>
                                                    <p className='text-base-title text-base'>1</p>
                                                    <p><Plus className='text-purple' size={14} weight="bold" /></p>
                                                </div>
                                                <div className='flex justify-center items-center p-2 gap-1 rounded-md bg-base-button hover:bg-base-hover'>
                                                    <Trash className="text-purple" size={16} />
                                                    <p className="text-xs text-base-text uppercase hover:text-base-subtitle">Remover</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                            <div className="flex m-0">
                                                <p className="text-base font-bold text-base-text">{checkoutItem.price}</p>
                                            </div>

                                </div>
                        </div>

                        <img className="mt-6 mb-6" src={line} alt="" />
                        
                        </>)
                    })}
                    </div>
                   ): (
                    <h1 className="flex justify-center items-center font-bold text-xl">Nenhum item no carrinho</h1>
                   )} 


                   <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-base-text">Total de itens</p>
                            <p className="text-base text-base-text">R$ 29, 70</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-sm text-base-text">Entrega</p>
                            <p className="text-base text-base-text">R$ 3,50</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-xl text-base-subtitle font-bold">Total</p>
                            <p className="text-xl text-base-subtitle font-bold">R$ 29, 70</p>
                        </div>
                   </div>

                   <div className="flex justify-center items-center px-2 py-3 mt-6 bg-yellow rounded-md hover:bg-yellow-dark">
                        <button className="text-white text-sm font-bold uppercase">Confirmar pedido</button>
                   </div>
               </div>

           </div>
       </>
   )
}
