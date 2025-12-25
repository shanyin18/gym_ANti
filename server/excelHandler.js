import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';

// Path to the Excel file on Desktop
const DESKTOP_PATH = 'c:/Users/86198/Desktop';
const DB_PATH = path.join(DESKTOP_PATH, 'fitness_data.xlsx');

const HEADERS = ['Date', 'TimeOfDay', 'Type', 'Content', 'Calories', 'Protein', 'Notes'];

export const initializeExcel = () => {
    if (!fs.existsSync(DB_PATH)) {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet([HEADERS]);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Logs');
        XLSX.writeFile(workbook, DB_PATH);
        console.log('Created new Excel file at:', DB_PATH);
    }
};

export const appendLog = (logData) => {
    initializeExcel();

    const workbook = XLSX.readFile(DB_PATH);
    const worksheet = workbook.Sheets['Logs'];

    const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1');
    const nextRow = range.e.r + 2; // 1-based index + 1 for next row? actually decode_range returns 0-indexed.
    // Using sheet_add_aoa with origin -1 to append is safer

    const newRow = [
        logData.date,
        logData.timeOfDay,
        logData.type,
        logData.content,
        logData.calories || 0,
        logData.protein || 0,
        logData.notes || ''
    ];

    XLSX.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });
    XLSX.writeFile(workbook, DB_PATH);
    console.log('Appended log to Excel');
};

export const getTodayLogs = () => {
    initializeExcel();
    const workbook = XLSX.readFile(DB_PATH);
    const worksheet = workbook.Sheets['Logs'];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: HEADERS, range: 1 }); // Skip header row

    // Simple filter for "today". Assuming Date format YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    return data.filter(row => row.Date === today);
};

export const getHistory = (limit = 20) => {
    initializeExcel();
    const workbook = XLSX.readFile(DB_PATH);
    const worksheet = workbook.Sheets['Logs'];
    const data = XLSX.utils.sheet_to_json(worksheet);
    // Return last N items
    return data.slice(-limit);
};
