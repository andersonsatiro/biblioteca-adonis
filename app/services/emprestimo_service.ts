import Emprestimo from '#models/emprestimo'
import Livro from '#models/livro'
import Multa from '#models/multa'

export default class EmprestimoService {
  async listar() {
    return Emprestimo.all()
  }

  async buscarPorId(id: number) {
    return Emprestimo.findOrFail(id)
  }

  async criar(dados: any) {
    const livro = await Livro.findOrFail(dados.livroId)

    if (livro.exemplaresDisponiveis <= 0) {
      throw new Error('Não há exemplares disponíveis')
    }

    livro.exemplaresDisponiveis--
    await livro.save()

    return Emprestimo.create({
      usuarioId: dados.usuarioId,
      livroId: dados.livroId,
      dataEmprestimo: new Date(),
      dataVencimento: this.calcularDataDevolucao(),
    })
  }

  async devolver(id: number) {
    const emprestimo = await Emprestimo.findOrFail(id)

    emprestimo.dataDevolucao = new Date()
    await emprestimo.save()

    const atraso = this.calcularDiasAtraso(emprestimo.dataVencimento)

    if (atraso > 0) {
      await Multa.create({
        emprestimoId: emprestimo.id,
        usuarioId: emprestimo.usuarioId,
        diasAtraso: atraso,
        valor: atraso * 2,
        paga: false,
      })
    }

    const livro = await Livro.findOrFail(emprestimo.livroId)
    livro.exemplaresDisponiveis++
    await livro.save()

    return emprestimo
  }

  private calcularDataDevolucao(): Date {
    const data = new Date()
    data.setDate(data.getDate() + 14)
    return data
  }

  private calcularDiasAtraso(dataPrevista: Date): number {
    const hoje = new Date()
    if (hoje <= dataPrevista) return 0
    const diff = hoje.getTime() - dataPrevista.getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }
}

