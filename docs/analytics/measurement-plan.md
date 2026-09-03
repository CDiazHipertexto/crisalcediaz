# Plan de medición — borrador

No se instalarán etiquetas hasta recibir identificadores y aprobar consentimiento.

| Evento | Disparador | Parámetros mínimos | Propósito | Privacidad | Éxito inicial |
|---|---|---|---|---|---|
| `view_home` | Vista de Home | `language` | Alcance | Sin PII | Línea base |
| `view_case_study` | Vista de caso | `case_id`, `language` | Interés | ID editorial | Casos vistos |
| `case_study_progress` | 25/50/75/100% | `case_id`, `percent` | Profundidad | Sin texto libre | ≥50% |
| `view_design_system` | Vista del sistema | `language` | Interés técnico | Sin PII | Línea base |
| `view_ai_lab` | Vista de AI Lab | `language` | Interés IA | Sin PII | Línea base |
| `open_ai_assistant` | Apertura | `entry_point` | Adopción | Sin prompt | Línea base |
| `ask_ai_assistant` | Pregunta enviada | `intent`, `found_source` | Calidad | No guardar texto | Respuesta con fuente |
| `assistant_source_click` | Clic en fuente | `source_id` | Confianza | ID público | Línea base |
| `download_resume` | Descarga de CV | `language`, `variant` | Conversión | Sin PII | Línea base |
| `click_linkedin` | Clic externo | `location` | Conversión | Sin PII | Línea base |
| `click_email` | Inicio de email | `location` | Conversión | No registrar email | Línea base |
| `contact_start` | Primer campo | `form_id` | Fricción | Sin valores | Línea base |
| `contact_submit` | Envío válido | `form_id`, `status` | Conversión | Sin campos | Línea base |
| `language_change` | Cambio de idioma | `from`, `to` | Preferencia | Sin PII | Línea base |
| `theme_change` | Cambio de tema | `theme` | Preferencia | Sin PII | Línea base |
| `outbound_link` | Enlace externo | `domain`, `location` | Navegación | Sin query strings | Línea base |

