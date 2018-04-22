const express = require('express');
const path = require('path');

const router = express.Router();

const v = `../modules/${path.basename(__filename, '.js')}`;

router.use('/log', require(`${v}/log/logRoute`));
router.use('/device', require(`${v}/device/deviceRoute`))
router.use('/apps',require(`${v}/apps/appsRoute`))

router.all('*',(req,res)=> {
    return res.status(404).send();    
});

module.exports = router;