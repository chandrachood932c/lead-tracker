import axios from "axios";
import type {
    CreateLeadRequest,
    Lead
} from "../types/lead";

const VITE_API_URL = import.meta.env.VITE_APP_URL;
const API_URL = `${VITE_API_URL}/leads`;

interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data: T;
}

export const getLeads = async (search?: string) : Promise<Lead[]> => {
    const response = await axios.get<ApiResponse<Lead[]>>(API_URL, { params: search ? { search } : {} });

    return response.data.data;
}

export const getLeadByID = async (id: string): Promise<Lead> => {
    const response = await axios.get<ApiResponse<Lead>>(`${API_URL}/${id}`);

    return response.data.data;
}

export const createLead = async (leadData: CreateLeadRequest): Promise<Lead> => {
    const response = await axios.post<ApiResponse<Lead>>(API_URL, leadData);

    return response.data.data;
}

export const updateLeadStatus = async (id: string, status: string): Promise<Lead> => {
    const response = await axios.patch<ApiResponse<Lead>>(`${API_URL}/${id}/status`, { status });

    return response.data.data;
}