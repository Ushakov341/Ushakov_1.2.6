export type userProfile = {
  name: string;
  description: string;
  isLookingForJob: boolean;
  contactInfo: string;
  email: string;
  phone?: string;
  country: string;
  city: string;
  address?: string;
  interests?: string[];
  protoUrl?: string;
}
export const userProfile = {
  userName: 'Дэн', // обязательное свойство
  protoUrl: 'https://avatars.mds.yandex.net/i?id=a85996282562ed0df6be4022d4b3bbf1574436b2-3028142-images-thumbs&n=13', // необязательное свойство
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

export default userProfile;