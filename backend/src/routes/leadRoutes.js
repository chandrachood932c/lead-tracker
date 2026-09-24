const express = require('express');
const router = express.Router();

const {
    createLead,
    getLeads,
    updateLeadStatus,
    getLeadById, 
} = require('../controllers/leadController');

router.get('/', getLeads);
router.post('/', createLead);
router.get('/:id', getLeadById);
router.patch('/:id/status', updateLeadStatus);

module.exports = router;
