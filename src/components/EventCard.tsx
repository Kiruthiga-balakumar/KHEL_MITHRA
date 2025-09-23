import React from 'react';
import { Text } from 'react-native';
import { Card, KMButton } from './UI';

type Props = {
  id: string;
  title: string;
  date: string;
  location: string;
  onBook?: (id: string) => void;
};

const EventCard: React.FC<Props> = ({ id, title, date, location, onBook }) => {
  return (
    <Card className="mb-4">
      <Text className="text-white text-lg font-semibold">{title}</Text>
      <Text className="text-muted mt-1">{new Date(date).toDateString()} • {location}</Text>
      {onBook ? <KMButton title="Book" variant="secondary" className="mt-4" onPress={() => onBook(id)} /> : null}
    </Card>
  );
};

export default EventCard;


