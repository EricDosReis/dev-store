import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  const ERROR_MESSAGE = 'Invalid environment variables';

  console.error(ERROR_MESSAGE, parsedEnv.error.flatten().fieldErrors);

  throw new Error(ERROR_MESSAGE);
}

export const env = parsedEnv.data;
