import axios from "axios";
export const falacias = axios.create({ baseURL: './falacias.json' });