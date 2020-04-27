import { STORAGE_CURRENT_MOVIE, STORAGE_FAVORITE_MOVIES } from '../globals/variables';

export const isItemInStorage = (newItem) => {
    let yourCurrentMovies = getStorage();
    if(!yourCurrentMovies){
        return [];
    }
    if(yourCurrentMovies.find(currentMovie => currentMovie.id === newItem.id)){
        return true;
    }
    return false;
}

export const setStorage = (newItem, storageItem = STORAGE_FAVORITE_MOVIES, test = true) => {
    if(storageItem === STORAGE_CURRENT_MOVIE){
        const newItemForStorage = JSON.stringify(newItem);
        localStorage.setItem(storageItem, newItemForStorage);
        return newItem;
    }else if(storageItem === STORAGE_FAVORITE_MOVIES){
        let arrayOfYourMovies;
        if(test === true){
            arrayOfYourMovies = isItemInStorage(newItem);
            if(arrayOfYourMovies === true){
                console.log('Item already in storage')
                return false;
            }
        }else{
            arrayOfYourMovies = getStorage();
        }
        arrayOfYourMovies.push(newItem);
        const arrayOfYourMoviesForStorage = JSON.stringify(arrayOfYourMovies);
        localStorage.setItem(storageItem, arrayOfYourMoviesForStorage);
        return arrayOfYourMovies;
    }else{
        console.log('Invalid storage item: use either "weather-app-current-city" or "weather-app-your-cities"');
        return false;
    }    
}

export const getStorage = (storageItem = STORAGE_FAVORITE_MOVIES) => {
    let item = localStorage.getItem(storageItem);
    if(item){
        item = JSON.parse(item);
        return item;
    }else if(storageItem === STORAGE_FAVORITE_MOVIES){
        return [];
    }else{
        return false;
    }   
}

export const removeFromStorage = (movie, storageItem = STORAGE_FAVORITE_MOVIES) => {
    let items = getStorage();
    const isMovie = (current) => current.id === movie;
    let indexOfItemToRemove = items.findIndex(isMovie);
    items.splice(indexOfItemToRemove, 1);
    let itemsForStorage = JSON.stringify(items);
    localStorage.setItem(storageItem, itemsForStorage);
    return items;
}