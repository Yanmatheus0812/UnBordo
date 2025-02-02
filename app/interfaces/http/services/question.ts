import { IQuestion, IStudent } from '@/interfaces/application';

export namespace IQuestionService {
  export namespace Fetch {
    export type Request = {};

    export type Response = {
      questions: Array<
        IQuestion & {
          student: IStudent;
          subject: {
            id: string;
            code: string;
            name: string;
            departmentCode: string;
          };
        }
      >;
    };
  }

  export namespace Get {
    export type Request = {
      id: string;
    };

    export type Response = {
      question: IQuestion & {
        student: IStudent;
      };
    };
  }

  export namespace Create {
    export type Request = {
      subjectId: string;
      title: string;
      description: string;
      difficulty: string;
      urgency: string;
    };

    export type Response = {
      question: IQuestion;
    };
  }
  

  export namespace Reply {
    export type Request = {
      questionId: string;
    };

    export type Response = {
      chatRoomId: string;
      question: IQuestion;
    };
  }
}
