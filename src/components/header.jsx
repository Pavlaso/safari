import logo from './../images/logo.svg'
import arrow from './../images/headerArrow.svg'




export const Header = () => {
    return <header className="header">
        <div className='container'>
            <div className="header__info">
                <div className="header__info-logo">
                    <img className="header__info-img" src={logo} alt="logo" />
                    <div className="header__info-content">
                        <h3 className="header__info-title">Сафари ТУРИСТИК</h3>
                        <span className="header__info-text">Турагентство</span>
                    </div>
                </div>
                <div className="header__info-telephone">
                    <span className="header__info-telephone-text">Заказ туров и бронирование:</span>
                    <a className="header__info-telephone-number" href='#'>
                        <span className="header__info-telephone-number">тел. 8-050-8-543-543</span>
                    </a>
                </div>
            </div>
            <div className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <a className="header__nav-link" href="#" >Бронирование</a>
                    </li>
                    <li className="header__nav-item">
                        <a className="header__nav-link" href="#" >Экскурсии</a>
                    </li>
                    <li className="header__nav-item">
                        <a className="header__nav-link" href="#" >Туры</a>
                    </li>
                    <li className="header__nav-item">
                        <a className="header__nav-link" href="#" >Об Африке</a>
                    </li>
                    <li className="header__nav-item">
                        <a className="header__nav-link" href="#" >О нас</a>
                    </li>
                </ul>
            </div>
            <h1 className="header__title">
                Сафари по Африке
            </h1>
            <div className="header__basic">
                <p className="header__basic-text">
                    Туры по самомым экзотическим местам
                    Поехали с нами за новыми впечатлениями!
                </p>
                <button className="header__basic-btn">Оставить заявку</button>
            </div>
            <div className="header__arrow">
                <img className="header__arrow-img" src={arrow} alt="arrow" />
            </div>
        </div>
      </header>
}