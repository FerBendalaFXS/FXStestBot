import { useEffect, useState } from 'react'
import { MainButton, useShowPopup, useThemeParams } from '@vkruglikov/react-telegram-web-app'

const App = () => {
    const [counter, setCounter] = useState(0)
    const [colorScheme, themeParams] = useThemeParams()

    const showPopup = useShowPopup()

    // Aqui me he quedado https://www.npmjs.com/package/telegram
    useEffect(() => {
        console.log(colorScheme)
        console.log({
            text_color: themeParams.text_color,
            button_color: themeParams.button_color,
            bg_color: themeParams.bg_color,
        })
    }, [])

    const handleClick = () => {
        setCounter(counter + 1)
        showPopup({
            message: `Hello, This pop up has been opened ${counter} times`,
        })
    }

    return <MainButton text="SHOW POPUP" onClick={handleClick} />
}

export default App
