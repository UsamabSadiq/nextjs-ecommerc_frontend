import React from 'react'

const FailedSuccess = () => {
    return (
        <>
            <div className="h-[90vh] px-3 flex justify-center items-center ">
                <div className="border rounded-md w-[27rem] p-2 ">
                    <h3 className='text-xl text-red-500 text-center font-bold uppercase'>Payment Failed</h3>
                    <p className='font-medium '>For any product related query, email us at</p>
                    <p className='text-blue-400 underline '>shoppingnextjs@gmail.com</p>

                    <button className=' w-full my-3 px-10 cursor-pointer rounded-full py-1 capitalize text-lg hover:text-white hover:bg-black hover:scale-95 duration-300 border border-black '>Continue Shopping</button>

                </div>
            </div>
        </>
    )
}

export default FailedSuccess
