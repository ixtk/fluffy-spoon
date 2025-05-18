import { Formik, Form, Field } from 'formik';

const initialValues = {
  gender: [],
  sale: [],
  color: [],
  price: {}, // now expecting an object like { min: 25, max: 50 }
  size: [],
};

const handleSubmit = (values) => {
  console.log('Filters:', values);
};

const priceOptions = [
  { label: 'Under $25', min: 0, max: 25 },
  { label: '$25 - $50', min: 25, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $150', min: 100, max: 150 },
  { label: '$150+', min: 150, max: null },
];

const FilterSidebar = () => {
    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue, handleChange }) => (
        <Form className="sidebar">
          
          <div className="filter-section">
            <h4>Gender</h4>
            {['Men', 'Women', 'Unisex'].map((g) => (
              <label key={g}>
                <Field type="checkbox" name="gender" value={g} />
                {g}
              </label>
            ))}
          </div>

          <div className="filter-section">
            <h4>Sale & Offers</h4>
            {['On Sale', 'Special Offer', 'Clearance'].map((s) => (
              <label key={s}>
                <Field type="checkbox" name="sale" value={s} />
                {s}
              </label>
            ))}
          </div>

          <div className="filter-section">
            <h4>Color</h4>
            <div className="color-options">
              {[
                { name: 'Black', code: '#000' },
                { name: 'White', code: '#fff' },
                { name: 'Navy', code: '#001f3f' },
                { name: 'Brown', code: '#8B4513' },
                { name: 'Red', code: '#ff0000' },
                { name: 'Blue', code: '#0074D9' },
                { name: 'Green', code: '#2ECC40' },
                { name: 'Gray', code: '#808080' },
              ].map((c) => (
                <label key={c.name} className="color-item">
                  <Field type="checkbox" name="color" value={c.name} />
                  <span
                    className="color-circle"
                    style={{ backgroundColor: c.code }}
                  />
                  {c.name}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>Shop by Price</h4>
            {priceOptions.map((p) => {
              const isSelected =
                values.price.min === p.min && values.price.max === p.max;

              return (
                <label key={p.label}>
                  <input
                    type="radio"
                    name="price"
                    checked={isSelected}
                    onChange={() =>
                      setFieldValue('price', { min: p.min, max: p.max })
                    }
                  />
                  {p.label}
                </label>
              );
            })}
          </div>

          <div className="filter-section">
            <h4>Size</h4>
            <div className="size-grid">
              {[6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12].map(
                (size) => (
                  <label
                    key={size}
                    className={`size-box ${values.size.includes(String(size)) ? 'selected' : ''}`}
                  >
                    <Field
                      type="checkbox"
                      name="size"
                      value={String(size)}
                      onChange={handleChange}
                    />
                    {size}
                  </label>
                )
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
    )
  
};

export default FilterSidebar;
