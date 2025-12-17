import vine from "@vinejs/vine"

export const criarUsuarioValidator = vine.compile(
  vine.object({
    nome: vine.string().minLength(3),
    cpf: vine.string().minLength(11),
    email: vine.string().email(),
    telefone: vine.string(),
    endereco: vine.string(),
    tipo: vine.enum(['ADMIN', 'BIBLIOTECARIO', 'LEITOR']),
    matricula: vine.string().optional(),
    curso: vine.string().optional(),
  })
)

export const atualizarUsuarioValidator = vine.compile(
  vine.object({
    nome: vine.string().minLength(3).optional(),
    email: vine.string().email().optional(),
    telefone: vine.string().optional(),
    endereco: vine.string().optional(),
  })
)