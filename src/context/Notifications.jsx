import { createContext, useState } from "react";

export const Notifications = createContext()

export const NotificationProvider = ({children}) => {
    const [notification, setNotification] = useState(0)
    const [checkoutItens, setCheckoutItens] = useState([])

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Adiciona a animação de rolar suavemente
        });
      };

    const handleNotification = () => {
        setNotification(notification + 1);
        scrollToTop()
    }

    const handleCheckoutItens = (id, title, price, img) => {
        setCheckoutItens([...checkoutItens, {
            id: id,
            title: title,
            price: price,
            img: img
        }])
    }

    return (
        <Notifications.Provider value={{
                notification,
                handleNotification,
                checkoutItens,
                handleCheckoutItens
            }} 
        >
            {children}
        </Notifications.Provider>
    )     
}