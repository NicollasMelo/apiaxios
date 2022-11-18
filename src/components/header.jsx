import header from '../styles/header.css'

export default function Header() {
    return (
        <div className='contentHeader'>
            <header className='header'>
                <nav className='menuHeader'>
                    <ul>
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </div >
    )
}