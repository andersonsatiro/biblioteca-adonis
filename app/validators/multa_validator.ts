import vine from "@vinejs/vine";

export const pagarMultaValidator = vine.compile(
  vine.object({
    pago: vine.boolean(),
  })
)
