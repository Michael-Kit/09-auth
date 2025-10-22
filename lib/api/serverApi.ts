import { cookies } from 'next/headers';
import { nextServer } from './api';
import { User } from '@/types/user';
import { Note } from '@/types/note';
import { CheckSessionRequest, NotesHTTPResponse } from './clientApi';

// Універсальна функція для формування заголовка Cookie
const getAllCookiesHeader = async (): Promise<string> => {
  const cookieStore = await cookies(); // ✅ await — бо cookies() повертає Promise
  const allCookies: { name: string; value: string }[] = cookieStore.getAll(); // ✅ явна типізація

  return allCookies.map(({ name, value }) => `${name}=${value}`).join('; ');
};

export const fetchNotes = async (
  search: string,
  page: number,
  tag?: string,
): Promise<NotesHTTPResponse> => {
  const cookieHeader = await getAllCookiesHeader();

  const { data } = await nextServer.get<NotesHTTPResponse>('/notes', {
    params: {
      search,
      page,
      perPage: 12,
      ...(tag ? { tag } : {}),
    },
    headers: {
      Cookie: cookieHeader,
    },
  });

  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const cookieHeader = await getAllCookiesHeader();

  const { data } = await nextServer.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieHeader,
    },
  });

  return data;
};

export const getMe = async (): Promise<User> => {
  const cookieHeader = await getAllCookiesHeader();

  const { data } = await nextServer.get<User>('/users/me', {
    headers: {
      Cookie: cookieHeader,
    },
  });

  return data;
};

export const checkSession = async (): Promise<CheckSessionRequest> => {
  const cookieHeader = await getAllCookiesHeader();

  const { data } = await nextServer.get<CheckSessionRequest>('/auth/session', {
    headers: {
      Cookie: cookieHeader,
    },
  });

  return data;
};
