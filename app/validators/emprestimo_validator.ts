import vine from "@vinejs/vine";

export const criarEmprestimoValidator = vine.compile(
  vine.object({
    usuarioId: vine.number(),
    livroId: vine.number(),
  })
)