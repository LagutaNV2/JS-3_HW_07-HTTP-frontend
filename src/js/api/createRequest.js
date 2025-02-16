export default async function createRequest({ method, id, data }) {
  const url = new URL('http://localhost:7070/');
  url.searchParams.set('method', method);
  if (id) url.searchParams.set('id', id);

  const options = {
    method: data ? 'POST' : 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : null,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Ошибка ${response.status}`);
    return await response.json();
  } catch (error) {
    throw new Error(`Ошибка запроса: ${error.message}`);
  }
}
