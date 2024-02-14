import React, { useState, useEffect } from 'react';
import style from '@/styles/components/posts.module.css'

const AComponent = () => {
    const [selectedFilterOptions, setSelectedFilterOptions] = useState({
        noAnswer: 0,
        hasAnswer: 0,
    });
    const [selectedSortOption, setSelectedSortOption] = useState(null);
    const [selectedTagOption, setSelectedTagOption] = useState({ option: null, value: [] });
    

    const handleFilterOptionChange = (option) => {
        setSelectedFilterOptions(prevOptions => ({
            ...prevOptions,
            [option]: prevOptions[option] === 0 ? 1 : 0
        }));
    };

    const handleSortOptionChange = (option) => {
        setSelectedSortOption(option);
    };


    const handleTagOptionChange = (option) => {
        setSelectedTagOption({ ...selectedTagOption, option });
    };
    
    const handleFollowingTagsInputChange = (event) => {
        setSelectedTagOption({ ...selectedTagOption, value: event.target.value });
    };

    const handleSubmit = async (event) => {
        try {
            const response = await fetch(`api/questions?${new URLSearchParams({ ...selectedFilterOptions, filter: selectedSortOption, tags: selectedTagOption.value })}`);
            if (response.ok) {
                console.log('Successfully submitted!');
            } else {
                console.error('Failed to submit:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting:', error);
        }
    };
    


    return (
        <>
         <form className={style.add_filters} onSubmit={handleSubmit}>
                    <div className={style.add_filter_container}>
                        <div className={style.settings}>
                        <div className={style.settings_sets}>
                            <h4>Filter by</h4>
                            <div>
                                <input 
                                    type='checkbox' 
                                    name="noAnswer" 
                                    checked={selectedFilterOptions['noAnswer'] === 1}
                                    onChange={() => handleFilterOptionChange('noAnswer')} />
                                <label>No answer</label>
                            </div>
                            
                            <div>
                                <input 
                                    type='checkbox' 
                                    name="hasAnswer" 
                                    checked={selectedFilterOptions['hasAnswer'] === 1}
                                    onChange={() => handleFilterOptionChange('hasAnswer')} />
                                <label>Has answer</label>
                            </div>
                            
                        </div>

                            <div className={style.settings_sets}>
                                <h4>Sorted by</h4>
                                <div>
                                    <input 
                                        type='radio' 
                                        name="sortBy" 
                                        value="newest" 
                                        checked={selectedSortOption === 'newest'}
                                        onChange={() => handleSortOptionChange('newest')} />
                                    <label>Newest</label>
                                </div>
                                <div>
                                    <input 
                                        type='radio' 
                                        name="sortBy" 
                                        value="recentActivity" 
                                        checked={selectedSortOption === 'recentActivity'}
                                        onChange={() => handleSortOptionChange('recentActivity')} />
                                    <label>Recent activity</label>
                                </div>
                                <div>
                                    <input 
                                        type='radio' 
                                        name="sortBy" 
                                        value="mostFrequent" 
                                        checked={selectedSortOption === 'mostFrequent'}
                                        onChange={() => handleSortOptionChange('mostFrequent')} />
                                    <label>Most Frequent</label>
                                </div>
                            </div>

                            <div className={style.settings_sets}>
                                <h4>Tagged with</h4>
                                <div>
                                    <input 
                                        type='radio' 
                                        name="tags" 
                                        value="myWatchedTags"  
                                        checked={selectedTagOption.option === "myWatchedTags"}
                                        onChange={() => handleTagOptionChange("myWatchedTags")} />
                                    <label>My watched tags</label>
                                </div>
                                <div>
                                    <input 
                                        type='radio' 
                                        name="tags" 
                                        value="followingTags"  
                                        checked={selectedTagOption.option === "followingTags"}
                                        onChange={() => handleTagOptionChange("followingTags")} />
                                    <label>The following tags</label>
                                </div>
                                    <div className={style.follow_tags}>
                                        <input 
                                            type="text" 
                                            value={selectedTagOption.value} 
                                            onChange={handleFollowingTagsInputChange} 
                                            placeholder="Enter your tags" />
                                    </div>
                            </div>
                        </div>
                        <div className={style.control}>
                            <button type="submit" className={style.apply_button}>Apply filter</button>
                            <button type="button" className={style.cancel_button}>Cancel</button>
                        </div>
                    </div>
                </form>
        </>
    );
};

export default AComponent;
