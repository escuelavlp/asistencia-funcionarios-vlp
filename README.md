# Asistencia Funcionarios — Escuela Villa Las Peñas

Sistema web y PWA independiente para el control de asistencia mediante códigos QR dinámicos con firma criptográfica HMAC-SHA256.

## 📱 URLs Públicas en GitHub Pages
- **Credencial de Funcionarios (PWA):** [https://escuelavlp.github.io/asistencia-funcionarios-vlp/](https://escuelavlp.github.io/asistencia-funcionarios-vlp/)
- **Escáner Tablet de Portería:** [https://escuelavlp.github.io/asistencia-funcionarios-vlp/tablet.html](https://escuelavlp.github.io/asistencia-funcionarios-vlp/tablet.html)

## 🛡️ Características
- **100% Online y Gratuito:** Alojado en GitHub Pages con HTTPS automático.
- **Sin servidores intermedios:** Conexión directa a Supabase mediante API REST segura.
- **Anti-fraude:** Los códigos QR caducan diariamente a medianoche y están firmados con HMAC-SHA256.
- **Regla de Negocio (Jornada Única):** 1 Entrada + 1 Salida por día, protección anti-rebote (10s) y control de estancia mínima (20 min).
- **Integrado con el Sistema Escolar:** Los registros se reflejan inmediatamente en el Panel del Director en la App de Gestión Escolar.
