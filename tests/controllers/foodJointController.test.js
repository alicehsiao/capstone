/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../app');
import mongoose from 'mongoose';
const FoodJoint = mongoose.model('FoodJoint');

describe('Food Joint', () => {
    // test('', () => {
    //     return request(app).get('/api/v1/foodjoints').expect(200);
        
    // });

    it('respond with json', function (done) {
        request(app)
            .get('//api/v1/foodjoints')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json')
            .expect(200, done);
    });
})