import React, { useState } from 'react';

const Sidebar = ({ filters, setFilters, resetFilters }) => {
  const [expanded, setExpanded] = useState({ Gender: true });

  const toggleExpand = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleGenderChange = (e) => {
     setFilters(prev => ({ ...prev, gender: e.target.value }));
  };

  const handleSectionClick = (sec) => {
   
     setFilters(prev => ({ ...prev, [sec]: !prev[sec] }));
  };

  const sections = [
    "Brand", "Color", "Discount", "Price", "Rating", "Combo", 
    "Material", "Print Or Pattern", "Neckless", "Bottom Fabric"
  ];

  return (
    <div className="sidebar">
       <div className="sidebar-header">
         <h2>Filter</h2>
         <button className="reset-btn" onClick={resetFilters}>
            Reset ↻
         </button>
       </div>

       <div className="sidebar-content">
           <div className="filter-section">
              <div className="filter-section-header" onClick={() => toggleExpand("Gender")}>
                 <span className="section-title">Gender</span>
                 <div className="custom-indicator filled"></div>
              </div>
              {expanded["Gender"] && (
                 <div className="filter-options">
                    <label className="filter-option">
                       <input 
                         type="radio" 
                         name="gender" 
                         value="boy" 
                         checked={filters.gender === 'boy'}
                         onChange={handleGenderChange}
                       />
                       <span className="radio-custom"></span>
                       Boy
                    </label>
                    <label className="filter-option">
                       <input 
                         type="radio" 
                         name="gender" 
                         value="girl" 
                         checked={filters.gender === 'girl'}
                         onChange={handleGenderChange}
                       />
                       <span className="radio-custom"></span>
                       Girl
                    </label>
                 </div>
              )}
           </div>

           {sections.map(sec => (
             <div className="filter-section" key={sec}>
                <div className="filter-section-header" onClick={() => handleSectionClick(sec)}>
                   <span className="section-title">{sec}</span>
                   <div className={`custom-indicator ${filters[sec] ? 'filled' : 'empty'}`}></div>
                </div>
             </div>
           ))}
       </div>
    </div>
  );
};

export default Sidebar;
