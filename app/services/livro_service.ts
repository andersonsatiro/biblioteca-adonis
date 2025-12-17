import Livro from '#models/livro'

export default class LivroService {
  async listar() {
    return Livro.all()
  }

  async buscarPorId(id: number) {
    return Livro.findOrFail(id)
  }

  async criar(dados: any) {
    return Livro.create(dados)
  }

  async atualizar(id: number, dados: any) {
    const livro = await Livro.findOrFail(id)
    livro.merge(dados)
    await livro.save()
    return livro
  }

  async remover(id: number) {
    const livro = await Livro.findOrFail(id)
    await livro.delete()
  }

  async buscar(filtros: any) {
    const query = Livro.query()

    if (filtros.titulo) {
      query.whereILike('titulo', `%${filtros.titulo}%`)
    }

    if (filtros.isbn) {
      query.where('isbn', filtros.isbn)
    }

    if (filtros.categoria) {
      query.whereILike('categoria', `%${filtros.categoria}%`)
    }

    return query
  }
}