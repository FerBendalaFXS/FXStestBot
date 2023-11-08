import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app'

import eruda from 'eruda'
import App from './app'

const root = createRoot(document.getElementById('root'))
eruda.init()
root.render(
    <StrictMode>
        <WebAppProvider
            options={{
                smoothButtonsTransition: true,
            }}
        >
            <App />
        </WebAppProvider>
    </StrictMode>
)
