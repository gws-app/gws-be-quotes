import dotenv from 'dotenv';
import { env } from 'process';

dotenv.config()

export const config = {

  port: env.PORT || 3000,
  projectID: env.PROJECT_ID
}
