/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
import mongoose from 'mongoose';
const FoodJoint = mongoose.model('FoodJoint');

describe('Food Joint', () => {
    // it('gets all food joints', async (done) => {
    //     await request(app)
    //         .get('/api/v1/foodjoints')
    //         .set('Accept', 'application/json')
    //         .expect('Content-Type', /json/)
    //         .expect(200);
    //     done();
    // });

})