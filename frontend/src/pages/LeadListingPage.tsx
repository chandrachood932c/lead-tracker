import {useState, useEffect} from 'react';
import {getLeads, updateLeadStatus} from '../services/leadService';
import type {Lead} from '../types/lead';
import LeadForm from '../components/LeadForm';
import Sidebar from '../components/Sidebar';

const statusOptions = [
    { value: 'new lead', label: 'New Lead' }, 
    { value: 'contacted', label: 'Contacted' }, 
    { value: 'qualified', label: 'Qualified' }, 
    { value: 'not interested', label: 'Not Interested' }, 
    { value: 'closed won', label: 'Closed Won' }, 
    { value: 'rejected', label: 'Rejected' }
];

const LeadListingPage = () => {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchLeads();
    },[]);

    const fetchLeads = async (search?: string) => {
        try {
            setLoading(true);
            const leadsData = await getLeads(search);
            setLeads(leadsData);
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch leads');
            
        } finally {
            setLoading(false);
        }
    }

    const handleStatusChange = async (id: string, status: Lead['status']) => {
        try {
            setLoading(true);
            await updateLeadStatus(id, status);
            // await fetchLeads();
            setLeads(prevLeads => prevLeads.map(lead => lead._id === id ? {...lead, status} : lead));
        } catch (error) {
            setError('Failed to update lead status');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="app-layout">
            <Sidebar />

            <main className="main-content">
            <header className="topbar">
                <div className="topbar-title">
                    <h1>Lead CRM</h1>
                </div>

                <div className="user-area">
                    <div className="avatar">TU</div>
                    <span>Test User</span>
                </div>
            </header>

            <div className="page-content">
                <div className="page-header">
                <div>
                    {/* <h1>Lead Tracker</h1> */}
                    <p>Manage your leads and track their progress.</p>
                </div>
                </div>

                <LeadForm
                    onLeadCreated={() => fetchLeads(search)}
                />

                <section className="card">
                <div className="leads-header">
                    <div>
                    <h2>Leads</h2>
                    <p>View and manage all your leads.</p>
                    </div>

                    <div className="table-search">
                    <span>⌕</span>

                    <input
                        type="text"
                        placeholder="Search leads..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button className={search ? "search-button" : "search-button disabled"} onClick={() => search && fetchLeads(search)} disabled={!search}>
                        Search
                    </button>
                    <button className="clear-button" onClick={() => {
                        setSearch('');
                        setError(null);
                        fetchLeads('');
                    }}>
                        Clear
                    </button>
                    </div>
                </div>

                {loading && (
                    <div className="state-message">
                    Loading leads...
                    </div>
                )}

                {error && !loading && (
                    <div className="state-message error">
                    {error}
                    </div>
                )}

                {!loading && !error && leads.length === 0 && (
                    <div className="empty-state">
                    <div className="empty-icon">+</div>
                    <h3>No leads found</h3>
                    <p>
                        Create your first lead or try a different search.
                    </p>
                    </div>
                )}

                {!loading && !error && leads.length > 0 && (
                    <div className="table-wrapper">
                    <table className="lead-table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Created</th>
                        </tr>
                        </thead>

                        <tbody>
                        {leads.map((lead) => (
                            <tr key={lead._id}>
                            <td>
                                <div className="lead-name">
                                <div className="lead-avatar">
                                    {lead.name.charAt(0).toUpperCase()}
                                </div>

                                <span>{lead.name}</span>
                                </div>
                            </td>

                            <td>{lead.email}</td>

                            <td>{lead.phone || "—"}</td>

                            <td>
                                <select
                                className={`status-select status-${lead.status.toLowerCase()}`}
                                value={lead.status}
                                onChange={(event) =>
                                    handleStatusChange(
                                    lead._id,
                                    event.target.value as Lead["status"]
                                    )
                                }
                                >
                                {statusOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                    {option.label}
                                    </option>
                                ))}
                                </select>
                            </td>

                            <td>
                                {new Date(
                                lead.createdAt
                                ).toLocaleDateString()}
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                )}
                </section>
            </div>
            </main>
        </div>
        );
    }

export default LeadListingPage
