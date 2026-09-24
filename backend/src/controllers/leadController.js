const Lead = require('../models/Lead');

const createLead =  async (req, res) =>{
    try {
        const {name, email, phone, status} = req.body;

        const lead = await Lead.create({
            name,
            email,
            phone,
            status
        });

        res.status(201).json({
            success: true,
            message: 'Lead created successfully',
            data: lead
        });
    } catch (error) {
        console.error('Error creating lead:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to create lead',
            error: error.message
        });
    }
}

const getLeads = async (req, res) => {
    try{
        let query = {};

        const leads = await Lead.find(query).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: 'Leads fetched successfully',
            data: leads
        });
    } catch (error) {
        console.error('Error fetching leads:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch leads',
            error: error.message
        });
    }
}
    
const getLeadById = async (req, res) => {
    try {
        const { id } = req.params;

        const lead = await Lead.findById(id);

        if (!lead) {
            return res.status(404).json({
                success: false,
                message: 'Lead not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Lead fetched successfully',
            data: lead
        });
    } catch (error) {
        console.error('Error fetching lead by ID:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch lead by ID',
            error: error.message
        });
    }
}

const updateLeadStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const lead = await Lead.findByIdAndUpdate(id, { status }, { new: true, runValidators: true  });

        if (!lead) {
            return res.status(404).json({
                success: false,
                message: 'Lead not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Lead status updated successfully',
            data: lead
        });
    } catch (error) {
        console.error('Error updating lead status:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to update lead status',
            error: error.message
        });
    }
}

module.exports = {
    createLead,
    getLeads,
    updateLeadStatus,
    getLeadById
}   