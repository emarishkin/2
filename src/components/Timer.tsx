import { FC, useState, useEffect } from "react"

export const Timer: FC = () => {
    const [time, setTime] = useState<number>(0)
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        let intervalId: number = 0
        
        if (isActive) {
            intervalId = window.setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        }

        return () => {
            if (intervalId) {
                window.clearInterval(intervalId)
            }
        }
    }, [isActive])

    const toggleTimer = () => {
        setIsActive(!isActive)
    }

    const resetTimer = () => {
        setIsActive(false)
        setTime(0)
    }

    return (
        <div>
            <h2>Таймер: {time} сек.</h2>
            <div>
                <button onClick={toggleTimer}>
                    {isActive ? 'Пауза' : 'Старт'}
                </button>
                <button onClick={resetTimer}>Сброс</button>
            </div>
        </div>
    )
}