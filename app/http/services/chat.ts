import { api } from '../api';
import { IChatService } from '@/interfaces/http/services';

const PREFIX = '/chat';

export const ChatService = {
  fetch: async () => {
    return api.get<IChatService.Fetch.Response>(`${PREFIX}`);
  },
};
