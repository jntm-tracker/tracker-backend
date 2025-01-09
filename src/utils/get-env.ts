export const getEnvVars = () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    CLICKHOUSE_HOST: process.env?.CLICKHOUSE_HOST,
    CLICKHOUSE_PORT: process.env?.CLICKHOUSE_PORT,
    CLICKHOUSE_DB: process.env?.CLICKHOUSE_DB,
    CLICKHOUSE_USERNAME: process.env?.CLICKHOUSE_USERNAME,
    CLICKHOUSE_PASSWORD: process.env?.CLICKHOUSE_PASSWORD,
  };
};
