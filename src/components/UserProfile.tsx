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
  protoUrl: 'https://previews.123rf.com/images/cundrawan703/cundrawan7031207/cundrawan703120700010/14519711-%D0%BB%D1%8F%D0%B3%D1%83%D1%88%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D1%85-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD.jpg', // необязательное свойство
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
    address: null//'Большая полянка 44', // необязательное свойство
  },
  interests: ['программирование', 'путешествия', 'фотография'], // необязательное свойство
};

export default userProfile;