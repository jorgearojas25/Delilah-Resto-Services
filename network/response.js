class respuesta{
    constructor(resultado, entidades, mensajes){
        this.resultado = resultado,
        this.entidades = entidades,
        this.mensajes = mensajes
    }
}

exports.success = (req, res, response, status) => {
    let myResponse = Array.isArray(response) ? response : [response];
    let resultado = new respuesta(true,myResponse,[]);
    res.status(status || 200).send(resultado);
}

exports.error = (req, res, mensaje, status, log) => {
    console.log(log);
    let resultado = new respuesta(false, [], mensaje);
    res.status(status || 500).send(resultado);
}

