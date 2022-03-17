import Note from "../shared/types/Note";

type Method = "DELETE" | "POST" | "PATCH" | "GET";

export function noteAPI<T>(
  method: Method,
  path: string,
  data: Note | undefined
): Promise<T> {
  const baseUrl = `http://localhost:3001/${path}/`;

  return fetch(baseUrl, {
    method,

    body: JSON.stringify({
      title: data?.title,
      content: data?.content,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
  //.then((json) => console.log("json"));
}

export async function noteSearch(term: string): Promise<Note[]> {
  console.log("noteSearch", term);
  const uri = `http://localhost:3001/notes?q=${term}`;

  const res = await fetch(uri);
  const posts = await res.json();

  return posts;
}
