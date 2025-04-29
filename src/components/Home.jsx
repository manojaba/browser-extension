import React, { useState } from 'react';
import data from '../data.json';
import Extension from './Extension';
import Menu from './Menu';
import Navigation from './Navigation';

function Home() {

    const extensionList = data;

    const [extension, setExtension] = useState(extensionList);
    const [allButton, setAllButton] = useState(true);
    const [activeButton, setActiveButton] = useState(false);
    const [inActiveButton, setInActiveButton] = useState(false);

    const active = extension.filter((each) => each.isActive === true);

    const inActive = extension.filter((each) => each.isActive === false);

    const handleActive = (name) => {
        const index = extension.findIndex((each) => each.name === name);
        setExtension((oldData) => oldData.map((each) => {
            if (each.name === name) {
                if (each.isActive) {
                    return {
                        ...each, isActive: !each.isActive,
                    };
                } else {
                    return {
                        ...each, isActive: !each.isActive
                    };
                }
            }
            return each;
        }))
    }

    const handleRemove = (name) => {

        setExtension((data) => data.filter((each) => each.name !== name));

    }

    function toggleAllButton() {
        setAllButton(true);
        setActiveButton(false);
        setInActiveButton(false);
    }

    const toggleActiveButton = () => {
        setAllButton(false);
        setActiveButton(true);
        setInActiveButton(false);
    }

    const toggleInActiveButton = () => {
        setAllButton(false);
        setActiveButton(false);
        setInActiveButton(true);
    }




    return (
        <div className='min-h-screen  pt-[20px] pb-[64px] px-[16px] md:pt-[24px] md:px-[32px] lg:pt-[40px] lg:px-[135px] bg-linear-180 dark:bg-linear-180  from-[#EBF2FC] dark:from-[#04091B] from-0% dark:from-0% to-[#EEFBF9] dark:to-[#091540] dark:to-100% to-100%' >

            <Menu />
            <Navigation allButton={allButton} activeButton={activeButton} inActiveButton={inActiveButton} toggleAllButton={toggleAllButton} toggleActiveButton={toggleActiveButton} toggleInActiveButton={toggleInActiveButton} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]'>
                {allButton &&
                    extension.map((each) => (
                        <Extension logo={each.logo} name={each.name} description={each.description} isActive={each.isActive} handleActive={handleActive} key={each.name} handleRemove={handleRemove} />
                    ))
                }

                {activeButton &&

                    active.map((each) => (
                        <Extension logo={each.logo} name={each.name} description={each.description} isActive={each.isActive} handleActive={handleActive} key={each.name} handleRemove={handleRemove} />
                    ))

                }

                {inActiveButton &&

                    inActive.map((each) => (
                        <Extension logo={each.logo} name={each.name} description={each.description} isActive={each.isActive} handleActive={handleActive} key={each.name} handleRemove={handleRemove} />
                    ))

                }


            </div>
        </div>
    )
}

export default Home