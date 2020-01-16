
//Obtem uma string formatada com a data "dia da semana, XX de Mês de 2020", os parâmetros timestamp e timezone offset em segundos
export const dateString = (timestamp: number,timezoneOffset: number = 0 ) : string => {
    const today = new Date()
    const currentOffset = today.getTimezoneOffset() * 60
    const now = new Date((timestamp + timezoneOffset + currentOffset) * 1000)
    console.log(timestamp,timezoneOffset)
    const daysOfWeek = [
        'Domingo',
        'Segunda feira',
        'Terça feira',
        'Quarta feira',
        'Quinta feira',
        'Sexta Feira',
        'Sábado'
    ]

    const months = [
        'Janeiro',
        'Feveiro',
        'Março',
        'Maio',
        'Abril',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]

    return `${daysOfWeek[now.getDay()]}, ${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`
}

//Obtem apenas um horário, essa função é utilizada para exibit sunrise e sunset. Os parâmetros timestamp e timezone offset em segundos
export const onlyTime = (timestamp: number,timezoneOffset: number = 0) : string => {
    const padNumber = (num:number) => num.toString().padStart(2,'0')
    const today = new Date()
    const currentOffset = today.getTimezoneOffset() * 60
    const date = new Date((timestamp + timezoneOffset + currentOffset) * 1000)

    return `${padNumber(date.getHours())}:${padNumber(date.getMinutes())}`
}