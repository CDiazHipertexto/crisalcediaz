# Runbook cPanel

## Estado observado — 2026-09-03

- Proveedor visible en las capturas: Colombia Hosting con cPanel.
- cPanel 136.0.38 ofrece Domains, Zone Editor, File Manager y administración SSL/TLS.
- `crisalcediaz.co` fue creado como dominio adicional con document root exclusivo en `public_html/crisalcediaz.co`.
- **Share document root** quedó desactivado; el dominio principal conserva su propia raíz y no fue modificado.
- La zona de `crisalcediaz.co` existe en cPanel con A para `@` hacia el origen del hosting y CNAME de `www` hacia el dominio raíz. La IP se mantiene fuera del repositorio público.
- Los cuatro nameservers configurados son `ns1` a `ns4.colombiahosting.com`.
- La consulta pública aún responde `SERVFAIL` y la consulta directa a `ns1` responde `REFUSED`; se debe validar la sincronización de la zona con el proveedor antes de emitir SSL.
- El remoto Git quedó publicado en `https://github.com/CDiazHipertexto/crisalcediaz` y la rama remota inicial es `feature/portfolio-prototype`.

## Requisitos por confirmar

- Sincronización autoritativa de la nueva zona DNS.
- SSL automático para `crisalcediaz.co` y `www.crisalcediaz.co`.
- El ZIP validado fue cargado en la raíz exclusiva; falta extraerlo y retirar el ZIP después de comprobar el sitio.
- Redirect de `www` definido.
- Compresión y headers configurables.
- Verificación final de MX, SPF, DKIM y DMARC antes de habilitar correo en el nuevo dominio.

## Desbloqueo del dominio

1. En cPanel, abrir **Domains → Create a New Domain**.
2. Escribir `crisalcediaz.co`.
3. Desmarcar **Share document root** para no servir ni sobrescribir el sitio de otro dominio.
4. Usar un document root exclusivo, por ejemplo `public_html/crisalcediaz.co`.
5. Crear el dominio y comprobar que aparezca también su zona DNS.
6. Antes de editar registros, exportar o capturar la zona completa y comprobar si existen MX, SPF, DKIM o DMARC.
7. Confirmar que `@` y `www` resuelven hacia el hosting sin modificar registros de correo.
8. Ejecutar AutoSSL solo cuando la resolución DNS sea correcta.

## Build

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run generate
```

Publicar únicamente el contenido de `.output/public`.

El build incorpora `.htaccess` con canonical HTTPS/no-www, error 404, compresión, caché y headers de seguridad. Confirmar que el hosting permite `mod_rewrite`, `mod_headers` y `mod_deflate` antes de dar el despliegue por válido.

La CSP permite estilos y scripts inline porque el HTML estático generado por Nuxt incluye payload de hidratación y estilos calculados. Endurecer con hashes o nonces cuando exista una capa servidor capaz de generarlos.

## Publicación

1. Crear staging con document root independiente.
2. Respaldar archivos existentes y zona DNS.
3. Subir el artefacto a un directorio versionado.
4. Validar 200, 404, assets, sitemap, robots y HTTPS.
5. Cambiar el document root o reemplazar el directorio mediante una operación reversible.

### Ejecución 2026-09-03

- Artefacto: `cris-os-portfolio-2026-09-03.zip` (2,2 MB).
- Destino confirmado: `public_html/crisalcediaz.co`; el prefijo privado de la cuenta no se documenta en el repositorio.
- Se preservaron `.well-known`, `cgi-bin`, `.user.ini`, `php.ini` y la configuración inicial creada por cPanel.
- El ZIP terminó de cargar; la extracción y la validación HTTP/HTTPS siguen pendientes.

No activar **Share document root** con otro dominio.

## Variables

La versión estática solo admite variables públicas incorporadas al build. Secretos y API de IA deben residir en un servicio servidor separado.

## Rollback

Conservar como mínimo el artefacto anterior. Restaurar el document root a esa versión y purgar caché únicamente después de verificarla.

## DNS

No eliminar ni reemplazar MX, SPF, DKIM o DMARC. Documentar TTL y valor anterior de cada registro antes de modificarlo.
