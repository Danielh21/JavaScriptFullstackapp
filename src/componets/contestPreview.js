import React from 'react';

const ConstPreview = (contest) =>(
<div className="ConstPreview">
    <div className="category-name">
        <h4>Category Name</h4>
        {contest.categoryName}
    </div>
    <div className="contest-name">
        <h4>Contest Name</h4>
        {contest.contestName}   
    </div>
</div>
);


export default ConstPreview;