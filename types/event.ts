export interface IEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  thumbnail: string;
  image: string;
  description: string;
  organizer: string;
  interested?: boolean;
}
