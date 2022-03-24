
import { useDispatch } from 'react-redux';
import { categoryProduct } from './actions';
import PropTypes from 'prop-types';

Category.propTypes = {
  category:PropTypes.array,
  cost:PropTypes.array,
};

function Category({category,cost}) {
  const dispatch = useDispatch();
  const handleCilckCategory = (data) => {
    // console.log(data);
    const action = categoryProduct(data.id)
    dispatch(action);
  }

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
