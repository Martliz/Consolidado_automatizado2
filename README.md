┌───────────────────────────────────────────────────────────────────────┐
│  🔵 BARRA DE NAVEGACIÓN AZUL (50px de alto)                          │
│  └─ "Guía de Atención"  [↺ Actualizar]  [⚙ Supervisor]              │
├───────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  📋 PANEL SUPERIOR - DATOS DEL EJECUTIVO                            │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ Nombre Ejecutivo │ Nombre Cliente │ N° de Caso │ Motivo ��� Turno │ │
│  │ [Tu nombre]     │ [Cliente]      │ [12345]    │ [...]  │ ☀️ Días│ │
│  │                 │                │            │        │ 🌆 Tard│ │
│  │                                                                   │ │
│  │ Causa de contacto: [Buscar por nombre, familia o tipo...]        │ │
│  │ 📍 ★ Más frecuentes                                             │ │
│  │    • Producto cobrado no entregado                              │ │
│  │    • Calidad alimentaria                                        │ │
│  │    • Consulta por el estado del pedido                          │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ╔═══════════════════════════════════╦═════════════════════════════╗ │
│  ║  PANEL IZQUIERDO (420px)         ║ PANEL DERECHO              ║ │
│  ║  Flujo de Atención              ║ Scripts de Atención         ║ │
│  ║                                 ║                             ║ │
│  ║ 🎯 Selecciona la causa          ║ 💬 Scripts aparecerán       ║ │
│  ║                                 ║    aquí según el paso       ║ │
│  ║ El flujo de atención aparecerá  ║    activo                   ║ │
│  ║ aquí con las condiciones        ║                             ║ │
│  ║ específicas de la causa elegida. ║                             ║ │
│  ║                                 ║                             ║ │
│  ║ ┌─────────────────────────────┐ ║ ┌─────────────────────────┐ ║ │
│  ║ │ ① SALUDO                  ✓ │ ║ │ 1️⃣ SALUDO              │ ║ │
│  ║ │ └─ Hola buenos días...    │ ║ │ ────────────────────── │ ║ │
│  ║ │ [✓ Completar paso →]      │ ║ │ 👤 Script cliente:    │ ║ │
│  ║ │                           │ ║ │                         │ ║ │
│  ║ │ ┌─────────────────────────┐ ║ │ ¡Hola buenos días...   │ ║ │
│  ║ │ │ ② FRASE DE CONTENCIÓN   │ ║ │                         │ ║ │
│  ║ │ │ └─ Comprendo tu...    ▼ │ ║ │ [Copiar]                │ ║ │
│  ║ │ │                       │ ║ │ └─────────────────────────┘ ║ │
│  ║ │ │ Condición:          │ ║ │                             ║ │
│  ║ │ │ "SI hay datos..."   │ ║ │ ┌─────────────────────────┐ ║ │
│  ║ │ │ [✓ Completar paso →] │ ║ │ 2️⃣ FRASE DE CONTENCIÓN   │ ║ │
│  ║ │ │                      │ ║ │ ────────────────────── │ ║ │
│  ║ │ └─────────────────────┘ ║ │ 👤 Script cliente:    │ ║ │
│  ║ │                         ║ │                         │ ║ │
│  ║ │ ┌─────────────────────┐ ║ │ Comprendo tu malestar... │ ║ │
│  ║ │ │ ③ SCRIPT SEGÚN...   │ ║ │                         │ ║ │
│  ║ │ │    CAUSA          ▼ │ ║ │ [Copiar]                │ ║ │
│  ║ │ └─────────────────────┘ ║ │ └─────────────────────────┘ ║ │
│  ║                           ║ │                             ║ │
│  ║ [DESPLAZABLE]             ║ │ [DESPLAZABLE]               ║ │
│  ╚═══════════════════════════════════╩═════════════════════════════╝ │
│                                                                       │
└─────────────────────────────────────────────────────────────��─────────┘
🎯 CARACTERÍSTICAS PRINCIPALES
📝 Panel Superior
✏️ Campos para ejecutivo, cliente, caso y motivo
🕐 Selector de turno (Días/Tardes) - cambia los salutos automáticamente
🔍 Buscador dinámico de causas con:
⭐ Causas más frecuentes destacadas
🏷️ Badges de color por tipo (Reclamo 🔴, Solicitud 🔵, etc.)
Filtrado por nombre, familia o tipo
👥 Panel Izquierdo - Flujo de Atención
Muestra pasos secuenciales de la atención
Numeración interactiva:
🟢 Números en verde = paso completado
🔵 Números en azul = paso actual
⚪ Números grises = pendientes
Condiciones mostradas visualmente
🧙 Wizard interactivo para casos complejos (como Garantía Legal)
💬 Panel Derecho - Scripts
📄 Scripts para leer al cliente (fondo azul)
📝 Instrucciones para ejecutivo (fondo ámbar/naranja)
Botones "Copiar" para copiar al portapapeles
Sustitución automática de variables:
(nombre cliente) → el nombre que escribas
(nombre ejecutivo) → tu nombre
buenos días/tardes → depende del turno seleccionado
🔐 Panel Supervisor
Login con contraseña: supervisor2026
📊 Tabla de causas
✏️ Editar/crear/eliminar causas
🔗 Conectar con SharePoint
export interface IGuiaAtencionWebPartProps {
  listName: string;
  siteUrl?: string;
  frameHeight: number;
}
