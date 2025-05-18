import "./footer.css"
import frame from '../../assets/Frame 28.png'

export default function Footer() {
    return <>
        <div className="div">
            <img src={frame} alt="" />
            <div className="fel">
                <p>Як це працює</p>
                <p>Переваги</p>
                <p>Пропозиції</p>
                <p>Можливості</p>
            </div>
            <button style={{ backgroundColor: '#F7931D', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px' }}>Запустити голосову розсилку</button>
        </div>
    </>
}