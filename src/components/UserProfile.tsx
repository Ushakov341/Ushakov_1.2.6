export interface UserProfile {
  name: string;
  description: string;
  isLookingForJob: boolean;
  email?: string;
  phone?: string;
  country?: string;
  city?: string;
  address?: string;
  interests?: string[];
  photoUrl?: string;
}
export const userProfile = {
  userName: 'Дэн', // обязательное свойство
  protoUrl: null, // необязательное свойство
  userDescription: 'Любитель React и фронтенд разработки', // обязательное свойство
  openForWork: true, // необязательное свойство
  contactInfo: {
    // обязательное свойство
    email: 'abramov@example.com', // обязательное свойство
    phone: '+1234567890', // необязательное свойство
  },
  location: {
    // необязательное свойство
    city: 'Москва', // обязательное свойство
    country: 'Россия', // обязательное свойство
    address: 'Большая полянка 44', // необязательное свойство
  },
  interests: ['программирование', 'путешествия', 'фотография'], // необязательное свойство
};

export default UserProfile;