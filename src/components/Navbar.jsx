import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import {navLinks} from '../../constants/index'

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
               trigger: 'nav',
               start: 'bottom top'
            }
           });
           
           navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(20px)',
            duration: 1,
            ease: 'power1.inOut'
           });
    })
  return (
    <nav>
        <div>
            <a href='#home' className='flex-center gap-2'>
                <img src='/images/logo.png' alt='logo' />
                <p>Velvet Pour</p>
            </a>
            <ul>
               {navLinks.map((link) => (
                <li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
               ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar