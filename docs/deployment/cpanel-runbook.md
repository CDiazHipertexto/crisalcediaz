# Runbook cPanel — borrador

## Requisitos por confirmar

- Document root exclusivo para `crisalcediaz.co`.
- SSL automático activo.
- File Manager o SFTP.
- Redirect de `www` definido.
- Compresión y headers configurables.
- Respaldo de DNS; confirmar MX, SPF, DKIM y DMARC.

## Build

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run generate
```

Publicar únicamente el contenido de `.output/public`.

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

