export type dataProps = {
    "total_atms": string
    "total_atms_con_fallas_reportadas": string
    "total_de_transacciones": string,
    "total_de_transacciones_por_tipo_deposito": string,
    "total_de_transacciones_por_tipo_retiro": string,
    "division_con_mas_fallas": string
}

export const transacciones:dataProps = {
    "total_atms": "13782",
    "total_atms_con_fallas_reportadas": "12533",
    "total_de_transacciones": "1403004",
    "total_de_transacciones_por_tipo_deposito": "295384",
    "total_de_transacciones_por_tipo_retiro": "1107620",
    "division_con_mas_fallas": "SUR"
}
    // "TRANSACTION_TYPE": "RETIRO", 
    //  "TRANSACTION_TYPE": "DEPOSITO",

//     TOTAL DE ATMS

    
// [{
//   "total_atms": "13782"
// }]


// TOTAL DE ATMS CON FALLAS DETECTADA


// [{
//   "total_atms_con_fallas_reportadas": "12533"
// }]


// TOTAL DE TRANSACCIONES


// [{
//   "total_de_transacciones": "1403004"
// }]


// TOTAL DE TRANSACCIONES DEPOSITO Y RETIRO


// [{
//   "total_de_transacciones_por_tipo": "295384",
//   "TRANSACTION_TYPE": "DEPOSITO"
// }, {
//   "total_de_transacciones_por_tipo": "1107620",
//   "TRANSACTION_TYPE": "RETIRO"
// }]


// DIVISION CON MAS FALLAS

// [{
//   "division_con_mas_fallas": "SUR"
// }]