/**
 * Node-RED settings.js - Configuración completa
 * 
 * Usuario 1 (admin): permisos de lectura/escritura
 * Usuario 2 (ingelearn): permisos de solo lectura
 */

module.exports = {
    // Puerto del servidor web
    uiPort: process.env.PORT || 1880,

    // Configuración de autenticación
    adminAuth: {
        type: "credentials",
        users: [
            {
                username: "admin",
                // Hash para "curso_nodered" - Genera el tuyo con: node-red-admin hash-pw
                password: "$2y$08$4tHBnBhJYkmbM55.6fNrQOIVbUM3PIW9cLtGVUu29MgLsRoQlOc0K",
                permissions: "*"
            },
            {
                username: "ingelearn",
                // Hash para "inge1234" - Genera el tuyo con: node-red-admin hash-pw
                password: "$2y$08$gzuuyw9jPSuBmzwq/jdXyeGuDUnlowo2AZMR4QaUBds/XR7wpbcaO",
                permissions: "read"
            }
        ]
    },

    // Configuración de logging
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },

    // Configuración del editor
    editorTheme: {
        projects: {
            enabled: true
        }
    },

    // Funciones globales disponibles en los nodos function
    functionGlobalContext: {
        // Puedes agregar variables globales aquí
    }
};