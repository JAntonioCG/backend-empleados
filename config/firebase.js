import admin from 'firebase-admin'
import serviceAccount from './crud-jacg-firebase-adminsdk-h3yts-98bff12c65.json' with { type: 'json' }

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()
export { db }