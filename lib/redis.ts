import { Redis } from 'ioredis';
export const redis = new Redis();

export async function redisSet<T>(key: string, value: T): Promise<void | Error> {
  try {
    await redis.call('JSON.SET', key, '.', JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting data in Redis for key ${key}:`, error);
    return error;
  }
}

export async function redisGet<T>(key: string): Promise<T | null> {
  try {
    const dataString = await redis.call('JSON.GET', key);
    return dataString ? (JSON.parse(dataString as string) as T) : null;
  } catch (error) {
    console.error(`Error getting data from Redis for key ${key}:`, error);
    return null;
  }
}

export async function redisUpdateField<T>(
  key: string,
  field: string,
  value: T,
): Promise<void | Error> {
  try {
    await redis.call('JSON.SET', key, field, JSON.stringify(value), 'XX');
  } catch (error) {
    console.error(`Error updating field "${field}" in Redis for key ${key}:`, error);
    return error;
  }
}
