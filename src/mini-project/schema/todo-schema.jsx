import z from "zod"
export const todoSchema = z.object({
    todo : z.string().trim().min(1, "Empty value will not be added").refine(vlaue => vlaue.length >= 3, {message : "Todo must be atlease 3 characters"}).max(50, "Todo can't exceed 50 characters")
})