import React, { useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
function ScrollUpButton() {

    const [visible, setVisible] = useState(false)
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setVisible(true)
        } else {
            return setVisible(false)
        }
      }

    window.onscroll=()=>{scrollFunction()
    console.log(visible);}
    return (
        <div id="scrollToUpButton" className={`${(visible ? 'visible' : 'invisible')}  fixed z-30 bottom-5 right-5`}>
            <button onClick={scrollToTop}>
            <BsFillArrowUpCircleFill className="text-yellow-500 h-9 w-8" />
            </button>
        </div>

    )
}

export default ScrollUpButton
