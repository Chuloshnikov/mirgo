import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!);

if (!getApps().length) {
    admin.initializeApp({
        credential: admin.credential.cart(serviceAccount),
    })
}

const adminDB = admin.firestore()
export { adminDB };