import Note from "../shared/types/Note";

type Method = "DELETE" | "POST" | "PATCH";

export const noteAPI = (
  method: Method,
  path: string,
  data: Note | undefined
) => {
  const baseUrl = `http://localhost:3001/${path}/`;

  fetch(baseUrl, {
    method,

    body: JSON.stringify({
      title: data?.title,
      content: data?.content,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
