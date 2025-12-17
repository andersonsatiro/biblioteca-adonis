import Multa from '#models/multa'

export default class MultaService {
  async listar() {
    return Multa.all()
  }

  async buscarPorId(id: number) {
    return Multa.findOrFail(id)
  }

  async pagar(id: number) {
    const multa = await Multa.findOrFail(id)

    multa.paga = true
    multa.dataPagamento = new Date()

    await multa.save()
    return multa
  }
}
