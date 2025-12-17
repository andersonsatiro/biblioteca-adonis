import Usuario from '#models/user'

export default class UsuarioService {
  async listar() {
    return Usuario.all()
  }

  async buscarPorId(id: number) {
    return Usuario.findOrFail(id)
  }

  async criar(dados: any) {
    return Usuario.create(dados)
  }

  async atualizar(id: number, dados: any) {
    const usuario = await Usuario.findOrFail(id)
    usuario.merge(dados)
    await usuario.save()
    return usuario
  }

  async remover(id: number) {
    const usuario = await Usuario.findOrFail(id)
    await usuario.delete()
  }
}


