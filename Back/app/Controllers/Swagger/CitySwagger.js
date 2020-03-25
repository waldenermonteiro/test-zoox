/**
 * @swagger
 * /api/v1/cities:
 *   get:
 *     tags:
 *       - City
 *     summary: List Cities
 *     responses:
 *       200:
 *         example:
 *           [{
 *              "name": "Abaetetuba",
 *              "state_id": "1"
 *           }]
 *   post:
 *     tags:
 *       - City
 *     summary: Create City
 *     parameters:
 *       - name: parameters
 *         in: body
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewCity'
 *     responses:
 *       200:
 *         example:
 *          {
 *            "status": 200,
 *            "data": {
 *            "name": "Abaetetuba",
 *            "state_id": "5e7a1793af08ca3e2cde32ce",
 *            "created_at": "2020-03-25T04:39:55.284Z",
 *            "updated_at": "2020-03-25T04:39:55.284Z",
 *            "_id": "5e7ae09bc1d19f4cb6d5669c"
 *          },
 *          "message": "Cidade Abaetetuba cadastrado(a) com sucesso"
 *         }
 * /api/v1/cities/{id}:
 *   get:
 *     tags:
 *       - City
 *     summary: Get City by id
 *     parameters:
 *       - name: id
 *         description: Id of City
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         example:
 *          {
 *          "data": [{
 *            "_id": "5e7acd3b8ab18f3698f1d4f5",
 *            "name": "Abaetetuba",
 *            "state_id": "5e7a1793af08ca3e2cde32ce",
 *            "created_at": "2020-03-25T03:17:15.221Z",
 *            "updated_at": "2020-03-25T03:17:15.221Z",
 *            "state": {
 *               "id": "5e7a1793af08ca3e2cde32ce",
 *               "name": "Pará",
 *               "abbreviation": "PA",
 *               "created_at": "2020-03-24T14:22:11.397Z",
 *               "updated_at": "2020-03-24T14:22:11.399Z"
 *               }
 *           }]
 *          }
 *   put:
 *     tags:
 *       - City
 *     summary: Update City
 *     parameters:
 *       - name: id
 *         description: Id of City
 *         in: path
 *         required: true
 *         type: string
 *       - name: Parameters
 *         description: parameters
 *         in: body
 *         schema:
 *           $ref: '#/definitions/NewCity'
 *     responses:
 *       200:
 *         example:
 *          {
 *           "data": {
 *             "_id": "5e7acd3b8ab18f3698f1d4f5",
 *             "name": "Belém",
 *             "state_id": "5e7a1793af08ca3e2cde32ce",
 *             "created_at": "2020-03-25T03:17:15.221Z",
 *             "updated_at": "2020-03-25T03:31:14.698Z"
 *           },
 *           "message": "Cidade Belém atualizado(a) com sucesso"
 *          }
 *   delete:
 *     tags:
 *       - City
 *     summary: Delete City by id
 *     parameters:
 *       - name: id
 *         description: Id of City
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *          example:
 *           {
 *            "status": 200,
 *            "message": "Cidade Abaetetuba excluído(a) com sucesso"
 *           }
 */
