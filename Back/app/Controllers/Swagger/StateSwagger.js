
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
*           message: Hello Guess
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
*           message: Hello Guess
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
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*   put:
*     tags:
*       - State
*     summary: Update State
*     parameters:
*       - name: id
*         description: Id of State
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewState'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     tags:
*       - State
*     summary: Delete State by id
*     parameters:
*       - name: id
*         description: Id of State
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
