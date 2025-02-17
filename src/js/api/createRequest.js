// export default async function createRequest({ method, id, data = null }) {
//   const url = new URL('http://localhost:7070/');
//   url.searchParams.set('method', method);
//   if (id) url.searchParams.set('id', id);

//   const options = {
//     method: data ? 'POST' : 'GET',
//     headers: { 'Content-Type': 'application/json' },
//     body: data ? JSON.stringify(data) : null,
//   };

//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) throw new Error(`Ошибка ${response.status}`);
//     // Проверяем, есть ли тело ответа, прежде чем парсить JSON
//     const text = await response.text();
//     return text ? JSON.parse(text) : null;
//     //return await response.json();
//   } catch (error) {
//     throw new Error(`Ошибка запроса: ${error.message}`);
//   }
// }

export default async function createRequest({ method, url, data = null, params = {} }) {
  // Добавляем параметры в URL
  const urlObj = new URL(url);
  Object.entries(params).forEach(([key, val]) => {
    urlObj.searchParams.set(key, val);
  });

  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };

  if (data) options.body = JSON.stringify(data);

  try {
    const response = await fetch(urlObj.toString(), options);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.json();
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}
