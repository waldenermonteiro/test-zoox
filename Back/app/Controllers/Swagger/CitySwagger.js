
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
*           message: Hello Guess
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
*           message: Hello Guess
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
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*   put:
*     tags:
*       - City
*     summary: Update City
*     parameters:
*       - name: id
*         description: Id of City
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewCity'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     tags:
*       - City
*     summary: Delete City by id
*     parameters:
*       - name: id
*         description: Id of City
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
