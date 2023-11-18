import { Card } from "./Card";


export function Products() {

   return (
       <div className="px-36 mt-8 mb-40 sm:px-20 md:px-10 lg:px-40">
           <h1 className="text-base-subtitle font-extrabold font-baloo-2 text-[32px]">Nossoa cafés</h1>
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
           </div>
       </div>
   )
}
