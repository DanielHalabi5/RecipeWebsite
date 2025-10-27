import axios from 'axios'
import type { apiAuthType } from './types';



const API_URL = import.meta.env.VITE_API_URL;

function authHeader(token: string | null) {
  return { Authorization: `Bearer ${token}` };
}

