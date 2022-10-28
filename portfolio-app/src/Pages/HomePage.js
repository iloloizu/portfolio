import React from 'react'
import '../styles/typ.scss'

export default function HomePage() {
  return (
    <div className="HomePage"> 
        <div className="hero"> 
          <h1 className='hero-text'>
            Hi, I'm <span>Ilolo Izu</span>, Software Engineer
          </h1>
          <p className='h-sub-text'>
          Welcome to my website, here you can join the journey and follow me in my path to success in the field of
            web development. My name is Ilolo Izu (e-lo-lo e-zu), known some places by my first name—Justin! I'm a Texas A&M University & Flatiron School Alumnus.
            I'm a software engineer with a passion for building web applications and learning new technologies. My most recent experience comes from working as an Associate Software Engineer at 
            <a href='https://www.linkedin.com/feed/update/urn:li:activity:6937548719974219776/'> RippleMatch</a>.
             I am currently seeking new roles.
          </p>
          <div className='icons'>
            <a href='https://www.linkedin.com/in/ilolo-izu/' className='icon'>LinkedIn</a>
            <a href='https://twitter.com/iloloizu' className='icon'>Twitter</a>
            <a href='https://ilolo.medium.com/' className='icon'>Blog</a>
            <a href='https://github.com/iloloizu' className='icon'>Github</a>
          </div>
        </div>
    </div>
  )
}
