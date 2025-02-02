import { PasswordRecoveryCode } from '@/domain';

export namespace PasswordRecoveryRepository {
  export const Name = 'PasswordRecoveryRepository';

  export namespace Create {
    export type Input = PasswordRecoveryCode;

    export type Output = PasswordRecoveryCode;
  }

  export namespace Get {
    export type Input = {
      studentId: string;
      code: string;
    };

    export type Output = PasswordRecoveryCode | null;
  }

  export namespace Delete {
    export type Input = {
      studentId: string;
      code: string;
    };

    export type Output = boolean;
  }
}

export interface PasswordRecoveryRepository {
  create: (
    params: PasswordRecoveryRepository.Create.Input,
  ) => Promise<PasswordRecoveryRepository.Create.Output>;
  get: (
    params: PasswordRecoveryRepository.Get.Input,
  ) => Promise<PasswordRecoveryRepository.Get.Output>;
  del: (
    params: PasswordRecoveryRepository.Delete.Input,
  ) => Promise<PasswordRecoveryRepository.Delete.Output>;
}
