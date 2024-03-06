import React, { useState, useEffect } from 'react';
import style from '@/styles/components/other/SortButtons.module.css'

const SortButtons = () => {
    return (
        <>
            <div className={style.Buttons}>
                <a href="#" className={style.LeftButton}>Score</a>
                <a href="#" className={style.CenterButton}>Activity</a>
                <a href="#" className={style.RightButton}>Newest</a>
            </div>
        </>
    );
};

export default SortButtons;
