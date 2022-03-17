
import { useDispatch } from 'react-redux';
import { CategoryProduct } from '../../Redux/Actions/Index';

function Category(props) {
  // const [checkCategoryId, setcheckCategoryId] = useState(false);
  const dispatch = useDispatch();
  const handleCilckCategory = (data) => {
    const action = CategoryProduct(data.id)
    dispatch(action);
  
  }
  const category = [
    { categoryitem: 'Business & finance' ,id:1,},
    { categoryitem: 'Education' ,id:2},
    { categoryitem: 'Entertainment & music',id:3 },
    { categoryitem: 'Food & drink' ,id:4 },
    { categoryitem: 'Health & fitness', id:5},
    { categoryitem: 'Lifestyle' },
    { categoryitem: 'Medical' },
    { categoryitem: 'Navigation' },
    { categoryitem: 'News' },
    { categoryitem: 'Photo & video' },
    { categoryitem: 'Productivity' },
    { categoryitem: 'Shopping' },
    { categoryitem: 'Social' },
    { categoryitem: 'Travel' },
    { categoryitem: 'Utilities' },
  ]
  const cost = [
    {
      price: 'Less than $7,000',
    },
    {
      price: '$7,000 to $17,000'
    },
    {
      price: '$17,000'
    },
    {
      price: '$7,000 to $17,000'
    }
  ]

  return (
    <section className="left-sidebar">
      <ul className="category-products">
        <li className="category">
          <h4 className="title-category">Filter by category</h4>
          <ul className="category-list">
            {category.map((item,index) => (
              <li key ={index} className="category-item" onClick={()=> handleCilckCategory(item)}><span>{item.categoryitem}</span>
                <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
              </li>
            ))}
          </ul>
        </li>
        <li className="category">
          <h4 className="title-category">Filter by cost</h4>
          {cost.map((item ,index) => (
            <ul key = {index} className="category-list">
              <li className="category-item"><span>{item.price}</span>
                <input type="checkbox" id="filter" name="vehicle1" defaultValue="Bike" />
              </li>
            </ul>
          ))
          }

        </li>
      </ul>
    </section>
  );
}

export default Category;
