
import { useDispatch } from 'react-redux';
import { CategoryProduct } from './Actions';
import PropTypes from 'prop-types';

Category.propTypes = {
  category:PropTypes.array,
  cost:PropTypes.array,
};

function Category(props) {
  const {category,cost} = props;
  const dispatch = useDispatch();
  const handleCilckCategory = (data) => {
    const action = CategoryProduct(data.id)
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
