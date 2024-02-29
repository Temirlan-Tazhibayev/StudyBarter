export const saveFiltersToLocalStorage = (filters) => {
    try {
        localStorage.setItem('filters', JSON.stringify(filters));
    } catch (error) {
        console.error('Error saving filters to localStorage:', error);
    }
};

export const loadFiltersFromLocalStorage = () => {
    try {
        const filters = localStorage.getItem('filters');
        return filters ? JSON.parse(filters) : null;
    } catch (error) {
        console.error('Error loading filters from localStorage:', error);
        return null;
    }
};