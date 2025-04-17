
import React from 'react';
import { Formik, Form, Field } from 'formik';
import './App.scss'; 

const FilterSidebar = () => {
  const initialValues = {
    gender: [],
    sale: [],
    color: [],
    price: [],
    size: [],
  };

  const handleSubmit = (values) => {
    console.log('Filters:', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
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
            {[
              'Under $25',
              '$25 - $50',
              '$50 - $100',
              '$100 - $150',
              '$150+',
            ].map((p) => (
              <label key={p}>
                <Field type="checkbox" name="price" value={p} />
                {p}
              </label>
            ))}
          </div>

          
          <div className="filter-section">
            <h4>Size</h4>
            <div className="size-grid">
              {[6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12].map(
                (size) => (
                  <Field name="size">
  {({ field, form }) => {
    const isChecked = form.values.size.includes(String(size));
    return (
      <label
        key={size}
        className={`size-box ${isChecked ? 'selected' : ''}`}
      >
        <input
          type="checkbox"
          name="size"
          value={String(size)}
          checked={isChecked}
          onChange={(e) => {
            const { checked } = e.target;
            const newSizes = checked
              ? [...form.values.size, String(size)]
              : form.values.size.filter((s) => s !== String(size));
            form.setFieldValue('size', newSizes);
          }}
        />
        {size}
      </label>
    );
  }}
</Field>

                )
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FilterSidebar;

