 export const RevenueCard = ({title, orderCount, amount}) =>{

        return  <div className="bg-white rounded shadow-md p-5">
                     <div className=" flex text-gray-700 font-semibold text-xl">
                        <div>{title}</div> <div className="flex justify-center flex-col"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> </div>
</div>
                      <div className="flex justify-between pt-2">
                            <div className="font-semibold text-xl">Rs {amount}</div>
                            <div className="text-blue-700 cursor-pointer underline">{orderCount ? <div className="flex"> {orderCount} order(s) 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                             <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>

                            </div> : null }</div>
                      </div>
                </div>

 }