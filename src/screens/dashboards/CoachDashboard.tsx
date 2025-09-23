import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from '../../components/UI';
import Header from '../../components/Header';

const CoachDashboard: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-primary px-6 py-10">
      <Header title="Welcome, Coach" subtitle="Today’s schedule" />
      <Card className="mb-4">
        <Text className="text-white font-semibold mb-2">Today</Text>
        <Text className="text-muted">3 sessions scheduled, 12 athletes</Text>
      </Card>
      <Card>
        <Text className="text-white font-semibold mb-2">Notifications</Text>
        <Text className="text-muted">No new alerts</Text>
      </Card>
    </ScrollView>
  );
};

export default CoachDashboard;


