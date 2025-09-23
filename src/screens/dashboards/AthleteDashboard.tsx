import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from '../../components/UI';
import Header from '../../components/Header';
import EventCard from '../../components/EventCard';

const AthleteDashboard: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-primary px-6 py-10">
      <Header title="Welcome, Athlete" subtitle="Here’s your overview" />
      <Card className="mb-4">
        <Text className="text-white font-semibold mb-2">Upcoming Event</Text>
        <Text className="text-muted mb-4">State Athletics Championship - Oct 12</Text>
      </Card>
      <Card className="mb-4">
        <Text className="text-white font-semibold mb-2">Training Summary</Text>
        <Text className="text-muted">This week: 5 sessions, 12 hrs</Text>
      </Card>
      <Header title="Recommended Events" />
      <EventCard id="rec-1" title="District Trials" date="2025-11-01" location="City Stadium" />
    </ScrollView>
  );
};

export default AthleteDashboard;


