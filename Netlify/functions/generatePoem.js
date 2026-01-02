export default async (req) => {
  const url = new URL(req.url);
  const prompt = url.searchParams.get('prompt');
  const context = url.searchParams.get('context');

  if (!prompt || !context) {
    return new Response(JSON.stringify({ error: 'Missing prompt or context' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.SHECODES_AI_KEY;
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
};
