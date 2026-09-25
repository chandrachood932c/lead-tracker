const validator = require('validator');
const mongoose = require("mongoose");

const allowedLeadFields = ['name', 'email', 'phone', 'status']

const validateCreateLead = (req, res, next) => {
    
    const body = req.body;

    if(!body || typeof body !== 'object' || Array.isArray(body)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid request body'
        });
    }

    // Check for unexpected fields
    const invalidFields = Object.keys(body).filter(
        (field) => !allowedLeadFields.includes(field)
    );

    if (invalidFields.length > 0) {
        return res.status(400).json({
        success: false,
        message: `Undefined fields: ${invalidFields.join(", ")}`
        });
    }

    // Name
    if (typeof body.name !== "string") {
        return res.status(400).json({
        success: false,
        message: "Name must be a string"
        });
    }

    const name = body.name.trim();

    if (name.length < 2 || name.length > 100) {
        return res.status(400).json({
        success: false,
        message: "Name must be between 2 and 100 characters"
        });
    }

    // Email
    if (typeof body.email !== "string") {
        return res.status(400).json({
        success: false,
        message: "Email must be a string"
        });
    }

    const email = body.email.trim().toLowerCase();

    if (!validator.isEmail(email)) {
        return res.status(400).json({
        success: false,
        message: "Please provide a valid email address"
        });
    }

    if (email.length > 254) {
        return res.status(400).json({
        success: false,
        message: "Email cannot exceed 254 characters"
        });
    }

    // Phone
    let phone;

    if (body.phone !== undefined) {
        if (!validator.isNumeric(body.phone)) {
        return res.status(400).json({
            success: false,
            message: "Enter a valid phone number"
        });
        }

        phone = body.phone.trim();

        if (phone.length > 10) {
        return res.status(400).json({
            success: false,
            message: "Phone cannot exceed 10 characters"
        });
        }
    }

    req.body = {
        name,
        email,
        phone: phone || null,
        company: body.company || null
    };

    next();
};

const validateLeadStatus = (req, res, next) => {
  const allowedFields = ["status"];
  const body = req.body;

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({
      success: false,
      message: "Request body must be an object"
    });
  }

  const invalidFields = Object.keys(body).filter(
    (field) => !allowedFields.includes(field)
  );

  if (invalidFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Missing fields: ${invalidFields.join(", ")}`
    });
  }

  const allowedStatuses = [
    'new lead', 'contacted', 'qualified', 'not interested', 'closed won', 'rejected'
  ];

  if (
    typeof body.status !== "string" ||
    !allowedStatuses.includes(body.status)
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid lead status"
    });
  }

  req.body = {
    status: body.status
  };

  next();
};


const validateLeadId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid lead ID"
    });
  }

  next();
};

const escapeRegex = (value) => {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const validateLeadSearch = (req, res, next) => {
  if (req.query.search === undefined) {
    return next();
  }

  if (typeof req.query.search !== "string") {
    return res.status(400).json({
      success: false,
      message: "Search must be a string"
    });
  }

  const search = req.query.search.trim();

  if (search.length > 100) {
    return res.status(400).json({
      success: false,
      message: "Search cannot exceed 100 characters"
    });
  }

  req.query.search = escapeRegex(search);

  next();
};

module.exports = {
    validateCreateLead,
    validateLeadStatus,
    validateLeadId,
    validateLeadSearch
};