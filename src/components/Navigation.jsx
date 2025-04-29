import React from 'react'

function Navigation(prop) {
    return (
        <div className='mb-[32px] mt-[40px]  md:flex items-center justify-between'>
            <h1 className='text-[#091540] text-[34px] tracking-[-1px] leading-[100%] font-bold text-center dark:text-[#FBFDFE]'>Extensions List</h1>

            <div className='text-[20px] font-normal leading-[140%] tracking-[-0.3px] flex  justify-between px-[24px] pt-[24px] md:pt-0 md:px-0 md:gap-[12px]'>
                <button onClick={() => prop.toggleAllButton()} className={`px-[20px] pt-[8px] pb-[10px]  rounded-[999px] outline-[1px] outline-[#D6E2F5]  shadow-sm shadow-[#B8C4D7]/40 hover:shadow-none  hover:cursor-pointer  ${prop.allButton ? 'bg-[#C7231A] dark:bg-[#F25C54] dark:border-none dark:outline-none  text-white dark:text-[#091540] hover:bg-[#DE4840] hover:opacity-100 dark:hover:bg-[#DE4840] dark:focus:shadow-[1px] dark:focus:shadow-[#091540] dark:focus:outline-[1px] dark:focus:outline-[#F25C54]' : 'bg-[#FBFDFE] focus:ring-[4px]  focus:ring-[#C7231A] focus:outline-[2px] focus:outline-[#D6E2F5] hover:opacity-70  dark:bg-[#2F364B] dark:border-[1px] dark:text-[#FBFDFE] dark:border-[#535868] dark:hover:bg-[#535868] dark:active:hover:bg-[#DE4840]'}`}>All</button>
                <button onClick={() => prop.toggleAllButton()} className={`px-[20px] pt-[8px] pb-[10px]  rounded-[999px] outline-[1px] outline-[#D6E2F5]  shadow-sm shadow-[#B8C4D7]/40 hover:shadow-none  hover:cursor-pointer  ${prop.activeButton ? 'bg-[#C7231A] dark:bg-[#F25C54] dark:border-none dark:outline-none  text-white dark:text-[#091540] hover:bg-[#DE4840] hover:opacity-100 dark:hover:bg-[#DE4840] dark:focus:shadow-[1px] dark:focus:shadow-[#091540] dark:focus:outline-[1px] dark:focus:outline-[#F25C54]' : 'bg-[#FBFDFE] focus:ring-[4px]  focus:ring-[#C7231A] focus:outline-[2px] focus:outline-[#D6E2F5] hover:opacity-70  dark:bg-[#2F364B] dark:border-[1px] dark:text-[#FBFDFE] dark:border-[#535868] dark:hover:bg-[#535868] dark:active:hover:bg-[#DE4840]'}`}>Active</button>

                <button onClick={() => prop.toggleAllButton()} className={`px-[20px] pt-[8px] pb-[10px]  rounded-[999px] outline-[1px] outline-[#D6E2F5]  shadow-sm shadow-[#B8C4D7]/40 hover:shadow-none  hover:cursor-pointer  ${prop.inActiveButton ? 'bg-[#C7231A] dark:bg-[#F25C54] dark:border-none dark:outline-none  text-white dark:text-[#091540] hover:bg-[#DE4840] hover:opacity-100 dark:hover:bg-[#DE4840] dark:focus:shadow-[1px] dark:focus:shadow-[#091540] dark:focus:outline-[1px] dark:focus:outline-[#F25C54]' : 'bg-[#FBFDFE] focus:ring-[4px]  focus:ring-[#C7231A] focus:outline-[2px] focus:outline-[#D6E2F5] hover:opacity-70  dark:bg-[#2F364B] dark:border-[1px] dark:text-[#FBFDFE] dark:border-[#535868] dark:hover:bg-[#535868] dark:active:hover:bg-[#DE4840]'}`}>InActive</button>

            </div>
        </div>
    )
}

export default Navigation 