//* MOCHA + CHAI

// *1. npm install mocha chai --save-dev
// *2. Agregar en package.json el script:
// * "test": "mocha ./test/**/*.test.js --exit"
// *3. Ejecutar los test con: npm test
//* al ejecutar npm test se buscan todos los archivos que terminen en .test.js dentro de la carpeta test y subcarpetas
//* no es necesario importar los métodos de mocha (describe, it, before, after, etc), pero se hace para tener autocompletado en el editor
//* En los test se implementa mucho las funciones callback

// *4. Creamos una serie de test unitarios para el DAO de Users utilizando Chai para las aserciones

import Users from "../src/dao/Users.dao.js";
// class Users {
//   constructor() {
//     this.users = [];
//     this.currentId = 1;
//   }
//   async save(user) {}
//   async get(filter) {}
//   async getBy(filter) {}
//   async update(id, data) {}
//   async delete(id) {}
// }

import mongoose from "mongoose";

//* Importamos Chai para las aserciones
import { expect } from "chai";

// import { describe, it, before, after, beforeEach, afterEach } from "mocha";

// describe <-- Grupo de pruebas
// it or test <-- Prueba individual (Test en sí)

import dotenv from "dotenv";
dotenv.config();
const { MONGO_URI } = process.env;
import { describe, it, before, after } from "mocha";
//   _____________________________________
//* |         *** CODE AQUI ***           |
//* |         before()                    |
//  |_____________________________________|

// -> before() --> Se ejecuta una sola vez ANTES de todos los test (ideal para setup general, como conectar a la DB)
// -> after() --> Se ejecuta una sola vez DESPUÉS de todos los test (ideal para teardown general, como desconectar la DB)
// -> beforeEach() --> Se ejecuta ANTES de CADA test (ideal para preparar datos específicos para cada prueba)
// -> afterEach() --> Se ejecuta DESPUÉS de CADA test (ideal para limpiar datos específicos después de cada prueba)

before(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Conexión a la base de datos exitosa.");
  } catch (error) {
    console.error(`Error al conectar a la base de datos: ${error.message}`);
  }
});

describe("Test unitarios CRUD para el DAO del Users con MOCHA + CHAI", function () {
  //   _____________________________________
  //* |         *** CODE AQUI ***           |
  //  |_____________________________________|
  this.timeout(5000);
  const daoUsers = new Users();

  //* Datos mock para reuso
  const userMock = {
    first_name: "Ana",
    last_name: "Pérez",
    email: "ana@test.com",
    password: "abcd1234",
    // Por defecto tb toma role: "user" y pets: []
  };

  //* Limpieza posterior a cada test (garantiza independencia entre pruebas)
  //* ANTES (solo 1 vez para cada IT (it()))
  beforeEach(async () => {
    await mongoose.connection.collection("users").deleteMany({
      email: userMock.email,
    });
  });

  //* DESPUÉS (solo 1 vez para cada IT (it()))
  afterEach(async () => {
    await mongoose.connection.collection("users").deleteMany({
      email: userMock.email,
    });
  });

  it("save() debe crear y devolver un usuario con _id", async () => {
    const result = await daoUsers.save(userMock);
    // assert.ok(result._id, "Debe tener un _id");
    // assert.equal(result.email, userMock.email);
    // cretedUser = result
    expect(result).to.have.property("_id");
    expect(result.email).to.equal(userMock.email);
  });
  it("get() debe obtener un arreglo de usuarios", async () => {
    await daoUsers.save(userMock);
    const result = await daoUsers.get({});
    // assert.ok(Array.isArray(result), "Debe devolver un array");
    // assert.ok(result.length > 0, "Debe haber al menos un usuario");
    expect(result).to.be.an("array");
    expect(result.length).to.be.greaterThan(0);
  });
  it("getBy() debe obtener un único usuario por filtro", async () => {
    const user = await daoUsers.save(userMock);
    const result = await daoUsers.getBy({ email: userMock.email });
    //   assert.ok(result, "Debe devolver un usuario");
    //   assert.equal(result.email, userMock.email);
    expect(result).to.exist;
    expect(result.email).to.equal(userMock.email);
  });
  it("update() debe modificar un usuario existente", async () => {
    const user = await daoUsers.save(userMock);
    const dataUpdate = { last_name: "Rodriguez Sanches Lopez" };
    await daoUsers.update(user._id, dataUpdate);
    const userUpdate = await daoUsers.getBy({ _id: user._id });
    // assert.equal(
    //   userUpdate.last_name,
    //   "Rodriguez Sanches Lopez",
    //   "El apellido debe estar actualizado"
    // );
    expect(userUpdate.last_name).to.equal("Rodriguez Sanches Lopez");
  });

  it("delete() debe eliminar un usuario por su id", async () => {
    const user = await daoUsers.save(userMock);
    const deleted = await daoUsers.delete(user._id);
    // assert.ok(deleted, "Debe devolver el documento eliminado");
    expect(deleted).to.exist;
    const found = await daoUsers.getBy({ _id: user._id });
    expect(found).to.be.null;
    // assert.equal(found, null, "El usuario ya no debe existir");
  });
});
