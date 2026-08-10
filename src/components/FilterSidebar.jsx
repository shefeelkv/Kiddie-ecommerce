import React, { useState } from 'react';

const FilterSidebar = ({ isFilterOpen, setIsFilterOpen }) => {
  const [gender, setGender] = useState({ boy: false, girl: false });
  
  return (
    <>
      <div 
        className={`filter-overlay ${isFilterOpen ? 'active' : ''}`} 
        onClick={() => setIsFilterOpen(false)}
      ></div>
      
      <div className={`filter-sidebar ${isFilterOpen ? 'open' : ''}`}>
        <div className="filter-header">
          <h2>Filter</h2>
          <button className="reset-btn" onClick={() => setGender({ boy: false, girl: false })}>
            Reset ↺
          </button>
        </div>
        
        <div className="filter-content">
          <div className="filter-section expanded">
             <div className="section-title">
               <span>Gender</span>
               <div className="section-marker blue-square"></div> 
             </div>
             <div className="section-options">
               <label className="filter-label">
                 <input 
                   type="checkbox" 
                   className="filter-checkbox radio-styled"
                   checked={gender.boy} 
                   onChange={(e) => setGender({...gender, boy: e.target.checked})} 
                 />
                 <span className="styled-checkbox"></span>
                 <span className="label-text">Boy</span>
               </label>
               <label className="filter-label">
                 <input 
                   type="checkbox" 
                   className="filter-checkbox radio-styled"
                   checked={gender.girl} 
                   onChange={(e) => setGender({...gender, girl: e.target.checked})} 
                 />
                 <span className="styled-checkbox"></span>
                 <span className="label-text">Girl</span>
               </label>
             </div>
          </div>

          <div className="filter-divider"></div>

          {[
            'Brand', 'Color', 'Discount', 'Price', 'Rating', 
            'Combo', 'Material', 'Print Or Pattern', 'Neckless', 'Bottom Farbric'
          ].map((item, idx) => (
             <React.Fragment key={idx}>
               <div className="filter-section inline-check">
                 <span className="filter-name">{item}</span>
                 <label className="filter-label right-aligned">
                   <input type="checkbox" className="filter-checkbox outline-box" />
                   <span className="styled-checkbox"></span>
                 </label>
               </div>
               {idx !== 9 && <div className="filter-divider slim"></div>}
             </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
