import vine from '@vinejs/vine'

export const criarLivroValidator = vine.compile(
  vine.object({
    titulo: vine.string().minLength(3),
    isbn: vine.string().minLength(10),
    categoria: vine.string(),
    editora: vine.string(),
    anoPublicacao: vine.number(),
    edicao: vine.string(),
    paginas: vine.number(),
    exemplaresTotais: vine.number().min(1),
    exemplaresDisponiveis: vine.number().min(0),
    localizacao: vine.string(),
  })
)

export const atualizarLivroValidator = vine.compile(
  vine.object({
    titulo: vine.string().minLength(3).optional(),
    isbn: vine.string().minLength(10).optional(),
    categoria: vine.string().optional(),
    editora: vine.string().optional(),
    anoPublicacao: vine.number().optional(),
    edicao: vine.string().optional(),
    paginas: vine.number().optional(),
    exemplaresTotais: vine.number().min(1).optional(),
    exemplaresDisponiveis: vine.number().min(0).optional(),
    localizacao: vine.string().optional(),
  })
)


