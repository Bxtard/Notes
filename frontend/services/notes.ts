import { noteType } from "../types";

const BASE_URL = 'http://localhost:3001'

export const getAllNotes = async () => {
  const response = await fetch(`${BASE_URL}/notes`);
  return await response.json();
}

export const getArchivedNotes = async () => {
const response =  await fetch(`${BASE_URL}/notes/archived`);
return await response.json();
}

export const createNote = async (note: noteType) => {
  const response = await fetch(`${BASE_URL}/notes`,{
    method: 'POST',
    body: JSON.stringify(note),
    headers: {
      'Content-Type' : 'application/json',
    }
  } );
  return response.json();
}

export const updateNote = async (id : string, note: noteType) => {
  const response = await fetch(`${BASE_URL}/notes/${id}`,{
    method: 'PATCH',
    body: JSON.stringify(note),
    headers: {
      'Content-Type' : 'application/json',
    }
  } );
  return response.json();
}

export const deleteNote = async (id : string) => {
  const response = await fetch(`${BASE_URL}/notes/${id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type' : 'application/json',
    }
  } );
  return response.json();
}

