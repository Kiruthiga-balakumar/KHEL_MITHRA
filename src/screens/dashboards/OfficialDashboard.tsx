import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from '../../components/UI';
import Header from '../../components/Header';

const OfficialDashboard: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-primary px-6 py-10">
      <Header title="Welcome, Official" subtitle="Administration overview" />
      <Card className="mb-4">
        <Text className="text-white font-semibold mb-2">Verification Queue</Text>
        <Text className="text-muted">5 athletes awaiting approval</Text>
      </Card>
      <Card>
        <Text className="text-white font-semibold mb-2">Upcoming Events</Text>
        <Text className="text-muted">2 events scheduled this month</Text>
      </Card>
    </ScrollView>
  );
};

export default OfficialDashboard;


