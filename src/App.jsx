import { Header } from './components/header'
import { Territory } from './components/miniTerritory'
import './scss/style.scss'

import plase1 from './images/places/1.jpg'
import plase2 from './images/places/2.jpg'
import plase3 from './images/places/3.jpg'
import plase4 from './images/places/4.jpg'
import plase5 from './images/places/5.jpg'
import plase6 from './images/places/6.jpg'
import plase7 from './images/places/7.jpg'
import plase8 from './images/places/8.jpg'
import plase9 from './images/places/9.jpg'
import plase10 from './images/places/10.jpg'
import plase11 from './images/places/11.jpg'

import icon1 from './images/direction/1.png'
import icon2 from './images/direction/2.png'
import icon3 from './images/direction/3.png'
import icon4 from './images/direction/4.png'
import icon5 from './images/direction/5.png'
import icon6 from './images/direction/6.png'
import icon7 from './images/direction/7.png'

import gallery1 from './images/gallery/1.jpg'
import gallery2 from './images/gallery/2.jpg'
import gallery3 from './images/gallery/3.jpg'
import gallery4 from './images/gallery/4.jpg'
import gallery5 from './images/gallery/5.jpg'
import gallery6 from './images/gallery/6.jpg'
import gallery7 from './images/gallery/7.jpg'
import gallery8 from './images/gallery/8.jpg'
import gallery9 from './images/gallery/9.jpg'
import gallery10 from './images/gallery/10.jpg'

import photoGallery1 from './images/photoGallery/1.jpg'
import photoGallery2 from './images/photoGallery/2.jpg'
import photoGallery3 from './images/photoGallery/3.jpg'
import photoGallery4 from './images/photoGallery/4.jpg'
import photoGallery5 from './images/photoGallery/5.jpg'
import photoGallery6 from './images/photoGallery/6.jpg'

import arrowRight from './images/photoGallery/arrow-right.svg'
import arrowLeft from './images/photoGallery/arrow-left.svg'

import popup_activaitor from './images/popup-activaitor.png'

import logo from './images/logo.svg'

export const App = () => {
  return <div className="wrapper">
        <Header />
        <div className="main">
            <div className='container'>
                <div className='mini-ter__container'>
                  <Territory imgage={plase1} title={'Намибия'}/>
                  <Territory imgage={plase2} title={'Танзания'}/>
                  <Territory imgage={plase3} title={'Кения'}/>
                  <Territory imgage={plase4} title={'Ботсвана'}/>
                  <Territory imgage={plase5} title={'Кейптаун'}/>
                  <Territory imgage={plase6} title={'Мадагаскар'}/>
                  <Territory imgage={plase7} title={'Занзибар'}/>
                  <Territory imgage={plase8} title={'ЮАР'}/>
                  <Territory imgage={plase9} title={'Мозамбик'}/>
                  <Territory imgage={plase10} title={'Замбия'}/>
                  <Territory imgage={plase11} title={'Конго'}/>
                </div>
              </div>
              <section className='our-pluses'>
                <div className='container'>
                  <h4 className='our-pluses__title'>
                      Основные направления 
                  </h4>
                  <div className='our-pluses__container'>
                    <div className='our-pluses__block'>
                      <img className='our-pluses__img' src={icon1} alt="gallery"/>
                      <div className='our-pluses__text'> 
                        Полная организация отдыха и групповые туры.
                      </div>
                    </div>
                    <div className='our-pluses__block'>
                      <img className='our-pluses__img' src={icon2} alt="gallery"/>
                      <div className='our-pluses__text'> 
                        Организация трансфера из любой точки мира
                      </div>
                    </div>
                    <div className='our-pluses__block'>
                      <img className='our-pluses__img' src={icon3} alt="gallery"/>
                      <div className='our-pluses__text'> 
                        Проживание в отелях по маршруту
                      </div>
                    </div>
                    <div className='our-pluses__block'>
                      <img className='our-pluses__img' src={icon4} alt="gallery"/>
                      <div className='our-pluses__text'> 
                        Аренда автомобилей и любого вида транспорта
                      </div>
                    </div>
                    <div className='our-pluses__block'>
                      <img className='our-pluses__img' src={icon5} alt="gallery"/>
                      <div className='our-pluses__text'> 
                        Медицинская страховка
                      </div>
                    </div>
                    <div className='our-pluses__block'>
                      <img className='our-pluses__img' src={icon6} alt="gallery"/>
                      <div className='our-pluses__text'> 
                        Сопровождение русскоговорящих гидов
                      </div>
                    </div>
                    <div className='our-pluses__block'>
                      <img className='our-pluses__img' src={icon7}  alt="gallery"/>
                      <div className='our-pluses__text'> 
                        Организация VIP-туров
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className='gallrey'>
              <div className='container'>
                  <h3 className='gallrey__title'>Популярные предложения</h3>
                  <div className='gallrey__items'>
                      <div className='gallrey__item'>
                        <a className='gallrey__link'>
                          <img className='gallrey__img' src={gallery1} />
                        <h3 className='gallrey__item-title'>ПУТЕШЕСТВИЕ ПО НАМИБИИ</h3>
                        <h3 className='gallrey__item-prise'>от 3000 $</h3>
                        </a>
                      </div>

                      <div className='gallrey__item'>
                          <a className='gallrey__link'>
                            <img className='gallrey__img' src={gallery2} />
                          <h3 className='gallrey__item-title'>КЛАССИКА КЕНИИ</h3>
                          <h3 className='gallrey__item-prise'>от 3500 $</h3>
                          </a>
                        </div>

                        <div className='gallrey__item'>
                          <a className='gallrey__link'>
                            <img className='gallrey__img' src={gallery3} /> 
                          <h3 className='gallrey__item-title gallrey__item-title_big'>САМЫЕ ПОПУЛЯРНЫЕ САФАРИ ПАРКИ И ЗАПОВЕДНИКИ ТАНЗАНИИ</h3>
                          <p className='gallrey__item-country'>Танзания</p>
                          <p className='gallrey__item-duration gallrey__item-duration_big'>7 дней / 6 ночей</p>
                          <h3 className='gallrey__item-prise gallrey__item-prise_big'>от 1700 $</h3>
                          </a>
                        </div>
                      
                        <div className='gallrey__item'>
                          <a className='gallrey__link'>
                            <img className='gallrey__img' src={gallery4} />
                          <h3 className='gallrey__item-title'>ИССЛЕДОВАНИЕ БОТСВАНЫ</h3>
                          <h3 className='gallrey__item-prise'>от 2500 $</h3>
                          </a>
                        </div>
                      
                        <div className='gallrey__item'>
                          <a className='gallrey__link'>
                            <img className='gallrey__img' src={gallery5} />
                          <h3 className='gallrey__item-title'>ПУТЕШЕСТВИЕ ЧЕРЕЗ 5 СТРАН ЮЖНОЙ АФРИКИ</h3>
                          <h3 className='gallrey__item-prise'>от 5000 $</h3>
                          </a>
                        </div>
                      
                        <div className='gallrey__item'>
                          <a className='gallrey__link'>
                            <img className='gallrey__img' src={gallery6} />
                            <h3 className='gallrey__item-title gallrey__item-title_big'>ГРАНДИОЗНОЕ ПРИКЛЮЧЕНИЕ ПО 9 СТРАНАМ АФРИКИ</h3>
                            <p className='gallrey__item-country'>
                              ЮАР, Замбия, Намибия, Зимбабве, Ботсвана, Мозамбик, Танзания, Кения
                            </p>
                            <p className='gallrey__item-duration'>24 дня / 23 ночи</p>
                            <h3 className='gallrey__item-prise gallrey__item-prise_big'>от 6000 $</h3>
                          </a>
                        </div>
                      
                        <div className='gallrey__item'>
                          <a className='gallrey__link'>
                            <img className='gallrey__img' src={gallery7} />
                          <h3 className='gallrey__item-title'>ВЕЛИКОЛЕПНЫЙ КЕЙПТАУН</h3>
                          <h3 className='gallrey__item-prise'>от 75 880 грн.</h3>
                          </a>
                        </div>

                        <div className='gallrey__item'>
                          <a className='gallrey__link'>
                            <img className='gallrey__img' src={gallery8} />
                          <h3 className='gallrey__item-title'>ПУТЕШЕСТВИЕ ПО ЮАР:</h3>
                          <h3 className='gallrey__item-prise'>от 2500 $</h3>
                          </a>
                        </div>
                      
                        <div className='gallrey__item'>
                          <a className='gallrey__link'>
                            <img className='gallrey__img' src={gallery9} />
                          <h3 className='gallrey__item-title'>ВЕЛИКАЯ МИГРАЦИЯ В ТАНЗАНИИ И ОТДЫХ НА ЗАНЗИБАРЕ</h3>
                          <h3 className='gallrey__item-prise'>от 1700 $</h3>
                          </a>
                        </div>

                        <div className='gallrey__item'>
                          <a className='gallrey__link'>
                            <img className='gallrey__img' src={gallery10} />
                          <h3 className='gallrey__item-title'>ОТ КЕЙПТАУНА ДО ВОДОПАДА ВИКТОРИЯ</h3>
                          <h3 className='gallrey__item-prise'>от 2500 $</h3>
                          </a>
                        </div>
                  </div>
                  </div>
              </section>
        </div>
        <div className='container'>
          <section className='map'>
            <h3 className='map__title'>Карта Африки</h3>
            <iframe className='map__map' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d8719425.593780253!2d32.9130914447836!3d-17.063916472366728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x1925fa9c5e2b3bed%3A0x80821a6c65abae4e!2zQ2hhbmdhcmEsINCc0L7Qt9Cw0LzQsdC40Lo!3m2!1d-16.389538899999998!2d33.258793!5e1!3m2!1sru!2sru!4v1634387674979!5m2!1sru!2sru"
            width="1080" height="600" style={{border:"0;"}} allowfullscreen="" loading="lazy"></iframe>
          </section>
        <section className='popup'>
          <div className='popup__box'>
            <h4 className='popup__box-title'>О сафари турах</h4>
            <p className='popup__box-text'>
              Восточная и Южная Африка являются самыми популярными местами, где можно насладиться увлекательным 
              путешествием, под названием сафари. Именно здесь созданы все условия, чтобы туристы могли почувствовать 
              себя частичкой девственной природы Африки. Туры сафари в Африку характеризуются уникальными программами,
              в рамках которых туристы перемещаются на комфортабельных, специализированных автомобилях или автобусах
            </p>
            <a className='popup__box-link' href="#">Читать подробней</a>
          </div>
          <div className='popup__video'>
            <img className='popup__play-btn' src={popup_activaitor}/>
          </div>
        </section>
        </div>
        <section className='photo-gallery'>
        <div className='container'>
          <div className='photo-gallery__top'>
            <h2 className='photo-gallery__top-title'>Фотогалерея</h2>
            <div className='photo-gallery__top-arrows'>
              <a className='photo-gallery__top-link' href="#">Перейти в раздел</a>
              <img className='photo-gallery__top-arrow' src={arrowLeft}/>
              <img className='photo-gallery__top-arrow' src={arrowRight}/>
            </div>
          </div>
          <div className='photo-gallery__images'>
            <img className='photo-gallery__img' src={photoGallery1}/>
            <img className='photo-gallery__img' src={photoGallery2}/>
            <img className='photo-gallery__img' src={photoGallery3}/>
            <img className='photo-gallery__img' src={photoGallery4}/>
            <img className='photo-gallery__img' src={photoGallery5}/>
            <img className='photo-gallery__img' src={photoGallery6}/>
          </div>
          </div>
        </section>
        <section className='our-dignity'>
          <div className='container'>
            <h2 className='our-dignity__title'>Сафари тур премиум класса</h2>
            <div className='our-dignity__text-block'>
              <div className='our-dignity__text-item'>
                <p className='our-dignity__text-part'>
                  Сафари тур ? это уникальное путешествие в мир дикой природы, знакомство с многогранной Африкой, 
                  наблюдение за дикими животными в их привычной среде обитания.
                </p>
                <p className='our-dignity__text-part'>
                  <span className='our-dignity__text-organization'>САФАРИ ТУРИСТИК</span> специализируется на элитном 
                  туризме и представляет своим клиентам уникальные программы сафари туров.Среди представленных 
                  вариантов можно найти нечто неповторимое, по вашему вкусу.
                </p>
                <p className='our-dignity__text-part'>
                  Если вы желаете отправиться в самое незабываемое путешествие в вашей жизни, побывать в уникальных 
                  местах и увидеть то, что удается лицезреть немногим ? тогда сафари туры созданы для вас.
                </p>
              </div>
              <div className='our-dignity__text-item'>
                <p>
                  Сафари туры выбирают туристы, которые предпочитают динамичный, яркий, насыщенный эмоциями и впечатлениями отдых.   
                </p>
              Программы сафари туров по Африке рассчитаны на определенную группу людей, которые под покровительством 
              куратора, осуществляют увлекательное путешествие по заранее спланированному маршруту. Мы ориентированы 
              на клиентов VIP класса, поэтому все предложения, представленные в нашей коллекции, отличаются высшим 
              классом, детально продуманной программой, первоклассным сервисом и индивидуальным подходом к каждому 
              участнику путешествия. У нас на сайте вы можете прочитать все подробности о программах уже сформированных 
              туров по сафари.
              </div>
            </div>
            <div className='our-dignity__years'>

              <div className='our-dignity__years-item'>
                <div className='our-dignity__year'>16</div>
                <span className='our-dignity__text'>лет успешной работы</span>
              </div> 

              <div className='our-dignity__years-item'>
                <div className='our-dignity__year'>50</div>
                <span className='our-dignity__text'>гостиниц без посредников</span>
              </div>

              <div className='our-dignity__years-item'>
                <div className='our-dignity__year'>25+</div>
                <span className='our-dignity__text'>собственных туров</span>
              </div>

              <div className='our-dignity__years-item'>
                <div className='our-dignity__year'>1 220 000</div>
                <span className='our-dignity__text'>кв. км – площадь наших путешествий</span>
              </div>

              <div className='our-dignity__years-item'>
                <div className='our-dignity__year'>5000</div>
                <span className='our-dignity__text'>довольных туристов</span>
              </div>
              
            </div>
          </div>
        </section>
        
          <section className='form'>
            <div className='container-832'>
              <h3 className='form__title'>Забронируйте отдых в Африке</h3>
              <div className='form__input-container'>
                <input className='form__input' placeholder='Ваше имя' type='text'/>
                <input className='form__input' placeholder='Телефон' type='text'/>
                <input className='form__input' placeholder='E-mail' type='text'/>
              </div>
              <textarea className='form__textarea' placeholder='Комментарий' type='text'/>
              <div className='form__bottom'>
                <button className='form__btn'>Отправить заявку</button>
                <div className='form__checkbox-container'>
                  <input className='form__checkbox' type='checkbox'/>
                  <a className='form__checkbox-link' href='#'>Согласие на обработку персональных данных</a>
                </div>
              </div>
            </div>
          </section>
          <div className="footer">
            <div className='container-832'>
                <div className="footer__logo">
                    <img className="footer__logo-img" src={logo} alt="logo" />
                    <div className="footer__logo-content">
                        <h3 className="footer__logo-title">Сафари ТУРИСТИК</h3>
                        <span className="footer__logo-text">Турагентство</span>
                    </div>
                </div>
                <div className="footer__info">
                  <div className="footer__information">
                    <h5 className="footer__info-title">Турагентство «Сафари Туристик»</h5>
                    <p className="footer__info-text">© 2021. Все права защищены</p>
                    <a className="footer__info-link">Политика конфиденциальности</a>
                  </div>
                  <div className="footer__adres">
                    <h5 className="footer__info-title">Адрес:</h5>
                    <p className="footer__info-text">г. Киев, ул.Мира, 20, отель «Динамо», 1 этаж</p>
                  </div>
                  <div className="footer__contacts">
                    <h5 className="footer__info-title">Заказ туров и бронирование:</h5>
                    <p className="footer__info-text">тел. 8-050-8-543-543 e-mail: safari_turistic@gmail.com</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
}

