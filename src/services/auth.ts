import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { saveUserProfile, UserRole } from './firestore';

export async function registerWithEmail(params: {
  name: string;
  email: string;
  phone?: string;
  aadhaar?: string;
  password: string;
  role: UserRole;
}) {
  const { name, email, password, role, phone, aadhaar } = params;
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
  await saveUserProfile({
    uid: cred.user.uid,
    name,
    email,
    phone,
    role,
    aadhaar,
    aadhaarVerified: false,
    createdAt: Date.now(),
  });
  return cred.user;
}

export async function loginWithEmail(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}


