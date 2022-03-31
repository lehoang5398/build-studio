import { useDispatch, useSelector } from 'react-redux';
import { categoryProduct, unSelectProduct } from './actions';
import PropTypes from 'prop-types';
import { MdDone } from 'react-icons/md';

function Categories({ categories, cost }) {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.category.categoryId);

  const handleCilckCategory = (data) => {
    const action = categoryProduct(data.id);
    const idx = categoryId.findIndex((item) => item === data.id);

    if (idx < 0) {
      dispatch(action);
    } else {
      dispatch(unSelectProduct(data.id));
    }
  };

  return (
    <section className="left-sidebar">
      <ul className="category-products">
        <li className="category">
          <h4 className="title-category">Filter by category</h4>
          <ul className="category-list">
            {categories.map((item, index) => (
              <li
                key={index}
                className="category-item"
                onClick={() => handleCilckCategory(item)}
              >
                <span>{item.categoryitem}</span>
                <button className="btn-checkbox">
                  {categoryId.find((x) => x === item.id) ? (
                    <div className="checkbox-category">
                      <MdDone />
                    </div>
                  ) : (
                    ''
                  )}
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li className="category">
          <h4 className="title-category">Filter by cost</h4>
          {cost.map((item, index) => (
            <ul key={index} className="category-list">
              <li className="category-item">
                <span>{item.price}</span>
                <input
                  type="checkbox"
                  id="filter"
                  name="vehicle1"
                  defaultValue="Bike"
                />
              </li>
            </ul>
          ))}
        </li>
      </ul>
    </section>
  );
}

Categories.propTypes = {
  categories: PropTypes.array,
  cost: PropTypes.array,
};

export default Categories;
