import { TitleProduct, Product, GAG, ASOS } from '../../../assets/image/index';

const products = [
  {
    id: 1,
    logo: TitleProduct,
    name: '3D LOOK',
    image: Product,
    features: [
      'activity log, Admin Console , Account Creation' & '+ 34 other features',
    ],
    price: '$ 27',
    euro: ' € 23k',
    canadian: ' C$ 28k',
    aed: ' د.إ 100k',
    categoryId: 1,
  },
  {
    id: 2,
    logo: GAG,
    name: '9GAG',
    image: Product,
    features: [
      'activity log, Admin Console , Account Creation' & '+ 23 other features',
    ],
    price: '$ 350',
    euro: '€ 350k',
    canadian: 'C$ 350k',
    aed: 'د.إ 100k',
    categoryId: 2,
  },
  {
    id: 3,
    logo: ASOS,
    name: 'ASOS',
    image: Product,
    features: [
      'activity log, Admin Console , Account Creation' & '+ 48 other features',
    ],
    price: '$ 420',
    euro: '€ 420k',
    canadian: ' C$ 420k',
    aed: ' د.إ 100k',
    categoryId: 3,
  },
];
export default products;
