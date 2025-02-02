export namespace ISubjectService {
  export namespace Fetch {
    export type Request = {
      sort?: 'asc' | 'desc';
      search?: string;
    };

    export type Response = {
      subjects: Array<{
        id: string;
        code: string;
        name: string;
        departmentCode: string;
      }>;
    };
  }
}
