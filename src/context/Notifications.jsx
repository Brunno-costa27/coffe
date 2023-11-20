import { createContext, useState } from "react";

export const Notifications = createContext()

export const NotificationProvider = ({children}) => {
    const [notification, setNotification] = useState(0)

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

    return (
        <Notifications.Provider value={{notification, handleNotification}} >
            {children}
        </Notifications.Provider>
    )     
}