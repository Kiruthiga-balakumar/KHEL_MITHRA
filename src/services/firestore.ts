import { db } from './firebase';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';

export type UserRole = 'athlete' | 'coach' | 'official';

export type UserProfile = {
  uid: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  aadhaar?: string;
  aadhaarVerified: boolean;
  createdAt?: number;
};

export async function saveUserProfile(profile: UserProfile): Promise<void> {
  const ref = doc(db, 'users', profile.uid);
  await setDoc(ref, profile, { merge: true });
}

export async function getUserProfileByUid(uid: string): Promise<UserProfile | null> {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as UserProfile) : null;
}

export type EventItem = {
  id: string;
  title: string;
  date: string; // ISO
  location: string;
  createdBy?: string; // official uid
};

export async function listEvents(): Promise<EventItem[]> {
  const q = query(collection(db, 'events'));
  const snaps = await getDocs(q);
  return snaps.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<EventItem, 'id'>) }));
}

export async function createOrUpdateEvent(event: EventItem): Promise<void> {
  const ref = doc(db, 'events', event.id);
  await setDoc(ref, event, { merge: true });
}

export type Booking = {
  id: string;
  eventId: string;
  userId: string;
  createdAt: number;
};

export async function createBooking(booking: Booking): Promise<void> {
  const ref = doc(db, 'bookings', booking.id);
  await setDoc(ref, booking, { merge: true });
}


