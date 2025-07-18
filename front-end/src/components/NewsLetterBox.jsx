import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';




const NewsLetterBox = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset } = useForm();


    const onSubmit = async (data) => {

        console.log(data)

        await new Promise((resolve) =>
            setTimeout(resolve, 2000)
        )


        reset()
        toast.success("Subscribed successfully")






    }


    return (
        <div className='text-center flex flex-col align-middle items-center justify-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe to our NewsLetter and get 10% off</p>
            <p className='mt-3 text-gray-500'>Fill out below and subscribe</p>


            <form onSubmit={handleSubmit(onSubmit)} className='w-full sm:w-1/2 flex items-center justify-center place-content-center gap-3 mx:auto my-6 border pl-3' >

                <input className='w-full sm:flex-1 outline-none '
                    placeholder='Enter your email' {...register("email", {
                        required: true, pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Please enter a valid email"
                        }
                    })} />
                {/* errors will return when field validation fails  */}
                <div>
                    {errors.email?.type === 'required' && <div className='text-red-600'> Email is Required</div>}
                    {errors.email?.type === 'pattern' && <div className='text-red-600'>Pattern doesnt match</div>}
                </div>

                <input

                    className={` bg-black text-white p-2.5 w-1/4 hover:cursor-pointer ${isSubmitting ? 'bg-gray-500' : ""}`}
                    type="submit"
                    disabled={isSubmitting}
                    value={isSubmitting ? "isSubmitting.." : "Submit"}

                />

            </form>



        </div>
    )
}

export default NewsLetterBox
