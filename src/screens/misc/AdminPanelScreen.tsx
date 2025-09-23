import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, KMButton, KMInput } from '../../components/UI';
import { createOrUpdateEvent, EventItem, listEvents } from '../../services/firestore';

const AdminPanelScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [events, setEvents] = useState<EventItem[]>([]);

  const refresh = async () => setEvents(await listEvents().catch(() => []));

  useEffect(() => {
    refresh();
  }, []);

  const upsert = async () => {
    if (!title || !date || !location) return;
    const id = `${title.toLowerCase().replace(/\s+/g, '-')}-${date}`;
    await createOrUpdateEvent({ id, title, date, location });
    setTitle('');
    setDate('');
    setLocation('');
    refresh();
  };

  return (
    <View className="flex-1 bg-primary px-6 py-10">
      <Text className="text-white text-2xl font-bold mb-4">Admin Panel</Text>
      <Card className="mb-6">
        <Text className="text-white font-semibold mb-2">Create / Update Event</Text>
        <KMInput label="Title" value={title} onChangeText={setTitle} placeholder="Event title" />
        <KMInput label="Date (YYYY-MM-DD)" value={date} onChangeText={setDate} placeholder="2025-10-12" />
        <KMInput label="Location" value={location} onChangeText={setLocation} placeholder="City" />
        <KMButton title="Save Event" onPress={upsert} />
      </Card>
      <Text className="text-white text-xl font-semibold mb-2">All Events</Text>
      <FlatList
        data={events}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <Card className="mb-3">
            <Text className="text-white">{item.title}</Text>
            <Text className="text-muted">{item.date} • {item.location}</Text>
          </Card>
        )}
        ListEmptyComponent={<Text className="text-muted">No events yet.</Text>}
      />
    </View>
  );
};

export default AdminPanelScreen;


