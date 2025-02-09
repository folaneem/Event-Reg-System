// Import required packages
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './model/User.js';
import bcrypt from 'bcryptjs';

// Create an instance of Express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

//CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/eventRegistration')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a basic route
app.get('/', (req, res) => {
    console.log('Route accessed: /');
    res.send('Welcome to the Event Registration API!');
});

// Signup route
app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password } = req.body;
    console.log('Signup data:', req.body); 

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email.' });
        }

        console.log('Plaintext password:', password); 

        const newUser = new User({ firstName, lastName, email, phoneNumber, password });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error });
    }
});


// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', req.body); 

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('Hashed password from DB:', user.password);
        console.log('Password entered during login:', password);

        // Compare entered password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match result:', isMatch); // Log result

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', user: { email: user.email, firstName: user.firstName } });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Error during login', error });
    }
});

// Test function for password hashing and matching
// const testPasswordHashing = async () => {
//     const samplePassword = 'testPassword123';
//     console.log('Sample Password:', samplePassword);

//     // Hash the sample password
//     const hashedPassword = await bcrypt.hash(samplePassword, 10);
//     console.log('Hashed Password:', hashedPassword);

//     // Compare the original password with the hashed password
//     const isMatch = await bcrypt.compare(samplePassword, hashedPassword);
//     console.log('Password match result:', isMatch);
// };

// // Call the test function
// testPasswordHashing();

// Set the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});