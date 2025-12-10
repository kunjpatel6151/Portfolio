import Admin from '../models/Admin.js';
import bcryptjs from 'bcryptjs';

export const createDefaultAdmin = async () => {
  try {
    const exists = await Admin.findOne({ username: 'admin' });
    if (exists) {
      console.log('✓ Admin user already exists');
      return;
    }

    const passwordHash = await bcryptjs.hash('admin', 10);

    await Admin.create({
      username: 'admin',
      passwordHash,
    });

    console.log('✓ Default admin created (admin/admin)');
  } catch (err) {
    console.error('✗ Error creating default admin:', err.message);
    throw err;
  }
};
