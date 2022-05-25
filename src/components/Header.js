import TrollFace from '../images/Troll-Face.png';

function Header() {
    return (
        <header className="header">
          <img src={TrollFace} className="header--image" alt='troll' />
          <h2 className='header--title'>Meme Generator</h2>
          <h4 className='header--project' >React Course - project 3</h4>
        </header>
    );
  }
  
  export default Header;