const { app, assert } = require('egg-mock/bootstrap')

describe('pass through tests', () => {
  it('test: p, alice, /dataset1/*, GET', async () => {
    app.mockCsrf()
    app.mockCsrf()
    const response = await app.httpRequest()
      .get('/dataset1/resource1')
      .set('Authorization', 'alice')
    assert(response.status === 200)
  })

  it('test: p, alice, /dataset1/resource1, POST', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .post('/dataset1/resource1')
      .set('Authorization', 'alice')
    assert(response.status === 200)
  })

  it('test: bob, /dataset2/folder1/*, POST', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .post('/dataset2/folder1/file')
      .set('Authorization', 'bob')
    assert(response.status === 200)
  })

  it('test: p, bob, /dataset2/resource1, * - GET', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .get('/dataset2/resource1')
      .set('Authorization', 'bob')
    assert(response.status === 200)
  })

  it('test: p, bob, /dataset2/resource1, * - POST', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .post('/dataset2/resource1')
      .set('Authorization', 'bob')
    assert(response.status === 200)
  })

  it('test: p, bob, /dataset2/resource1, * - PUT', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .put('/dataset2/resource1')
      .set('Authorization', 'bob')
    assert(response.status === 200)
  })

  it('test: p, bob, /dataset2/resource1, * - DELETE', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .delete('/dataset2/resource1')
      .set('Authorization', 'bob')
    assert(response.status === 200)
  })

  it('test: p, bob, /dataset2/resource2, GET', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .get('/dataset2/resource2')
      .set('Authorization', 'bob')
    assert(response.status === 200)
  })

  it('test: p & g, dataset1_admin, /dataset1/*, * - GET', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .get('/dataset1/resource')
      .set('Authorization', 'cathy')
    assert(response.status === 200)
  })

  it('test: p & g, dataset1_admin, /dataset1/*, * - POST', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .post('/dataset1/resource')
      .set('Authorization', 'cathy')
    assert(response.status === 200)
  })

  it('test: p & g, dataset1_admin, /dataset1/*, * - PUT', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .put('/dataset1/resource')
      .set('Authorization', 'cathy')
    assert(response.status === 200)
  })

  it('test: p & g, dataset1_admin, /dataset1/*, * - DELETE', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .delete('/dataset1/resource')
      .set('Authorization', 'cathy')
    assert(response.status === 200)
  })
})

describe('success through tests', () => {
  it('test: p, alice, /dataset1/*, GET - 403', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .post('/dataset1/users')
      .set('Authorization', 'alice')
    assert(response.status === 403)
  })

  it('test: p, alice, /dataset1/resource1, POST - 403', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .post('/dataset1/resource')
      .set('Authorization', 'alice')
    assert(response.status === 403)
  })

  it('test: bob, /dataset2/folder1/*, POST', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .put('/dataset2/folder1/file')
      .set('Authorization', 'bob')
    assert(response.status === 403)
  })

  it('test: p, bob, /dataset2/resource1, * - GET', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .get('/dataset2/resource')
      .set('Authorization', 'bob')
    assert(response.status === 403)
  })

  it('test: p, bob, /dataset2/resource1, * - POST', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .post('/dataset2/resource')
      .set('Authorization', 'bob')
    assert(response.status === 403)
  })

  it('test: p, bob, /dataset2/resource1, * - PUT', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .put('/dataset2/resource')
      .set('Authorization', 'bob')
    assert(response.status === 403)
  })

  it('test: p, bob, /dataset2/resource1, * - DELETE', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .delete('/dataset2/resource')
      .set('Authorization', 'bob')
    assert(response.status === 403)
  })

  it('test: p, bob, /dataset2/resource2, GET', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .post('/dataset2/resource2')
      .set('Authorization', 'bob')
    assert(response.status === 403)
  })

  it('test: p & g, dataset1_admin, /dataset1/*, * - GET', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .get('/dataset1/resource')
      .set('Authorization', 'chalin')
    assert(response.status === 403)
  })

  it('test: p & g, dataset1_admin, /dataset1/*, * - POST', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .post('/dataset1/resource')
      .set('Authorization', 'chalin')
    assert(response.status === 403)
  })

  it('test: p & g, dataset1_admin, /dataset1/*, * - PUT', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .put('/dataset1/resource')
      .set('Authorization', 'chalin')
    assert(response.status === 403)
  })

  it('test: p & g, dataset1_admin, /dataset1/*, * - DELETE', async () => {
    app.mockCsrf()
    const response = await app.httpRequest()
      .delete('/dataset1/resource')
      .set('Authorization', 'chalin')
    assert(response.status === 403)
  })
})
