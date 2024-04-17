
import { LogLevel } from './lib/logger'//'./../lib/logger';

export interface Config {
  logLevel: keyof typeof LogLevel;
}

export const config: Config = {
  logLevel: (process.env.NEXT_PUBLIC_LOG_LEVEL as keyof typeof LogLevel) ?? LogLevel.ALL,
};