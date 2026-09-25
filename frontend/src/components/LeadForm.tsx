import {useState} from 'react'
import {createLead} from '../services/leadService'
import type {CreateLeadRequest} from '../types/lead'

interface LeadFormProps {
    onLeadCreated: (lead: CreateLeadRequest) => void;
}

// const statusOptions = [
//     { value: 'new lead', label: 'New Lead' }, 
//     { value: 'contacted', label: 'Contacted' }, 
//     { value: 'qualified', label: 'Qualified' }, 
//     { value: 'not interested', label: 'Not Interested' }, 
//     { value: 'closed won', label: 'Closed Won' }, 
//     { value: 'rejected', label: 'Rejected' }
// ];

const LeadForm = ({onLeadCreated}: LeadFormProps) => {
    const [formData, setFormData] = useState<CreateLeadRequest>({
        name: '',
        email: '',
        phone: '',
        status: 'New Lead',
    });
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        setFormData(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);
            const newLead = await createLead(formData);
            onLeadCreated(newLead);
            setFormData({name: '', email: '', phone: '', status: 'New Lead'});
            setIsFormOpen(false);

        } catch (error: any) {
            setError(error.response?.data?.message || 'Failed to create lead');
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <section className="card create-card">
            <div className="section-heading"   onClick={() => setIsFormOpen((prev) => !prev)}>
            <div>
                <div className="section-icon">{isFormOpen ? '-' : '+'}</div>
            </div>

            <div>
                <h2>Add New Lead</h2>
                <p>Enter the details below to create a new lead.</p>
            </div>
            </div>
            
            {isFormOpen && (
                <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="form-group">
                    <label htmlFor="name">
                        Full Name <span>*</span>
                    </label>

                    <input
                        id="name"
                        name="name"
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">
                        Email Address <span>*</span>
                    </label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>

                    <input
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        required
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="status">Status</label>

                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        defaultValue="new lead"
                        disabled={true}
                    >
                        <option value="new lead">New Lead</option>
                       {/* {statusOptions.map((status) => (
                            <option key={status.value} value={status.value}>
                                {status.label}
                            </option>
                        ))} */}
                    </select>
                    </div>  
                
                </div>

                {error && <p className="error">{error}</p>}

                <div className="form-actions">
                    <button
                    className="primary-button"
                    type="submit"
                    disabled={loading}
                    >
                    {loading ? "Creating..." : "Create Lead"}
                    </button>
                </div>
                </form>
            )}   
        </section>
    );
}

export default LeadForm;