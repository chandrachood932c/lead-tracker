const express = require('express');
const router = express.Router();

const {
    createLead,
    getLeads,
    updateLeadStatus,
    getLeadById, 
} = require('../controllers/leadController');

const { validateCreateLead, validateLeadStatus:validateLeadStatusUpdate, validateLeadId, validateLeadSearch } = require('../middleware/leadValidation');

router.get('/', validateLeadSearch, getLeads);
router.post('/', validateCreateLead, createLead);
router.get('/:id', validateLeadId, getLeadById);
router.patch('/:id/status', validateLeadId,validateLeadStatusUpdate, updateLeadStatus);

module.exports = router;
