import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='footer-container'>
        <p>Manuel Murillo Peira</p>
            <div>
                <a href="https://www.linkedin.com/in/manuel-murillo-peira-37712120a/">
                <BsLinkedin/>
                </a>
                <a href="https://github.com/MMurilloP">
                <BsGithub/>
                </a>
            </div>
      </footer>
  )
}

export default Footer
