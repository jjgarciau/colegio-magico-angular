// PLAN B PARA LA CLASE: backend simulado (sin Java) en el puerto 8080.
// Imita el contrato de la API Spring Boot (mismas rutas, códigos y mensajes).
// Úsalo solo si el backend real no arranca:  npm run mock
// Los datos viven en memoria (igual que H2): se pierden al reiniciar.
const http = require('http');

let magos = [];
let hechizos = [];
let seqMago = 1;
let seqHechizo = 1;

function enviar(res, status, body) {
  // El backend real declara application/json incluso cuando responde texto plano.
  res.writeHead(status, { 'Content-Type': 'application/json' });
  if (body === undefined) return res.end();
  res.end(typeof body === 'string' ? body : JSON.stringify(body));
}

function leerBody(req) {
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (c) => (data += c));
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}); } catch { resolve({}); }
    });
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const partes = url.pathname.split('/').filter(Boolean); // ['api','magos','1']
  console.log(req.method, req.url);
  if (partes[0] !== 'api') return enviar(res, 404);

  // ---------- /api/magos ----------
  if (partes[1] === 'magos') {
    const id = partes[2] ? Number(partes[2]) : null;
    if (req.method === 'GET' && id === null) return enviar(res, 200, magos);
    if (req.method === 'GET') {
      const m = magos.find((x) => x.id === id);
      return m ? enviar(res, 200, m) : enviar(res, 404);
    }
    if (req.method === 'POST') {
      const b = await leerBody(req);
      if (!b.nombre || !String(b.nombre).trim()) return enviar(res, 400, 'El mago debe tener un nombre válido');
      magos.push({ id: seqMago++, nombre: b.nombre, casa: b.casa ?? null });
      return enviar(res, 201, 'Mago creado con éxito');
    }
    if (req.method === 'PUT') {
      const b = await leerBody(req);
      const i = magos.findIndex((x) => x.id === id);
      if (i < 0) return enviar(res, 400, 'Mago no encontrado para actualizar');
      magos[i] = { id, nombre: b.nombre, casa: b.casa ?? null };
      return enviar(res, 200, 'Mago actualizado correctamente');
    }
    if (req.method === 'DELETE') {
      const i = magos.findIndex((x) => x.id === id);
      if (i < 0) return enviar(res, 404, 'Mago no encontrado para eliminar');
      magos.splice(i, 1);
      return enviar(res, 204);
    }
  }

  // ---------- /api/hechizos ----------
  if (partes[1] === 'hechizos' && !partes[2]) {
    if (req.method === 'GET') {
      const tipo = url.searchParams.get('tipo');
      return enviar(res, 200, hechizos.filter((h) => tipo !== null && h.tipoMagia === tipo));
    }
    if (req.method === 'POST') {
      const b = await leerBody(req);
      if (String(b.tipoMagia).toLowerCase() === 'oscura') return enviar(res, 400, 'Magia prohibida en el colegio');
      if (!b.nombre || !String(b.nombre).trim()) return enviar(res, 400, 'Nombre invalido');
      hechizos.push({ id: seqHechizo++, nombre: b.nombre, tipoMagia: b.tipoMagia, nivelPoder: b.nivelPoder });
      return enviar(res, 201, 'Hechizo creado correctamente');
    }
  }

  enviar(res, 404);
});

server.listen(8080, () => console.log('🧪 Backend simulado en http://localhost:8080/api'));
