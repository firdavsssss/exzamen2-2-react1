import "./Section.css"
import { Button } from "../Header/Header"
import rectangle17 from "../../assets/Rectangle 17.png"
import rectangle171 from "../../assets/Rectangle 17 (1).png"
import frame from '../../assets/Frame (33).png'
import frame2 from '../../assets/Frame 2.png'
import frame3 from '../../assets/Frame 3.png'
import frame4 from '../../assets/Frame 4.png'
import frame14 from '../../assets/Frame 14.png'
import frame34 from '../../assets/Frame (34).png'
import frame35 from '../../assets/Frame (35).png'
import frame36 from '../../assets/Frame (36).png'
import frame141 from '../../assets/Frame 14 (1).png'
import frame142 from '../../assets/Frame 14 (2).png'
import frame143 from '../../assets/Frame 14 (3).png'
import frame37 from '../../assets/Frame (37).png'
import vector33 from '../../assets/vector (33).png'
import group1 from '../../assets/Group 1.png'
import group11 from '../../assets/Group 1 (1).png'
import group12 from '../../assets/Group 1 (2).png'
import group2 from '../../assets/Group 2.png'
import diamond from '../../assets/diamond.fill (1).png'
import customer from '../../assets/customer-service 1.png'
import customer1 from '../../assets/customer-service 1 (1).png'
import customer2 from '../../assets/customer-service 1 (2).png'
import customer3 from '../../assets/customer-service 1 (3).png'
import frame293 from '../../assets/Frame 293.png'
import frame294 from '../../assets/Frame 294.png'
export default function Section() {
    return <>
        <div className="ml" style={{ display: 'flex', gap: '200px', marginTop: '100px' }}>
            <div>
                <Button title="Твій помічник" bgcolor='#F2F7FF' color='#015DFD' />
                <h1 style={{ fontSize: '60px' }}>Голосовий робот <br />
                    для дзвінків від <br /> <span style={{ color: 'blue' }}>1,7 ₴ за хвилину</span> <br /> розмови</h1>
                <p style={{ color: 'gray', marginBottom: '100px', marginTop: '50px', fontSize: '20px' }}>У декілька разів дешевше за оператора і може обдзвонити 1000 клієнтів за пару хвилин</p>
                <Button title="Спробувати" bgcolor='#5D3AEF' color='#FFFFFF' />
            </div>
            <div>
                <img src={rectangle17} alt="" />
                <img className="bgposition" src={frame} alt="" />
                <img className="frame" src={frame2} alt="" />
                <img className="frame2" src={frame3} alt="" />
                <img className="hello" src={frame4} alt="" />
            </div>
        </div>
        <div className="divFlex">
            <Card img={frame14} title="Холодні продажі" description="Голосовий робот рекламує послугу або товар за допомогою телефонних переговорів " />
            <Card img={frame141} title="Опитування" description="Відстежуйте рівень задоволеності клієнтів продукцією без залучення операторів колл-центру" />
            <Card img={frame142} title="Прийом даних" description="Надсилайте сервісні повідомлення в режимі реального часу" />
            <Card img={frame143} title="Сповіщення" description="Повідомляйте клієнтів про нові акції або новини " />
        </div>
        <div className="flexing">
            <div>
                <Button title="Переваги" bgcolor='#F2F7FF' color='#015DFD' />
                <h1 style={{ fontSize: '50px' }}>Дешевше, ніж <br />
                    оператор в кілька разів</h1>
                <p style={{ marginTop: '20px', color: 'gray' }}>Веде спілкування по заданому скрипту: може <br /> завершити розмову, з’єднати з менеджером або <br /> розсилати прості смс</p>
                <p style={{ marginTop: '20px' }}>Як ми працюємо:</p>
            </div>
            <div className="sec">
                <img src={rectangle171} alt="" />
                <img className="imgPOsition" src={frame34} alt="" />
            </div>
        </div>
        <div className="card">
            <Cart marginTop="13px" none="1" name="Обдзвонює базу номерів або приймає дзвінки" img={frame35} />
            <Cart marginTop="50px" margintop="20px" none="2" name="Штучний інтелект розпізнає мову і записує всі відповіді" img={vector33} />
            <Cart marginTop="3px" none="3" name="Реагує на слова за заданим алгоритмом:" img={frame36} />
        </div>
        <div className="table">
            <div>
                <p style={{ fontSize: '40px', color: '#fff' }}>Перші 10 дзвінків - за наш рахунок</p>
                <p style={{ color: '#FFFFFF', marginTop: '20px' }}>Даруємо безкоштовні дзвінки після реєстрації. <br />
                    Спробуйте робота, не витрачаючи ні копійки</p>
            </div>
            <div>
                <p>Спробувати </p>
            </div>
        </div>
        <div style={{ backgroundColor: '#F5F8FB', marginTop: '100px', padding: "30px" }}>
            <p className="b" style={{ fontSize: '30px' }}>Пакетні пропозиції</p>
            <div className="hero">
                <Carton img={group1} description="за хвилину розмови. Одноразовий платіж від 0 ₴. " title="Спробувати >" />
                <Carton img={group11} description="за хвилину розмови. Одноразовий платіж від 0 ₴. " title="Спробувати >" />
                <Carton img={group12} description="за хвилину розмови. Одноразовий платіж від 0 ₴. " title="Спробувати >" />
            </div>
        </div>
        <div className="mt">
            <button style={{ border: 'none', color: '#015DFD', padding: '10px 20px' }}>Можливості</button>
            <h1>Робот може все і навіть більше</h1>
            <div className="kok">
                <div>
                    <div className="bag">
                        <img src={diamond} alt="" />
                        <p>Залучення лідів від 3,5 ₴</p>
                    </div>
                    <div className="bag">
                        <img src={diamond} alt="" />
                        <p>Розпізнавання мови</p>
                    </div>
                    <div className="bag">
                        <img src={diamond} alt="" />
                        <p>Персоналізація і доступна статистика</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={group2} alt="" />
                    </div>
                </div>
                <div>
                    <div className="bag">
                        <img src={diamond} alt="" />
                        <p>Залучення лідів від 3,5 ₴</p>
                    </div>
                    <div className="bag">
                        <img src={diamond} alt="" />
                        <p>Розпізнавання мови</p>
                    </div>
                    <div className="bag">
                        <img src={diamond} alt="" />
                        <p>Персоналізація і доступна статистика</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="goes">
            <div>
                <button className="btn">на 62%</button>
                <p style={{ marginTop: '10px' }}>эффективней оператора</p>
            </div>
            <div>
                <button className="btn">250 000</button>
                <p style={{ marginTop: '10px' }}>минут разговоров в день</p>
            </div>
            <div>
                <button className="btn">97%</button>
                <p style={{ marginTop: '10px' }}>вероятность распознавания пола и возраста оппонента</p>
            </div>
            <div>
                <button className="btn">24/7</button>
                <p style={{ marginTop: '10px' }}>работа без перерывов и выходных</p>
            </div>
        </div>
        <div className="lale">
            <div>
                <h1 style={{ fontSize: '40px' }}>Здійснюйте 300 000 <br /> дзвінків за годину</h1>
                <p style={{ marginTop: '20px', marginBottom: '30px' }}>Швидкість можна налаштовувати індивідуально під себе.</p>
                <button style={{ backgroundColor: '#F7931D', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px' }}>Запустити голосову розсилку</button>
            </div>
            <div>
                <img style={{ width: '400px' }} src={frame37} alt="" />
            </div>
        </div>
        <div style={{ marginTop: '100px' }}>
            <button className="mobile" style={{ border: 'none', color: '#015DFD', padding: '10px 20px' }}>Інтеграція</button>
            <h1 className="automobile">Інтеграція з відкритого API</h1>
            <div className="bod">
                <div className="cord">
                    <img src={customer} alt="" />
                    <p>Зателефонує клієнту після потрапляння його картки в CRM на певному етапі угоди.</p>
                </div>
                <div className="curd">
                    <img src={customer1} alt="" />
                    <p>Звірить номер з базою контактів і звернеться на ім’я та по батькові.</p>
                </div>
                <div className="curd">
                    <img src={customer2} alt="" />
                    <p>Зателефонує, як тільки замовлення надійде в пункт видачі</p>
                </div>
                <div className="crrd">
                    <img src={customer3} alt="" />
                    <p>Повідомить про графік роботи магазину, перевірить і скаже, чи є товар в наявності і які проходять акції.</p>
                </div>
            </div>
        </div>
        <h1 className="test">Відгуки</h1>
        <div className="person">
            <Person />
            <Person />
            <Person />
        </div>
        <div className="divgon">
            <button style={{ border: 'none', color: '#015DFD', padding: '10px 20px' }}>FAQ</button>
            <h1 style={{ fontSize: '40px' }}>Відповіді на популярні за питання</h1>
        </div>
        <div className="flexText">
            <div className="topest" style={{width: '400px'}}>
                <strong>Відповіді на популярні за питання</strong>
                <p style={{marginBottom: '50px'}}>1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого.</p>
                <strong>Який відсоток клієнтів здогадується, що дзвонить робот?</strong>
                <p>Робота розпізнають лише 5%, якщо скрипт враховує більшість відповідей клієнтів і ролики записані диктором. Скрипт безкоштовно допоможуть скласти наші менеджери. Запис роликів можна замовити у наших дикторів.</p>
            </div>
            <div className="topest" style={{width: '500px'}}>
                <strong>З якою швидкістю Zvonobot обдзвонює базу?</strong>
                <p style={{marginBottom: '50px'}}>Максимальна швидкість - 50 000 дзвінків на годину. При бажанні ви можете знизити швидкість розсилки, вибравши потрібну в налаштуваннях.</p>
                <strong>Скільки часу займає налаштування розсилки і запуск?</strong>
                <p>3 хвилини займає запуск простий розсилки на кшталт «приходьте на знижки 50% до п'ятого числа». Більш складні сценарії налаштовуються довше.
                    Запуск розсилки відбувається через 5-30 хвилин після того, як ви натиснули «запустити». </p>
            </div>
        </div>
    </>
}


function Card(props) {
    return <>
        <div style={{ width: '280px', height: '200px', border: '1px solid gray', borderRadius: '10px', padding: '30px 20px', boxShadow: '1px 1px 10px 1px gray' }}>
            <img style={{ marginTop: '20px' }} src={props.img} alt="" />
            <div>
                <strong>{props.title}</strong>
                <p style={{ color: 'gray', marginTop: '10px' }}>{props.description}</p>
            </div>
        </div>
    </>
}

function Cart(props) {
    return <>
        <div className="boss" style={{ width: '400px', textAlign: 'center' }}>
            <div>
                <Buton title={props.none} />
            </div>
            <div>
                <strong style={{ fontSize: '25px' }}>{props.name}</strong>
            </div>
            <div style={{ marginTop: props.marginTop }}>
                <img className="bs" src={props.img} alt="" />
            </div>
            <div style={{ backgroundColor: '#F7931D', width: '100%', height: '20px' }}></div>
        </div>
    </>
}

function Buton(props) {
    return <>
        <button style={{ backgroundColor: '#F2F7FF', border: 'none', padding: '20px' }}>{props.title}</button>
    </>
}


function Carton(props) {
    return <>
        <div className="cardFlex">
            <img src={props.img} alt="" />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                <button style={{ border: 'none', color: '#015DFD', padding: '10px 20px' }}>Старт</button>
                <p style={{ fontSize: '20px', fontWeight: '900' }}>від 2 ₴</p>
            </div>
            <p style={{ width: '200px', margin: "auto", marginTop: "10px", marginBottom: '20px' }}>{props.description}</p>
            <p style={{ color: '#015DFD' }}>{props.title}</p>
        </div>
    </>
}


function Person() {
    return <>
        <div className="width">
            <div style={{ marginBottom: '20px' }}>
                <img src={frame293} alt="" />
            </div>
            <strong>Я у захоплені!</strong>
            <p style={{ marginTop: '20px', color: '#242527' }}>1,67 ₴ - вартість хвилини дзвінка, тарифікація посекундна. Ви платите тільки за час розмови робота з клієнтом. Якщо клієнт прийняв дзвінок і повісив трубку через 30 секунд, ви заплатите 0,8 ₴, не взяв трубку - не заплатите нічого.</p>
            <div className="none">
                <img src={frame294} alt="" />
                <div>
                    <p>Ангелина Юрская</p>
                    <p>CEO rozetka.ua</p>
                </div>
            </div>
        </div>
    </>
}