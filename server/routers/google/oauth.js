import express from 'express'
import cors from 'cors'
import {config} from 'dotenv';
import {OAuth2Client} from 'google-auth-library';
import jwt from 'jsonwebtoken'

config();

const oauth = express();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

oauth.use(express.json());
oauth.use(cors());

async function verifyGoogleToken(token) {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        return { payload: ticket.getPayload() };
    } catch (error) {
        return { error: 'Invalid user detected. Please try again' };
    }
};

oauth.post("/api/sessions/oauth/google", async (req, res) => {
    try {
      const { credential } = req.body;
      const verificationResponse = await verifyGoogleToken(credential);
  
      if (verificationResponse.error) {
        return res.status(400).json({ message: verificationResponse.error });
      }
  
      const profile = verificationResponse.payload;
      const token = jwt.sign({ email: profile.email }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });
  
      res.status(201).json({
        message: "Login was successful",
        user: {
          firstName: profile.given_name,
          lastName: profile.family_name,
          picture: profile.picture,
          email: profile.email,
          token,
        },
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

oauth.get('/oauth', (req,res) => res.send('Server oauth is online...'));

export default oauth;