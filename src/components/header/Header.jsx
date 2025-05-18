import './Header.css'
import frame from '../../assets/Frame 28.png'
export default function Header() {
    return <>
        <div className='divAll'>
            <div className='felx'>
                <img src={frame} alt="" />
                <div className='divP'>
                    <p>Як це працює</p>
                    <p>Переваги</p>
                    <p>Пропозиції</p>
                    <p>Можливості</p>
                </div>
            </div>
            <div className='bg' style={{display: 'flex', gap: '20px'}}>
                <Button bgcolor='#F2F7FF' color='#015DFD' title="Вхід" />
                <Button bgcolor='#5D3AEF' color='#FFFFFF' title="Реєстрація" />
            </div>
        </div>
    </>
}

export function Button(props) {
    return <>
        <button style={{ color: props.color, backgroundColor: props.bgcolor, border: 'none', padding: '10px 20px', borderRadius: '30px' }}>{props.title}</button>
    </>
}