import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo purposes
// In production, you'd use a proper database
let passwords: PasswordEntry[] = [];
let nextId = 1;

interface PasswordEntry {
  id: string;
  password: string;
  email: string;
  site: string;
  timestamp: string;
}

// GET - Retrieve all passwords
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: passwords,
      count: passwords.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch passwords' },
      { status: 500 }
    );
  }
}

// POST - Save a new password
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password, email, site } = body;

    if (!password || !site) {
      return NextResponse.json(
        { success: false, error: 'Password and site are required' },
        { status: 400 }
      );
    }

    const newEntry: PasswordEntry = {
      id: nextId.toString(),
      password,
      email: email || '',
      site: site.toLowerCase(),
      timestamp: new Date().toISOString()
    };

    passwords.push(newEntry);
    nextId++;

    // Optional: Save to file for persistence
    await saveToFile();

    return NextResponse.json({
      success: true,
      data: newEntry
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to save password' },
      { status: 500 }
    );
  }
}

// DELETE - Clear all passwords
export async function DELETE() {
  try {
    passwords = [];
    nextId = 1;

    // Optional: Clear file as well
    await clearFile();

    return NextResponse.json({
      success: true,
      message: 'All passwords cleared'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to clear passwords' },
      { status: 500 }
    );
  }
}

// Helper functions for file persistence (optional)
async function saveToFile() {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');

    const dataPath = path.join(process.cwd(), 'data');
    const filePath = path.join(dataPath, 'passwords.json');

    // Ensure data directory exists
    await fs.mkdir(dataPath, { recursive: true });

    await fs.writeFile(filePath, JSON.stringify({
      passwords,
      nextId,
      lastUpdated: new Date().toISOString()
    }, null, 2));
  } catch (error) {
    console.error('Failed to save to file:', error);
  }
}

async function clearFile() {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');

    const dataPath = path.join(process.cwd(), 'data');
    const filePath = path.join(dataPath, 'passwords.json');

    await fs.unlink(filePath).catch(() => {
      // File might not exist, ignore error
    });
  } catch (error) {
    console.error('Failed to clear file:', error);
  }
}

// Load data from file on module load (optional persistence)
async function loadFromFile() {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');

    const dataPath = path.join(process.cwd(), 'data');
    const filePath = path.join(dataPath, 'passwords.json');

    const data = await fs.readFile(filePath, 'utf-8');
    const parsed = JSON.parse(data);

    passwords = parsed.passwords || [];
    nextId = parsed.nextId || 1;
  } catch (error) {
    // File doesn't exist or is invalid, start fresh
    passwords = [];
    nextId = 1;
  }
}

// Initialize data on module load
loadFromFile().catch(console.error);
