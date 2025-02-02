import { DbError } from '@/application/error';
import { PasswordRecoveryRepository } from '@/application/repositories';
import { RedisCache } from '../redis';

export class PasswordRecoveryCacheRepository implements PasswordRecoveryRepository {
  constructor(private readonly cache: RedisCache) {}

  async create(
    params: PasswordRecoveryRepository.Create.Input,
  ): Promise<PasswordRecoveryRepository.Create.Output> {
    const data = await this.cache.set(
      `${params.studentId}@${params.code}:recover-password`,
      {
        code: params.code,
        studentId: params.studentId,
      },
      60 * 60 * 24,
    );

    if (!data) {
      throw new DbError(`Error creating passsowrd recover cache ${JSON.stringify(params)}`);
    }

    return data;
  }

  async get(
    params: PasswordRecoveryRepository.Get.Input,
  ): Promise<PasswordRecoveryRepository.Get.Output> {
    const data = await this.cache.get(
      `${params.studentId}@${params.code}:recover-password`,
    );

    return data as PasswordRecoveryRepository.Get.Output;
  }

  async del(
    params: PasswordRecoveryRepository.Delete.Input,
  ): Promise<PasswordRecoveryRepository.Delete.Output> {
    const data = await this.cache.del(
      `${params.studentId}@${params.code}:recover-password`,
    );

    return !!(data && data > 0);
  }
}
