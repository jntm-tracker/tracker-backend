import { Injectable, Logger } from '@nestjs/common';
import { createClient, ClickHouseClient } from '@clickhouse/client';
import { getEnvVars } from '@/utils';
import { ClickHouseTableName } from './enum';

@Injectable()
export class ClickHouseService {
  constructor() {
    try {
      const {
        CLICKHOUSE_HOST,
        CLICKHOUSE_PORT,
        CLICKHOUSE_DB,
        CLICKHOUSE_USERNAME,
        CLICKHOUSE_PASSWORD,
      } = getEnvVars();
      this.client = createClient({
        url: `${CLICKHOUSE_HOST}:${CLICKHOUSE_PORT}`, // 你的 ClickHouse 服务器地址
        database: CLICKHOUSE_DB,
        username: CLICKHOUSE_USERNAME,
        password: CLICKHOUSE_PASSWORD,
      });
    } catch (err) {
      this.logger.error(err);
    }
  }
  private readonly client: ClickHouseClient;
  private readonly logger = new Logger(ClickHouseService.name);

  async create(tableName: ClickHouseTableName, data: Record<string, any>) {
    const values = [data];
    await this.client.insert({
      table: tableName, // 表名
      values, // 插入值 (注意是二维数组)
      format: 'JSONEachRow', // 使用 JSONEachRow 格式
    });
    this.logger.log(`Event inserted ${tableName} successfully`);
  }
}
