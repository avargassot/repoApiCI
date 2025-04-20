const request = require('supertest');
const express = require('express');
const app = require('../app.js');


describe('API Tests', () => {
    it('GET /tasks - Get tasks', async()=> {
        const res = await request(app).get('/tasks');
        expect(res.status).toBe(200);
    });

    it('GET /tasks/:id debería devolver una tarea si existe', async () => {
        const idExistente = 1; // usá un ID real o mockeá datos
        const response = await request(app).get(`/tasks/${idExistente}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', idExistente);
    });
      
    it('GET /tasks/:id debería devolver 404 si la tarea no existe', async () => {
        const idInexistente = 9999;
        const response = await request(app).get(`/tasks/${idInexistente}`);
        expect(response.status).toBe(404);
    });
});