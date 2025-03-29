export function getData(){
    const dia = new Date()
    return `${dia.toLocaleDateString("pt-br", {weekday:"long"})} (${dia.toLocaleDateString("pt-br", {day:"2-digit", month:"2-digit", year:"2-digit"})}) às ${dia.toLocaleTimeString("pt-br")}`

}

export default getData;