import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Card, KMButton } from '../../components/UI';
import { createBooking, EventItem, listEvents } from '../../services/firestore';
import { useAuth } from '../../context/AuthContext';

const EventsListScreen: React.FC = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    listEvents()
      .then((e) => setEvents(e))
      .catch(() =>
        setEvents([
          { id: 'sample-1', title: 'State Athletics Championship', date: '2025-10-12', location: 'Hyderabad' },
          { id: 'sample-2', title: 'District Football Trials', date: '2025-11-05', location: 'Secunderabad' },
        ])
      );
  }, []);

  const handleBook = async (eventId: string) => {
    if (!user) return;
    await createBooking({ id: `${eventId}-${user.uid}`, eventId, userId: user.uid, createdAt: Date.now() });
    alert('Booking confirmed');
  };

  return (
    <View className="flex-1 bg-primary px-6 py-10">
      <Text className="text-white text-2xl font-bold mb-4">Events</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card className="mb-4">
            <Text className="text-white text-lg font-semibold">{item.title}</Text>
            <Text className="text-muted mt-1">{new Date(item.date).toDateString()} • {item.location}</Text>
            <KMButton title="Book" variant="secondary" className="mt-4" onPress={() => handleBook(item.id)} />
          </Card>
        )}
      />
    </View>
  );
};

export default EventsListScreen;


