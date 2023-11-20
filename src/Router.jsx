import { Routes, Route} from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Main } from './components/Main';
import { Checkout } from './components/Checkout';
import { Success } from './components/Success';


export function Router() {

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Main/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/success" element={<Success />} />
            </Route>    
        </Routes>
    )
}