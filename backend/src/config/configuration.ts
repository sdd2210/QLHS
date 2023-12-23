import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

interface DBEnv {
  Uri: string;
  Host: string;
  Port: number;
  DBname: string;
  User: string;
  Pwd: string;
}

interface SecurityEnv {
  ThrottlerTTL: number;
  ThrottlerLimit: number;
}

interface CacheEnv {
  Host: string;
  Port: number;
}

@Injectable()
export class EnvConfig {
  private static getDatabase = (): DBEnv => {
    const host = process.env.DB_HOST || 'localhost';
    const port = parseInt(process.env.DB_PORT, 10) || 27017;

    return {
      Uri: `mongodb://${host}:${port}`,
      Host: host,
      Port: port,
      DBname: process.env.DB_NAME || undefined,
      User: process.env.DB_USER || undefined,
      Pwd: process.env.DB_PWD || undefined,
    };
  };

  private static getSecurity = (): SecurityEnv => {
    return {
      ThrottlerTTL: parseInt(process.env.THROTTLER_TTL) || 60,
      ThrottlerLimit: parseInt(process.env.THROTTLER_LIMIT) || 60,
    };
  };

  private static getCache = (): CacheEnv => {
    return {
      Host: process.env.CACHE_HOST || 'localhost',
      Port: parseInt(process.env.CACHE_PORT, 10) || 6379,
    };
  };

  static AppPort: number = parseInt(process.env.APP_PORT || '3000', 10);
  static Database: DBEnv = EnvConfig.getDatabase();
  static Cache: CacheEnv = EnvConfig.getCache();
  static Security: SecurityEnv = EnvConfig.getSecurity();
  static reCaptchaKey: string = process.env.RECAPTCHA_KEY || '';
  static maxUploadDocs: number = parseInt(
    process.env.MAX_UPLOAD_DOCS || '10000000',
  );
  static maxUploadFolder: number = parseInt(
    process.env.MAX_UPLOAD_FOLDER || '100',
  );
  static PathUploadRoot: string = process.env.PATH_UPLOAD || '';
}
