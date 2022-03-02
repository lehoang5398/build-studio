import React from 'react';

function Category(props) {
  return (
    <section className="left-sidebar">
      <ul className="category-products">
        <li className="category">
          <h4 className="title-category">Filter by category</h4>
          <ul className="category-list">
            <li className="category-item"><span>Business &amp; finance</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Education</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Entertainment &amp; music</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Food &amp; drink</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Health &amp; fitness</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Lifestyle</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Medical</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Navigation</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>News</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Photo &amp; video</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Productivity</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Shopping</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Social</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Travel</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="category-item"><span>Utilities</span>
              <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
            </li>
          </ul>
        </li>
        <li className="cost">
          <h4 className="title-cost">Filter by cost</h4>
          <ul className="cost-list">
            <li className="cost-item"><span>Less than $7,000</span>
              <input type="checkbox" id="filter" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="cost-item"><span>$7,000 to $17,000</span>
              <input type="checkbox" id="filter" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="cost-item"><span>$17,000 to $27,000</span>
              <input type="checkbox" id="filter" name="vehicle1" defaultValue="Bike" />
            </li>
            <li className="cost-item"><span>$27,000+</span>
              <input type="checkbox" id="filter" name="vehicle1" defaultValue="Bike" />
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Category;
