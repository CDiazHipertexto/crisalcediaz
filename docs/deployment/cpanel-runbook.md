# Runbook cPanel

## Estado observado — actualizado 2026-10-01

- Proveedor visible en las capturas: Colombia Hosting con cPanel.
- cPanel 136.0.38 ofrece Domains, Zone Editor, File Manager y administración SSL/TLS.
- `crisalcediaz.co` fue creado como dominio adicional con document root exclusivo en `public_html/crisalcediaz.co`.
- **Share document root** quedó desactivado; el dominio principal conserva su propia raíz y no fue modificado.
- La zona de `crisalcediaz.co` existe en cPanel con A para `@` hacia el origen del hosting y CNAME de `www` hacia el dominio raíz. La IP se mantiene fuera del repositorio público.
- Los cuatro nameservers configurados son `ns1` a `ns4.colombiahosting.com`.
- La zona ya responde de forma autoritativa en los cuatro nameservers y los resolvers públicos consultados devuelven el registro raíz correctamente.
- El remoto Git quedó publicado en `https://github.com/CDiazHipertexto/crisalcediaz`; `main` es la rama predeterminada y `feature/portfolio-prototype` conserva el historial de implementación.

## Seguimiento operativo

- Confirmar periódicamente que AutoSSL mantenga vigentes los certificados de `crisalcediaz.co` y `www.crisalcediaz.co`.
- Conservar el artefacto de rollback y la configuración original en la carpeta privada de copias.
- Volver a validar el redirect de `www`, compresión y headers después de cada cambio de servidor o `.htaccess`.
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
- El ZIP se extrajo correctamente y se verificó la presencia de `_nuxt`, `system-lab`, `index.html`, `robots.txt`, `sitemap.xml` y `.htaccess`.
- La configuración `.htaccess` original de cPanel se preservó como respaldo fechado antes de extraer el artefacto.
- La validación directa contra el origen confirmó el redirect HTTP a HTTPS y la entrega de los headers de seguridad; la validación HTTPS pública espera la emisión de AutoSSL.
- La configuración permite `/.well-known/acme-challenge/` por HTTP para no bloquear la validación y renovación de AutoSSL; el resto del tráfico mantiene redirección canónica a HTTPS.
- El ZIP de despliegue y el `.htaccess` original se movieron a la carpeta privada `copias`; no quedan artefactos de instalación descargables desde el document root.

### Ejecución 2026-10-01

- Commit publicado: `308076d` (`feat: clarify capabilities and portfolio navigation`) sobre `main`.
- Verificaciones previas: lint, typecheck, 12 pruebas automatizadas y generación estática completados correctamente.
- Artefacto: `cris-os-portfolio-2026-10-01-308076d.zip` (2,2 MB).
- SHA-256: `f9486dd3258f57c05d0cb9f5472c4855e53cb56aae3a656a418ef7525231a07c`.
- Respaldo previo: `backup-before-308076d-2026-10-01.zip`, almacenado fuera de `public_html` en la carpeta privada de copias.
- Destino: `public_html/crisalcediaz.co`. La extracción reemplazó el build estático y preservó `.well-known`, `cgi-bin`, `.user.ini` y `php.ini`.
- El artefacto usado se retiró del document root y quedó almacenado en la carpeta privada como `deployed-cris-os-portfolio-2026-10-01-308076d.zip`.
- Validación visual: Home, CV, archivo visual, System + AI Lab, versión inglesa, mapa del sitio y página 404 cargaron desde el dominio público.
- Validación HTTP: Home y sitemap respondieron `200`; una URL inexistente respondió `404`; `www` respondió `301` hacia `https://crisalcediaz.co/`.
- HTTPS y AutoSSL están operativos sin advertencias del navegador. LiteSpeed entregó CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` y `Permissions-Policy`.

No activar **Share document root** con otro dominio.

## Variables

La versión estática solo admite variables públicas incorporadas al build. Secretos y API de IA deben residir en un servicio servidor separado.

## Rollback

Conservar como mínimo el artefacto anterior. Restaurar el document root a esa versión y purgar caché únicamente después de verificarla.

## DNS

No eliminar ni reemplazar MX, SPF, DKIM o DMARC. Documentar TTL y valor anterior de cada registro antes de modificarlo.
