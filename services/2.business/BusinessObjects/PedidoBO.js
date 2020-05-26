class Pedido{
    constructor(idUsuario, valorTotal, fechaPedido, idEstadoPedido, idFormasPago){
        this.valor_total = valorTotal,
        this.fecha_pedido = fechaPedido,
        this.id_usuario = idUsuario,
        this.id_estado_pedido = idEstadoPedido,
        this.id_formas_pago = idFormasPago
    }
}

module.exports = Pedido;