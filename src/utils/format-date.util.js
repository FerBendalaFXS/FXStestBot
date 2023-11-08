const formatDateUtil = ( isoDateString ) => {
    const date = new Date( isoDateString )

    // Configurar la opción de formato de date
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',hour12: false }
    const dateFormatter = new Intl.DateTimeFormat( 'en-US', options )

    // Formatear la date en el formato deseado
    const formattedDate = dateFormatter.format( date )
    return formattedDate
}

export { formatDateUtil }