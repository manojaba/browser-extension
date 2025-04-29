import React from 'react'

function Extension({ logo, name, description, isActive, handleActive, handleRemove }) {


    return (
        <div className={`bg-[#FBFDFE] dark:bg-[#202535]  rounded-[20px] p-[20px] h-[200px] border-[1px] border-[#D6E2F5] dark:border-[#535868] shadow-[0_2px_4px_0_rgba(194,206,225,0.3)] transition-all duration-500 ease-in-out	relative`}>
            <div className='flex gap-[16px] items-start '>
                <img src={logo}></img>

                <div className=''>
                    <h1 className='text-[#091540] dark:text-[#FBFDFE] font-bold text-[20px] leading-[120%] tracking-[-0.2px] '>{name}</h1>
                    <p className='text-[#535868] dark:text-[#C6C6C6] font-normal text-[16px] leading-[140%] tracking-[-0.5px] mt-[8px]'>{description}</p>
                </div>
            </div>
            <button onClick={() => handleRemove(name)} className='text-[#091540] dark:text-[#C6C6C6] text-[16px] font-medium leading-[140%] tracking-[-0.5px] px-[16px] py-[8px] hover:cursor-pointer hover:text-[#FBFDFE] hover:bg-[#C7231A] hover:outline-none focus:ring-[4px] focus:ring-white focus:outline-[2px] dark:hover:bg-[#F25C54] focus:outline-[#C7231A] outline-[1px] outline-[#C6C6C6] rounded-[999px] absolute bottom-[16px]  left-[16px]  transition-color duration-500 ease-in-out'>Remove</button>
            <button onClick={() => handleActive(name)} className={` w-[36px] h-[20px] rounded-[9999px] p-[2px] hover:cursor-pointer focus:ring-[4px] focus:ring-[#F25C54] focus:outline-[2px] focus:outline-[#FBFDFE]  ${isActive ? ' bg-[#C7231A]  dark:bg-[#DE4840] ' : ' bg-[#C6C6C6] dark:bg-[#535868]'} absolute right-[20px] bottom-[29px] transition-all duration-500 ease-in-out `}>
                <div className={`w-[16px] h-[16px] bg-white rounded-[9999px] transition-all duration-500 ease-in-out ${isActive ? 'translate-x-[16px]' : 'translate-x-0'}`}></div>
            </button>
        </div>
    )
}

export default Extension