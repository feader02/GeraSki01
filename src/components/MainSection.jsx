import React from "react";
import "../css/MainSection.css";
import "../css/Special.css";
import SpecialBlock1 from "../images/main-1.png";
import SpecialBlock2 from "../images/main-2.png";
import SpecialBlock3 from "../images/main-3.png";
import SpecialBlock4 from "../images/main-4.png";
import SpecialBlock5 from "../images/main-5.png";
import SpecialBlock6 from "../images/main-6.png";
import SpecialBlock7 from "../images/main-7.png";
import SpecialBlock8 from "../images/main-8.png";
import SpecialBlock9 from "../images/main-9.png";
import Slider from "react-slick";

const settings = {
  swipe: true,
  dots: false,
  arrows: false,
  infinite: true,
  fade: false,
  autoplay: true,
  autoplaySpeed: 5000
};

function MainSection() {
  return (
    <div className="as">
      <div className="main-content">
      <div className="group">
            <div className="content-block">
              <h1>Зима</h1>
              <div className="special-line"></div>
              <div className="img-content">
                <img src={SpecialBlock1} alt="content" className="img" draggable = 'false'/>
              </div>

              <div className="img-content">
                <img src={SpecialBlock2} alt="content" className="img" draggable = 'false'/>
              </div>
              <div className="img-content">
                <img src={SpecialBlock5} alt="content" className="img" draggable = 'false'/>
              </div>
              <a href="/GeraSki01/price-winter">
                <p className="main-btn">Прайси</p>
              </a>
            </div>
          </div>
            <div className="travel">
                <div className="content-block">
                  <h1>Літо</h1>
                  <div className="special-line"></div>
                  <div className="img-content">
                    <img src={SpecialBlock6} alt="content" className="img" draggable = 'false'/>
                  </div>
                  <div className="img-content">
                    <img src={SpecialBlock7} alt="content" className="img" draggable = 'false'/>
                  </div>
                  <div className="img-content">
                    <img src={SpecialBlock8} alt="content" className="img" draggable = 'false'/>
                  </div>
                  <div className="img-content">
                    <img src={SpecialBlock9} alt="content" className="img" draggable = 'false'/>
                  </div>
                  <a href="/GeraSki01/price-summer">
                    <p className="main-btn">Прайси</p>
                  </a>
                </div>
            </div>
      </div>
      <div className="main-content_tablet">
          <div className="group">
            <div className="content-block">
              <h1>Зима</h1>
              <div className="special-line"></div>
              <Slider {...settings}>
              <div>
              <div className="img-content">
                <img src={SpecialBlock1} alt="content" className="img" />
                <div className="img-text">
                  <h1 className="img-text-h1">Лижі & Сноубординг</h1>
                  <p className="img-text-p">
                    Навчання гірськолижній та сноубордичній техніці з нуля до
                    "прогресуючого" рівня; індивідуальний та гуртовий формати;
                    власний прокат з файним спорядженням.
                  </p>
                </div>
              </div>

              <div className="img-content">
                <img src={SpecialBlock2} alt="content" className="img" />
                <div className="img-text">
                  <h1 className="img-text-h1">Ковзани</h1>
                  <p className="img-text-p">
                    Практикуємо гуртовий та індивідуальний формати на ковзанці
                    Ice - Land у м.Мукачево.
                  </p>
                </div>
              </div>
              </div>
              <div className="img-content">
                <img src={SpecialBlock5} alt="content" className="img" />
                <div className="img-text">
                  <h1 className="img-text-h1">Скітур & Фрірайд</h1>
                  <p className="img-text-p img-text-p-special">

                    Це те, що ми пропонуємо, якщо Вам остогидли "рукотворні"
                    курорти з "вєльвєтами" та маркуваннями... Це наступна
                    логічна метаморфоза Ваших лижних та сноуборд скілів. Цей
                    екстремальний вид активності ми продаємо пакетом
                    трансфер/прокат/гід.
                  </p>
                </div>
              </div>
              </Slider>
              <a href="/GeraSki01/price-winter">
                <p className="main-btn">Прайси</p>
              </a>
            </div>
          </div>
          
            <div className="travel">
                <div className="content-block">
                  <h1>Літо</h1>
                  <div className="special-line"></div>
                  <Slider {...settings}>
                  <div>
                  <div className="img-content">
                    <img src={SpecialBlock6} alt="content" className="img" />
                    <div className="img-text">
                      <h1 className="img-text-h1">Ролики</h1>
                      <p className="img-text-p">
                        Маємо два формати: гуртові (для досвічених) та
                        індивідуальний для новачків. Тренуємо у приміщеннях та
                        на відкритому просторі.
                      </p>
                    </div>
                  </div>
                  <div className="img-content">
                    <img src={SpecialBlock7} alt="content" className="img" />
                    <div className="img-text">
                      <h1 className="img-text-h1">Мандрівки</h1>
                      <p className="img-text-p">
                        Одно та багатоденні мандрівки з дітьми та дорослими
                        верхами та цікавими місцинами Закарпаття.
                      </p>
                    </div>
                  </div>
                  </div>
                  <div>
                  <div className="img-content">
                    <img src={SpecialBlock8} alt="content" className="img" />
                    <div className="img-text">
                      <h1 className="img-text-h1">
                        Сплави на байдарках та сапах
                      </h1>
                      <p className="img-text-p">
                        Вода займає 70% поверхні Землі... Ми практикуємо
                        індивідуальні тренування для новачків (річковий пляж
                        м.Мукачево), а також одно та багатоденні тури для
                        поціновувачів сплавів.
                      </p>
                    </div>
                  </div>
                  <div className="img-content">
                    <img src={SpecialBlock9} alt="content" className="img" />
                    <div className="img-text">
                      <h1 className="img-text-h1">Велотури</h1>
                      <p className="img-text-p">
                        Є індивідуальні тренування для новачків та гуртові для
                        досвічених. Існує також формат одно та багатоденних
                        велотурів.
                      </p>
                    </div>
                  </div>
                  </div>
                  </Slider>
                  <a href="/GeraSki01/price-summer">
                    <p className="main-btn">Прайси</p>
                  </a>
                </div>
            </div>
      </div>
    </div>
  );
}

export default MainSection;
