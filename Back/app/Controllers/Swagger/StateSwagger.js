/**
 * @swagger
 * /api/v1/states:
 *   get:
 *     tags:
 *       - State
 *     summary: List States
 *     responses:
 *       200:
 *         example:
 *           [{
 *              "name": "Pará",
 *              "abbreviation": "PA"
 *           }]
 *   post:
 *     tags:
 *       - State
 *     summary: Create State
 *     parameters:
 *       - name: parameters
 *         in: body
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewState'
 *     responses:
 *       200:
 *         example:
 *          {
 *            "status": 200,
 *            "data": {
 *            "name": "Pará",
 *            "abbreviation": "PA",
 *            "created_at": "2020-03-25T04:39:55.284Z",
 *            "updated_at": "2020-03-25T04:39:55.284Z",
 *            "_id": "5e7ae09bc1d19f4cb6d5669c"
 *          },
 *          "message": "Estado Pará cadastrado(a) com sucesso"
 *         }
 * /api/v1/states/{id}:
 *   get:
 *     tags:
 *       - State
 *     summary: Get State by id
 *     parameters:
 *       - name: id
 *         description: Id of State
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         example:
 *          {
 *          "data": [{
 *            "_id": "5e7acd3b8ab18f3698f1d4f5",
 *            "name": "Pará",
 *            "abbreviation": "PA",
 *            "created_at": "2020-03-25T03:17:15.221Z",
 *            "updated_at": "2020-03-25T03:17:15.221Z",
 *           }]
 *          }
 *   put:
 *     tags:
 *       - State
 *     summary: Update State
 *     parameters:
 *       - name: id
 *         description: Id of State
 *         in: path
 *         required: true
 *         type: string
 *       - name: Parameters
 *         description: parameters
 *         in: body
 *         schema:
 *           $ref: '#/definitions/NewState'
 *     responses:
 *       200:
 *         example:
 *          {
 *           "data": {
 *             "_id": "5e7acd3b8ab18f3698f1d4f5",
 *             "name": "Bahia",
 *             "abbreviation": "BA",
 *             "created_at": "2020-03-25T03:17:15.221Z",
 *             "updated_at": "2020-03-25T03:31:14.698Z"
 *           },
 *           "message": "Estado Bahia atualizado(a) com sucesso"
 *          }
 *   delete:
 *     tags:
 *       - State
 *     summary: Delete State by id
 *     parameters:
 *       - name: id
 *         description: Id of State
 *         in: path 
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *          example:
 *           {
 *            "status": 200,
 *            "message": "Estado Pará excluído(a) com sucesso"
 *           }
 */
