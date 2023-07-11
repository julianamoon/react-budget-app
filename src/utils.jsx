// UNDEFINED ->  seria "inglês" ou "espnahol". se colocar undefined, vai ser o default da localização do usuário
export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "usd",
    style: "currency",
    minimumFractionDigits: 0,
})
// se não colocar "minimum fraction digits" pra 0, ele adicionará os decimais depois dos números finais