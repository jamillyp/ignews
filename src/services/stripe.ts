import Stripe from 'stripe';
import { version } from '../../package.json';

export const stripe = new Stripe(
    process.env.YOUR_SECRET_KEY,
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name: 'ignews',
            version
        },

    }
)