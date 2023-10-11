import { z } from "zod";

export const MeSchema = z.object({
  id: z.number(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  userProfile: z.string(),
});

export type Me = z.infer<typeof MeSchema>;
