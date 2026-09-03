# Runbook cPanel — borrador

## Estado observado — 2026-09-03

- Proveedor visible en las capturas: Colombia Hosting con cPanel.
- El panel ofrece la interfaz **Domains / Crear un dominio**.
- La delegación pública de `crisalcediaz.co` responde `SERVFAIL`: los servidores delegados rechazan actualmente la consulta de zona.
- No existe remoto Git configurado en el repositorio local.
- El acceso automatizado al puerto seguro de cPanel no está disponible en este entorno; la creación del dominio y la carga deberán realizarse con acompañamiento del propietario desde su sesión, sin compartir credenciales.

## Requisitos por confirmar

- Document root exclusivo para `crisalcediaz.co`.
- SSL automático activo.
- File Manager o SFTP.
- Redirect de `www` definido.
- Compresión y headers configurables.
- Respaldo de DNS; confirmar MX, SPF, DKIM y DMARC.

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

No activar **Share document root** con otro dominio.

## Variables

La versión estática solo admite variables públicas incorporadas al build. Secretos y API de IA deben residir en un servicio servidor separado.

## Rollback

Conservar como mínimo el artefacto anterior. Restaurar el document root a esa versión y purgar caché únicamente después de verificarla.

## DNS

No eliminar ni reemplazar MX, SPF, DKIM o DMARC. Documentar TTL y valor anterior de cada registro antes de modificarlo.
