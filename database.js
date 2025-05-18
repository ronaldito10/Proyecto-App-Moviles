const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',  // Usuario de pgAdmin
  password: '12345',  // contraseña de PostgreSQL
  database: 'ppostgres'  // Nombre de la base de datos
});

client.connect()
  .then(() => {
    console.log('✅ Conectado a PostgreSQL!');
    agregarUsuario();
    agregarCurso();
    agregarReserva();
    agregarPago();
  })
  .catch(err => console.error('❌ Error:', err));

// Insertar un usuario
async function agregarUsuario() {
  const queryUsuarios = `
    INSERT INTO usuarios (nombre, email, telefono, fecha_registro) VALUES
    ('Carlos López', 'carlos@example.com', '+593987654321', NOW()),
    ('María Gómez', 'maria@example.com', '+593987654322', NOW()),
    ('Pedro Sánchez', 'pedro@example.com', '+593987654323', NOW()),
    ('Ana Rodríguez', 'ana@example.com', '+593987654324', NOW()),
    ('Jorge Fernández', 'jorge@example.com', '+593987654325', NOW()),
    ('Lucía Méndez', 'lucia@example.com', '+593987654326', NOW()),
    ('Roberto Vargas', 'roberto@example.com', '+593987654327', NOW()),
    ('Elena Ruiz', 'elena@example.com', '+593987654328', NOW()),
    ('Andrés Castillo', 'andres@example.com', '+593987654329', NOW()),
    ('Sofía Herrera', 'sofia@example.com', '+593987654330', NOW())
    RETURNING *;
  `;

  try {
    const res = await client.query(queryUsuarios);
    console.log("✅ Usuario agregado:", res.rows);
  } catch (err) {
    console.error("❌ Error al agregar usuario:", err);
  }
}

// Insertar un curso
async function agregarCurso() {
  const queryCursos = `
    INSERT INTO cursos (nombre, descripcion, nivel, precio, capacidad_maxima) VALUES
    ('Natación Básica', 'Curso para principiantes', 'Principiante', 50.00, 15),
    ('Natación Intermedia', 'Técnicas de flotación y respiración', 'Intermedio', 75.00, 12),
    ('Natación Avanzada', 'Mejoras en velocidad y resistencia', 'Avanzado', 100.00, 10),
    ('Natación para Niños', 'Introducción a la natación para menores', 'Principiante', 45.00, 20),
    ('Rehabilitación Acuática', 'Ejercicios terapéuticos en agua', 'Especializado', 85.00, 8),
    ('Natación de Competencia', 'Entrenamiento para competencias', 'Avanzado', 120.00, 10),
    ('Natación para Adultos', 'Curso adaptado a adultos', 'Principiante', 60.00, 15),
    ('Natación para Bebés', 'Estimulación temprana en el agua', 'Especializado', 40.00, 10),
    ('Entrenamiento de Salvavidas', 'Técnicas de rescate en agua', 'Avanzado', 110.00, 10),
    ('Natación Recreativa', 'Ejercicios relajantes en piscina', 'Intermedio', 70.00, 12)
    RETURNING *;
  `;

  try {
    const res = await client.query(queryCursos);
    console.log("✅ Curso agregado:", res.rows);
  } catch (err) {
    console.error("❌ Error al agregar curso:", err);
  }
}

// Insertar una reserva
async function agregarReserva() {
  const queryReservas = `
    INSERT INTO reservas (userId, cursoId, fechaReserva, estado) VALUES
    ('abc123', 'natacion_basica', '2025-05-18', 'Confirmado'),
    ('abc124', 'natacion_intermedia', '2025-05-19', 'Pendiente'),
    ('abc125', 'natacion_avanzada', '2025-05-20', 'Confirmado'),
    ('abc126', 'natacion_ninos', '2025-05-21', 'Cancelado'),
    ('abc127', 'rehabilitacion_acuatica', '2025-05-22', 'Confirmado'),
    ('abc128', 'natacion_competencia', '2025-05-23', 'Pendiente'),
    ('abc129', 'natacion_adultos', '2025-05-24', 'Confirmado'),
    ('abc130', 'natacion_bebes', '2025-05-25', 'Pendiente'),
    ('abc131', 'entrenamiento_salvavidas', '2025-05-26', 'Cancelado'),
    ('abc132', 'natacion_recreativa', '2025-05-27', 'Confirmado')
    RETURNING *;
  `;

  try {
    const res = await client.query(queryReservas);
    console.log("✅ Reserva registrada:", res.rows);
  } catch (err) {
    console.error("❌ Error al agregar reserva:", err);
  }
}

// Insertar un pago
async function agregarPago() {
  const queryPagos = `
    INSERT INTO pagos (userId, monto, metodoPago, fechaPago, estado) VALUES
    ('abc123', 50.00, 'Tarjeta de crédito', '2025-05-18', 'Completado'),
    ('abc124', 75.00, 'Efectivo', '2025-05-19', 'Pendiente'),
    ('abc125', 100.00, 'Transferencia bancaria', '2025-05-20', 'Completado'),
    ('abc126', 45.00, 'PayPal', '2025-05-21', 'Cancelado'),
    ('abc127', 85.00, 'Tarjeta de crédito', '2025-05-22', 'Completado'),
    ('abc128', 120.00, 'Efectivo', '2025-05-23', 'Pendiente'),
    ('abc129', 60.00, 'PayPal', '2025-05-24', 'Completado'),
    ('abc130', 40.00, 'Transferencia bancaria', '2025-05-25', 'Pendiente'),
    ('abc131', 110.00, 'Tarjeta de crédito', '2025-05-26', 'Cancelado'),
    ('abc132', 70.00, 'PayPal', '2025-05-27', 'Completado')
    RETURNING *;
  `;

  try {
    const res = await client.query(queryPagos);
    console.log("✅ Pago registrado:", res.rows);
  } catch (err) {
    console.error("❌ Error al agregar pago:", err);
  }

  



}

"usuarios"; {
    "userID1"; {
      "nombre"; "Carlos López",
      "email"; "carlos@example.com",
      "telefono"; "+593987654321",
      "fechaRegistro"; "2025-05-18T12:00:00Z",
      "reservas"; {
        "reservaID1"; { "cursoID"; "curso1", "fechaReserva"; "2025-05-19", "estado"; "Confirmado" };
        "reservaID2"; { "cursoID"; "curso2", "fechaReserva"; "2025-05-20", "estado"; "Pendiente" }
      };
      "pagos"; {
        "pagoID1"; { "monto"; 50.00, "metodoPago"; "Tarjeta de crédito", "fechaPago"; "2025-05-18", "estado"; "Completado" }
      }
    }
  };
  "cursos"; {
    "curso1"; {
      "nombre"; "Natación Básica",
      "descripcion"; "Curso para principiantes",
      "nivel"; "Principiante",
      "precio"; 50.00,
      "capacidadMaxima"; 15
    }
  };
  "reservas"; {
    "reservaID1"; {
      "userID"; "userID1",
      "cursoID"; "curso1",
      "fechaReserva"; "2025-05-19",
      "estado"; "Confirmado"
    }
  };
  "pagos"; {
    "pagoID1"; {
      "userID"; "userID1",
      "monto"; 50.00,
      "metodoPago"; "Tarjeta de crédito",
      "fechaPago"; "2025-05-18",
      "estado"; "Completado"
    }
  }

