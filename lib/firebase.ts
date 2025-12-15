import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import {
  getAnalytics,
  isSupported,
  logEvent,
  type Analytics,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp | null = null;
let analyticsPromise: Promise<Analytics | null> | null = null;

const hasFirebaseConfig = Object.values(firebaseConfig).every(Boolean);
const isClient = typeof window !== "undefined";

function getFirebaseApp(): FirebaseApp | null {
  if (!isClient || !hasFirebaseConfig) return null;
  if (app) return app;

  app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  return app;
}

export function getFirebaseAnalytics(): Promise<Analytics | null> | null {
  const firebaseApp = getFirebaseApp();
  if (!firebaseApp) return null;

  if (!analyticsPromise) {
    analyticsPromise = isSupported()
      .then((supported) => (supported ? getAnalytics(firebaseApp) : null))
      .catch(() => null);
  }

  return analyticsPromise;
}

export function logFirebasePageView(path: string) {
  const analytics = getFirebaseAnalytics();
  analytics?.then((instance) => {
    if (!instance) return;
    logEvent(instance, "page_view", {
      page_path: path,
    });
  });
}
